import { selectedNoteAtom } from '@/store'
import { useAtomValue } from 'jotai'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { IoMdClose } from 'react-icons/io'

const os = await window.context.getos()
export const FloatingNoteTitle = ({ className = '', ...props }: ComponentProps<'div'>) => {
  const selectedNote = useAtomValue(selectedNoteAtom)

  console.log(os)

  if (selectedNote == null) {
    if (os === 'darwin') return null

    return (
      <span
        onClick={() => window.context.close()}
        className="absolute right-4 top-4 text-3xl border border-zinc-500 hover:bg-zinc-800/50 rounded-lg cursor-pointer"
      >
        <IoMdClose />
      </span>
    )
  }

  return (
    <>
      <div {...props} className={twMerge('flex justify-center', className)}>
        <span className="text-gray-400">{selectedNote.title}</span>
        {os !== 'darwin' && (
          <span
            onClick={() => window.context.close()}
            className="absolute right-4 top-4 text-3xl border border-zinc-500 hover:bg-zinc-800/50 rounded-lg cursor-pointer"
          >
            <IoMdClose />
          </span>
        )}
      </div>
    </>
  )
}
