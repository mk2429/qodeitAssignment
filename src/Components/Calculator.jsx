import React, { useEffect, useState } from 'react'


export default function Calculator() {
    const [type, setType] = useState("academic");
    const [grade, setGrade] = useState("high");
    const [price, setPrice] = useState(34);
    const [quantity, setQuantity] = useState(1);
    const [pageType, setpageType] = useState("page");
    const [words, setWords] = useState(275 * quantity);

    //function for calculating price on basis of choice by user
    const handleChange = () => {
        if (type == "academic") {
            if (grade == "high") {
                setPrice(12);
                console.log("sd", price)
            } else if (grade == "ug") {
                setPrice(15);
            } else if (grade == "bachelor") {
                setPrice(21);
            } else if (grade == "professional") {
                setPrice(25);
            }
        } else if (type == "editing") {
            if (grade == "high") {
                setPrice(3);
            } else if (grade == "ug") {
                setPrice(5);
            } else if (grade == "bachelor") {
                setPrice(7);
            } else if (grade == "professional") {
                setPrice(13);
            }
        } else {
            if (grade == "high") {
                setPrice(18);
            } else if (grade == "ug") {
                setPrice(23);
            } else if (grade == "bachelor") {
                setPrice(32);
            } else if (grade == "professional") {
                setPrice(38);
            }
        }
    }

    //function for handling quantity field,it has  if conditions
    //if restrict user to enter number greater than 99,restrict user to enter in field if words is selected and update quantity
    const handleQuantity = (event) => {
        const v = event.target.value;
        if (pageType == "page") {
            if (v < 100) {
                setQuantity(v);
                handleChange();
            }
        }
    }
    //whenever quantity , type, grade changes , handleChange is called, and words are set
    useEffect(() => {
        handleChange();
        setWords(275 * quantity);
    }, [quantity, type, grade]);

    //this function is called on keystrok,  it restrict user to backspace or delete if only one character is present in field
    const checkInput = (event) => {
        if (event.keyCode == 8 && event.target.value.length == 1) {
            event.preventDefault();
        }
    }
    return (
        <div >
            <div className='rounded  p-3  d-flex justify-content-center align-items-center flex-column bg-light calculator'>
                {/* type buttons */}
                <div className='d-flex justify-content-between align-items-center w-100 flex-wrap'>
                    <div className={`badge p-3 m-1 ${type == "academic" ? 'text-dark' : ''}`} style={{ backgroundColor: "#9376be", cursor: "pointer" }} onClick={() => { setType("academic"); handleChange(); }}>Academic Writing</div>
                    <div className={`badge p-3 m-1 ${type == "editing" ? 'text-dark' : ''}`} style={{ backgroundColor: "#9376be", cursor: "pointer" }} onClick={() => { setType("editing"); handleChange() }}>Editing and proofreading</div>
                    <div className={`badge p-3 m-1 ${type == "calculation" ? 'text-dark' : ''}`} style={{ backgroundColor: "#9376be", cursor: "pointer" }} onClick={() => { setType("calculation"); handleChange() }}>Calculations</div>
                </div>

                {/* grade buttons */}
                <div className='d-flex justify-content-between align-items-center w-100 my-3 flex-wrap'>
                    <div className={`badge tbtn p-3 m-1 ${grade == "high" ? 'text-dark' : ''}`} onClick={() => { setGrade("high"); handleChange() }}>High School</div>
                    <div className={`badge tbtn p-3 m-1 ${grade === "ug" ? 'text-dark' : ''}`} onClick={() => { setGrade("ug"); handleChange() }}>Undergraduate</div>
                    <div className={`badge tbtn p-3 m-1 ${grade === "bachelor" ? 'text-dark' : ''}`} onClick={() => { setGrade("bachelor"); handleChange() }}>Bachelor</div>
                    <div className={`badge tbtn p-3 m-1 ${grade === "professional" ? 'text-dark' : ''}`} onClick={() => { setGrade("professional"); handleChange() }}>Professional</div>
                </div>

                {/* dropdown ,can use autocomplete of mui */}
                <div className='w-100'>
                    <p className='text-muted my-0'>Type of Paper</p>

                    <select class="form-select w-100 text-center">
                        <option selected disabled >Select..</option>
                        <option value="1">Reserach Paper</option>
                        <option value="2">Reserach Proposal</option>
                        <option value="3">Speech</option>
                        <option value="4">Thesis</option>
                        <option value="5">Thesis Proposal</option>
                        <option value="6">Thesis Statement</option>
                    </select>
                </div>

                {/* quantity block */}
                <div className=' d-flex justify-content-around align-items-center flex-wrap w-100'>
                    <div className='mx-4'>
                        <div className=' my-2'>
                            <p className='text-muted my-0'>Quantity</p>
                            <input type="number" className='w-100' min={1} value={pageType == "page" ? quantity : words} onChange={(event) => handleQuantity(event)} onKeyDown={(event) => checkInput(event)} />
                        </div>

                        {/* pages and words button */}
                        <div className='d-flex justify-content-around align-items-center w-100'>
                            <div className={`badge qbtn p-3 mx-1 w-50 ${pageType == "page" ? "text-dark" : ""}`} onClick={() => setpageType("page")}>Pages</div>
                            <div className={`badge qbtn p-3 mx-1 w-50 ${pageType == "words" ? "text-dark" : ""}`} onClick={() => setpageType("words")}>Words</div>
                        </div>
                    </div>
                    <div className='mx-4 my-2 h-100'>
                        <p className='text-muted my-0'>Deadline</p>
                        <input type="date" defaultValue="2023-10-19" className='w-100' />
                    </div>
                </div>

                <div className='w-100 mt-4 d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <p className='text-muted my-0'>Approx Price</p>
                        <h6>${quantity * price}</h6>
                    </div>
                    <div>
                        <div className='rounded bg-warning p-2 btnorder'>PROCEED TO ORDER</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
