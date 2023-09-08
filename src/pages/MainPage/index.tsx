import { useSelector } from "react-redux";
import { RootState } from "../../reducers/store";

function SignInPage() {
    // 회원가입 폼 제출 처리를 여기에 추가

  const token = localStorage.getItem('refreshToken');

  return (
    <div>
      { token }
    </div>
  );
  }
  
  export default SignInPage;