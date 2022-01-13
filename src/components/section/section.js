import { Title } from "../title/title"
import "./section.css";


export const Section = ({ children, title }) => {
  return (
    <section>
      <Title text={title} />
      {children}
    </section>
  )
}
