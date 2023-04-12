import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../04/InputWithStyle';

storiesOf('InputWithStyle', module).addWithJSX('기본 설정', () => <Input name="name" />); // 스토리를 스토리북 도구에 추가해주는 함수, 'Input'은 스토리 이름이고, '기본 설정'은 메뉴 이름이 된다.
storiesOf('InputWithStyle', module).addWithJSX('label 예제', () => (
  <Input name="name" label="이름" />
));
storiesOf('InputWithStyle', module).addWithJSX('value 예제', () => (
  <Input name="name" value="두잇" />
));
storiesOf('InputWithStyle', module).addWithJSX('errorMessage 예제', () => (
  <Input name="name" label="이름" errorMessage="이름을 입력해주세요" />
));
