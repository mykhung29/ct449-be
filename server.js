const app = require("./app");
const config = require("./app/config");

const PORT = config.app.port;

app.listen(PORT, () => {
    console.log (`sever is running on port ${PORT}.`);
});