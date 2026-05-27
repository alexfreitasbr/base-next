"use client";
import { modalStore } from "@/store/modalStore";
import { cn } from "@/lib/utilsTailWind";
import { CircleX } from "lucide-react";

export const RootModal = () => {
  const { modal, ariaLabelledby, ariaDescribedby,setModal } = modalStore();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={ariaDescribedby}
      aria-describedby={ariaLabelledby}
      className={cn(
        "fixed p-4 inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm hiden",
        !modal && "hidden",
      )}
      onClick={() => setModal(null)}
    >
      <div className="shrink rounded-lg bg-white p-6 shadow-xl">  
                {modal}

        <button onClick={() => setModal(null)}>
          <CircleX className="w-5 h-5  transition-transform duration-200 hover:rotate-180" />
        </button>
      </div>
    </div>
  );
};
