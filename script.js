function changeBackgroundColor(){
	if (document.getElementsByTagName("body")[0].style.backgroundColor == "lightgreen"){
		document.getElementsByTagName("body")[0].style.backgroundColor = "lightblue";
	}
	else {
			if (document.getElementsByTagName("body")[0].style.backgroundColor == "lightblue"){
				document.getElementsByTagName("body")[0].style.backgroundColor = "lightgreen";
		}
	}
}

document.getElementsByTagName("body")[0].style.backgroundColor = "lightgreen";