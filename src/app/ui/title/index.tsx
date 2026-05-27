interface Props {
  children: string;
}

export const Title = ({ children }: Props) => {
  return (
    <h1
      className="text-primary"
      aria-labelledby="main-header"
      test-id="main-header"
    >
      {children}
    </h1>
  );
};
