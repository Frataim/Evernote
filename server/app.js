//подключаем экспресс
const express = require('express')
const path = require('path')
// подключаем логгер (записывает данные)
const morgan = require('morgan')
// импортируем hbs работа с partials
const hbs = require('hbs')
// забираем dotenv и вызываем метод конфиг
require('dotenv').config()

const session = require('express-session')
const FileStore = require('session-file-store')(session)

const PORT = process.env.PORT || 3001
const app = express()

const indexRouter = require('./src/routes/indexRouter')
const userRouter = require('./src/routes/userRouter')

const sessionConfig = {
  store: new FileStore(), // хранилище сессий
  key: 'smth', // ключ куки
  secret: 'gchjtghjkl;bjkll', // шифрование id сессии
  resave: false, // пересохранение сессии (когда что-то поменяли - false)
  saveUninitialized: false, // сохраняем пустую сессию (чтоб посмотреть)
  httpOnly: true, // нельзя изменить куки с фронта
  cookie: { expires: 20e3 }, // expires - время жизни
}
app.use(session(sessionConfig))

// устанавливаем путь где будем хранить папку views
app.set('view engine', 'hbs')
app.set('views', path.join(process.env.PWD, 'src', 'views'))

// регистрируем partials
hbs.registerPartials(path.join(process.env.PWD, 'src', 'views', 'partials'))

app.use(morgan('dev'))
// распознавания входящего объекты запроса как объекта JSON
app.use(express.json())
// распознавания входящего объекта запроса в виде строк или массивов
app.use(express.urlencoded({ extended: true }))
// изображения
app.use(express.static(path.join(process.env.PWD, 'public')))
app.use(morgan('dev'))

app.use((req, res, next) => {
  res.locals.user = req.session.user
  next()
})

app.use('/', indexRouter)
app.use('/user', userRouter)
app.get('*', (req, res) => {
  res.render('404')
})

// слушаем порт
app.listen(PORT, () => console.log(`Порт подключен ${PORT}`))
