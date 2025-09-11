export default function ContactPage(){
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 opacity-80">Have questions? Email us at <a className="underline" href="mailto:hello@codingsharks.dev">hello@codingsharks.dev</a></p>
      <form className="mt-8 grid gap-4 max-w-md">
        <input className="border rounded-xl p-3" placeholder="Your name" />
        <input type="email" className="border rounded-xl p-3" placeholder="Your email" />
        <textarea className="border rounded-xl p-3" placeholder="Your message" rows={5} />
        <button className="btn w-max" type="button">Send</button>
      </form>
    </div>
  )
}
