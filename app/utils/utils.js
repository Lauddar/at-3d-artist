export const isInSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (!element) return false;

    const scrollPosition = window.scrollY;
    const topOffset = 0.115 * window.innerHeight + scrollPosition;
    const bottomOffset = scrollPosition + window.innerHeight - 0.038 * window.innerHeight;

    const elementTop = element.offsetTop;
    const elementBottom = elementTop + element.offsetHeight;

    const isTopVisible = elementTop > topOffset;
    const isBottomVisible = elementBottom < bottomOffset;

    return isTopVisible && isBottomVisible;
};