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

createObject('Band1', {
  title: 'Band1',
  link: '/band1',
  image: 'https://f4.bcbits.com/img/0009206218_10.jpg',
  alt: ''
})

createObject('Band2', {
  title: 'Band2',
  link: '/band2',
  image: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Thedevilandgodareraginginsideme.jpg',
  alt: ''
})

createObject('Band3', {
  title: 'Band3',
  link: '/band3',
  image: 'https://upload.wikimedia.org/wikipedia/en/b/b7/Joyce_Manor_Never_Hungover_Again.png',
  alt: ''
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
app.get('/band1', function (request, response) {
  response.render('pages/band', {
    objs: objs,
    obj: objs['Band1']
  })
})
app.get('/band2', function (request, response) {
  response.render('pages/band', {
    objs: objs,
    obj: objs['Band2']
  })
})
app.get('/band3', function (request, response) {
  response.render('pages/band', {
    objs: objs,
    obj: objs['Band3']
  })
})

app.get('/about', function (request, response) {
  response.end('Ah, where to begin...')
})

app.listen(port)
