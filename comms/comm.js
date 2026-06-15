l = [ //outer edge, holds the types
    [ // SKETCH
        ["HEAD PIECE", 3, "hs"], //HEAD PIECE
        ["TORSO PIECE", 7, "ts"], //TORSO PIECE
        ["FULL PIECE", 12, "fs"] //FULL PIECE
    ],
    [ // FULL COLOR
        ["HEAD PIECE", 5, "hf"], //HEAD PIECE
        ["TORSO PIECE", 10, "tf"], //TORSO PIECE
        ["FULL PIECE", 25, "ff"] //FULL PIECE
    ],
    [ // RENDERED
        ["HEAD PIECE", 10, "hr"], //HEAD PIECE
        ["TORSO PIECE", 25, "tr"], //TORSO PIECE
        ["FULL PIECE", 40, "fr"] //FULL PIECE
    ],
    [ // ICONS
        ["SKETCH", 3, "si"], //SKETCH
        ["FULL COLOR", 5, "fi"], //FULL COLOR
        ["RENDERED", 10, "ri"] //RENDERED
    ],
    [ // HOMESTUCK
        ["SPRITE ART", 5, "rh"], // SPRITE
        ["PANEL", 10, "ph"], // PANEL
        ["ANIMATION", 15, "ah"], // ANIMATION
        ["SPRITESHEET", 20, "sh"] // SPRITESHEET
    ],
    [ // REFs
        ["SIMPLE REF", 20, "sr"], // SKETCH
        ["DETAILED REF", 30, "dr"] // FULL COLOR
    ]
]

clist = []

buildprices()

/* if (document.getElementsByClassName("windowtitle")) {
    const wtitle = document.getElementsByClassName("windowtitle") // function that makes the windowtitle collapse work
    for (let i = 0; i < wtitle.length; i++) {                     // (changes display to none or flex,
        wtitle[i].addEventListener("click", function() {          // changes the icon from a + to a -)
            let content = cycle(this.parentNode,"innercontent")
            if (content.style.display == "flex") {
                content.style.display = "none"
                cycle(this,"material-symbols-sharp collapse_window").innerHTML = "add"
            } else {
                content.style.display = "flex"
                cycle(this,"material-symbols-sharp collapse_window").innerHTML = "remove"
            }
        })
    }    
} */

function buildprices() {

    const opt = document.getElementsByClassName("option")
    for (let i = 0; i < 6; i++) { //selects "option" divs
        
        let cat = l[i] // for "category"
        let position = i // saves the i so i get to reuse it inside the loop
        
        for (let i = 0; i < cat.length; i++) { // selects and cycles through values of type

            const cell = document.createElement("div")
            const type = document.createElement("h1")
            const price = document.createElement("i")
            const numdiv = document.createElement("div")
            const up = document.createElement("div")
            const down = document.createElement("div")
            const num = document.createElement("p")
            

            cell.className = "cell"

            type.innerHTML = cat[i][0]
            price.innerHTML = cat[i][1]+" USD"

            num.id = cat[i][2]
            numdiv.className = "input"
            type.className = "typetxt"

            up.className = "material-symbols-sharp"
            down.className = "material-symbols-sharp"
            up.innerHTML = "arrow_drop_up"
            down.innerHTML = "arrow_drop_down"

            down.style.opacity = .4

            type.addEventListener("click",function() {
                valuecleanup(num,true,down)
            })

            type.addEventListener("contextmenu", function() {
                if (Number(num.innerHTML) > 0) {
                    valuecleanup(num,false,down)
                }
            })

            type.addEventListener("contextmenu", (e) => {e.preventDefault()})


            up.addEventListener("click",function() {
                valuecleanup(num,true,down)
            })

            down.addEventListener("click", function() {
                if (Number(num.innerHTML) > 0) {
                    valuecleanup(num,false,this)
                }
            })

            num.innerHTML = 0
            num.className = "pricenumber"

            type.appendChild(price)
            numdiv.append(up, down)
            cell.append(type,numdiv,num)
            opt[position].appendChild(cell)
            
        }
    }
}

function valuecleanup(entity,direction,down) { 
    if (direction == true) {

        entity.innerHTML = Number(entity.innerHTML)+1

        if (Number(entity.innerHTML)==1) {

            down.style.opacity = 1

            if (entity.parentElement.childNodes.length < 4) {
                
                const x = document.createElement("div")
                x.innerHTML = "x"
                x.className = "delete"
                x.addEventListener("click",function() {
                    entity.innerHTML = 0
                    down.style.opacity = .4
                    
                    savecalc(entity.parentNode)

                    this.remove()
                })
                entity.parentElement.append(x)

            }

        }

    } else {
        if (Number(entity.innerHTML)>0) {

            entity.innerHTML = Number(entity.innerHTML)-1

            if (Number(entity.innerHTML)==0) {

                down.style.opacity = .4

                if (entity.parentElement.childNodes.length == 4) {
                    cycle(entity.parentNode,"delete").remove()
                }

            }
        }
    }

    savecalc(entity.parentNode)

}

function calc () {
    const cell = document.getElementsByClassName("cell")
    let totalprice = 0
    let mult = 1

    for (let i = 0; i < cell.length; i++) {
        
        let price = Number(cell[i].childNodes[0].childNodes[1].innerHTML.slice(0,2))
        let val = cell[i].childNodes[2].innerHTML
        let id = cell[i].childNodes[2].id

        if (val > 0) {
            if (val > 1) {

                if (id[1] == 'f') {
                    mult = .50
                } else if (id[1] == "r") {
                    mult = .75
                } else if (id[1] == "i") {
                    
                    if (id[0] == "s") {
                        mult = .25
                    } else if (id[0] == "f") {
                        mult = .50
                    } else {
                        mult = .75
                    }

                } else if (id[1] == "h") {

                    if (id[0] == "r" || id[0] == "p") {
                        mult = .50
                    }

                }
                totalprice = totalprice + price + (price*mult)*(val-1)
            } else {
                totalprice = totalprice + price
            }            
        }

    }

    const uhh = document.getElementsByClassName("values")[0]

    
    if (totalprice > 0) {
        uhh.style.display = "flex"
        return "Total of "+totalprice+" USD."
    } else {
        uhh.style.display = "none"
        return "You haven't added anything!"
    }

}

function savecalc(parentnode) {

    const valuelist = document.getElementsByClassName("calccell")
    let vl = []

    for (let i = 0; i < valuelist.length; i++) {
        vl.push(cycle(valuelist[i],"txt").innerHTML)
    }

    let h1 = cycle(parentnode,"typetxt")

    const thefuckingtype = parentnode.parentNode.parentNode.previousSibling.previousSibling.innerText

    if (vl.indexOf(thefuckingtype+" "+h1.innerHTML.slice(0,h1.innerHTML.indexOf("<"))) == -1) {

        const calccell = document.createElement("div")
        const txt = document.createElement("h1")
        const n = document.createElement("p")

        calccell.className = "calccell"

        txt.innerHTML = thefuckingtype+" "+h1.innerHTML.slice(0,h1.innerHTML.indexOf("<"))
        txt.className = "txt"

        n.innerHTML = "1x "
        n.className = "num"

        calccell.append(n,txt)
        document.getElementsByClassName("values")[0].append(calccell)

    } else {
        if (Number(cycle(parentnode,"pricenumber").innerHTML) > 0) {
            cycle(valuelist[vl.indexOf(thefuckingtype+" "+h1.innerHTML.slice(0,h1.innerHTML.indexOf("<")))],"num").innerHTML = cycle(parentnode,"pricenumber").innerHTML+"x "
        } else {
            valuelist[vl.indexOf(thefuckingtype+" "+h1.innerHTML.slice(0,h1.innerHTML.indexOf("<")))].remove()
        }
        

    }

    document.getElementsByClassName("total")[0].innerHTML = calc()

}

function cycle(subject,value) {
    for (let i = 0; i < subject.childNodes.length; i++) {

        if (subject.childNodes[i].className == value) {
            return subject.childNodes[i]
        }

    }
}

/* document.getElementsByClassName("material-symbols-sharp list")[0].addEventListener("click", function () {

    console.log(document.getElementsByClassName("calc")[1])

    const divc = document.getElementsByClassName("calc")[0]

    if (divc.style.display == "flex") {
        divc.style.display = "none"
    } else {
        divc.style.display = "flex"
    }  

}) */   

const menu = document.getElementsByClassName("topic")
for (let i = 0; i < menu.length;i++) {
    
    if ((i % 2) > 0) {
        
        menu[i].id = "dark"

    }

}
