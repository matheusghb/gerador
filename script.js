const r = document.querySelector(":root")

document.addEventListener("mousedown", function() {
   r.style.setProperty('--cursor', "url('https://homestuck.net/tools/homestuck-cursors/SBURB%20Cursors/SBurb_Revise.cur'), auto")
})

document.addEventListener("mouseup", function () {
    r.style.setProperty('--cursor', "url('https://homestuck.net/tools/homestuck-cursors/SBURB%20Cursors/SBurb_Select.cur'), auto")
})

setInterval(hora,1000)

function hora() {
    const date = new Date()
    let h = ""
    let d = ""
    let m = ""
    let mm = ""
    
    if (date.getHours() < 10) {
        h = ("0"+date.getHours()).toString()
    } else {
        h = date.getHours().toString()
    }

    if (date.getMinutes() < 10) {
         mm = "0"+date.getMinutes().toString()
    } else {
         mm = (date.getMinutes()).toString()
    }

    if (date.getDate() < 10) {
         d = "0"+date.getDate().toString()
    }
    else {
         d = date.getDate().toString()
    }
        if ((date.getMonth())+1 > 10) {
         m = "0"+(date.getMonth()+1).toString()
    } else {
         m = (date.getMonth()+1).toString()
    }
    
    document.getElementById("dia").innerHTML = d+"/"+m+"/"+date.getFullYear()
    document.getElementById("hora").innerHTML = h+":"+mm
}

function sburb() {
    location.href = "https://juliet83c.neocities.org/generator/home"
}

function profile() {
    location.href = "https://juliet83c.neocities.org/profile/profile"
}

function comm() {
    location.href = "https://juliet83c.neocities.org/comm/comm"
}