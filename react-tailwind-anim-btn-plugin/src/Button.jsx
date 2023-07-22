// eslint-disable-next-line react/prop-types
const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
