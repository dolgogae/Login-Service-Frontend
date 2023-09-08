// SignInPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignInPage() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e: React.FormEvent) => {
      console.log("press sign up button");
      e.preventDefault();
  
      try {
        // Axios를 사용하여 백엔드로 POST 요청을 보냅니다.
        const response = await axios.post('http://localhost:8080/auth/sign-in', {
          email,
          username,
          password,
        });
  
        // 서버로부터의 응답을 처리합니다.
        console.log('서버 응답:', response.data);
        navigate('/login')
      } catch (error) {
        console.error('서버 오류:', error);
      }
    };
  
    return (
      <SignInContainer>
        <SignInForm onSubmit={handleSubmit}>
          <Title>Sign Up</Title>
          <InputLabel>
            <RequiredText>*필수</RequiredText>
          </InputLabel>
          <InputField
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputLabel>
            <RequiredText>*필수</RequiredText>
          </InputLabel>
          <InputField
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputLabel>
            <RequiredText>*필수</RequiredText>
          </InputLabel>
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitButton type="submit">Sign In</SubmitButton>
        </SignInForm>
      </SignInContainer>
    );
  }
  
export default SignInPage;


const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const SignInForm = styled.form`
  background-color: #ffffff;
  border: 1px solid #1d8c40; /* 테두리 색상 변경 */
  border-radius: 8px; /* 꼭지점 둥글게 설정 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 400px;
`;

const Title = styled.h2`
  text-align: center;
  color: #333; /* 제목 글자 색상 변경 */
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 94%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #1d8c40; /* 테두리 색상 변경 */
  border-radius: 4px;
  font-size: 16px; /* 폰트 크기 수정 */
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #1d8c40; /* 버튼 색상 변경 */
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #146b32; /* 호버 시 버튼 색상 변경 */
  }
`;

const RequiredText = styled.span`
  /* 필요한 스타일을 추가하세요 */
  color: gray; /* 회색으로 설정, 원하는 색상으로 변경 가능 */
  font-size: 12px; /* 원하는 폰트 크기로 설정 가능 */
  margin-left: 4px; /* 텍스트와의 간격 설정, 원하는 크기로 변경 가능 */
`;


const InputLabel = styled.label`
  /* 필요한 스타일을 추가하세요 */
  display: block;
  margin-bottom: 4px;
`;
