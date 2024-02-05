export function charIsLetter(char: string) {
  if (typeof char !== 'string') {
    return false;
  }

  return /[A-Z]/.test(char);
}
