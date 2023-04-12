import React from 'react';
import { storiesOf } from '@storybook/react';

import Newcounter from '../03/NewCounter';

storiesOf('NewCounter', module).add('기본 설정', () => <Newcounter count={0} />);
