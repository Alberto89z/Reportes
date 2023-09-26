import app from "config/express";


const port = process.env.PORT || 3000;

const main = () => {
    try {
        app.listen(port);
        console.log("Corriendo la app asi como: ¡itai, onichan! en el puerto : http://localhost:", port);
        
    } catch (error) {
        console.log(error);
    }
};

main();