// loading 과 관련된 action들만 모아놓음

export const SET_LOADING = 'loading/SET_LOADING'; // type을 변수로 선언해 export 했는데, 이때 값으로 loading/SET_LOADING이라고 한 것은, loading에서 쓰인 것임을 명시적으로 표현하기 그냥 쓴 것이다.
export const RESET_LOADING = 'loading/RESET_LOADING';

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

export const resetLoading = () => ({
  type: RESET_LOADING,
});