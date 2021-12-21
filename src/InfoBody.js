import React, {Fragment} from 'react';

const InfoBody = () => {
    return(
        <Fragment>
            <div>
                <div className="InfoBody">
                    <div>You answered n questions</div>
                    <div>You can't answer to n questions</div>
                    <div>Your percentage is n%</div>
                </div>
            </div>
        </Fragment>
    );
}

export default InfoBody;