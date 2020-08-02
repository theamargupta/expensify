import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import moment from 'moment';
import Swal from 'sweetalert2';

// const now = moment();
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const ExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [note, setNote] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedDate, handleDateChange] = useState(moment());
  const classes = useStyles();

  const handleAmountChange = (e) => {
    const Value = e.target.value;
    return !Value || Value.match(/^\d{1,}(\.\d{0,2})?$/)
      ? setAmount(Value)
      : null;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    return !amount || !description
      ? Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please Provide Amount and Description Both!',
        })
      : Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your Expense has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
  };
  return (
    <form
      className={classes.root}
      onSubmit={handleSubmit}
      noValidate
      autoComplete='off'
    >
      {/* <p>{value}</p> */}
      <TextField
        label={'Amount'}
        value={amount}
        onChange={handleAmountChange}
        type={'number'}
        id={'outlined-size-normal'}
        variant='outlined'
      />
      <TextField
        label={'Description'}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type={'text'}
        id={'outlined-size-normal'}
        variant='outlined'
      />
      <TextField
        label={'Add a note for your expense(optional)'}
        multiline
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={4}
        type={'text'}
        id={'outlined-multiline-static'}
        variant='outlined'
      />

      <KeyboardDatePicker
        value={selectedDate}
        placeholder={'DATE'}
        onChange={(date) => date && handleDateChange(date)}
        format='dd/MM/yyyy'
      />

      <Button variant='contained' type='submit' color='primary'>
        Add expense
      </Button>
    </form>
  );
};
export default ExpenseForm;
