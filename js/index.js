import { facturas } from "../datos/facturas.js";

const tablaFacturas = document.querySelector(".tablaFacturas");
console.log(tablaFacturas);

for (const { numero, tipo, base, tipoIva, total } of facturas) {
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

    // Base


    // IVA
    const iva = tipoIva/base * 100; 
    const taxaIva = document.querySelector(".ivaFactura");
    console.log(taxaIva);
    taxaIva.textContent = iva.toFixed(2);

    // TOTAL

    const total = (base + iva).toFixed(2) + " €";
    const totalFactura = document.querySelector(".totalFactura");
    totalFactura.textContent = total;

    // Estado Factura

    // Vencimiento Factura

    tablaFacturas.append(facturaElemento);
  }
}