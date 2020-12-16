new Vue({
  el: '#app',
  data: {
    items: [],
    totalCount: 55,
    unitPrice: 110
  },
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
      const results = Opal.Simulator.$new().$simulate(this.totalCount);
      this.items = results.$to_n();
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
