import { compose } from 'redux';
import { connect } from 'react-redux';
import PictureOfDay from './PictureOfDay';
import { getPictureOfDay } from './podActions';

const mapStateToProps = (state) => {
    const podDetails = state.pod && state.pod.podDetails;
    const error = state.pod && state.pod.error;
    const isLoading = state.pod && state.pod.loading;
    return {
        podDetails,
        error,
        isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetPictureOfDay: () => dispatch(getPictureOfDay()),
    }
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(PictureOfDay);