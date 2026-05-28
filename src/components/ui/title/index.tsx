interface Props {
  children: string;
}

export const Title = ({ children }: Props) => {
  return (
    <h2
      className="text-primary"
      aria-labelledby="main-header"
      test-id="main-header"
    >
      {children}
    </h2>
  );
};
