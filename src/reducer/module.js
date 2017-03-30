import Immutable,{ List,Map,fromJS } from 'immutable';

const MdInitIalState = fromJS({
	USERINFO:{}
});


export const MdCount = function (state = MdInitIalState, action) {
  switch (action.type) {
    case 'USERINFO':
          state = state.mergeIn(['USERINFO'], action.data);
      		return state;
          break;
    default:
          return state;
  }
}

export default MdCount;
