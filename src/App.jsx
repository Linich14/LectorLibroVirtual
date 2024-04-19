import { pdfjs } from "react-pdf";
import PdfViewer from "./PdfViewer";
import pdfurl from "./assets/librocurioso.pdf";
import CiroDerecha from "./assets/av1.png"
import CiroIzquierda from "./assets/av2.png"
import foot from "./assets/Footer.png"

function App() {
  // Configuracion de pdfjs para cargar el worker desde un CDN en lugar de cargarlo localmente
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <>
      <div className="">
        <div className="p-2">
          <div className="flex border-4 bg-[#6803F7] border-[#06004A] rounded-lg p-3 shadow-md overflow-hidden">
            <div className="flex w-13">
              <img src={CiroIzquierda} width="100vh"></img>
            </div>
            <div className="grow h-1">
              <h1 className="font-bold text-white">Curioso</h1>
              <hr ></hr>
              <h2 className="font-bold text-white">¡El maravilloso mundo de la matemática! Para descubrir, motivarse y aprender.</h2>
            </div>
            <div className="flex w-13">
              <img src={CiroDerecha} width="100vh"></img>
            </div>
          </div>
        </div>  
        <div>
          <PdfViewer pdfUrl={pdfurl} />
        </div>
      </div>
      <footer className="bg-[#0057FF] border-4 border-[#06004A] rounded-lg p-3 shadow-md overflow-hidden ">
        <div className="bg-[#06004A] grid grid-cols-3 rounded-md">
          <div className="p-2"><p>Ciro González Mallo</p></div>
          <div className="p-2"><p>Claudia González Algería</p></div>
          <div className="p-2"><p>Genoveva Garrido Pedreros</p></div>
        </div>
        <div className="flex justify-center"><img src={foot}></img></div>
        <div className="bg-[#06004A] grid grid-cols-3 rounded-md ">
          <div className="p-2"><p>Pagina diseñada por:</p></div>
          <div className="p-2"><p><a href="https://github.com/Linich14">Jorge Soto C.</a></p></div>
          <div className="p-2"><p><a href="https://github.com/DPBascur">Daniel Peña B.</a></p></div>
          <p></p>
        </div>
      </footer>
    </>
  );
}

export default App;
