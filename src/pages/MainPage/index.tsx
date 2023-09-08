import { useSelector } from "react-redux";
import { RootState } from "../../reducers/store";

function SignInPage() {
    // 회원가입 폼 제출 처리를 여기에 추가

  const auth = useSelector((state: RootState) => state.auth);
  const token = auth.token;

  return (
    <div>
      {token}            
    </div>
  );
  }
  
  export default SignInPage;