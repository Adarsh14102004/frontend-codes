const mongoose = require("mongoose");
const connect = async() =>

    function connect() {
        mongoose.connect(process.env.mongourl)
            .then(() => console.log("connection ho gaya"))
            .catch((err) => console.log(err));
    }
module.exports = connect;