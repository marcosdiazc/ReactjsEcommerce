import { Title } from "../title/title"


export const Section = ({ children, title }) => {
  return (
    <section>
      <Title text={title} />
      {children}
    </section>
  )
}
