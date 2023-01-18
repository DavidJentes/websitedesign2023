window.onscroll = () => {
    headerScroll()
}

function headerScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementsByTagName("header")[0].children[0].style.fontSize = "16px"
    } else {
        document.getElementsByTagName("header")[0].children[0].style.fontSize = "32px"
    }
}