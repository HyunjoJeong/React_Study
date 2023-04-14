import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../04/Text';
import withHoC from '../05/withHoC';

const TextWithHoC = withHoC(Text);

storiesOf('WithHoC', module).addWithJSX('기본 설정', () => (
  <div>
    <TextWithHoC>안녕하세요</TextWithHoC>
  </div>
));
storiesOf('WithHoC', module).addWithJSX('large 예제', () => (
  <div>
    <TextWithHoC large>안녕하세요</TextWithHoC>
  </div>
));
