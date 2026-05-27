export const RootModal = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-1/2 rounded-lg bg-white p-6 shadow-xl">
        <h3 className="text-lg font-bold text-gray-900">Título do Modal</h3>
        <p className="mt-2 text-sm text-gray-500">
          Este modal ficará perfeitamente centralizado e o fundo cobrirá 100% da
          tela, mesmo que a página de trás tenha scroll infinito.
        </p>

        <div className="mt-4 flex justify-end">
          <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
