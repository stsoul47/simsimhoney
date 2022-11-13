import classNames from "classnames";
import {useSelector} from "react-redux";
import { RootState, TestState } from "../../redux";

const Main = () => {
  const test:TestState = useSelector((state:RootState) => state.test);
  return (
    <div className={classNames('test-main')}>
      여기가 메인 페이지 입니다.
      {test.status}
    </div>
  );
}
export default Main;