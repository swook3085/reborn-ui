interface ILayoutProps {
  children: JSX.Element
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className="content">
      {/* <div className="side" /> */}
      <div className="main">{children}</div>
      {/* <div className="side" /> */}
    </div>
  )
}
