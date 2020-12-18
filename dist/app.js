document.addEventListener("DOMContentLoaded", function() {
  new Vue({
    el: '#app',
    data: {
      results: [],
      numberOfTypes: 55,
      unitPrice: 110
    },
    computed: {
      totalCost() {
        return this.countTotal * this.normalizedUnitPrice;
      },
      countTotal() {
        return this.results.length;
      },
      typeOptions() {
        return [...Array(101).keys()];
      },
      normalizedUnitPrice() {
        const n = parseInt(this.unitPrice, 10);
        return isNaN(n) ? 0 : n;
      }
    },
    methods: {
      simulate() {
        this.results = Opal.Simulator.$simulate(this.numberOfTypes).$to_n();
        scrollTo(0, 0);
      },
      formatFirstGet(result) {
        return result.first_get ? '😄' : '';
      },
      formatMessage(result) {
        return result.first_get ? `No.${result.you_get}をゲットした！` : `No.${result.you_get}がダブった...`;
      }
    },
    created() {
      this.simulate();
    }
  })
});
