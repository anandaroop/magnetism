import { configure } from '@storybook/react';

function loadStories() {
  require('../apps/artist-roster/components/App.stories.js');
}

configure(loadStories, module);
