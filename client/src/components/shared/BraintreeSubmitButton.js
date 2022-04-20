import Button from "react-bootstrap/esm/Button";

const BraintreeSubmitButton = ({ onClick, isDisabled, text }) => {
   
  return (
    <Button 
    onClick={onClick} 
    disabled={isDisabled}>
      {text}
    </Button>
  );
};
export default BraintreeSubmitButton;
