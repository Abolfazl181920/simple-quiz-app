import React, {Fragment} from 'react';
import InfoBody from './InfoBody';

const Info = () => {

    const showMoreInfo = () => {
        alert();
    }

    return(
        <Fragment>
            <button className="MoreInfo" onClick={showMoreInfo}>More Info</button>
        </Fragment>
    );
}

export default Info;