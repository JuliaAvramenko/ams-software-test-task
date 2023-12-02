const Popup = (function () {

    const overlayElem = document.querySelector(".video__overlay")
    const popup = document.querySelector(".popup")
    const iframeElem = document.querySelector(".popup-container__video")



    function start(video_url) {
        overlayElem.addEventListener("click", (() => {
            openPopup(video_url)
        }))
    }



    function openPopup(video_url) {

        popup.style.display = "flex"
        popup.style.visibility = "visible"
        popup.style.opacity = 1

        iframeElem.setAttribute('src', video_url)

        addCloseHandlers()
    }
    function closePopup() {
        iframeElem.src = ""

        popup.style.display = "none"
        popup.style.visibility = "hidden"
        popup.style.opacity = 0

        removeCloseHandlers()
    }

    function addCloseHandlers() {
        // remove Esc handler
        document.addEventListener("keydown", closeByEscape);
        //remove overlay handler
        popup.addEventListener("mousedown", closeByOverlay);
    }

    function removeCloseHandlers() {
        // remove Esc handler
        document.removeEventListener("keydown", closeByEscape);
        //remove overlay handler
        popup.removeEventListener("mousedown", closeByOverlay);
    }

    function closeByEscape(evt) {
        if (evt.key === 'Escape') {
            closePopup();
        }
    }


    function closeByOverlay(evt) {
        // Обрабатываем клик за пределами попапа: 
        const popupContainer = popup.querySelector('popup-container');

        const withinBoundaries = evt.composedPath().includes(popupContainer);

        if (!withinBoundaries) {
            closePopup();

        }
    }



    return {
        start: start
    }
})();

export default Popup;