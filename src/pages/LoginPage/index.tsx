import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'; // react-router-dom에서 Link 가져오기
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken, setRefreshToken } from '../../reducers/authSlice';
import { RootState } from '../../reducers/store';

function LoginPage() {
  // 로그인 폼 제출 처리를 여기에 추가
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { accessToken, refreshToken} = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("press login up button");
    e.preventDefault();

    try {
      // Axios를 사용하여 백엔드로 POST 요청을 보냅니다.
      const response = await axios.post('http://localhost:8080/auth/login', {
        email,
        password, 
      });

      // 서버로부터의 응답을 처리합니다.
      console.log('refresh token 응답:', response.data.data.refreshToken);
      console.log('access token 응답', response.data.data.accessToken);
      dispatch(setRefreshToken(response.data.data.refreshToken));
      dispatch(setAccessToken(response.data.data.accessToken));

      // console.log(response.data.data.refreshToken);

      // localStorage.setItem('refreshToken', response.data.data.refreshToken);
      // localStorage.setItem('Token', response.data.data.refreshToken);

      navigate('/')
    } catch (error) {
      console.error('서버 오류:', error);
    }
  }

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Log in</Title>
        <InputField
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton type="submit">Log In</SubmitButton>
        <SocialLoginButtons>
          <SocialButtonGoogle>
            <Icon src='./icons/google-icon.png' alt='Google Icon'/>
          </SocialButtonGoogle>
          <SocialButtonKakao>
            <Icon src='./icons/kakao-icon.png' alt='Kakao Icon'/>
          </SocialButtonKakao>
          <SocialButtonNaver>
            <Icon src='./icons/naver-icon.png' alt='naver Icon'/>
          </SocialButtonNaver>
        </SocialLoginButtons>
        <Divider></Divider>
        <SignUpButton to="/sign-up">Sign Up</SignUpButton>
      </LoginForm>
    </LoginContainer>
  );
}

export default LoginPage;

const ForestGreen = '#228B22'; // 포레스트 그린 색상
// const LightGreen = '#add8e6';

const Icon = styled.img`
  width: 20px; /* 이미지 크기 설정 */
  height: 20px;
  margin-right: 10px; /* 이미지와 텍스트 사이 간격 설정 */
`;

const Divider = styled.div`
  border-top: 1px solid #ccc;
  margin: 30px auto;
  width: 300px;
`

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const LoginForm = styled.form`
  background-color: #ffffff;
  border: 1px solid ${ForestGreen}; /* 테두리 색상 변경 */
  border-radius: 8px; /* 꼭지점 둥글게 설정 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 400px;
  display: flex;
  flex-direction: column; /* 세로 방향으로 요소 배치 */
  align-items: center; /* 가운데 정렬 */
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  display: flex;
  width: 94%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid ${ForestGreen}; /* 테두리 색상 변경 */
  border-radius: 4px;
  font-size: 18px; /* 폰트 크기 수정 */
`;

const SubmitButton = styled.button`
  width: 400px;
  padding: 10px;
  background-color: ${ForestGreen}; /* 버튼 색상 변경 */
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 10px 0; /* 상하 여백 추가 */

  &:hover {
    background-color: #1d8c40; /* 호버 시 버튼 색상 변경 */
  }
`;

const SocialLoginButtons = styled.div`
  display: flex; /* 가로로 나란히 배치 */
  justify-content: space-between; /* 각 버튼을 좌우로 분산 배치 */
  gap: 10px;
`;

const SocialButtonBase = styled.button`
  /* 소셜 로그인 버튼 공통 스타일링 */
  padding: 10px;
  cursor: pointer;
  width: 125px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  align-items: center; /* 이미지 수직 가운데 정렬 */

`;


const SocialButtonGoogle = styled(SocialButtonBase)`
  /* 구글 로그인 버튼 스타일링 */
  background-color: #fff;
  border: 1px solid #519ecf; /* 무지개색 테두리 */
  color: #519ecf; /* 무지개색 글자색 */
`;

const SocialButtonKakao = styled(SocialButtonBase)`
  /* 카카오 로그인 버튼 스타일링 */
  background-color: #ffe812; /* 카카오 노란색 배경 */
  color: #000; /* 글자색 */
`;

const SocialButtonNaver = styled(SocialButtonBase)`
  /* 네이버 로그인 버튼 스타일링 */
  background-color: #1ec800; /* 네이버 초록색 배경 */
  color: #fff; /* 글자색 */
`;


const SignUpButton = styled(Link)`
  width: 375px;
  padding: 10px;
  background-color: #ffffff;
  color: ${ForestGreen};
  border: 1px solid ${ForestGreen};
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  text-decoration: none; /* 링크 기본 밑줄 제거 */
  margin: 10px 0; /* 상하 여백 추가 */
  outline: none; /* 포커스 효과 제거 */

  &:hover {
    background-color: #146b32;
  }
`;
