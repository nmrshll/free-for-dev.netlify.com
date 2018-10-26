import { kea } from 'kea';
import PropTypes from 'prop-types';
// import axios from 'axios'
// import { put } from 'redux-saga/effects'
// import { delay } from 'redux-saga'
// import { append } from 'ramda';

//

const contentPageStore = kea({
  path: () => ['filters'],
  actions: () => ({
    setCategory: categoryTitle => ({ categoryTitle }),
  }),
  reducers: ({ actions }) => ({
    category: [
      null,
      PropTypes.string,
      {
        [actions.setCategory]: (state, payload) => payload.categoryTitle,
      },
    ],
  }),
  takeLatest: ({ actions, workers }) => ({
    // [actions.submitNewPageTitle]: workers.createNewPage,
  }),
  workers: {
    // *createNewPage({ payload: { newPageTitle } }) {
    //   try {
    //     yield db.mutate({
    //       mutation: createContentPage,
    //       variables: {
    //         title: newPageTitle,
    //         slug: toSlug(newPageTitle),
    //         content: '# Nouvelle page',
    //       },
    //       refetchQueries: [{ query: getAllContentPages }],
    //       optimisticResponse: {
    //         createContentPage: {
    //           id: Math.round(Math.random() * -1000000),
    //           title: newPageTitle,
    //           slug: toSlug(newPageTitle),
    //           content: '# Nouvelle page',
    //           __typename: 'ContentPage',
    //         },
    //       },
    //     });
    //   } catch (e) {
    //     throw e;
    //   }
    // },
  },
});

export default contentPageStore;
