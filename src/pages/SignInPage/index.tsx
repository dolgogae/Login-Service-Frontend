// SignInPage.js
import React from 'react';
import styled from 'styled-components';

const ForestGreen = '#228B22'; // 포레스트 그린 색상
const LightGray = '#ccc'; // 옅은 회색

const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const SignInForm = styled.div`
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

const InputLabel = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  color: ${LightGray};
`;

function SignInPage() {
  // 회원가입 폼 제출 처리를 여기에 추가

  return (
    <SignInContainer>
    <SignInForm>
      <Title>회원가입</Title>
      <InputLabel>*필수</InputLabel>
      <InputField type="text" placeholder="이메일" required />
      <InputLabel>*필수</InputLabel>
      <InputField type="text" placeholder="사용자 이름" required />
      <InputLabel>*필수</InputLabel>
      <InputField type="password" placeholder="비밀번호" required />
      <SubmitButton type="submit">가입하기</SubmitButton>
    </SignInForm>
  </SignInContainer>
  );
}

export default SignInPage;
