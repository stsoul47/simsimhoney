const TEST_SETTINGS = 'test/TEST_SETTINGS' as const;
type TestAction =
  | ReturnType<typeof testSettings>
;

export const testSettings = (diff: boolean) => ({
  type: TEST_SETTINGS,
  payload: diff
});

export type TestState = {
  check: boolean;
}

const initialState: TestState = {
  check: false,
};

function testRedux(
  state: TestState = initialState,
  action: TestAction
  ):TestState {
  switch (action.type) {
    case "test/TEST_SETTINGS":
      return { ...state, check:action.payload };
    default:
      return state;
  }
}

export default testRedux;

