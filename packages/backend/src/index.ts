import { koaPort } from "./config";
import { app } from "./app";

app.listen(koaPort, () => console.log(`Server running on port ${koaPort}`));
