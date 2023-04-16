// reducer가 하나처럼 동작하도록 묶기 위한 파일

import loading from './loadingReducer(완성본)';
import user from './userReducer(완성본)';

import collection from './collectionReducer';

import searchFilter from './searchFilterReducer';

export default {
  loading, 
  user,
  collection,
  searchFilter
};