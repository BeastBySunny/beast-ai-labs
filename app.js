/* ================================
GALAXY PARTICLE BACKGROUND
================================ */

const canvas=document.createElement("canvas")
document.body.appendChild(canvas)

const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let stars=[]

for(let i=0;i<250;i++){

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



/* ================================
3D ROBOT PLACEHOLDER
================================ */

const scene=new THREE.Scene()

const camera=new THREE.PerspectiveCamera(
75,
400/400,
0.1,
1000
)

const renderer=new THREE.WebGLRenderer()

renderer.setSize(400,400)

document.getElementById("robot3d").appendChild(renderer.domElement)

const geometry=new THREE.BoxGeometry()

const material=new THREE.MeshBasicMaterial({color:0xffffff})

const robot=new THREE.Mesh(geometry,material)

scene.add(robot)

camera.position.z=3

function animateRobot(){

requestAnimationFrame(animateRobot)

robot.rotation.x+=0.01
robot.rotation.y+=0.01

renderer.render(scene,camera)

}

animateRobot()



/* ================================
PRODUCTS (INSPIRED BY EXSQUARED)
================================ */

const products=[

{
name:"AI Product Engineering",
desc:"Build intelligent AI powered applications and platforms.",
img:"assets/ai-product.jpg"
},

{
name:"Data & Analytics",
desc:"Advanced data pipelines, analytics, and decision intelligence.",
img:"assets/data-analytics.jpg"
},

{
name:"Cloud & DevOps",
desc:"Scalable infrastructure and cloud-native solutions.",
img:"assets/cloud.jpg"
},

{
name:"Digital Transformation",
desc:"Enterprise modernization using AI and automation.",
img:"assets/digital.jpg"
},

{
name:"Machine Learning Platforms",
desc:"Custom ML systems for enterprise operations.",
img:"assets/ml.jpg"
}

]

function loadProducts(){

const container=document.getElementById("products")

products.forEach(p=>{

const card=document.createElement("div")

card.className="productCard"

card.innerHTML=`

<img src="${p.img}" class="productImage">

<h3>${p.name}</h3>

<p>${p.desc}</p>

`

container.appendChild(card)

})

}

loadProducts()



/* ================================
AI CHATBOT (SIMPLE FRONTEND DEMO)
================================ */

function chatbot(){

const text=document.getElementById("chatInput").value

const output=document.getElementById("chatOutput")

output.innerText="AI assistant received: "+text

}



/* ================================
AI DASHBOARD
================================ */

new Chart(

document.getElementById("chart"),

{
type:"line",

data:{

labels:["Jan","Feb","Mar","Apr","May","Jun"],

datasets:[
{
label:"AI Platform Usage",
data:[10,25,40,35,60,80]
}
]

}

}

)



/* ================================
CONTACT FORM
================================ */

function sendMail(){

const name=document.getElementById("name").value
const phone=document.getElementById("phone").value
const email=document.getElementById("email").value

window.location.href=
`mailto:Addie92sunny@gmail.com?subject=Website Inquiry&body=Name:${name}%0APhone:${phone}%0AEmail:${email}`

}
