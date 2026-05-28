"use client";

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import React from "react";

type ModalComponent = React.ComponentType<any>;

interface ModalState {
  isOpen: boolean;

  component: ModalComponent | null;

  props?: Record<string, any>;

  ariaLabelledby?: string;
  ariaDescribedby?: string;

  openModal: (
    component: ModalComponent,
    props?: Record<string, any>,
    options?: {
      ariaLabelledby?: string;
      ariaDescribedby?: string;
    }
  ) => void;

  closeModal: () => void;
}

export const modalStore = create<ModalState>()(
  devtools((set) => ({
    isOpen: false,

    component: null,

    props: {},

    ariaLabelledby: "",

    ariaDescribedby: "",

    openModal: (component, props = {}, options = {}) =>
      set(
        {
          isOpen: true,

          component,

          props,

          ariaLabelledby: options.ariaLabelledby || "",

          ariaDescribedby: options.ariaDescribedby || "",
        },
        false,
        "modal/open"
      ),

    closeModal: () =>
      set(
        {
          isOpen: false,

          component: null,

          props: {},
        },
        false,
        "modal/close"
      ),
  }))
);