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
        info:'Isso é o info do sketch',
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
        info: 'Isso é o info do full color',
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
        info: 'Isso é o info do rendered',
        imagem: ["/assets/alice.jpg"]
    },
    Icons: {
        values: {
            SKETCH: {
                price: 1,
                qntd: 0,
            },
            TORSO_PIECE: {
                price: 5,
                qntd: 0,
            },
            FULL_PIECE: {
                price: 10,
                qntd: 0,
            }
        },
        info: 'Isso é o info do icons',
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
        info: 'Isso é o info do homestuck',
        imagem: ["/assets/norawalk.gif"]
    },
    Ref: {
        values: {
            SIMPLE_REF: {
                price: 20,
                qntd: 0,
            },
            DETAILED_REF: {
                price: 30,
                qntd: 0,
            }
        },
        info: 'Isso é o info do refs',
        imagem: ["/assets/ref.png"]
    }

}

const opdiv = document.getElementsByClassName("options")[0]
const contents = document.getElementById("contents")

for (const [key,values] of Object.entries(commoptions)) {

    const div = document.createElement("div")
    div.className = "type"
    div.id = (key.replace("_","")).toLowerCase()+"div"
    
    const innerdiv = document.createElement("div")

    const p = document.createElement("p")
    p.innerHTML = key.replace("_"," ")
    div.append(p)

    const valuearray = Object.keys(values.values)

    const imgdiv = document.createElement("div")
    imgdiv.className = "image"

    values.imagem.forEach((imgsrc) => {

        const img = document.createElement("img")
        img.src = imgsrc
        imgdiv.append(img)

    })

    innerdiv.append(imgdiv)

    for (let i = 0; i < valuearray.length;i++){

        const currentvalue = values.values[valuearray[i]]

        const valuediv = document.createElement("div") 
        valuediv.id = div.id.slice(0,(div.id.length)-3)+"_"+valuearray[i]
        valuediv.className = "option"

        const title = document.createElement("h1")
        title.className = "title"
        title.innerHTML = valuearray[i].replace("_"," ")

        const infodiv = document.createElement("div")

        const price = document.createElement("p")
        price.className = "price"
        price.innerHTML = currentvalue.price

        const qntd = document.createElement("p")
        qntd.className = "qntd"
        qntd.innerHTML = "x"+currentvalue.qntd

        const divarrow = document.createElement("div")
        
        const up = document.createElement("button")
        up.innerHTML = "^"

        const down = document.createElement("button")
        down.innerHTML = "v"

        up.onclick = () => {

            modifyqntd(1,valuediv,currentvalue)

        }

        down.onclick = () => {

            modifyqntd(-1,valuediv,currentvalue)

        }

        divarrow.append(up,down)

        infodiv.append(price,divarrow,qntd)
        valuediv.append(title,infodiv)

        innerdiv.append(valuediv)

    }

    div.append(innerdiv)
    
    const info = document.createElement("p")
    info.innerHTML = values.info
    div.append(info)

    opdiv.append(div)

}

function modifyqntd(num,div,currentvalue) {

    if (currentvalue.qntd+num >= 0) {

        if (currentvalue.qntd == 0) {
            const x = document.createElement("p")
            x.className = "clear"
            x.innerHTML = "x"
            x.onclick = () => {

                modifyqntd(-(currentvalue).qntd,div,currentvalue)

            }
            div.append(x)
        }


        currentvalue.qntd += num
        div.querySelector(".qntd").innerHTML = "x"+(currentvalue.qntd)

        if (currentvalue.qntd > 0) {

            if (contents.querySelector("#"+div.id)) {
               
                contents.querySelector("#"+div.id).innerHTML = div.id.replaceAll("_"," ")+" x"+currentvalue.qntd

            } else {
                console.log(div.id)
                const calcadd = document.createElement("p")
                calcadd.id = div.id
                calcadd.innerHTML = (div.id).replaceAll("_"," ")+" x1"
                contents.append(calcadd)
            }

        } else {

            contents.querySelector("#"+div.id).remove()
            div.querySelector(".clear").remove()

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

    document.getElementById("calcvalue").innerHTML = ((sum > 0) ? "Total of "+sum+" USD." : "You haven't added anything!")


}