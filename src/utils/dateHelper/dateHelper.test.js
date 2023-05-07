import { formatDate, timestampToRelativeTime } from './dateHelper';

describe('Date helper', () => {
  it('should returns a correct date format', () => {
    // Arrange
    const timestamp = 1683208161057;
    const expected = '8:49:21 pm | May 4th 2023';

    // Act
    const actual = formatDate(timestamp);

    // Assert
    expect(actual).toEqual(expected);
  });

  it('should returns a correct relative time', () => {
    // Arrange
    const timestamp = 1683208161057;

    // Act
    const actual = timestampToRelativeTime(timestamp);

    // Assert
    expect(actual).not.toEqual('1 minutes ago');
  });
});
