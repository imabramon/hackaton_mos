export const validateDate = (text) => {
  try {
    new Date(text)
  } catch {
    return false
  }

  return true
}
