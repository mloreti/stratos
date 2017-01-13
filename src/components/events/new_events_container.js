import { connect } from 'react-redux';
import NewEvents from './new_events';
import { addEvent, addNoTimeEvent } from '../../actions/event_actions';

const mapStateToProps = ({events}) => ({
  schedule: events.schedule
});

const mapDispatchToProps = dispatch => ({
  addEvent: event => dispatch(addEvent(event)),
  addNoTimeEvent: event => dispatch(addNoTimeEvent(event))
});

const NewEventsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewEvents);

export default NewEventsContainer;
