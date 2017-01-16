import { connect } from 'react-redux';
import EventsList from './events_list';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
});

const EventsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsList);

export default EventsListContainer;
