var btn =document.querySelector("button")

var arr=["https://images.unsplash.com/photo-1738451134973-d99e4fb12c99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1738360220249-818ba9624488?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1721597102419-629da328872f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1737008220100-804be759a152?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D"
]

function abcd(){
    var randomX=Math.floor(Math.random()*100)
    var randomY=Math.floor(Math.random()*100)
    var rotate=Math.floor(Math.random()*360)
    return {randomX,randomY,rotate}
}

btn.addEventListener("click",function(){
    var img=document.createElement("img")
   img.src=arr[Math.floor(Math.random()*arr.length)]
    document.querySelector("body")
    .appendChild(img)
    img.style.height="150px" 
    var {randomX,randomY,rotate}=abcd()
    img.style.position = "absolute"
    img.style.left = randomX+"%"
    img.style.top = randomY+"%"
    img.style.rotate=rotate+"deg"
})






