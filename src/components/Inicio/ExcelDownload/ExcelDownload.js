import React from "react";
import ReactExport from "react-export-excel";
import './ExcelDownload.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
    {
        Fc: "ESTE ES UN ARCHIVO DE PRUEBA",
        B: "6.5",
        p10: 3.1,
        p20: 3.1,
        p30: 3.1,
        p40: 3.1,
        p50: 3.1,
        p60: 3.1,
        p70: 3.1,
        p80: 6.2,
        p90: 9.1,
        p100: 11.1,

    },
];

const ExcelDownload = () => {
  return (
      <ExcelFile element={
        <button className="boton">
        <FontAwesomeIcon icon={faFileDownload} size="lg" className="icono-download"></FontAwesomeIcon>
          Descargar predicción para todos los SKU
        </button>}>
          <ExcelSheet data={dataSet1} name="Configuraciones">
              <ExcelColumn label="Fc" value="Fc"/>
              <ExcelColumn label="B" value="B"/>
              <ExcelColumn label="p10" value="p10"/>
              <ExcelColumn label="p20" value="p20"/>
              <ExcelColumn label="p30" value="p30"/>
              <ExcelColumn label="p40" value="p40"/>
              <ExcelColumn label="p50" value="p50"/>
              <ExcelColumn label="p60" value="p60"/>
              <ExcelColumn label="p70" value="p70"/>
              <ExcelColumn label="p80" value="p80"/>
              <ExcelColumn label="p90" value="p90"/>
              <ExcelColumn label="p100" value="p100"/>

          </ExcelSheet>
      </ExcelFile>
  );
};

export default ExcelDownload;