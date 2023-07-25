import Button from './Button';

const App = () => {
  const handleClick = () => {
    // Handle button click event here
    console.log('Button clicked!');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
};

export default App;
