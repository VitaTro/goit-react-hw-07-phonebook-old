import { setFilter } from 'components/redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const changeHandler = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };
  return (
    <div>
      <div>
        <label>Find contacts by Name</label>
        <div>
          <input name="filter" type="text" onChange={changeHandler} />
        </div>
      </div>
    </div>
  );
};
