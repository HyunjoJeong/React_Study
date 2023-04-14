import React from 'react';
import { storiesOf } from '@storybook/react';

import HomePageWithProvider from '../06/HomePageWithProvider';

storiesOf('HomePageComponent', module).addWithJSX('Provider 예제', () => <HomePageWithProvider />);
