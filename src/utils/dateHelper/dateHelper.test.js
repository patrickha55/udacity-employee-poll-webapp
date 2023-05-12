import { formatDate, timestampToRelativeTime } from './dateHelper';

describe('Date helper', () => {
  it('should returns a correct date format', () => {
    // Arrange
    Date.now = jest.fn(() => new Date('2023-05-04T12:33:37.000'));

    const timestamp = Date.now();

    const expected = '12:33:37 pm | May 4th 2023';

    // Act
    const actual = formatDate(timestamp);

    // Assert
    expect(actual).toEqual(expected);
  });

  it('should returns a correct relative time', () => {
    // Arrange
    Date.now = jest.fn(() => new Date('2023-05-04T06:00:00.000'));

    const timestamp = Date.now();

    const expected = 'a few seconds ago';
    // Act
    const actual = timestampToRelativeTime(timestamp);

    // Assert
    expect(actual).not.toBeNull();
    expect(actual).toEqual(expected);
  });
});
