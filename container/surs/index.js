import { server } from "./bootstrap/server.js";
import innitializeDatabaseConnection from "./config/db.config.js";



(() =>
 {
    try { innitializeDatabaseConnection;
        server.listen (2000, () => {
            console.info('Server is running on port 2000')
        });
    }   catch (error) {
        console.error( 'Could not start the server', error)
        process.exit(1);
    }

 }  

)()