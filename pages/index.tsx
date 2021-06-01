import type { FC } from 'react';
import Layout from '../components/Layout';
import { fetchHakkasanByRef, HakkasanRefType } from '../lib';

type Event = {
  id: number;
  venue_id: number;
  dayOfTheWeek: number;
  headliner: number;
  active: boolean;
  show_in_calendars: boolean;
  public_reservations: boolean;
  public_guestlists: boolean;
  has_public_tickets: boolean;
  title: string;
  location: string;
  venue_title: string;
  date: string;
  open: string;
  close: string;
  tickets_URL: string;
  flyer_url: string;
  tag_list: string[];
};

type Props = {
  events: Event[];
};

const Home: FC<Props> = ({ events }) => {
  console.log('events', events);
  return <Layout>hello</Layout>;
};

export const getStaticProps = async () => {
  const events = await fetchHakkasanByRef<Event>(HakkasanRefType.events);

  return {
    props: {
      events,
    },
  };
}

export default Home;
