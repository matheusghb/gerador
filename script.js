let xmldoc = null

loadxml() // function loadxml was obtained from https://youtu.be/cpL8SSOIww8?si=7e4-B1vbSbRrdV27 !

const time = document.getElementById("time")
const date = document.getElementById("date")

setInterval(edittimendate(time,date),100)

function edittimendate(time, date) {
    const d = new Date()
    
    l = [d.getDate(),(d.getMonth())+1,d.getFullYear(),d.getHours(),d.getMinutes()]

    for (let i = 0; i < l.length; i++) {
        console.log(l[i])
        l[i] = l[i].toString()
        if (l[i].length < 2) {
            l[i] = "0"+l[i]
        }
    }
    
    time.innerHTML = l[3]+":"+l[4]
    date.innerHTML = l[0]+"/"+l[1]+"/"+l[2]
}

async function loadxml() {
    try {
        const response = await fetch("feed.xml")
        if (!response.ok) throw new Error("failed to load XML!")

        const txt = await response.text();

        const parser = new DOMParser()
        xmldoc = parser.parseFromString(txt,"text/xml")
        renderTable()
    } catch (err) {
        console.error(err)
    }    
}

function renderTable() {

    const diary = document.getElementById("diary")
    const cont = diary.querySelector(".content")


    if (!xmldoc) return
    const items = xmldoc.getElementsByTagName("item")
    for (let i = 0; i < items.length; i++) {

        let title = ''
        let desc = ''
        
        const itemval = items[i].children

        for (let i = 0; i < itemval.length; i++) {

            switch (itemval[i].tagName) {
                case ("title"):
                    title = itemval[i].innerHTML
                    break
                case ("description"):
                    desc = itemval[i].innerHTML
            }
        }
        
        const div = document.createElement("div")
        const htitle = document.createElement("h3")
        const pdesc = document.createElement("p")

        htitle.innerHTML = title
        pdesc.innerHTML = desc

        div.append(htitle,pdesc)
        cont.append(div)
    }
}

