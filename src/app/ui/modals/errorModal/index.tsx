interface ErrorModalProps {
  title: string;
  description: string;

  onConfirm?: () => void;
}

export const ErrorModal = ({
  title,
  description,
  onConfirm,
}: ErrorModalProps) => {
  return (
    <div>
      <header className="mb-4">
        <h2
          id="modal-title"
          className="text-xl font-bold"
        >
          {title}
        </h2>
      </header>

      <main>
        <p
          id="modal-desc"
          className="text-zinc-600"
        >
          {description}
        </p>
      </main>

      <footer className="mt-6 flex justify-end gap-2">
        <button className="rounded bg-zinc-200 px-4 py-2">
          Voltar
        </button>

        <button
          onClick={onConfirm}
          className="rounded bg-red-500 px-4 py-2 text-white"
        >
          Confirmar
        </button>
      </footer>
    </div>
  );
};  