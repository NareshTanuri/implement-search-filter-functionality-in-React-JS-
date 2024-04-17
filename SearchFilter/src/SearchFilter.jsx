import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
const ItemsData = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
    { id: 8, name: "Item 8" },
    { id: 9, name: "Item 9" },
    { id: 10, name: "Item 10" },
    { id: 11, name: "Apple" },
    { id: 12, name: "Banana" },
    { id: 13, name: "Orange" },
    { id: 14, name: "Pineapple" },
    { id: 15, name: "Grapes" },
    { id: 16, name: "Watermelon" },
    { id: 17, name: "Strawberry" },
    { id: 18, name: "Blueberry" },
    { id: 19, name: "Mango" },
    { id: 20, name: "Peach" }
];


const SearchFilter = () => {
    const [state, setState] = useState({
        searchFilter: "",
        filterData: ItemsData,
        searchFilterResults: [],
    });
    console.log("searchFilter", state);
    const handleChange = (e) => {
        console.log("dddd", e);
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    useEffect(() => {
        const results = state.filterData.filter((item) => item.name.toLowerCase().includes(state.searchFilter.toLowerCase()));
        setState(prevState => ({ ...prevState, searchFilterResults: results }))
    }, [state.searchFilter, state.filterData]);
    return (
        <div className='row text-center'>
            <div className='col'></div>
            <div className='col-lg-6 mt-3'>
                <div className='text-info h3'>SearchFilter Example</div>
                <div className='mt-3'>
                    <input
                        type="text"
                        className='form-control'
                        name="searchFilter"
                        value={state.searchFilter}
                        onChange={handleChange}
                        placeholder='Search Filter'
                    />
                </div>

                <div className="mt-3">
                    {
                        state.searchFilterResults.length > 0 ? (
                            <ul>
                                {state.searchFilterResults.map(item => (
                                    <div className="card mt-2">
                                        <div className="card-body bg-light"><li key={item.id}>{item.name}</li></div>
                                    </div>
                                ))}
                            </ul>
                        ) : (
                            <h6 className="text-center">No Data Found</h6>
                        )}
                </div>
            </div>
            <div className='col'></div>
        </div>
    )
}
export default SearchFilter;
