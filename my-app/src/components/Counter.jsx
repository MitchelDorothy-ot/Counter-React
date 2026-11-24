import {useState} from "react";

function Counter() {
    const [myNumber, setMyNumber] = useState(0)

    function btnClicked() {
        console.log(myNumber)
        // alert(myNumber)
        setMyNumber(prevNo => prevNo + 1)
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-3">
                        <h2 className="text-info text-center">{myNumber}</h2>
                        <button className="btn btn-danger w-100" onClick={btnClicked}>Click to Count</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter;