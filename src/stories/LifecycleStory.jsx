import React from 'react';
import { storiesOf } from '@storybook/react';

import { PageWithLoadData } from '../05/lifecycle';

storiesOf('Lifecycle', module).addWithJSX('loading 예제', () => (
  <PageWithLoadData loadData={() => fetch('/').then(() => 'hello')} />
));
