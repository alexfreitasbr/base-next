interface BtnActionProps {
  children: React.ReactNode;
  action: () => void;
  disabled: boolean;
}

export const BtnAction = ({  children, action, disabled }: BtnActionProps) => {
  return (
    <button
      className="flex items-center gap-1 text-gray-600 hover:text-black disabled:text-gray-300 disabled:cursor-not-allowed tracking-normal transition-colors duration-200"
      onClick={action}
      disabled={disabled}
    >
      { children}
    </button>
  );
};
