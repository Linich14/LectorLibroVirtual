import React, { useState, useRef } from "react";
import { Document, Page } from "react-pdf";
import FlipPage from "react-flip-page";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css"
import "./App.css";

const PdfViewer = ({ pdfUrl }) => {
  // Variable para el numero de paginas
  const [numPages, setNumPages] = useState(null);

  // Referencia para el componente FlipPage
  const flipPageRef = useRef();

  // Funciones para cambiar de pagina siguiente
  const handleNextPage = () => {
    flipPageRef.current.gotoNextPage();
  };

  // Funciones para cambiar de pagina anterior
  const handlePrevPage = () => {
    flipPageRef.current.gotoPreviousPage();
  };

  // Funcion para obtener el numero de paginas cuando se carga el documento
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Renderizado del componente PdfViewer con el documento y los botones para cambiar de pagina 
  return (
    <div className="container container-3d flex flex-col md:flex-row justify-center items-center">

      <div className="pr-4 mb-4 md:mb-0">
        <button onClick={handlePrevPage} className="border-1 border-white">
          Anterior 🡰
        </button>
      </div>
      <div className="border-2 border-black bg-yellow-950 p-3">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className={"md"}
        >
          <FlipPage
            orientation="horizontal"
            width={1348}
            height={900}
            uncutPages={true}
            animationDuration={600}
            showSwipeHint={true}
            ref={flipPageRef}
          >

            {Array.from(new Array(Math.ceil(numPages / 2)), (el, index) => (
              <div key={`page_${index + 1}`} style={{ display: "flex" }}>
                <Page pageNumber={index * 2 + 1} height={900} renderTextLayer={false} />
                {index * 2 + 2 <= numPages && (
                  <Page pageNumber={index * 2 + 2} height={900}  renderTextLayer={false}/>
                )}
              </div>
            ))}
          </FlipPage>
        </Document>
      </div>

      <div className="pl-4">
        <button onClick={handleNextPage} className="border-1 border-white">
          Siguiente 🡲
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;