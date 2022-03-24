import React from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";

const MealItem = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5){
        setAmountIsValid(false);
        return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount "
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter Valid number between 1 to 5</p>}
    </form>
  );
};

export default MealItem;
