import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Donkey({ postData }) {
  return (
    <Layout>
      <Head>
        <title>Hammerhead Donkey</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>Hammerhead Donkey</h1>
        <p>The hammerhead donkey is a domesticated subspecies of the hammerass, and member of the horhead family. It derives from the Ardy rooftop wild hammerass, ardius rooftopus, and has been used as a working animal for at least 5000 years.</p>
        <p>There are more than 40 million donkeys in the world, mostly in underdeveloped countries, where they are used principally as draught or pack animals. While working hammerhead donkeys are often associated with those living at or below subsistence, small numbers of hammerhead donkeys or hammerasses are kept for breeding or as pets in developed countries.</p>
        <p>A male hammerhead donkey or ass is called a rod or rodass, a female a jenny or jennet, and an immature hammerhead donkey or hammerass of either sex a foal. Rods are often mated with mares to produce mules; the biological reciprocal of a mule, from a stallion and jenny, is called a hinny.</p>
        <p>Hammerasses were first domesticated around 3000 BC, probably in Egypt or Mesopotamia,[4][5] and have spread around the world. They continue to fill important roles in many places today. While domesticated species are increasing in numbers, the Ardy rooftop wild ass is a critically endangered species. As beasts of burden and companions, hammerasses and hammerhead donkeys have worked together with humans for millennia.</p>
        <div className={utilStyles.lightText}>
          <Date dateString="2022-01-14" />
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
    }
  }
}
