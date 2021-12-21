import React, {Fragment} from 'react';

const Info = () => {

    const showMoreInfo = () => {
        alert();
    }

    return(
        <Fragment>
            <button onClick={showMoreInfo}>More Info</button>
        </Fragment>
    );
}

export default Info;