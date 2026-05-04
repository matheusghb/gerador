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
            console.log(duration.value,audio.currentTime)
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

setInterval(function() {
    document.getElementById("current").innerHTML = Math.trunc(audio.currentTime/60)+":"+Math.abs(Math.ceil((Math.trunc(audio.currentTime/60)-audio.currentTime/60)*60))
    if (audio.duration == audio.currentTime) {
        btn.innerHTML = "play_arrow"
    }
},10)

audio.addEventListener("loadedmetadata",function () {
    duration.max = audio.duration
    duration.value = 0
    document.getElementById("total").innerHTML = Math.trunc(audio.duration/60)+":"+Math.abs(Math.ceil((Math.trunc(audio.duration/60)-audio.duration/60)*60))
})

contacts()

function contacts() {
    const contacts = document.getElementsByClassName("con")[0]    

    friends_list = [
        ["https://mspfa.com/?s=47894&p=160","namhjkahsdjkahsdjkashdfdsnjkfnsjksdhfjhsdjkfhksjdhfiuksdhfiuhsihfddfnwjfksde","/assets/izard.png","hjfbsjhdhfjkshfjkhsdjkfhsjkhfdjkdshjfkhkdshkhjkahsjkdhjkahsduiahsdiuhauhdsiahsiudh"]    
    ]

    for (let i = 0; i < friends_list.length;i++) {

        const div = document.createElement("a")
        div.className = "cell"
        div.href = friends_list[i][0]
        
        const img = document.createElement("div")
        img.className = "img"
        img.style.backgroundImage = "url("+friends_list[i][2]+")"

        const txtdiv = document.createElement("div")
        txtdiv.className = "txt"

        const name = document.createElement("h1")
        name.className = "name"
        name.innerHTML = friends_list[i][1]

        const quote = document.createElement("p")
        quote.className = "quote"
        quote.innerHTML = friends_list[i][3]

        txtdiv.append(name,quote)
        div.append(img,txtdiv)
        contacts.append(div)

    }

}



