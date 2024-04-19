import { pdfjs } from "react-pdf";
import PdfViewer from "./PdfViewer";
import pdfurl from "./assets/librobueno.pdf";
import Ciro1 from "./assets/av1.png"
import Ciro2 from "./assets/av2.png"
import foot from "./assets/Footer.png"
function App() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <>
      <div className="">
        <div className="p-2">
          <div className="flex border-4 bg-[#6803F7] border-[#06004A] rounded-lg p-3 shadow-md overflow-hidden">
            <div className="flex w-13">
              <img src={Ciro2} width="100vh"></img>
            </div>
            <div className="grow h-1">
              <h1 className="font-bold text-white">Curioso</h1>
              <hr></hr>
              <h3 className="font-bold text-white">¡El maravilloso mundo de las matemáticas! Para descubrir, motivarse y aprender.</h3>
            </div>
            <div className="flex w-13">
              <img src={Ciro1} width="100vh"></img>
            </div>
          </div>
        </div>  
        <div>
          <PdfViewer pdfUrl={pdfurl} />
        </div>
      </div>
      <footer className="bg-[#0057FF] border-4 border-[#06004A] rounded-lg p-3 shadow-md overflow-hidden">
        <div className="bg-[#06004A] grid grid-cols-3">
          <div className="p-2"><p>Ciro González Mallo</p></div>
          <div className="p-2"><p>Claudia González Algería</p></div>
          <div className="p-2"><p>Genoveva Garrido Pedreros</p></div>
        </div>
        <div className="flex justify-center"><img src={foot}></img></div>
        <div className="bg-[#06004A] grid grid-cols-3">
          <div className="p-2"><p>Pagina diseñada por:</p></div>
          <div className="p-2"><p>Jorge Eduardo Soto</p></div>
          <div className="p-2"><p>Daniel Felipe Peña</p></div>
          <p></p>
        </div>
      </footer>
    </>
  );
}

export default App;
