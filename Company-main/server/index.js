const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const bcrypt = require("bcrypt")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")

const saltRounds = 10

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))

app.use(session({
    key: "emailId",
    secret: "UJXsxsllkhytvqwehjb2578!*7sdn",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 1000 * 60 * 60 * 24,
    }
}))

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "authorization"
})

app.post('/register', (req, res) => {

    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if(err) {
            console.log(err)
        }

        db.query("INSERT INTO register (username, email, password) VALUES (?,?,?)", [username, email, hash], (err, result) => {
            console.log(err)
        })
    })
})

app.get('/login', (req, res) => {
    if(req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    }else {
        res.send({loggedIn: false})
    }
})

app.post('/login', (req, res) => {

    const email = req.body.email
    const password = req.body.password

    db.query("SELECT * FROM register WHERE email = ?;", email, (err, result) => {
        if(err) {
            console.log({err: err})
        } else {
            if(result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if(response) {
                        req.session.user = result
                        console.log(req.session.user)
                        res.send(result)
                    } else {
                        res.send({message: "Wrong email or password"})
                    }
                })
            } else {
                res.send({message: "User doesn't exist"})
            }
        }
    })
})

app.listen(3001, () => {
    console.log("server is running")
})