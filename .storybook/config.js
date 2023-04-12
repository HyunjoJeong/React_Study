import { configure, setAddon } from "@storybook/react";
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';

import '../src/sass/materialize.scss';

function loadstories() {  // 스토리가 자동으로 storybook 에 추가되도록
  const context = require.context('../src/stories', true, /Story\.jsx$/); // src/stories 폴더의 스토리 목록을 가져옴.
  context.keys().forEach((srcFile) => {
    interopRequireDefault(context(srcFile));
  })
}

setAddon(JSXAddon);
configure(loadstories, module);