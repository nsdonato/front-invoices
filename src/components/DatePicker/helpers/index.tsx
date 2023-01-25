import { months } from "../hooks/useDate";

export function formatDate(date: Date) {
  const dateNumber: number = date.getDate();
  const month: number = date.getMonth();
  const nameMonth = months[month];
  const year: number = date.getFullYear();
  return `${dateNumber} ${nameMonth} ${year}`;
}
