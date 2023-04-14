import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../04/Text';
import withLoading from '../05/withLoading';

const TextWithLoading = withLoading(Text);

storiesOf('WithLoading', module).addWithJSX('기본 설정', () => (
  <div>
    <TextWithLoading>안녕하세요</TextWithLoading>
  </div>
));
storiesOf('WithLoading', module).addWithJSX('isLoading 예제', () => (
  <div>
    <TextWithLoading isLoading>안녕하세요</TextWithLoading>
  </div>
));
