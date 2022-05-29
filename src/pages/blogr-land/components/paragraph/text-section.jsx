
import './paragraph.css'
export default function TextSection({headline ,  children}) {

  return(
    <section>
      <h2 className="headlines">
        {headline}
      </h2>
      {children}
    </section>
  )
}
