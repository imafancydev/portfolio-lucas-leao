export const Button = ({ children, ...rest }: any) => {
  return (
    <button
      className="min-w-full @apply bg-[#CA4246] bg-[linear-gradient(_45deg,#CA4246_16.666%,#E16541_16.666%,#E16541_33.333%,#F18F43_33.333%,#F18F43_50%,#8B9862_50%,#8B9862_66.666%,#476098_66.666%,#476098_83.333%,#A7489B_83.333%)] bg-[100%] bg-repeat animate-[rainbow-text-simple-animation-rev_0.75s_ease_forwards] hover:animate-[rainbow-text-simple-animation_0.5s_ease-in_forwards] text-gray-200 px-5 py-4 rounded-lg font-bold shadow-indigo-500/50 transition-all duration-500 hover:bg-purple-700 hover:text-opacity-9 hover:shadow-2xl hover:scale-90"
      {...rest}
    >
      {children}
    </button>
  );
};
