import propTypes from 'prop-types';
import { Message } from 'components/Notification/Notification.styled'

const Notification = ({message}) => {
    return <Message>{message}</Message>

}
 



Notification.propTypes = {
    message: propTypes.string.isRequired,
}

    export default Notification