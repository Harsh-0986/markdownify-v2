import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
const dateFormatter = new Intl.DateTimeFormat(window.context.locale, {
  dateStyle: 'short',
  timeStyle: 'short'
})

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}

export const formatDateFromMS = (ms: number) => dateFormatter.format(ms)
