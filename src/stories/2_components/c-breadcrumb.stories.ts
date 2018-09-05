import { storiesOf } from '@storybook/angular';
// import { CBreadcrumb } from '@structure/2_components/c-breadcrumb/c-breadcrumb';
import { CBreadcrumb } from './../../structure/2_components/c-breadcrumb/c-breadcrumb';

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
