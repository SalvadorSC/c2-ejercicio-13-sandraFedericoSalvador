import { facturas } from "../datos/facturas.js";

const tablaFacturas = document.querySelector(".tablaFacturas");
console.log(tablaFacturas);
let totalBaseMarronero = 0;


for (const { numero, tipo, fecha, abonada, vencimiento, base, concepto } of facturas) {
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
    const fechaFactura = facturaElemento.querySelector(".fechaFactura");
    const dateFactura = new Date(fecha);

    fechaFactura.textContent = `${dateFactura.getDate()}/${
      dateFactura.getMonth() + 1
    }/${dateFactura.getFullYear()}`;
    // Concepto Factura
    const datoConcepto = facturaElemento.querySelector(".conceptoFactura");
    datoConcepto.textContent = concepto;

    // Base
    const datoBase = facturaElemento.querySelector(".baseFactura");
    datoBase.textContent = base;


    // IVA

    // TOTAL
    // TOTAL Base
    const totalBase = document.querySelector(".total-base");
    // const calculoTotalBase = facturas.reduce((acumulador, {base}) => base + acumulador,0);

    totalBaseMarronero = base + totalBaseMarronero;
    totalBase.textContent = `${totalBaseMarronero} €`;

    // Estado Factura

    // Vencimiento Factura
    const vencimientoFactura = facturaElemento.querySelector(
      ".vencimientoFactura"
    );
    const dateVencimiento = new Date(vencimiento);

    if (abonada) {
      vencimientoFactura.textContent = "-";
      vencimientoFactura.classList.add("table-success");
    } else if (!abonada && vencimiento - fecha < 0) {
      vencimientoFactura.textContent = `${dateVencimiento.getDate()}/${
        dateVencimiento.getMonth() + 1
      }/${dateVencimiento.getFullYear()} (dentro de X días)`;
      vencimientoFactura.classList.add("table-success");
    } else {
      vencimientoFactura.textContent = `${dateVencimiento.getDate()}/${
        dateVencimiento.getMonth() + 1
      }/${dateVencimiento.getFullYear()} (hace X días)`;
      vencimientoFactura.classList.add("table-danger");
    }
    //

    tablaFacturas.append(facturaElemento);
  }
}
