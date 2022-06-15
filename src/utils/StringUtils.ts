export const isPresent = (value?: string | null | undefined): value is string =>
  value != null && value.trim() !== ''
