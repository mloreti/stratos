import { connect } from 'react-redux';
import Events from './events';

const mapStateToProps = state => ({
  events: state.events
});

const mapDispatchToProps = dispatch => ({
});

const EventsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);

export default EventsContainer;
