import { configure } from '@storybook/react';

function loadStories() {
  require('../apps/artist-roster/components/Artist/stories.js')
  require('../apps/artist-roster/components/ArtistAutocomplete/stories.js')
  require('../apps/artist-roster/components/ArtistList/stories.js')
  require('../apps/artist-roster/components/Count/stories.js')
}

configure(loadStories, module);
