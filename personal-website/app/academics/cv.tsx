// import Image from "next/image";
import PDFRenderer from "@/components/PDFRenderer";

export default function CV() {
    return (
        <div className="h-screen w-full">
            <PDFRenderer pdfUrl="/CV.pdf" />
        </div>
    );
}