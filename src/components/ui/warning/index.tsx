import { Bug } from "lucide-react";
import { ptBR } from "@/locales/pt-BR";

interface ErrorProps{
    icon?:string;
    title?: string;
    description?: string;
}

export const Warning = ({title=ptBR.warnings.error,description}:ErrorProps) =>    {
    return (
        <output className="flex flex-1 flex-col items-center justify-center" aria-label="loading" test-id="loading" role="alert" aria-live="assertive" aria-atomic="true">
            <Bug className="w-10 h-10  transition-transform duration-200 hover:rotate-180" />
            <h3>{title}</h3>
            <p>{description}</p>
        </output>
    )
}