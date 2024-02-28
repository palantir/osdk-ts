// Good enough random ids
function randomId(): number {
  return Math.floor(Math.random() * 2 ** 31);
}

export default randomId;
