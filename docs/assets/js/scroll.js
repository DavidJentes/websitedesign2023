window.onscroll = () => {
	headerScroll()
}

const header = document.getElementsByTagName("header")[0]
const headerText = document.getElementsByTagName("h1")[0]
const headerButtons = document.getElementsByTagName("ul")[0].children

function headerScroll() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		header.style.padding = "5px"
		headerText.style.fontSize = "16px"
		headerText.style.padding = "5px"
		for (const button of headerButtons) {
			button.style.fontSize = "12px"
			button.children[0].style.padding = "15px"
		}
	} else {
		header.style.padding = "10px"
		headerText.style.fontSize = "32px"
		headerText.style.padding = "10px"
		for (const button of headerButtons) {
			button.style.fontSize = "16px"
			button.children[0].style.padding = "20px"
		}
	}
}