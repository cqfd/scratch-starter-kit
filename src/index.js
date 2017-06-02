// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import AlgoliaSearch from 'algoliasearch'

const algoliaClient = new AlgoliaSearch('<app-id>', '<api-key>')
const algoliaIndex = algoliaClient.initIndex('<index-name>')

algoliaIndex.search('rick owens')
  .then(console.log)
  .catch(err => console.log('woops', err));

ReactDOM.render(
  <p>Hi!</p>,
  document.getElementById('root'))
