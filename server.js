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
  alt: ''
})

createObject('Diet Cig', {
  title: 'Diet Cig',
  link: '/dietcig',
  image: 'https://f4.bcbits.com/img/0009206218_10.jpg',
  alt: 'diet cig album cover',
  bandcamp: 'http://dietcig.bandcamp.com/album/swear-im-good-at-this',
  bandcampE: 'https://bandcamp.com/EmbeddedPlayer/album=3931624143/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/'
})

createObject('Thin Lips', {
  title: 'Thin Lips',
  link: '/thinlips',
  image: 'https://f4.bcbits.com/img/a0109924820_10.jpg',
  alt: 'thin lips album cover',
  bandcamp: 'http://xxthinlipsxx.bandcamp.com/album/riff-hard-2',
  bandcampE: 'https://bandcamp.com/EmbeddedPlayer/album=4274183086/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/'
})

createObject('Pity Sex', {
  title: 'Pity Sex',
  link: '/pitysex',
  image: 'https://f4.bcbits.com/img/a1901683862_10.jpg',
  alt: 'pity sex album cover',
  bandcamp: 'http://pitysex.bandcamp.com/album/white-hot-moon',
  bandcampE: 'https://bandcamp.com/EmbeddedPlayer/album=211366956/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/'
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
