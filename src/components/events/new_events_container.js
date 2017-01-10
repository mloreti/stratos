import { connect } from 'react-redux';
import NewEvents from './new_events';
import { addEvent } from '../../actions/event_actions';

const mapStateToProps = state => ({
  events: state.events
});

const mapDispatchToProps = dispatch => ({
  addEvent: event => dispatch(addEvent(event))
});

const NewEventsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewEvents);

export default NewEventsContainer;
