export default function PDFRenderer({ pdfUrl }: { pdfUrl: string }) {
    return (
        <iframe src={pdfUrl} className="w-full h-full">
            {/* <p>Your browser does not support PDFs. Please download the PDF to view it: <a href={pdfUrl}>Download PDF</a>.</p> */}
        </iframe>
    )
}