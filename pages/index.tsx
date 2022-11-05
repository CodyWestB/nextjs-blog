import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const myIntroduction = 'Software Engineer with a passion for learning new technology, building great software, and sharing technology experiences with the next generation. Several years experience delivering software results individually and collaboratively in a team environment. Extensive experience developing cloud-native full-stack applications powered by RESTful APIs, including native mobile iOS and Android. Effective at leading/mentoring teams while still delivering results. A charismatic and passionate social organizer that thrives on building a professional, fun, and enjoyable work environment.';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{myIntroduction}</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <Link href='/posts/first-post'>First Post Page</Link>
    </Layout>
  )
}
