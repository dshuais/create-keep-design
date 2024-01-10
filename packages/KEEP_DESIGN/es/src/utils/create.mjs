function n(r, e) {
  if (!e)
    return `keep-${r}`;
  if (Array.isArray(e))
    return e.reduce((u, i) => i ? u + ` keep-${r}--${i}` : u, `keep-${r}`);
}
export {
  n as cln
};
