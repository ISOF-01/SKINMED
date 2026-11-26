type Props = {
  titulo: string
  responsable: string
}

// Marcador temporal mientras se programa cada pantalla.
export function EnConstruccion({ titulo, responsable }: Props) {
  return (
    <section className="en-construccion">
      <h2>{titulo}</h2>
      <p>Pantalla en construcción · {responsable}</p>
    </section>
  )
}
