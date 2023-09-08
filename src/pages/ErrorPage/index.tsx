// ErrorPage.js
import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8; /* 배경색 변경 */
`;

const ErrorBox = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 조정 */
  padding: 40px; /* 패딩 수정 */
  width: 400px;
  text-align: center;
`;

const ErrorMessage = styled.h2`
  color: #f44336; /* 오류 메시지 색상 변경 */
  font-size: 24px; /* 폰트 크기 변경 */
  margin-bottom: 20px;
`;

const ErrorDescription = styled.p`
  color: #333; /* 텍스트 색상 변경 */
  font-size: 16px; /* 폰트 크기 변경 */
  margin-bottom: 20px;
`;

const RetryLink = styled.a`
  text-decoration: none;
  color: #007bff;
  font-weight: bold; /* 폰트 굵기 추가 */
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

function ErrorPage() {
  // 에러 메시지 및 다시 시도할 링크를 이용한 처리를 여기에 추가

  return (
    <ErrorContainer>
      <ErrorBox>
        <ErrorMessage>오류가 발생했습니다.</ErrorMessage>
        <ErrorDescription>
          죄송합니다. 요청을 처리하는 동안 문제가 발생했습니다.
        </ErrorDescription>
        <ErrorDescription>
          다시 시도하려면{' '}
          <RetryLink href="/">여기를 클릭하세요</RetryLink>하세요.
        </ErrorDescription>
      </ErrorBox>
    </ErrorContainer>
  );
}

export default ErrorPage;
