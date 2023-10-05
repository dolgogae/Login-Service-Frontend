import { useSelector } from "react-redux";
import { RootState } from "../../reducers/store";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function MainPage() {
    // 회원가입 폼 제출 처리를 여기에 추가
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  // 지금 여기 업데이트된 토큰이 잘 안받아짐
  // const token = localStorage.getItem('refreshToken');
  // const { accessToken, refreshToken} = useSelector((state: RootState) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {

      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      console.log(accessToken);
      console.log(refreshToken);

      try {

        const headers = {
          'token': refreshToken,
          'Authoriaztion': accessToken
        }

        console.log(headers);

        const response = await axios.get('http://localhost:8080/user/get', {headers} )

        console.log(response.data.data);
        const user = response.data.data;
        setUsername(user.username);
        setEmail(user.email);
        setRole(user.role);
      } catch(error : any){
        console.log(error)
        if(error.response.status === 500){
          navigate('/login');
        }
      }
    }
    getUser();

  })

  return (
    <>
      <div>{ username }</div>
      <div>{ email }</div>
      <div>{ role }</div>
    </>
  );
  }
  
  export default MainPage;