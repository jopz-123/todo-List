const mongoose  = require("mongoose");

const conn = async (req, res) => {
    try {
        await mongoose.connect("mongodb+srv://josephfrancizz721:Joseph123@cluster0.bamnx00.mongodb.net/")
        .then(() => {
        console.log("Connected");
    });
 } catch (error) {
        res.status(400).json({
            message: "Not Connected",
        });
    }
};
conn();