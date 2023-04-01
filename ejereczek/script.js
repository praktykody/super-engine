// console.log(document)
// const nextArr = document.querySelector(".next")
// console.log(nextArr)
// nextArr.addEventListener()

let slide = 0
function changeSlide(index){
    console.log(index)
    const imgs = document.querySelectorAll(".wrapper img")
    // console.log(index, imgs)
    imgs.forEach((img, imgIndex) => {
        console.log(index, imgIndex, index % 3)
        if(index % 3 == imgIndex){
            img.style.opacity=1
        }else{
            img.style.opacity=0
        }

    })
}