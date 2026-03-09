/* Galaxy particles */

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

function animateStars(){

ctx.fillStyle="black"
ctx.fillRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="white"

stars.forEach(s=>{
ctx.fillRect(s.x,s.y,s.size,s.size)
})

requestAnimationFrame(animateStars)

}

animateStars()


/* 3D robot placeholder */

const scene=new THREE.Scene()

const camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer=new THREE.WebGLRenderer()

renderer.setSize(400,400)

document.getElementById("robot3d").appendChild(renderer.domElement)

const geometry=new THREE.BoxGeometry()

const material=new THREE.MeshBasicMaterial({color:0xffffff})

const cube=new THREE.Mesh(geometry,material)

scene.add(cube)

camera.position.z=3

function animateRobot(){

requestAnimationFrame(animateRobot)

cube.rotation.x+=0.01
cube.rotation.y+=0.01

renderer.render(scene,camera)

}

animateRobot()


/* AI demo */

function demoAI(){

const q=document.getElementById("aiInput").value

document.getElementById("aiOutput").innerText=
"Demo AI response: "+q

}


/* chatbot */

function chatbot(){

const text=document.getElementById("chatInput").value

document.getElementById("chatOutput").innerText=
"AI: Thanks for asking about "+text

}


/* dashboard */

new Chart(

document.getElementById("chart"),

{
type:"line",

data:{
labels:["Jan","Feb","Mar","Apr","May"],

datasets:[
{
label:"AI Usage",
data:[10,20,30,40,60]
}
]
}

}
)


/* contact */

function sendMail(){

const name=document.getElementById("name").value
const phone=document.getElementById("phone").value
const email=document.getElementById("email").value

window.location.href=
`mailto:Addie92sunny@gmail.com?subject=Website Inquiry&body=Name:${name}%0APhone:${phone}%0AEmail:${email}`

}