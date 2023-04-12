import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from '../03/Input';

storiesOf('Input', module).addWithJSX('기본 설정', () => <Input name="name" />); // 스토리를 스토리북 도구에 추가해주는 함수, 'Input'은 스토리 이름이고, '기본 설정'은 메뉴 이름이 된다.
storiesOf('Input', module).addWithJSX('label 예제', () => <Input name="name" label="이름" />);
storiesOf('Input', module).addWithJSX('onChange 예제', () => (
  <Input name="name" onChange={action('onChange 이벤트 발생')} />
));
