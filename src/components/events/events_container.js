import { connect } from 'react-redux';
import Events from './events';
import { addEvent } from '../../actions/event_actions';

const mapStateToProps = state => ({
  events: state.events
});

const mapDispatchToProps = dispatch => ({
  addEvent: event => dispatch(addEvent(event))
});

const EventsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);

export default EventsContainer;
