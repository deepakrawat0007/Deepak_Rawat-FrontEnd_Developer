import { useEffect, useState } from "react"
import "../page.css"

const Popup = ({ closePopup, popUpId, capsules }) => {
    const [data, setData] = useState({})

    useEffect(() => {
        const result = capsules.find(items => items.capsule_serial === popUpId)
        setData(result)
    }, [popUpId])

    return (
        <div className="popup_conatiner">
            <div className="pop_head">
                <p>
                    <b>Capsule Serial # {data.capsule_serial}</b>
                </p>
                <span onClick={closePopup}>Close</span>
            </div>
            <div className="datas">
                <p><b>Capsule_id: </b> {data.capsule_id}</p>
                <p><b>Details :</b> {data.details}</p>
                <p><b>Landings :</b> {data.landings}</p>
                <p><b>Original Launch :</b> {data.original_launch}</p>
                <p><b>Original Launch Unix :</b> {data.original_launch_unix}</p>
                <p><b>Status :</b> {data.status}</p>
                <p><b>Type :</b> {data.type}</p>
                <p><b>Reuse Count :</b> {data.reuse_count}</p>
                <p><b>Mission_Name :</b> {data.missions?.map((items => (<span>{items.name},</span>)))}</p>
                <p><b>Mission_Flight# :</b> {data.missions?.map((items => (<span>{items.flight},</span>)))}</p>
            </div>

        </div>
    )
}

export default Popup