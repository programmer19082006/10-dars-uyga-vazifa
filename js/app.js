const img = document.querySelector(".image")
const width = document.querySelector(".width")
const height = document.querySelector(".height")
const radius = document.querySelector(".radius")
const opacity = document.querySelector(".opacity")
const filter = document.querySelector(".filter")
const border = document.querySelector(".border")

width.addEventListener("input", () =>{
    img.style.width = width.value + "px"
})

height.addEventListener("input", () =>{
    img.style.height = height.value + "px"
})

radius.addEventListener("input", () =>{
    img.style.borderRadius = radius.value + "px"
})

opacity.addEventListener("input", () =>{
    img.style.opacity = opacity.value
})

filter.addEventListener("change", () =>{
    img.style.filter = filter.value
})

border.addEventListener("change", () =>{
    img.style.borderColor = border.value
})