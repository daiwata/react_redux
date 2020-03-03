import { groupActionNames } from '../actions/groupAction';
import _ from 'lodash';

const groupInitState = {
  groupList:[
    {
      id: "inbox",
      label: "TODO"
    },
    {
      id: "group-1",
      label: "グループ1"
    }
  ],
  groupCount: 1,
  selectedGroup:"inbox"
}

function groupReducer(state = groupInitState, action) {
  let _state = _.cloneDeep(state);
  let todoList = []
  switch (action.type) {
    case groupActionNames.ADD_GROUP:
      _state.groupCount++;
      let groupItem = {
        id: action.payload.groupId,
        label: action.payload.data
      }
      _state.groupList.push(groupItem);
      return _state;
    case groupActionNames.SELECT_GROUP:
      _state.selectedGroup = action.payload.id;
      return _state;
    case groupActionNames.EDIT_GROUP:
      for (var i = 0; i < _state.groupList.length; i++) {
        if (_state.groupList[i].id == action.payload.id) {
          _state.groupList[i].label = action.payload.groupName;
          break;
        }
      }
      return _state;
    case groupActionNames.DELETE_GROUP:
      for (var i = 0; i < _state.groupList.length; i++) {
        if (_state.groupList[i].id == action.payload.id) {
          _state.groupList.splice(i, 1);
          break;
        }
      }
      return _state;
    default:
      return state;
  }
}

export default groupReducer;
