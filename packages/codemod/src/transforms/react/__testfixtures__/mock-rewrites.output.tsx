vi.mock("@osdk/react", () => ({
  OsdkProvider2: () => null,
}));

jest.mock("@osdk/react/platform-apis", () => ({}));
