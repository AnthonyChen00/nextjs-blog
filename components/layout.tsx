import { Header } from "../components/header"

export const Layout = ({children}:{children:any}) => {
    return (
      <>
        <Header />
        <main>{children}</main>
      </>
    )
  }