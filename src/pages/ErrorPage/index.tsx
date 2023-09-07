// ErrorPage.tsx
import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ErrorBox = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  text-align: center;
`;

const ErrorMessage = styled.h2`
  color: #ff0000;
  margin-bottom: 20px;
`;

const RetryLink = styled.a`
  text-decoration: none;
  color: #007bff;
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
        <p>죄송합니다. 요청을 처리하는 동안 문제가 발생했습니다.</p>
        <p>
          다시 시도하려면 <RetryLink href="/">여기를 클릭</RetryLink>하세요.
        </p>
      </ErrorBox>
    </ErrorContainer>
  );
}

export default ErrorPage;
