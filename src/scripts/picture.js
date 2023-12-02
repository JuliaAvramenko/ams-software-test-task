import { HOUSE_LIST } from "./constants";

const Picture = (function () {
    const pictureElement = document.querySelector(".download__image")
    const circleElementsArray = document.querySelectorAll(".download__circle")

    function init() {
        setInterval(handler, 3000);
        changePicture(0)
        circleElementsArray[0].classList.toggle("download__circle_active")
    }

    function changePicture(index) {
        pictureElement.src = HOUSE_LIST[index].src
        pictureElement.alt = HOUSE_LIST[index].alt
        pictureElement.dataset.index = index
    }

    function handler() {
        const index = new Number(pictureElement.dataset.index)
        const newIndex = (index + 1) % HOUSE_LIST.length
        changePicture(newIndex)

        circleElementsArray[index].classList.toggle("download__circle_active")
        circleElementsArray[newIndex].classList.toggle("download__circle_active")
    }

    return {
        init
    }
}())

export default Picture;
