import React from 'react';
import { 
    Segment, 
    Image, 
    Message,
    Dimmer,
    Loader
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class PictureOfDay extends React.Component {

    static propTypes = {
        podDetails: PropTypes.object,
        onGetPictureOfDay: PropTypes.func,
        isLoading: PropTypes.bool,
        error: PropTypes.string,
        showTitle: PropTypes.bool
    }

    componentDidMount(){
        this.props.onGetPictureOfDay && this.props.onGetPictureOfDay();
    }

    render() {
        const { podDetails, error, isLoading, showTitle } = this.props;
        return <Segment>
            <h2>NASA Picture of Day</h2>
            {
                error && <Message negative>
                    <Message.Header>Something went wrong!</Message.Header>
                    <p>{error}</p>
                </Message>
            }
            <Image src={podDetails.url} alt={podDetails.title} />
            {showTitle && <i>{podDetails.title}</i>}
            <Dimmer active={isLoading} inverted>
                <Loader />
            </Dimmer>
        </Segment>;
    }
}

PictureOfDay.defaultProps = {
    showTitle: true,
}

export default PictureOfDay;