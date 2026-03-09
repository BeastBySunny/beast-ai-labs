async function askAI(){

const q=document.getElementById("question").value

const r=await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_OPENAI_API_KEY"
},

body:JSON.stringify({
model:"gpt-4o-mini",
messages:[
{role:"system",content:"You are an AI assistant for Beast AI Labs."},
{role:"user",content:q}
]
})

})

const data=await r.json()

document.getElementById("answer").innerText =
data.choices[0].message.content

}