// console.log(document)
// const nextArr = document.querySelector(".next")
// console.log(nextArr)
// nextArr.addEventListener()

let slide = 0
function changeSlide(index){
    console.log(index,Math.abs(index) % 3)
    const imgs = document.querySelectorAll(".wrapper img")
    // console.log(index, imgs)
    imgs.forEach((img, imgIndex) => {

        img.style.opacity = Math.abs(index) % 3 == imgIndex ? 1 : 0;
        // if(Math.abs(index) % 3 == imgIndex){
        //     img.style.opacity=1
        // }else{
        //     img.style.opacity=0
        // }



    })
}
changeSlide(slide)