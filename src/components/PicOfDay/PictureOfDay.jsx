import React from 'react';
import {
    Segment,
    Image,
    Message,
    Dimmer,
    Loader,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class PictureOfDay extends React.Component {
    componentDidMount() {
        const { onGetPictureOfDay } = this.props;
        onGetPictureOfDay();
    }

    render() {
        const {
            podDetails,
            error,
            isLoading,
            showTitle,
        } = this.props;
        return (
            <Segment compact className="pod">
                {
                    error
                    && (
                        <Message>
                            NASA Pic of the day unavailable :(
                        </Message>
                    )
                }
                <Image
                    className="podImage"
                    src={podDetails.url}
                    alt={podDetails.title}
                />
                {showTitle && <i>{podDetails.title}</i>}
                <Dimmer active={isLoading} inverted>
                    <Loader />
                </Dimmer>
            </Segment>
        );
    }
}

PictureOfDay.defaultProps = {
    showTitle: true,
    error: '',
    isLoading: false,
};

PictureOfDay.propTypes = {
    podDetails: PropTypes.instanceOf(Object).isRequired,
    onGetPictureOfDay: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    showTitle: PropTypes.bool,
};

export default PictureOfDay;
