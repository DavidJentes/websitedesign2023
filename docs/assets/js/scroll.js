window.onscroll = () => {
	headerScroll()
}

const header = document.getElementsByTagName("header")[0]
const logo = document.getElementsByClassName("logo")[0]
const headerText = document.getElementsByTagName("h1")[0]
const headerButtons = document.getElementsByTagName("ul")[0].children

function headerScroll() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		header.style.padding = "5px"
		logo.style.width = "50px"
		logo.style.height = "50px"
		headerText.style.fontSize = "16px"
		headerText.style.padding = "5px"
		for (const button of headerButtons) {
			button.children[0].className = "navscroll"
		}
		menuButton.style.width = "20px"
	} else {
		header.style.padding = "10px"
		logo.style.width = "75px"
		logo.style.height = "75px"
		headerText.style.fontSize = "32px"
		headerText.style.padding = "10px"
		for (const button of headerButtons) {
			button.children[0].className = ""
		}
		menuButton.style.width = "25px"
	}
}