const btn = document.getElementById("play")
const audio = document.getElementsByTagName("audio")[0]
const duration = document.getElementById("duration")

btn.addEventListener("click",function() {

    if (btn.innerHTML == "pause") {
        btn.innerHTML = "play_arrow"
        audio.pause()
    } else {

        const t = setInterval(function() {
            duration.value = audio.currentTime;
            defcurrent()
            if(btn.innerHTML=="play_arrow"){
                clearInterval(t)
            }
        },100)
        
        audio.currentTime = duration.value
        audio.play()
        btn.innerHTML = "pause"
    }

})

duration.addEventListener("input", function() {audio.currentTime = this.value})

function defcurrent () {
    let m = (Math.trunc(audio.currentTime/60)).toString()
    let s = (Math.abs(Math.ceil((Math.trunc(audio.currentTime/60)-audio.currentTime/60)*60))).toString()

    if (m.length < 2) {
        m = "0"+m
    }
    if (s.length < 2) {
        s = "0"+s
    }

    document.getElementById("current").innerHTML = m+":"+s
    if (audio.duration == audio.currentTime) {
        btn.innerHTML = "play_arrow"
    }
}

audio.addEventListener("loadedmetadata",function () {
    duration.max = audio.duration
    duration.value = 0
    document.getElementById("total").innerHTML = Math.trunc(audio.duration/60)+":"+Math.abs(Math.ceil((Math.trunc(audio.duration/60)-audio.duration/60)*60))
})

contacts()

function contacts() {
    const contacts = document.getElementsByClassName("con")[0]    

    friends_list = [
        // [ link, name, img ]
        [null, 'Kdr', "/assets/pedro.png"],
        ['https://www.tiktok.com/@glads_s2?_r=1&_t=ZS-96FjhGfPaMc', 'Glads', '/assets/glads.png'],
        ['https://nyakkomeowpage.straw.page/', 'Melyssa', '/assets/mel.png'],
        [null, 'Ka', '/assets/ka.png'],
        ['https://x.com/78calibarn', 'Hazel', '/assets/hazel.jpg'],
        ['https://bsky.app/profile/swiperson.bsky.social', 'Ravee', '/assets/ravee.png'],
        ['https://pt.pronouns.page/u/Orimyo', 'Myo', '/assets/myo.png'],
        ['https://x.com/ImTorment', "Torment", '/assets/torment.png'],
        ['https://duskdishwasher.neocities.org/','Dee',"/assets/dee.png"]
        //["https://www.tiktok.com/@b0neyardd?_r=1&_t=ZN-96FoQ3poKGc", ]
    ]

    for (let i = 0; i < friends_list.length;i++) {

        const div = document.createElement("a")
        div.className = "cell"
        if (friends_list[i][0] != null) {
            div.href = friends_list[i][0]
            div.target = "_blank"
        }
        
        const imgdiv = document.createElement("div")
        imgdiv.className = "imgdiv"

        const img = document.createElement("img")
        img.src = friends_list[i][2]

        imgdiv.append(img)

        const name = document.createElement("h1")
        name.className = "name"
        name.innerHTML = friends_list[i][1]

        div.append(imgdiv,name)
        contacts.append(div)

    }

}



