import { ChevronLeft, ChevronRight } from "lucide-react";
import { BtnAction } from "../btn";

interface Props {
  handlerPagination: (value: number) => void;
  currentPage: number;
  totalPages: number;
}

export const Pagination = ({
  handlerPagination,
  currentPage,
  totalPages,
}: Props) => {
  return (
    <nav className="flex justify-center mt-4 gap-2">
      <BtnAction
        action={() => handlerPagination(-1)}
        disabled={currentPage === 0}
      >
        <ChevronLeft className="w-5 h-5 transition-transform duration-200 hover:rotate-180" />
        Anterior
      </BtnAction>
      <p>{currentPage + 1}</p> / <strong>{totalPages}</strong>
      <BtnAction
        action={() => handlerPagination(1)}
        disabled={currentPage === totalPages}
      >
        Proximo
        <ChevronRight className="w-5 h-5  transition-transform duration-200 hover:rotate-180" />
      </BtnAction>
    </nav>
  );
};
