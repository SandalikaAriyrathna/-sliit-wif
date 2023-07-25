// eslint-disable-next-line react/prop-types
const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 rounded-[20px] text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline animated-border from-red-600 via-red-400 to-blue-500 transition-all"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
