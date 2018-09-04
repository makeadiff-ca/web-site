export const contact = {
  name: {
    presence: true,
  },
  email: {
    email: true,
  },
  interests: {
    length: {
      minimum: 1,
    },
  },
}
