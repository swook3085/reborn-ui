interface ILayoutProps {
  children: JSX.Element
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className='bg-white'>
      <div>
        <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          {children}
        </main>
      </div>
    </div>
  )
}
