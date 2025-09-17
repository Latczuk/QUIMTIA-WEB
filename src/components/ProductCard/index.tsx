import { FileText } from "lucide-react";

interface Product {
  id: number;
  title: string;
  description: string;
  features: string[];
  species: string;
  file: string;
}

export function ProductCard({ product }: { product: Product }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = product.file;
    link.download = `${product.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/60 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#0085cb] transition-colors break-words whitespace-pre-wrap">
            {product.title}
          </h3>
        </div>
      </div>

      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 break-words whitespace-pre-wrap">
        {product.description}
      </p>

      <div className="space-y-3 mb-8">
        {product.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-[#0085cb] rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm text-slate-600 leading-relaxed break-words whitespace-pre-wrap">{feature}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row tems-center justify-between pt-6 border-t border-slate-100">
        <div>
          <p className="text-xs text-slate-500 font-medium break-words whitespace-pre-wrap">Espécie</p>
          <p className="text-sm font-semibold text-slate-700 break-words whitespace-pre-wrap">{product.species}</p>
        </div>
        <button
          onClick={handleDownload}
          
          className="flex items-center cursor-pointer bg-white/80 border-blue-200 text-[#0085cb] hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 font-medium"
        >
          <FileText className="w-4 h-4 mr-2" />
          Ficha Técnica
        </button>
      </div>
    </div>
  );
}
