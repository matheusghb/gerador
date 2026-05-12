var neocities = require('neocities')
var api = new neocities('juliet83c','4b0br1nh4.')
var axios = require("axios")
var cheerio = require("cheerio")
var siteurl = 'https://juliet83c.neocities.org/feed.xml'

async function scrape () {

    const axiosresp = await axios.request({
        method: 'GET',
        url: siteurl,
        headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    })

    const $ = cheerio.load(axiosresp.data)

    console.log($)

}

scrape()



/* Consegue ler valores armazenados dentro de arquivos, armazenando eles no valor data. */

/* var fs = require('node:fs')
fs.readFile(
    'feed.xml', 'utf-8', (err,data) => {
        if (err) {
            console.log(err)
            return
        }
    console.log(data)
}) */

/* comando de upload. subscreve ou adiciona (caso não tiver) o arquivo denominado pelo valor path 
    utilizando do nome especificado pelo valor name. */

/* api.upload([
    {name: 'duuh.html', path: './teste.html'}
], function(resp) {
    console.log(resp)
}) */