import './FormData.css'
const FormData = () => {
    return (
        <>
            <div className="conatiner">
                <h1 className='heading'>Dynamic Form Data</h1>
                <h2 className='shop'>Cloth Shop</h2>
                <div className='formBox'>
                <div className="inputFild">


                    {/* Input Box */}
                    <input type="text" placeholder='Type Product name'/> <br />
                    <input type="number" placeholder='Type Product ID'/> <br />
                    <input type="number" placeholder='Type Price' /> <br />
                    <input type="number" placeholder='Type Quantity' />
                    <br />


                    {/* select Color */}
                    <select className='colorSelect' name="" id="">
                        <option value="">Select Color</option>
                        <option className='WhiteColor' value="">White</option>
                        <option className='redColor' value="">Red</option>
                        <option className='blackColor' value="">Black</option>
                        <option className='greenColor' value="">Green</option>
                        <option className='blueColor' value="">Blue</option>
                    </select>


                    {/* Radio */}
                    <div className='redioSelect'>
                        <input className='sizeM' type="radio" /> 
                        <label for="M">M</label> 
                        <input type="radio" />
                        <label for="M">L</label> 
                        <input type="radio" />
                        <label for="M">XL</label>
                    </div>

                    {/* Date formet */}

                    <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />

                    <input type="text" placeholder='Description'/>
                    <button className='submitBtn'>Submit</button>
                </div>
                </div>
            </div>
        </>
    );
};

export default FormData;





