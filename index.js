import express from "express";
const app = express();
const PORT = 3000;



app.get("/", (req, res) => {
    const today = new Date();

    const day = today.getDay();

    let type = "a weekday";

    let advice = "it's time to work hard!";

    if (day === 0 || day === 6) {
        type = "the weekend";
        advice = "it's time to have fun!"
    }

    res.render("index.ejs", {
        dayType: type,
        advice: advice
    });
})
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})