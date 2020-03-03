import { connect } from 'react-redux';
import { groupActions } from '../actions/groupAction';
import SideArea from '../components/sideArea'

const mapStateToProps = (state) => {
  return {
    groupList : state.groupList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddGroup: (data) => {
      dispatch(groupActions.addGroup(data));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideArea)
