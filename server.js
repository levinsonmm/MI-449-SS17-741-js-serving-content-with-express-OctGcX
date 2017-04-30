var express = require('express')
var app = express()
var port = process.env.PORT || 8080
app.set('view engine', 'ejs')
app.use(express.static('public'))

var objs = {}

createObject('Home', {
  'title': 'Home',
  'link': '/',
  'image': 'https://i.scdn.co/image/0c1636f797ad833fc4f37046fb391b03f43bc196',
  alt: 'spotify emo forever picture'
})

createObject('Diet Cig', {
  title: 'Diet Cig',
  link: '/dietcig',
  image: 'https://f4.bcbits.com/img/a2739252692_10.jpg',
  alt: 'diet cig album cover',
  bandcamp: 'http://dietcig.bandcamp.com/album/swear-im-good-at-this',
  bandcampE: 'https://bandcamp.com/EmbeddedPlayer/album=3931624143/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/',
  writeUp: 'One of my favorite bands at the moment. The singer of Diet Cig sounds exactly like my inner voice.'
})

createObject('Thin Lips', {
  title: 'Thin Lips',
  link: '/thinlips',
  image: 'https://f4.bcbits.com/img/a0109924820_10.jpg',
  alt: 'thin lips album cover',
  bandcamp: 'http://xxthinlipsxx.bandcamp.com/album/riff-hard-2',
  bandcampE: 'https://bandcamp.com/EmbeddedPlayer/album=4274183086/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/',
  writeUp: 'An awesome band that I saw open for Joyce Manor. Lots of female and queer positivity.'
})

createObject('Pity Sex', {
  title: 'Pity Sex',
  link: '/pitysex',
  image: 'https://f4.bcbits.com/img/a1901683862_10.jpg',
  alt: 'pity sex album cover',
  bandcamp: 'http://pitysex.bandcamp.com/album/white-hot-moon',
  bandcampE: 'https://bandcamp.com/EmbeddedPlayer/album=211366956/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/',
  writeUp: 'Kind of a wildcard. A female only sings sometimes and they are more shoegaze than emo, but still prob one of my favorite bands.'
})

function createObject (id, obj) {
  objs[id] = obj
}

app.get('/', function (request, response) {
  response.render('pages/index', {
    objs: objs,
    obj: objs['Home']
  })
})
app.get('/dietcig', function (request, response) {
  response.render('pages/band', {
    objs: objs,
    obj: objs['Diet Cig']
  })
})
app.get('/thinlips', function (request, response) {
  response.render('pages/band', {
    objs: objs,
    obj: objs['Thin Lips']
  })
})
app.get('/pitysex', function (request, response) {
  response.render('pages/band', {
    objs: objs,
    obj: objs['Pity Sex']
  })
})

app.get('/about', function (request, response) {
  response.end('Ah, where to begin...')
})

app.listen(port)
