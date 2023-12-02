const faqTextElements = document.querySelectorAll(".faq__text")
const showHideButtons = document.querySelectorAll(".button_article")

function showHideTextHandler(e) {
    e.target.closest(".faq__article").querySelector(".faq__text").classList.toggle('faq__text_short')
    e.target.classList.toggle('button_article_plus')
}

showHideButtons.forEach((item) => {
    item.addEventListener("click", showHideTextHandler)
})