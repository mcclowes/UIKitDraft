let lastUsedIndex = 0

const getUniqueIndex = () => {
  lastUsedIndex++;
  return lastUsedIndex;
}

export default getUniqueIndex