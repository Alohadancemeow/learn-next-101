import React from 'react'
import Link from 'next/link';
import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout';
import { API_URL } from '@/comnfig/index'
import styles from '@/styles/Event.module.css'
import Image from 'next/image';

const EventPage = ({ event }) => {

    const router = useRouter()
    // console.log(router);


    // # onDeleteEvent
    const deleteEvent = () => {
        //todo: delete event
    }

    return (
        <Layout>
            <div className={styles.event}>
                <div className={styles.controls}>
                    <Link href={`/events/edit/${event.id}`}>
                        <a>
                            <FaPencilAlt />
                            Edit Event
                        </a>
                    </Link>
                    <a href="#" className={styles.delete} onClick={deleteEvent} >
                        <FaTimes />
                        Delete Event
                    </a>
                </div>
            </div>

            <span>
                {`${event.date} at ${event.time}`}
            </span>
            <h1>{event.name}</h1>
            {event.image && (
                <div className={styles.image}>
                    <Image
                        src={event.image}
                        width={960}
                        height={600}
                    />
                </div>
            )}

            <h3>Performers</h3>
            <p>{event.performers}</p>
            <h3>Description</h3>
            <p>{event.description}</p>
            <h3>{`Venue: ${event.venue}`}</h3>
            <p>{event.address}</p>

        </Layout>
    )
}

// This function gets called at build time
export const getStaticPaths = async () => {

    // Fetch api
    const res = await fetch(`${API_URL}/api/events`)
    const events = await res.json()

    // Get the paths we want to pre-render based on event
    const paths = events.map(event => ({
        params: { slug: event.slug }
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {
        paths,
        fallback: false
    }
}

// This also gets called at build time
export const getStaticProps = async ({ params: { slug } }) => {

    const res = await fetch(`${API_URL}/api/events/${slug}`)
    const events = await res.json()
    // console.log(events);

    // Pass post data to the page via props
    return {
        props: {
            event: events[0]
        },
        revalidate: 1
    }
}

// // This gets called on every request
// export const getServerSideProps = async ({ query: { slug } }) => {
//     console.log(slug);

//     const res = await fetch(`${API_URL}/api/events/${slug}`)
//     const events = await res.json()

//     return {
//         props: {
//             event: events[0]
//         }
//     }
// }

export default EventPage
