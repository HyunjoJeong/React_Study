import { SET_COLLECTION, SET_AGE } from "../actions/collectionActions";

const initState = {
  ids: [],
  entities: {},
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch(type){
    case SET_COLLECTION: {
      const ids = payload.map(entity => entity ['id']); // id 값만 추출해서 ids에 저장
      const entities = payload.reduce((finalEntities, entity) => ({
        ...finalEntities,
        [entity['id']]: entity,
      }), {});
      return { ...state, ids, entities };
    }
    case SET_AGE: {
      const { id, age } = payload;
      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: { ...state.entities[id], age }, // 해당 id 의 age만 바꾸기
        },
      };
    }
    default:
      return state;
  }
};