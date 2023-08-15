const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator");

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { validaciones: [], valores: {} }); // Inicializar las variables
});

app.post(
  "/registrar",
  [
    body("nya", "Ingrese nombre y apellido completo")
      .exists()
      .isLength({ min: 10 }),
    body("email", "Ingrese un email válido")
    .exists()
    .isEmail(),
    body("edad", "Ingrese un valor numérico")
    .exists()
    .isNumeric(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(req.body);
      const valores = req.body;
      const validaciones = errors.array();
      return res.render("index", {
        validaciones: validaciones,
        valores: valores,
      });
    } else {
      return res.send("¡Validación exitosa!");
    }
  }
);

app.listen(4000, () => {
  console.log("Servidor corriendo en http://localhost:4000");
});
