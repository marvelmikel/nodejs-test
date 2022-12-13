export const HelperService = jest.fn().mockReturnValue({
  luhnCheck: jest.fn().mockResolvedValue(true),
});
