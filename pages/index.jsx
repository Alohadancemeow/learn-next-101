import Link from 'next/link'
import Layout from '@/components/Layout'
import { API_URL } from '@/comnfig/index'
import EventItem from '@/components/EventItem';

// Received data from getServerSideProps
export default function Home({ events }) {

  // console.log(events);

  return (
    <Layout>
      <h1>Upcoming Events</h1>

      {
        !events
          ? <h3>No Events to show</h3>
          : (
            events.map(event => (
              <EventItem key={event.id} event={event} />
            ))
          )
      }
      {
        events && (
          <Link href="/events">
            <a>View all events</a>
          </Link>
        )
      }

      <br />
      <Link href="/about">Go to about</Link>
    </Layout>
  )
}


// This function gets called at build time on server-side.
export const getStaticProps = async () => {

  // Fetch data
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()
  // console.log(events);

  // Pass data to the page via props
  return {
    props: { events: events.slice(0, 3) },
    revalidate: 1
  }
}


// // This gets called on every request
// export const getServerSideProps = async () => {

//   // Fetch data
//   const res = await fetch(`${API_URL}/api/events`)
//   const events = await res.json()
//   // console.log(events);

//   // Pass data to the page via props
//   return {
//     props: { events }
//   }
// }
