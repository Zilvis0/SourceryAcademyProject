export default function getMonthName(date) {
  return new Date(date).toLocaleString('default', { month: 'short' });
}
