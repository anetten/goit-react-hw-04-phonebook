export const Filter = ({ handleChangeFilter, filterValue }) => {
  return (
    <div>
      <p>Find contacts by name</p>

      <input
        type="text"
        name="keyword"
        onChange={handleChangeFilter}
        value={filterValue}
      />
    </div>
  );
};
