export function getCurrentDate() {
  const today = new Date();

  const dd = String(today.getDate()).padStart(2, '0');
  const mm = +String(today.getMonth() + 1).padStart(2, '0') - 1;
  const yyyy = today.getFullYear();

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return `${dd} ${monthNames[mm]} ${yyyy}`;
}
