require('dotenv').config() // забираем dotenv и вызываем метод конфиг
const express = require('express') //подключаем экспресс
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')

// session
const session = require('express-session')
const FileStore = require('session-file-store')(session)

// routers import
const checkUser = require('./src/middlewares/checkUser');
const indexRouter = require('./src/routes/indexRouter')
const usersRouter = require('./src/routes/usersRouter')
const postsRouter = require('./src/routes/postsRouter')

const PORT = process.env.PORT || 3001
const app = express()

// session middlware
const sessionConfig = {
  store: new FileStore(), // хранилище сессий
  key: 'smth', // ключ куки
  secret: process.env.SECRET, // шифрование id сессии
  resave: false, // пересохранение сессии (когда что-то поменяли - false)
  saveUninitialized: false, // сохраняем пустую сессию (чтоб посмотреть)
  httpOnly: true, // нельзя изменить куки с фронта
  // cookie: { expires: 20e3 }, // expires - время жизни
}

// middlware
app.use(session(sessionConfig))
app.use(morgan('dev'))
app.use(express.json()) //распознавания входящего объекты запроса как объекта JSON
app.use(express.urlencoded({ extended: true })) //распознавания входящего объекта запроса в виде строк или массивов
app.use(cors({origin: process.env.ORIGIN,credentials: true}))
// middleware session
app.use((req, res, next) => {
  console.log(req.session.user)
  res.locals.user = req.session.user
  next()
})


app.use(checkUser)
// routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

// слушаем порт
app.listen(PORT, () => console.log(`Порт подключен ${PORT}`))
