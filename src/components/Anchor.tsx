export const Anchor = ({ children, ...rest }: any) => {
  return (
    <a
      className={`text-zinc-900 transition-all duration-500 hover:text-opacity-75`}
      {...rest}
    >
      {children}
    </a>
  );
};
