import './colors.css';

// eslint-disable-next-line react/prop-types
const Button = ({ children, onClick }) => {
  return (
    <button
      className="w-2/12 bg-blue-400 hover:bg-blue-100 hover:text-blue-400 rounded-[20px] text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline animated-border from-red-600 via-red-400 to-blue-500 transition-all"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
