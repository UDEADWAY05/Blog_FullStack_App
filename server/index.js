const express = require("express")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")


mongoose.connect(
    "mongodb+srv://<>:<>@cluster0.4sskc6m.mongodb.net/?retryWrites=true&w=majority"
).then(() => {console.log("DB ok")})
.catch((err) => console.log("DB error", err))


const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello World!")
});

app.post("/auth/login", (req, res) => {
    console.log(req.body)

    const token = jwt.sign({
        email: req.body.email,
        fullname: "Вася Пупкин",

    }, "secret123")


    res.json({
        success: true,
        token
    })
})


app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log("server ok")
})