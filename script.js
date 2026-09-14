const industryData={
 finance:{icon:"₿",title:"Financial Services",text:"Automate KYC, document review, customer onboarding, risk assessment, lending workflows and support operations.",links:["AI-assisted KYC","Loan document processing","Risk & fraud workflows"]},
 retail:{icon:"◇",title:"E-Commerce",text:"Personalize customer journeys, automate product support, qualify leads, process orders and power smarter merchandising.",links:["Customer support automation","Product recommendations","Order & refund workflows"]},
 health:{icon:"✚",title:"Healthcare",text:"Streamline patient onboarding, document processing, scheduling, compliance and internal knowledge workflows.",links:["Patient onboarding","Clinical document processing","Healthcare compliance"]},
 logistics:{icon:"⌁",title:"Transport & Logistics",text:"Automate dispatch, exception handling, document processing, customer updates and operational reporting.",links:["Delivery exception handling","Document automation","Operations copilots"]},
 auto:{icon:"▣",title:"Automotive",text:"Accelerate lead qualification, customer service, finance workflows and dealer operations with AI.",links:["Lead qualification","Dealer support","Finance document processing"]}
};
document.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));btn.classList.add("active");
 const d=industryData[btn.dataset.industry];
 document.getElementById("industryPanel").innerHTML=`<div><span class="big-icon">${d.icon}</span><h3>${d.title}</h3><p>${d.text}</p></div><div class="usecases">${d.links.map(x=>`<a>${x}<span>↗</span></a>`).join("")}</div>`;
}));
document.querySelectorAll(".bill").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".bill").forEach(b=>b.classList.remove("active"));btn.classList.add("active");
 const annual=btn.dataset.cycle==="annual";
 document.querySelectorAll(".monthly-price").forEach(el=>el.textContent=annual?(el.textContent==="₹9,999"?"₹7,999":"₹23,999"): (el.textContent==="₹7,999"?"₹9,999":"₹29,999"));
}));
document.querySelector(".menu").addEventListener("click",()=>document.querySelector(".nav-links").classList.toggle("open"));
document.getElementById("demoForm").addEventListener("submit",e=>{
 e.preventDefault();
 const btn=e.target.querySelector("button"); btn.textContent="Thanks — we'll be in touch →"; btn.disabled=true;
});
