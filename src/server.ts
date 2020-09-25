import { createExpressServer } from "routing-controllers";
import { createConnection } from "typeorm";

const app = createExpressServer({
    cors: true,
    middlewares: [

    ],
    controllers: [
    ]
});

createConnection().then(() => {
    app.listen(3000, () => console.log("[Server] Server läuft auf port 3000"));
}).catch((err: any) => console.log(err))
