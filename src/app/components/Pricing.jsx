import React from "react"

export default function Pricing() {
  return (
    <>
    <div className="flex mx-auto my-8 justify-center gap-6">
      {/*<!-- Component: Basic Pricing Table --> */}
      <div className="max-w-sm overflow-hidden bg-white rounded shadow-lg lg:max-md-full text-slate-500 shadow-slate-200">
        <div className="flex flex-col">
          <header className="flex flex-col gap-6 p-6 text-slate-400">
            <h3 className="text-xl font-bold text-slate-700">
              Básico
              <span className="block text-sm font-normal text-slate-400">
              Ideal para resolver rápido.
              </span>
            </h3>
            <h4>
              <span className="text-3xl">$</span>
              <span className="text-5xl font-bold tracking-tighter transition-all duration-300 text-slate-700 lg:text-6xl">
                8000
              </span>
              <span className="text-sm">/45 Minutos</span>
            </h4>
            <button className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-gray-500 shadow-gray-100 hover:bg-gray-600 hover:shadow-md hover:shadow-gray-100 focus:bg-gray-700 focus:shadow-md focus:shadow-gray-100 focus-visible:outline-none">
              <span>Pagar Ahora</span>
            </button>
          </header>
        </div>
      </div>
      {/*<!-- End Basic Pricing Table --> */}
      {/*<!-- Component: Basic Pricing Table --> */}
      <div className="max-w-sm overflow-hidden bg-white rounded shadow-lg lg:max-md-full text-slate-500 shadow-slate-200">
        <div className="flex flex-col">
          <header className="flex flex-col gap-6 p-6 text-slate-400">
            <h3 className="text-xl font-bold text-slate-700">
              Abono Profesional
              <span className="block text-sm font-normal text-slate-400">
                Buscar profesional con calificacion perfecta.
              </span>
            </h3>
            <h4>
              <span className="text-3xl">$</span>
              <span className="text-5xl font-bold tracking-tighter transition-all duration-300 text-slate-700 lg:text-6xl">
                10000
              </span>
              <span className="text-sm">/45 minutos</span>
            </h4>
            <button className="inline-flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-lg whitespace-nowrap bg-gray-500 shadow-gray-100 hover:bg-gray-600 hover:shadow-md hover:shadow-gray-100 focus:bg-gray-700 focus:shadow-md focus:shadow-gray-100 focus-visible:outline-none">
              <span>Pagar Ahora</span>
            </button>
          </header>
        </div>
      </div>
      {/*<!-- End Basic Pricing Table --> */}
</div>
    </>
  )
}