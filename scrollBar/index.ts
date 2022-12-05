import './style.css';

import { Observable, range, from, of, fromEvent, map } from 'rxjs';

function calScrollPercent(element) {
  const { scrollTop, scrollHeight, clientHeight } = element;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const progressBar = document.querySelector('.progress_bar');

const obs$ = fromEvent(document, 'scroll');

const progress$ = obs$.pipe(
  map(({ target }) => calScrollPercent(target.documentElement))
);

progress$.subscribe((percent) => {
  progressBar.style.width = `${percent}%`;
});
// Open the console in the bottom right to see results.
