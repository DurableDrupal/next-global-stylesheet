import Link from 'next/link'
import Head from 'next/head'
import stylesheet from 'styles/index.scss'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link> |
        <Link href='/about'><a>About</a></Link> |
        <Link href='/contact'><a>Contact</a></Link>
      </nav>
    </header>
    <div>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

      { children }
    </div>
    <footer>
      {'I`m here to stay'}
    </footer>
  </div>
)
