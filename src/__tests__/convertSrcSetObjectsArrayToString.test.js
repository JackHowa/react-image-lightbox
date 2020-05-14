import { convertSrcSetObjectsArrayToString } from '../util';

const notEmptyImageUrl = 'http://here.jpg';

it('returns a default image url if no instrinsic size', () => {
  expect(
    convertSrcSetObjectsArrayToString([
      {
        imageUrl: notEmptyImageUrl,
      },
    ])
  ).toBe(`${notEmptyImageUrl}, `);
});

it('takes in two image url and default size', () => {
  expect(
    convertSrcSetObjectsArrayToString([
      {
        imageUrl: notEmptyImageUrl,
        intrinsicSize: '100w',
      },
      {
        imageUrl: notEmptyImageUrl,
      },
    ])
  ).toBe(`${notEmptyImageUrl} 100w, ${notEmptyImageUrl}, `);
});
