import { storiesOf } from '@storybook/angular';
import { CBreadcrumb } from './c-breadcrumb';

let items = ['Home', 'Library', 'Data'];

storiesOf('Breadcrumb', module)
  .add('light', () => ({
    component: CBreadcrumb,
    props: {items},
  }))
  .add('dark', () => ({
    component: CBreadcrumb,
    props: {
      modifierDark: true,
      items
    },
  }));
