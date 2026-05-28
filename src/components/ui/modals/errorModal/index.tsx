import { ptBR } from "@/locales/pt-BR";

interface ErrorModalProps {
  title?: string;
  description?: string;
  onConfirmLabel?: string;
  onCancelLabel?: string;

  onConfirm?: () => void;
  onCancel?: () => void;
}

export const ErrorModal = ({
  title=ptBR.warnings.error,
  description,
  onConfirm,
  onCancel,
  onConfirmLabel=ptBR.buttons.ok,
  onCancelLabel=ptBR.buttons.cancel
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
        {description && <p
          id="modal-desc"
          className="text-zinc-600"
        >
          {description}
        </p>}
      </main>

      <footer className="mt-6 flex justify-center gap-2">
        {onCancel &&<button className="rounded bg-zinc-200 px-4 py-2" 
        onClick={onCancel}>
          {onCancelLabel}
        </button>}

        {onConfirm && <button
          onClick={onConfirm}
          className="rounded bg-red-500 px-4 py-2 text-white"
        >
          {onConfirmLabel}
        </button>
        }
      </footer>
    </div>
  );
};  