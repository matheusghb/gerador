import NeoCities from "neocities"
var api = new NeoCities('juliet83c','4b0br1nh4.')

import axios from "axios"

import fs from "fs"

import { XMLParser } from "fast-xml-parser"
import Builder from "fast-xml-builder"

const itembuild = new Builder({
    arrayNodeName: 'item',
    format: true,
})

const d = new Date()
const weekday = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Out','Nov','Dec']

function getdates() {

    // Example => Wed, 02 Oct 2002 08:00:00 EST

    const wd = weekday[d.getDay()]
    const m = month[d.getMonth()]
    const y = d.getFullYear()
    const tz = d.getTimezoneOffset()

    const n = [d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds(), d.getMonth()]

    n.forEach((item) => {
        if (item.length < 2) {
            item = '0' + item
        }
    })

    return [wd+", "+n[0]+" "+m+" "+y+" "+n[1]+":"+n[2]+":"+n[3]+" "+tz, wd+', '+n[0]+'/'+n[4]+'/'+y]

}

var siteurl = 'https://juliet83c.neocities.org/feed.xml'

async function scrape () {

    const axiosresp = await axios.request({
        method: 'GET',
        url: siteurl,
        headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    })

    const xml = axiosresp.data

    const parser = new XMLParser()
    const json = parser.parse(xml)
    const channel = json.rss.channel
    
    const itemlist = []

    const currentdate = getdates()
    
    itemlist.push({
        title: currentdate[1],
        link: siteurl,
        pubDate: currentdate[0],
        description: 'Did a comment box for the profile page.'
    })

    for (let i = 0; i < channel.item.length; i++) {
        const item = channel.item[i]
        itemlist.push({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            description: item.description
        })
    }

    if (itemlist.length > 14) {
        itemlist.shift()
    }


const newxml = `<rss version="2.0">
 <channel>
  
  <title>Sheepie's blog</title>
  <link>https://juliet83c.neocities.org/</link>
  <description>Just a personal blog! And stuff!</description>
  <language>en-us</language>
  <lastBuildDate>${currentdate[0]}</lastBuildDate>
    
${itembuild.build(itemlist)}
  </channel>
</rss>
`


    
 fs.writeFile('feed.xml',newxml, 'utf8',(err) => {
    if (err) throw (err) 
    console.log("O .xml foi atualizado com sucesso.")
})

}

scrape()

/* comando de upload. subscreve ou adiciona (caso não tiver) o arquivo denominado pelo valor path 
    utilizando do nome especificado pelo valor name. */

api.upload([
    {name: 'feed.xml', path: './feed.xml'}
], function(resp) {
    console.log(resp)
}) 
