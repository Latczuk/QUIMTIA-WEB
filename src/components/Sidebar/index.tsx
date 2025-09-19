"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import { categories, category } from "../../constants/sidebarConstants";

export function Sidebar({
  isMinimized,
  setIsMinimized,
  setActiveCategory,
  activeCategory,
}: any) {
  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    setIsMinimized(true);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <aside
      className={`
        fixed top-0 left-0 h-screen z-50
        bg-white/80 backdrop-blur-sm border-r border-slate-200/60
        transition-all duration-300 ease-in-out 
        ${isMinimized ? "w-16" : "w-64"}
      `}
    >
      <div className="p-4">
        {/* Botão de minimizar/expandir */}
        <div className="flex justify-between items-center mb-6">
          {!isMinimized && (
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
              Categorias
            </h2>
          )}
          <button
            onClick={toggleMinimize}
            className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0085cb] focus:ring-offset-2"
            aria-label={isMinimized ? "Expandir menu" : "Minimizar menu"}
            title={isMinimized ? "Expandir menu" : "Minimizar menu"}
            type="button"
          >
            {isMinimized ? (
              <Menu className="w-5 h-5 text-slate-600" />
            ) : (
              <X className="w-5 h-5 text-slate-600" />
            )}
          </button>
        </div>

        {/* Lista de categorias */}
        <nav
          className="space-y-2"
          role="navigation"
          aria-label="Categorias de animais"
        >
          {categories.map((category: category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`
                w-full flex items-center rounded-2xl text-left transition-all duration-200 group 
                focus:outline-none focus:ring-2 focus:ring-[#0085cb] focus:ring-offset-2
                ${isMinimized ? "p-2 justify-center" : "p-4 justify-between"}
                ${
                  activeCategory === category.id
                    ? "bg-[#0085cb] text-white shadow-lg shadow-[#0085cb]/25 transform scale-[1.02]"
                    : "text-slate-700 hover:bg-slate-50 hover:text-[#0085cb] hover:shadow-md hover:transform hover:scale-[1.01]"
                }
              `}
              aria-pressed={activeCategory === category.id}
              title={isMinimized ? category.label : undefined}
              type="button"
            >
              {isMinimized ? (
                // Versão minimizada - só letra inicial
                <span className="font-bold text-sm">
                  {category.label.charAt(0)}
                </span>
              ) : (
                // Versão expandida
                <>
                  <span className="font-medium text-sm">{category.label}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeCategory === category.id
                        ? "rotate-90"
                        : "group-hover:translate-x-1"
                    }`}
                    aria-hidden="true"
                  />
                </>
              )}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}

