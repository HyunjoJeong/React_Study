import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../04/Text';

storiesOf('Text', module).addWithJSX('기본 설정', () => <Text>안녕하세요</Text>);
storiesOf('Text', module).addWithJSX('large 예제', () => <Text large>안녕하세요</Text>);
storiesOf('Text', module).addWithJSX('xlarge 예제', () => <Text xlarge>안녕하세요</Text>);
storiesOf('Text', module).addWithJSX('small 예제', () => <Text small>안녕하세요</Text>);
storiesOf('Text', module).addWithJSX('xsmall 예제', () => <Text xsmall>안녕하세요</Text>);
storiesOf('Text', module).addWithJSX('primary 예제', () => <Text primary>안녕하세요</Text>);
storiesOf('Text', module).addWithJSX('secondary 예제', () => <Text secondary>안녕하세요</Text>);
storiesOf('Text', module).addWithJSX('primary + large 예제', () => (
  <Text primary large>
    안녕하세요
  </Text>
));
