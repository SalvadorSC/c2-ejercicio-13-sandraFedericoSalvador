import { facturas } from "../datos/facturas.js";

const tablaFacturas = document.querySelector(".tablaFacturas");
console.log(tablaFacturas);

for (const { numero, tipo ,concepto, base } of facturas) {
  if (tipo === "ingreso") {
    console.log(numero);
    const facturaElemento = document
      .querySelector(".factura-molde")
      .cloneNode(true);
    facturaElemento.classList.remove("factura-molde");

    // Numero Factura
    const numFactura = facturaElemento.querySelector(".numFactura");
    numFactura.textContent = numero;

    // Fecha Factura

    // Concepto Factura
    const datoConcepto = facturaElemento.querySelector(".conceptoFactura");
    datoConcepto.textContent = concepto;

    // Base
    const datoBase = facturaElemento.querySelector(".baseFactura");
    datoBase.textContent = base;


    // IVA

    // TOTAL

    //TOTAL Base

    // Estado Factura

    // Vencimiento Factura

    tablaFacturas.append(facturaElemento);
  }
}
