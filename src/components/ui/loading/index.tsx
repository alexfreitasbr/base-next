import { RotateCw } from "lucide-react";
import { ptBR } from "@/locales/pt-BR";

export const Loading = () =>    {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-5" aria-label="loading" test-id="loading"
            role="status" aria-live="polite" 
            aria-busy="true"
            aria-atomic="true"
        >
            <h3>{ptBR.warnings.loading}</h3>
            <RotateCw className="w-15 h-15  transition-transform duration-200 animate-spin" />
        </div>
    )
}
