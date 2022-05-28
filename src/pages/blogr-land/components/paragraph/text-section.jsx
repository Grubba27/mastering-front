
import './paragraph.css'
export default function TextSection({headline ,  children}) {

  return(
    <section>
      <h3 className="headlines">
        {headline}
      </h3>
      {children}
    </section>
  )
}
