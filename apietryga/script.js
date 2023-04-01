let slide = 0
function changeSlide(index){
	const imgs = document.querySelectorAll(".wrapper img")
	imgs.forEach((img, imgIndex) => {
		img.style.opacity = Math.abs(index) % 3 == imgIndex ? 1 : 0;
		// if(Math.abs(index) % 3 == imgIndex){
		// 	img.style.opacity = 1
		// }else{
		// 	img.style.opacity = 0
		// }
	})
}
changeSlide(slide)