export const yyyymmdd = (timestamp: number) => {
  if (timestamp === 0) return '현재';
  const d = new Date(timestamp);
  const yyyy = d.getFullYear();
  const mm = ('0' + (d.getMonth() + 1)).slice(-2);
  const dd = ('0' + d.getDate()).slice(-2);
  return `${yyyy}.${mm}.${dd}`;
};
