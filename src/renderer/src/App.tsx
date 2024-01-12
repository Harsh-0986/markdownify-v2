import {
  Content,
  RootLayout,
  Sidebar,
  DraggableTopBar,
  ActionButtonsRow,
  NotePreviewList,
  MarkdownEditor,
  FloatingNoteTitle
} from './components'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/50">
          <FloatingNoteTitle className="pt-2" title="Floating Note" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
