import express from "express"
import bodyParser from "body-parser"
import { v4 as uuidv4 } from "uuid"
const app = express()
const port = 3000

app.use(bodyParser.json())

var autor = []

app.post("/dodajAutora", (req, res) => {
    var error = false
    var data = req.body

    if (!data.naziv || !data.djela || Object.keys(data).length != 2) {
        res.send({ "Error": "Krivi kljucevi" });
        error = true;
    }


    data.djela.forEach(x => {
        if (x.length > 20) {
            res.send({ "Error": `Djelo ${x} ima vise od 20 znakova` });
            error = true;
        }
    });

    if (!greska) {
        data = { ...data, "id": uuidv4(), "datum": new Date() }
        autor.push(data)
        res.send(autor)
    }
});

app.get("/vratiAutore", (req, res) => {
    let filtriranje = []

    autor.forEach(x => {
        filtriranje.push({
            "naziv": x.naziv,
            "djela": x.djela
        })
    });
    res.send(filtriranje)
})

app.delete("/izbrisiDjeloAutora/:id", (req, res) => {
    var { id } = req.params
    var autorbrisanje = autor.find(autor => autor.id != id)
    res.send(autorbrisanje)
})

app.listen(port, () => console.log(`Works on port ${port}`));