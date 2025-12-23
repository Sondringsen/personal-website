// import Image from "next/image";
import PDFRenderer from "@/components/pdf_renderer";

export default function CV() {
    return (
        <div className="h-screen w-full">
            <PDFRenderer pdfUrl="/CV.pdf" />
        </div>
    );
}