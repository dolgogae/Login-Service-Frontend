import React from 'react';
import styled from 'styled-components';

const ForestGreen = '#228B22'; // 포레스트 그린 색상
const LightGreen = '#add8e6';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const LoginForm = styled.div`
  background-color: #ffffff;
  border: 1px solid ${ForestGreen}; /* 테두리 색상 변경 */
  border-radius: 8px; /* 꼭지점 둥글게 설정 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 400px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 94%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid ${ForestGreen}; /* 테두리 색상 변경 */
  border-radius: 4px;
  font-size: 18px; /* 폰트 크기 수정 */
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${ForestGreen}; /* 버튼 색상 변경 */
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1d8c40; /* 호버 시 버튼 색상 변경 */
  }
`;

const SignupButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ffffff; /* 버튼 색상 변경 */
  color: ${ForestGreen}; /* 텍스트 색상 변경 */
  border: 1px solid ${LightGreen}; /* 테두리 색상 변경 */
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px; /* 상단 마진 추가 */
`;

function LoginPage() {
  // 로그인 폼 제출 처리를 여기에 추가

  return (
    <LoginContainer>
      <LoginForm>
        <Title>로그인</Title>
        <InputField type="text" placeholder="아이디" />
        <InputField type="password" placeholder="비밀번호" />
        <SubmitButton type="submit">로그인</SubmitButton>
        <SignupButton>회원가입</SignupButton>
      </LoginForm>
    </LoginContainer>
  );
}

export default LoginPage;
