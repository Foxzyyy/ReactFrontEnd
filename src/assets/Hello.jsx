const Hello = ({ message, name}) => {
    console.log({message, name});
    return(
        <div>
            <h1>
                {message} {name}
            </h1>
        </div>
    );
};
export default Hello;

import PropTypes from 'prop-types';
Hello.propTypes = {
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
Hello.defaultProps = {
    name: "User",
    message: "How r u love?"
};