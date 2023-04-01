let slide = 0
function changeSlide(index){
    const imgs = document.querySelectorAll(".wrapper img")
    imgs.forEach((img, imgIndex) => {
        console.log(index, imgIndex, index % 3)
        if(index % 3 ==imgIndex){
            img.style.opacity = 1
        }else{
            img.style.opacity = 0

        }
    

    })
    
}