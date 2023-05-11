import authUser from '../authUser';

describe('Auth user reducer', () => {
  it('should returns the initial state', () => {
    const expected = null;

    const actual = authUser(undefined, {});

    expect(actual).toEqual(expected);
  });

  it('should handle set auth user', () => {
    const expected = 'sarahedo';

    const actual = authUser(undefined, {
      type: 'SET_AUTH_USER',
      id: 'sarahedo',
    });

    expect(actual).toEqual(expected);
  });

  it('should handle logout user', () => {
    const expected = '';

    const actual = authUser(undefined, {
      type: 'LOGOUT_AUTH_USER',
      id: 'sarahedo',
    });

    expect(actual).toEqual(expected);
  });
});
