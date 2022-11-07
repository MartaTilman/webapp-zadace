import express from "express"
import bodyParser from "body-parser"
import { v4 as uuidv4 } from "uuid"
const app = express()
const port = 3000

app.use(bodyParser.json())

var ts = []

app.post("/dodajObavjest", (req, res) => {
    var data = req.body
    console.log(data)
    data = { ...data, "id": uuidv4(), "datum": new Date() }
    ts.push(data)
    res.send(ts)
})

app.get("/vratiObavjesti", (req, res) => {
    let filtriranje = []

    ts.forEach(y => {
        filtriranje.push({
            "naziv": y.naziv,
            "datum": y.datum
        })
    });
    res.send(filtriranje)
});

app.get("/vratiObavjest/:id", (req, res) => {
    var { id } = req.params
    var obavijest = ts.find((y) => y.id == id)
    res.send({
        "naziv": obavijest.naziv,
        "datum": obavijest.datum,
        "sadrzaj": obavijest.sadrzaj
    })
})

app.patch("/izmjeniObavjest/:id", (req, res) => {
    var { id } = req.params
    var obavijest = ts.find((x) => y.id == id)
    var { sadrzaj } = req.body
    obavijest.sadrzaj = sadrzaj
    res.send(obavijest)
})

app.listen(port, () => console.log(`Works on port ${port}`));