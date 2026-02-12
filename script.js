console.log("KΛIROX ONLINE");

document.querySelectorAll(".btn").forEach(btn=>{
btn.addEventListener("mouseover",()=>{
navigator.vibrate?.(15);
});
});
