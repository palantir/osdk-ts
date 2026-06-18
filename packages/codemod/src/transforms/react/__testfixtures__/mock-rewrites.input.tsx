vi.mock("@osdk/react/experimental", () => ({
  OsdkProvider2: () => null,
}));

jest.mock("@osdk/react/experimental/admin", () => ({}));
