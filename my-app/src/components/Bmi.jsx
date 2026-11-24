import {useState} from "react";

export function Bmi() {

    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [result, setResult] = useState(0)

    function handleWeightChange(e) {
        setWeight(e.target.value)
    }

    function handleHeightChange(e) {
        setHeight(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        let bmi = weight / height ** 2
        setResult(bmi)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <form onSubmit={handleSubmit}>
                        <input type="number" step="0.1" onChange={handleWeightChange} className="form-control mb-3"
                               placeholder="Enter Weight"/>
                        <input type="number" step="0.1" onChange={handleHeightChange} className="form-control mb-3"
                               placeholder="Enter Height"/>
                        <button className={"btn btn-danger w-100"}>Calculate</button>
                    </form>
                    <h3 className="text-center">{result}</h3>
                </div>
            </div>
        </div>)
}