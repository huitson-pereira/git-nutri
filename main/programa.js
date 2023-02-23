import {Paciente } from "../models/paciente.js";

const tituloPrincipal = document.getElementById("titulo-principal");
tituloPrincipal.textContent = 'Aparecida Nutricionista';
let paciente = new Paciente("Maria", "Souza", 90, 1.85);
console.log(paciente.nome);