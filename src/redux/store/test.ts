const TEST_SETTING = 'test/TEST_SETTING' as const;

type RouteAction =
  | ReturnType<typeof testSettings>
;

export const testSettings = (diff: string) => ({
  type: TEST_SETTING,
  payload: diff
});

export type TestState = {
  status: string;
};

const initialState: TestState = {
  status: 'home',
};

function test(
  state: TestState = initialState,
  action: RouteAction
): TestState {
  switch (action.type) {
    case TEST_SETTING:
      return { ...state, status: action.payload };
    default:
      return state;
  }
}

export default test;