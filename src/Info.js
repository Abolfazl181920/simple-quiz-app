import React, {useState, Fragment} from 'react';
import InfoBody from './InfoBody';

const Info = () => {

    const [moreInfo, showMoreInfo] = useState(true);

    const handleShowMoreInfo = () => {
        showMoreInfo(!moreInfo);
    }

    return(
        <Fragment>
            <button className="MoreInfo" onClick={handleShowMoreInfo}>More Info</button>
            {
                moreInfo ? <InfoBody /> : null
            }
        </Fragment>
    );
}

export default Info;