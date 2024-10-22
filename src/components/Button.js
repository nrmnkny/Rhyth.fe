const Button = ({ text, onClick }) => {
    return (
      <button 
        onClick={onClick} 
        className="px-6 py-3 bg-neon-blue text-black rounded-full hover:bg-purple-600 transition"
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  