import produce from 'immer';

const movies = [
  { title: 'A Tale of Two Cities', year: 2015 },
  { title: 'Superman', year: 1978 },
  { title: 'Braindead', year: 1992 },
];

const initialState = {
  movies,
};

export const reducer = produce((draft = initialState, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return draft.movies.push(action.payload);

    case 'REMOVE_MOVIE':
      return (draft.movies = draft.movies.filter(
        (movie) => movie.year === action.payload
      ));

    default:
      return draft;
  }
});
