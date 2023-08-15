const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator");



app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/get", (req, res) => {
  res.render('index');
});

app.post(
  "/registrar",
  [
    body("nya", "Ingrese nombre y apellido completo")
      .exists()
      .isLength({ min: 5 }),
    body("email", "Ingrese un email válido").exists().isEmail(), // Use isEmail() to validate email format
    body("edad", "Ingrese un valor numérico").exists().isNumeric(),
  ],
  (req, res) => {
    /*const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({errors;errors.array()});
      console.log(errors)
    }*/
      
      const errors = validationResult(req);
      if(!errors.isEmpty()){
        console.log(req,body)
        const valores = req.body
        const validaciones = errors.array()
        res.render('index,{validaciones,valores:valores})')
      
    } else {
      // Use res.send() to send a response string
      return res.send("¡Validación exitosa!");
    }
  }
);

app.listen(4000, () => {
  console.log("Servidor corriendo en http://localhost:4000");
});
