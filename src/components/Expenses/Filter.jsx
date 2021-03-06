const Filter = (props)=>{
    const dropdownhandler = event =>{
        props.onChangeFilter(event.target.value)
    }
    return (
        <div className="expense-filter">
                <div className="expense-filter__controls">
                    <label htmlFor="">Filter By Year</label>
                    <select value={props.selected} onChange={dropdownhandler}>
                        <option value="">Select</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                </div>
        </div>
    )
}
export default Filter;
