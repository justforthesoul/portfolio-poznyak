import Vue from "vue";

const btns = {
  template: "#slider-btns",
  props: {
    isDisabledNext: Boolean,
    isDisabledPrev: Boolean,
    works: Array,
    currentIndex: Number
  }
};

const thumbs = {
  template: "#slider-thumbs",
  props: {
    works: Array,
    currentWork: Object
  },
  methods: {
    console() {
      const thumb = this.$refs["thumb"];
      const style = getComputedStyle(thumb[0]).getPropertyValue("transform");
      console.log(style);
    }
  },
  mounted() {
    this.console();
  },
};

const display = {
  template: "#slider-display",
  components: {
    btns,
    thumbs
  },
  props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number,
    isDisabledNext: Boolean,
    isDisabledPrev: Boolean
  },
  computed: {
    reversedWorks() {
      const works = [...this.works];
      return works.reverse();
    }
  }
};

const tags = {
  template: "#slider-tags",
  props: {
    tagsArray: Array
  }
};

const info = {
  template: "#slider-info",
  components: {
    tags
  },
  props: {
    currentWork: Object
  },
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(",");
    }
  }
};

new Vue({
  template: "#slider-container",
  el: "#slider-component",
  components: {
    display,
    info
  },
  data() {
    return {
      works: [],
      currentIndex: 0,
      isDisabledNext: false,
      isDisabledPrev: true
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  watch: {
    currentIndex(value) {
      this.makeDisabledBtnForCurIndex(value);
    }
  },
  methods: {
    makeDisabledBtnForCurIndex(value) {
      if (value > 0) {
        this.isDisabledPrev = false;
      } else {
        this.isDisabledPrev = true;
      }

      if (value == this.works.length - 1) {
        this.isDisabledNext = true
      } else {
        this.isDisabledNext = false
      }
    },
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.photo}`);
        item.photo = requiredPic;

        return item;
      });
    },
    handleSlide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    }
  }, 
  created() {
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);
  }
});
