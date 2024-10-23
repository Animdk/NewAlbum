new Vue({
    el: "#app",
    data() {
      return {
        isOpenedTop: true,
        items: [
          {
            img1: "11 (1).jpg",
            img2: "11 (2).jpg",
            img3: "11 (3).jpg",
            title: "PAGE 1",
            isOpen: false,
          },
          {
            img1: "11 (4).jpg",
            img2: "11 (5).jpg",
            img3: "11 (6).jpg",
            title: "PAGE 2",
            isOpen: false,
          },
          {
            img1: "11 (7).jpg",
            img2: "11 (8).jpg",
            img3: "11 (9).jpg",
            title: "PAGE 3",
            isOpen: false,
          },
          {
            img1: "11 (10).jpg",
            img2: "11.jpg",
            img3: "11 (1).",
            title: "PAGE 4",
            isOpen: false,
          },
          {
            img1: "11 (1).",
            img2: "11 (1).",
            img3: "11 (1).",
            title: "PAGE 5",
            isOpen: false,
          },
        ],
      };
    },
    methods: {
      topOpen() {
        this.isOpenedTop = !this.isOpenedTop;
      },
  
      open(idx, isOpen) {
        if (this.isOpenedTop) {
          this.items[idx].isOpen = !isOpen;
        }
      },
  
      reset() {
        this.items.forEach((item) => (item.isOpen = false));
        this.isOpenedTop = false;
      },
    },
  });