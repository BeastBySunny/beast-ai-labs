const canvas=document.createElement("canvas")
document.body.appendChild(canvas)

const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let stars=[]

for(let i=0;i<200;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2
})
}

function animate(){

ctx.fillStyle="black"
ctx.fillRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="white"

stars.forEach(s=>{
ctx.fillRect(s.x,s.y,s.size,s.size)
})

requestAnimationFrame(animate)

}

animate()