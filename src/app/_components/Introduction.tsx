import Tag from "./tag"

const text = `Arsenal till I die for ever young I love ARSENAL FC.`
export default function Introduction() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container">
        <div className="flex justify-center">

   <Tag>Introduction layers</Tag>
        </div>
    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
      <span>your creative process seerves better.</span>{" "}
      <span className="text-black/15">
        {text}
      </span>
      <span className="text-lime-400 block">thats why we build layers.</span>
    </div>
      </div>
    </section>
  )
}
