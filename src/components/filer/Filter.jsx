import './filter.scss'

function Filter() {
    return (
        <div className="filter">
            <h1>Search results <b>Location name</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor='city'>Location</label>
                    <input type='text' id='city' name='city' placeholder='City Location' />
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor='type'>Type</label>
                    <select name='type' id ='type'>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
export default Filter;