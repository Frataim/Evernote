const { isAuthorizated } = require('./src/middlewares/usersMiddlewares')
const express = require('express') //подключаем экспресс
const path = require('path')
require('dotenv').config() // забираем dotenv и вызываем метод конфиг

const session = require('express-session')
const FileStore = require('session-file-store')(session)

const PORT = process.env.PORT || 3001
const app = express()

// routers import
const indexRouter = require('./src/routes/indexRouter')
const usersRouter = require('./src/routes/usersRouter')
const postsRouter = require('./src/routes/postsRouter')

// session middlware
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

// middlware
app.use(express.json()) //распознавания входящего объекты запроса как объекта JSON
app.use(express.urlencoded({ extended: true })) //распознавания входящего объекта запроса в виде строк или массивов
app.use(express.static(path.join(process.env.PWD, 'public'))) // изображения
app.use((req, res, next) => {
  res.locals.user = req.session.user
  next()
})

// routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', isAuthorizated, postsRouter);

// слушаем порт
app.listen(PORT, () => console.log(`Порт подключен ${PORT}`))
