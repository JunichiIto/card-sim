new Vue({
  el: '#app',
  data: { items: [], totalCount: '55', unitPrice: 110 },
  computed: {
    totalCost() {
      return this.totalCardCount * this.normalizedUnitPrice;
    },
    totalCardCount() {
      return this.items.length;
    },
    options() {
      return [...Array(101).keys()];
    },
    normalizedUnitPrice() {
      const n = parseInt(this.unitPrice, 10);
      return isNaN(n) ? 0 : n;
    }
  },
  methods: {
    simulate() {
      const rawResults = Opal.Simulator.$new().$simulate(parseInt(this.totalCount, 10));
      const results = rawResults.map(r => JSON.parse(r.$to_json()))
      this.items = results;
      scrollTo(0, 0);
    },
    formatResult(record) {
      return record.result ? '😄' : '';
    },
    formatMessage(record) {
      return record.result ? `No.${record.this_time}をゲットした！` : `No.${record.this_time}がダブった...`;
    }
  },
  mounted() {
    this.simulate();
  }
})
