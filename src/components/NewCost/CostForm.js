import React, { useState } from "react";
import "./CostForm.css";
import CostDate from "../Costs/CostDate";
const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  // (альтернатива верхнему и для нижних 2ух подходов)
  // const [userInput,setUserInput]=useState({
  //     name:'',
  //     amount:'',
  //     date:''
  // });

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);

    // (подход другой 1 но не безопасный)
    // setUserInput({
    //     ...userInput,
    //     name:event.target.value
    // })

    // (тоже другой подход но более безопастнее чем 1)
    // setUserInput ((previousState)=>{
    //    return {
    //      ...previousState,
    //      name:event.target.value
    //    }
    // })
  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     amount:event.target.value
    // })
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     date:event.target.value
    // })
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    props.onSaveCostData(costData);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Sum</label>
          <input
            type="number"
            value={inputAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            value={inputDate}
            onChange={dateChangeHandler}
            min="01-01-2022"
            step="31-12-2025 "
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add expense</button>
          <button type="button" onClick={props.onCancel}>Cancel</button>
        </div>
      </div>
    </form>
  );
};
export default CostForm;
