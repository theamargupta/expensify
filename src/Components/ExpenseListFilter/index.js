import React from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
} from '../../Redux/actions/filtersGenerators';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ExpenseListFilter = ({ filter, dispatch }) => {
  const classes = useStyles();
  const handleChange = (e) => {
    console.log(filter);
    e.target.value === 'date'
      ? dispatch(sortByDate())
      : dispatch(sortByAmount());
  };
  return (
    <div>
      <input
        type='text'
        defaultValue={filter.text}
        onChange={(e) => dispatch(setTextFilter(e.target.value))}
      />
      <FormControl className={classes.formControl}>
        <InputLabel id='demo-simple-select-label'>Date/Amount</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={filter.sortBy}
          onChange={handleChange}
        >
          <MenuItem value={'date'}>Date</MenuItem>
          <MenuItem value={'amount'}>Amount</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
const mapStateToProps = ({ filters }) => ({
  filter: filters,
});

export default connect(mapStateToProps)(ExpenseListFilter);
