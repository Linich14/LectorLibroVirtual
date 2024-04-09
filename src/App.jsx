import { pdfjs } from "react-pdf";
import PdfViewer from "./PdfViewer";
import pdfurl from "./assets/hola2.pdf";
import Logo from "./assets/logo-uct.png"
function App() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <>
      <div className="pt-5">
        <div className="navbar flex border-2">
          <div className="w-1/3"><img src={Logo} alt="Logo" className="logito"/></div>
          <div className="w-2/3 flex justify-start"><h1 className="font-bold text-white">Libro de don Ciro</h1></div>
        </div>  

        <div>
          <PdfViewer pdfUrl={pdfurl} />
        </div>
      </div>

      <div className="footer"></div>
    </>
  );
}

export default App;
