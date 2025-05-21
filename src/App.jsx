
function App() {

  return (
    <div className="container mx-auto py-10">
      <div className="bg-n-7 p-7.5 rounded-lg">
        <h1 className="h1 text-n-1 mb-5">Teste de Configuração</h1>

        {/* Teste de cores */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-color-1 p-4 rounded-md text-n-8 font-semibold">Color 1</div>
          <div className="bg-color-2 p-4 rounded-md text-n-8 font-semibold">Color 2</div>
          <div className="bg-color-3 p-4 rounded-md text-n-8 font-semibold">Color 3</div>
          <div className="bg-color-4 p-4 rounded-md text-n-8 font-semibold">Color 4</div>
          <div className="bg-color-5 p-4 rounded-md text-n-8 font-semibold">Color 5</div>
          <div className="bg-color-6 p-4 rounded-md text-n-8 font-semibold">Color 6</div>
        </div>

        {/* Teste de tipografia */}
        <div className="mb-10">
          <h2 className="h2 text-n-2 mb-4">Teste de Tipografia</h2>
          <h3 className="h3 text-n-3 mb-3">Heading 3</h3>
          <h4 className="h4 text-n-3 mb-3">Heading 4</h4>
          <p className="body-1 text-n-4 mb-3">Este é um texto body-1 para testar a tipografia.</p>
          <p className="body-2 text-n-4 mb-3">Este é um texto body-2 para testar a tipografia.</p>
          <p className="tagline text-color-2 mb-3">ESTE É UM TAGLINE COM TRACKING</p>
          <p className="quote text-n-3 mb-3">"Esta é uma citação para testar a fonte code."</p>
          <button className="button bg-color-1 text-n-1 px-4 py-2 rounded">BOTÃO DE TESTE</button>
        </div>

        {/* Teste de espaçamento */}
        <div className="mb-10">
          <h2 className="h2 text-n-2 mb-4">Teste de Espaçamento</h2>
          <div className="flex flex-wrap gap-4">
            <div className="bg-n-5 p-0.25 text-n-1">p-0.25</div>
            <div className="bg-n-5 p-7.5 text-n-1">p-7.5</div>
            <div className="bg-n-5 p-15 text-n-1">p-15</div>
          </div>
        </div>

        {/* Teste de gradientes */}
        <div className="mb-10">
          <h2 className="h2 text-n-2 mb-4">Teste de Gradientes</h2>
          <div className="flex flex-wrap gap-4">
            <div className="bg-conic-gradient p-10 rounded-md w-full md:w-64 h-32 flex items-center justify-center text-n-8 font-bold">
              Gradiente Cônico
            </div>
            <div className="bg-radial-gradient from-color-1 to-n-8 p-10 rounded-md w-full md:w-64 h-32 flex items-center justify-center text-n-1 font-bold">
              Gradiente Radial
            </div>
          </div>
        </div>

        {/* Teste de z-index e opacidade */}
        <div className="relative h-40 mb-10">
          <h2 className="h2 text-n-2 mb-4">Teste de Z-index e Opacidade</h2>
          <div className="absolute left-0 top-10 bg-color-1 p-4 rounded-md z-1">Z-index 1</div>
          <div className="absolute left-10 top-15 bg-color-2 p-4 rounded-md z-2">Z-index 2</div>
          <div className="absolute left-20 top-20 bg-color-3 p-4 rounded-md z-3">Z-index 3</div>
          <div className="absolute left-30 top-25 bg-color-4 p-4 rounded-md opacity-15">Opacidade 15%</div>
        </div>
      </div>
    </div>
  )
}

export default App
