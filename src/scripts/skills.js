import Vue from "vue";

const skill = {
  template: "#skill",
  props: {
    skillName: String,
    skillPercent: Number
  },
  methods: {
    drowColoredCircle() {
      const circle = this.$refs["circle"];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      const percent = (dashArray / 100) * (100 - this.skillPercent);
      let startPersent = 270;
      let time = (dashArray * 8) / this.skillPercent;

      window.addEventListener("scroll", () => {
        let offset = window.pageYOffset;
        let topSkillsContainer =
          this.$root.$refs["skill-container"].getBoundingClientRect().top +
          offset -
          400;
        if (offset >= topSkillsContainer) {
          setInterval(function() {
            if (startPersent >= percent) {
              circle.style.strokeDashoffset = startPersent;
              startPersent--;
            }
          }, time);
        }
      });
    }
  },
  mounted() {
    this.drowColoredCircle();
  }
};

const row = {
  template: "#skills-row",
  props: {
    skill: Object
  },
  components: {
    skill
  }
};

new Vue({
  el: "#skills-container",
  template: "#skills-list",
  components: {
    row
  },
  data() {
    return {
      skills: []
    };
  },
  created() {
    const data = require("../data/skils.json");
    this.skills = data;
  }
});
