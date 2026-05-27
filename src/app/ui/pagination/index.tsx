import { ChevronLeft, ChevronRight } from "lucide-react";
import { BtnAction } from "../btn";
import { cn } from '@/lib/utilsTailWind'

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
    <nav
      className="flex justify-center mt-4 gap-2 border-t-2 border-gray-200 py-6 "
      aria-label="Main Menu"
      test-id="navegationBar"
    >
      <BtnAction
        action={() => handlerPagination(-1)}
        disabled={currentPage === 0}
        aria-label="Preview página"
        aria-disabled={currentPage === 0}
        test-id="prevPageBtn"
      >
        <ChevronLeft className="w-5 h-5 transition-transform duration-200 hover:rotate-180" />
          Anterior
        </BtnAction>
      <p aria-label="Current page" test-id="currentPage">
        {currentPage + 1}
      </p>{" "}
      /{" "}
      <strong aria-label="Total pages" test-id="totalPage">
        {totalPages}
      </strong>
      <BtnAction
        action={() => handlerPagination(1)}
        disabled={currentPage === totalPages}
        aria-label="Next página"
        aria-disabled={currentPage === 0}
        test-id="nextPageBtn"
      >
        Proximo
        <ChevronRight className="w-5 h-5  transition-transform duration-200 hover:rotate-180" />
      </BtnAction>
      <button className={cn(
  'btn-primary',
  currentPage === 0 && 'opacity-50'
)}>
  Save
</button>
    </nav>
  );
};
