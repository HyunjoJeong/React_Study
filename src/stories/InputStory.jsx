import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../03/Input';

storiesOf('Input', module).add('기본 설정', () => <Input name="name" />); // 스토리를 스토리북 도구에 추가해주는 함수, 'Input'은 스토리 이름이고, '기본 설정'은 메뉴 이름이 된다.
storiesOf('Input', module).add('label 예제', () => <Input name="name" label="이름" />);

// class InputStory extends Component {
//   render() {
//     return <div></div>;
//   }
// }

// export default InputStory;
