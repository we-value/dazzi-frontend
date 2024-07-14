import axiosInstance from "./axiosInstance";

// GET 요청
export const apiGet = (url = {}) => {
  return axiosInstance
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      handleError(error);
      throw error;
    });
};

// POST 요청
export const apiPost = (url, params = {}) => {
  return axiosInstance
    .post(url, JSON.stringify(params))
    .then((response) => response.data)
    .catch((error) => {
      handleError(error);
      throw error;
    });
};

// PATCH 요청
export const apiPatch = (url, params = {}) => {
  return axiosInstance
    .patch(url, JSON.stringify(params))
    .then((response) => response.data)
    .catch((error) => {
      handleError(error);
      throw error;
    });
};

// PUT 요청
export const apiPut = (url, params = {}) => {
  return axiosInstance
    .put(url, JSON.stringify(params))
    .then((response) => response.data)
    .catch((error) => {
      handleError(error);
      throw error;
    });
};

// DELETE 요청
export const apiDelete = (url, params = {}) => {
  return axiosInstance
    .delete(url, JSON.stringify(params))
    .then((response) => response.data)
    .catch((error) => {
      handleError(error);
      throw error;
    });
};

// 에러 처리 함수
const handleError = (error) => {
  if (error.response) {
    // 서버가 상태 코드를 응답했을 때 (2xx 범위 이외)
    console.error("Response error:", error.response.data);
  } else if (error.request) {
    // 요청이 이루어졌으나 응답을 받지 못했을 때
    console.error("Request error:", error.request);
  } else {
    // 요청을 설정하는 중에 에러가 발생했을 때
    console.error("Error:", error.message);
  }
  // 공통 에러 처리 로직을 여기에 추가할 수 있습니다.
  // 예: 토큰 만료 시 로그아웃 처리 등
};
