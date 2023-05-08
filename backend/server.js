const app = require("./app");

const dotenv = require("dotenv");

const connectDataBase = require("./config/database")

dotenv.config({ path: "backend/config/config.env" });

process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log("UncaughtExceptions on the server");
    process.exit(1);
})

connectDataBase();

app.listen(process.env.PORT, () => {
    console.log(`Srver is working on http://localhost:${process.env.PORT}`)
})


process.on("unhandledRejection", (err) => {
    console.log(`Error:${err.message}`);
    console.log("Shutting down the server due to unhandle promise rejection");

    server.close(() => {
        process.exit(1);
    });
});