"use client";

import Image from "next/image";
import { ProductGrid } from "../components/ProductGrid";
import { Sidebar } from "../components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("ratos");
  const [isMinimized, setIsMinimized] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <Sidebar
          isMinimized={isMinimized}
          setActiveCategory={setActiveCategory}
          setIsMinimized={setIsMinimized}
          activeCategory={activeCategory}
        />
        <main className={`flex-1 p-8 ${isMinimized ? "flex-1" : "hidden md:flex md:flex-1 lg:flex lg:flex-1"}`}>
          <div className="max-w-7xl mx-auto">
            <header className="mb-12 text-center">
              <div className="inline-flex items-center gap-3 mb-6">
                <Image width={120} height={120} alt={``} src={`/logo.png`} />
              </div>
              <p className="text-slate-600 text-lg font-medium">Produtos para animais de laboratório</p>
            </header>
            <ProductGrid category={activeCategory}/>
          </div>
        </main>
      </div>
    </div>
  );
}
