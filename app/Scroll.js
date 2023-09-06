class Scroll {
    constructor() {
      this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
      const totalHeight = document.documentElement.scrollHeight;
      const visibleHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const scrollPercentage = (scrollY / (totalHeight - visibleHeight)) * 100;

      if (scrollPercentage >= 100) {
        return true;
      }
    }

    addScrollListener() {
      window.addEventListener("scroll", this.handleScroll);
    }

    removeScrollListener() {
      window.removeEventListener("scroll", this.handleScroll);
    }
}