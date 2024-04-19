import React, { useState, useRef } from "react";
import { Document, Page } from "react-pdf";
import FlipPage from "react-flip-page";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "./App.css";

const PdfViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);

  const flipPageRef = useRef();
  const handleNextPage = () => {
    flipPageRef.current.gotoNextPage();
  };

  const handlePrevPage = () => {
    flipPageRef.current.gotoPreviousPage();
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="pb-5">
      <div className="">
        <button onClick={handlePrevPage} className="border-1 border-white">
          Anterior 🡰
        </button>
        <button onClick={handleNextPage} className="border-1 border-white">
         🡲 Siguiente 
        </button>
      </div>
      <div className="container-3d">
        <div className="border-2 border-black bg-yellow-950 p-3">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            className={"md"}
          >
            <FlipPage
              orientation="horizontal"
              width={1350}
              height={900}
              uncutPages={true}
              ref={flipPageRef}
            >
              {Array.from(new Array(Math.ceil(numPages / 2)), (el, index) => (
                <div key={`page_${index + 1}`} style={{ display: "flex" }}>
                  <Page pageNumber={index * 2 + 1} height={900} />
                  {index * 2 + 2 <= numPages && (
                    <Page pageNumber={index * 2 + 2} height={900} />
                  )}
                </div>
              ))}
            </FlipPage>
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;