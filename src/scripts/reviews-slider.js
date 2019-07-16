import Vue from "vue";
import Flickity from "vue-flickity";

const review = {
  template: "#review-template",
  props: {
    review: Object
  }
};

new Vue({
  el: "#reviews-slider",
  template: "#reviews-slider-template",
  components: {
    Flickity,
    review
  },
  data: {
    reviews: [],
    index: 0,
    isDisabledNext: false,
    isDisabledPrev: true,
    flickityOptions: {
      initialIndex: 0,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: false,
      cellAlign: "left"
    }
  },
  watch: {
    index(value) {
      this.makeDisabledBtnForindex(value);
    }
  },
  methods: {
    makeDisabledBtnForindex(value) {
      if (value > 0) {
        this.isDisabledPrev = false;
      } else {
        this.isDisabledPrev = true;
      }

      if (value == this.reviews.length - 1) {
        this.isDisabledNext = true
      } else {
        this.isDisabledNext = false
      }
    },
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.avatar}`);
        item.avatar = requiredPic;

        return item;
      });
    },
    next() {
      this.$refs.flickity.next();
      this.index ++;
      console.log(this.index);
    },

    previous() {
      this.$refs.flickity.previous();
      this.index --;
      console.log(this.index);
    }
  },
  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.makeArrWithRequiredImages(data);
  }
});
