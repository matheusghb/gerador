const info = document.createElement("div")
info.id = "info"
info.style.display = "flex";
info.style.flexDirection = "column";

const send = document.createElement("button")
send.innerText = "Send"
const btn = document.getElementById("plus")
btn.after(info)
info.after(send)
send.addEventListener("click", function () {
    let p = document.getElementById("info").childElementCount    
    let l = []
    for (let i = 0;i < p;i++) {
    let vv = document.getElementById(i.toString())
    l.push(vv.value)
    }
    let d = document.getElementById("dif").value
    console.log(l,p,d)
    let t = 0
    for (let i in l) {
        t = l[i] + t
    }
    t = t/p
    console.log(p)
        if (p > 1) {
            for (let i in l) {
                
            }
        } else {
            let num = 0
    }
})

let slider = false

function add () {
   let p = document.getElementById("info").childElementCount
   const d = document.createElement("div");
   const inp = document.createElement("input");
   const dlt = document.createElement("button");
   const dif = document.createElement("input");
   inp.id = p.toString();
   inp.type = "number";
   inp.min = "0";
   inp.max = "5";
   dif.type = "range";
   dif.max = "5";
   dif.min = "1";
   dif.id = "dif";
   dlt.addEventListener("click", function() {
       while (document.getElementById('info').hasChildNodes()) {
       document.getElementById('info').removeChild(document.getElementById('info').firstChild) }
   })
   
   d.append(inp, dlt)
   if (!slider) {
       d.append(dif)
       slider = true
   }
   info.append(d)
   
}