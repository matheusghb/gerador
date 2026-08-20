/* [ //outer edge, holds the types
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
] */

const commoptions = {

    Sketch: {
        values: {
            HEAD_PIECE: {
                price: 3,
                qntd: 0,
            },
            TORSO_PIECE: {
                price: 7,
                qntd: 0,
            },
            FULL_PIECE: {
                price: 12,
                qntd: 0,
            }
        },
        info:'Can either be digital or on paper!! I dont do shipments tho :(',
        imagem: ["/assets/sugar.jpg"]
    },
    Full_color: {
        values: {
            HEAD_PIECE: {
                price: 5,
                qntd: 0,
            },
            TORSO_PIECE: {
                price: 10,
                qntd: 0,
            },
            FULL_PIECE: {
                price: 25,
                qntd: 0,
            }
        },
        mult: .50,
        info: 'No shadows and whatnot, additional characters have a 50% discount',
        imagem: ["/assets/gus.png"]
    },
    Rendered: {
        values: {
            HEAD_PIECE: {
                price: 10,
                qntd: 0,
            },
            TORSO_PIECE: {
                price: 25,
                qntd: 0,
            },
            FULL_PIECE: {
                price: 40,
                qntd: 0,
            }
        },
        mult: .75,
        info: 'Additional characters have a 25% discount!',
        imagem: ["/assets/alice.jpg"]
    },
    Icons: {
        values: {
            SKETCH: {
                price: 3,
                qntd: 0,
            },
            FULL_COLOR: {
                price: 5,
                qntd: 0,
            },
            RENDERED: {
                price: 10,
                qntd: 0,
            }
        },
        info: 'Same thing as head pieces from the options above, but without the discounts.',
        imagem: ["/assets/sugaricon.png","/assets/idontremembertbh.png"]
    },
    Homestuck: {
        values: {
            SPRITE_ART: {
                price: 5,
                qntd: 0,
            },
            PANEL: {
                price: 10,
                qntd: 0,
            },
            ANIMATION: {
                price: 15,
                qntd: 0,
            },
            SPRITESHEET: {
                price: 30,
                qntd: 0,
            }
        },
        info: 'Very negotiable...',
        imagem: ["/assets/norawalk.gif"]
    },
    Ref: {
        values: {
            SIMPLE_REF: {
                price: 30,
                qntd: 0,
            },
            DETAILED_REF: {
                price: 50,
                qntd: 0,
            }
        },
        info: 'Having a ref yourself gives a 50% discount!',
        imagem: ["/assets/ref.png"]
    }

}

let opdivclass
let contentsclass
let cvalueclass
let summary
let calcbutton

window.onload = () => {

opdivclass = document.getElementsByClassName("options")
contentsclass = document.getElementsByClassName("calccontent")
cvalueclass = document.getElementsByClassName("calcvalue")
summary = document.getElementsByClassName("summary")
calcbutton = document.getElementsByClassName("calcbutton")

const minfo = document.getElementsByClassName("infodropdown")

for (let i = 0; i < minfo.length; i++) {

    minfo[i].onclick = () => {

        minfo[i].querySelector(".infocontent").style.display = (minfo[i].querySelector(".infocontent").style.display == "flex") ? "none" : "flex"

    }

}

for (let i = 0; i < calcbutton.length; i++) {

    calcbutton[i].onclick = () => {

        for (let v = 0; v < calcbutton.length; v++) {

            calcbutton[v].children[0].innerText = (calcbutton[v].children[0].innerText == "arrow_drop_up") ? "arrow_drop_down" : "arrow_drop_up"
            contentsclass[v].style.display = (contentsclass[v].style.display == "flex") ? "none" : "flex"
            cvalueclass[v].style.display = (cvalueclass[v].style.display == "flex") ? "none" : "flex"

        }

    }

} 

for (let i = 0; i < opdivclass.length; i++) {

    const opdiv = opdivclass[i]

    for (const [key,values] of Object.entries(commoptions)) {

        const div = document.createElement("div")
        div.className = "type"
        div.id = (key.replace("_","")).toLowerCase()+"div"+opdiv.id

        const valuearray = Object.keys(values.values)

        const imgdiv = document.createElement("div")
        imgdiv.className = "image"

        values.imagem.forEach((imgsrc) => {

            const img = document.createElement("img")
            img.className = "zoom"
            img.src = imgsrc
            imgdiv.append(img)

        })

        div.append(imgdiv)

        const optionsdiv = document.createElement("div")
        optionsdiv.className = "optionsdiv"

        const p = document.createElement("p")
        p.innerHTML = key.replace("_"," ")
        p.className = "typetitle"
        optionsdiv.append(p)

        const opdata = document.createElement("div")
        opdata.className = "opdata"

        for (let i = 0; i < valuearray.length;i++){

            const currentvalue = values.values[valuearray[i]]

            const valuediv = document.createElement("div") 
            valuediv.id = div.id.slice(0,div.id.indexOf("div"))+"_"+valuearray[i]
            valuediv.className = "option"

            const title = document.createElement("h1")
            title.className = "title"
            title.innerHTML = valuearray[i].replace("_"," ")

            const infodiv = document.createElement("div")

            const price = document.createElement("p")
            price.className = "price"
            price.innerHTML = currentvalue.price+"$"

            const qntd = document.createElement("p")
            qntd.className = "qntd"
            qntd.innerHTML = "x"+currentvalue.qntd

            const divarrow = document.createElement("div")
            divarrow.className = "arrow"
            
            const up = document.createElement("div")
            up.className = "material-symbols-rounded"
            up.innerHTML = "add"

            const down = document.createElement("div")
            down.className = "material-symbols-rounded"
            down.innerHTML = "remove"

            up.onclick = () => {

                modifyqntd(1,valuediv,currentvalue)

            }

            down.onclick = () => {

                modifyqntd(-1,valuediv,currentvalue)

            }

            divarrow.append(up,down)

            valuediv.append(title,price,divarrow,qntd)

            opdata.append(valuediv)

        }

        const info = document.createElement("p")
        info.innerHTML = values.info
        info.className = "optioninfo"
        opdata.append(info)

        optionsdiv.append(opdata)

        div.append(optionsdiv)

        opdiv.append(div)

    }

}

for (let i = 0; i < summary.length; i++) {

    Object.keys(commoptions).forEach((item) => {

        const a = document.createElement("a")
        a.href = "#"+item.toLowerCase().replaceAll("_","")+"div"+summary[i].id
        a.innerHTML = item.toUpperCase().replaceAll("_"," ")
        summary[i].append(a)

    })

}

const img = document.getElementsByClassName("zoom") // function that does the makeship zoom on any chosen images
for (let i = 0; i < img.length; i++) {              // (has the zoom class)
    img[i].addEventListener("click", function() {
        zoom(this.src)
    })
}

function zoom(imgsrc) { // Creates a fixed div ontop of everything that goes away if clicked
    const canvas = document.createElement("div")
    const img = document.createElement("img")
    
    canvas.className = "canva"
    img.id = "canvaimg"
    img.src = imgsrc
 
    canvas.appendChild(img)
    canvas.addEventListener("click", function() {
        this.remove()
    })
    document.getElementsByTagName("body")[0].appendChild(canvas)
} 

}

function modifyqntd(num,div,currentvalue) {

    if (currentvalue.qntd+num >= 0) {

        if (currentvalue.qntd == 0) {
            const x = document.createElement("div")
            x.className = "material-symbols-rounded"
            x.id = "clear"
            x.innerHTML = "close"
            x.onclick = () => {

                modifyqntd(-(currentvalue).qntd,div,currentvalue)

            }
            div.append(x)
        }

        currentvalue.qntd += num
        div.querySelector(".qntd").innerHTML = "x"+(currentvalue.qntd)

        for (let i = 0; i < contentsclass.length; i++) {

            const contents = contentsclass[i]

            if (currentvalue.qntd > 0) {

                if (contents.querySelector("#"+div.id)) {
                
                    contents.querySelector("#"+div.id).innerHTML = div.id.replaceAll("_"," ")+" x"+currentvalue.qntd

                } else {
                    
                    const calcadd = document.createElement("p")
                    calcadd.id = div.id
                    calcadd.innerHTML = (div.id).replaceAll("_"," ")+" x1"
                    contents.append(calcadd)
                }

            } else {

                contents.querySelector("#"+div.id).remove()

            }

        }

        if (currentvalue.qntd < 1) {

            div.querySelector("#clear").remove()

        }

    } 

    calcvalue()

}

function calcvalue() {

    let sum = 0
    let multv = 1

    for (const [key,values] of Object.entries(commoptions)) {

        if (values.mult) {
            multv = values.mult
        } else {
            multv = 1
        }

        for (const [opkey,opvalues] of Object.entries(values.values)) {

            if (opvalues.qntd > 0) {

                sum += Math.floor(opvalues.price + ( (opvalues.qntd > 1) ? ( ( (opvalues.price*multv) * (opvalues.qntd-1) ) ) : 0) )

            }

        }
        

    }

    for (let i = 0; i < cvalueclass.length; i++) {

        cvalueclass[i].innerHTML = ((sum > 0) ? "Total of "+sum+" USD." : "You haven't added anything!")

    }

}


