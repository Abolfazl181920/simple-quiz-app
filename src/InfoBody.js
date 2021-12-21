import React, {useState, Fragment} from 'react';

const InfoBody = () => {

    const [hideInfo, setHideInfo] = useState(false);

    const handleHideInfo = () => {
        setHideInfo(!hideInfo);
    }

    return(
        <Fragment>
            <div>
                <div className="InfoBody">
                    <div>You answered n questions</div>
                    <div>You can't answer to n questions</div>
                    <div>Your percentage is n%</div>
                </div>
            </div>
                <button onClick={handleHideInfo} className="HideInfo">Hide Info</button>
        </Fragment>
    );
}

export default InfoBody;