const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express();

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/get", (req, res) => {
  res.render("index");
});

app.post(
  "/registrar",
  [
    body("nya", "Ingrese nombre y apellido completo")
      .exists()
      .isLength({ min: 5 }),
    body("email", "Ingrese un email válido").exists().isEmail(),
    body("edad", "Ingrese un valor numérico").exists().isNumeric(),
  ],
  (req, res) => {
    /*const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
      console.log(errors)
    }*/
const errors = validationResult(req)
if(!errors.isEmpty()){
    console.log(req.body)
    const valores = req.body
    const validaciones = errors.array()
    res.render('index',{validaciones:validaciones,valores:valores})
}else{
    res.render('¡Validacion exitosa!')
}

    res.status(200).json({ message: "Registro exitoso" });
  }
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

