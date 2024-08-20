import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";
import config from "../../config.js";

let transporter = nodemailer.createTransport({
  host: config.SMTP_HOST,
  port: config.SMTP_PORT,
  auth: {
    user: config.SMTP_USER,
    pass: config.SMTP_PASS,
  },
});

const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve("./services/mail/templates/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./services/mail/templates/"),
};

transporter.use("compile", hbs(handlebarOptions));


export default transporter;