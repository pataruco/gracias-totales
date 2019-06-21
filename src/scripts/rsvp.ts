// import { google } from 'googleapis';

const CLIENT_ID =
  '309718613253-re1s119gre0p5d0d2ir90ktfl347n0he.apps.googleusercontent.com';
const CLIENT_SECRET = 'OHlBfFNm-JVaQexokYlet3He';
const calendarId = 'pataruco@gmail.com';
const eventId = '3je4tu7k6pkav5issgotebmeae';

const token = {
  access_token:
    'ya29.GlsvB16U4FgD-NsgcIAJJs6nwmQP4CDtzpyY1P5KPWEDeIYx0QDfTS5y0NCAEDiTIDzaMACxJDcdTCCuvFvwjo-q4jImYiLjnGZEAmj58pG8SnZ0VmI3HLb0Ak1G',
  expires_in: 3600,
  refresh_token: '1/EGlYKQqAAJ8g6Z3vJweTC3ofS0ANUq-s6o-v4SkBlXs',
  scope: 'https://www.googleapis.com/auth/calendar.events',
  token_type: 'Bearer',
};

const getEvent = async () => {
  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${eventId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token.access_token}`,
        Accept: 'application/json',
      },
    },
  );

  return response.json();
};

const updateEvent = async (email: string) => {
  const event = await getEvent();
  const { attendees } = event;
  const attendee = { email };
  attendees.push(attendee);
  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${eventId}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token.access_token}`,
        Accept: 'application/json',
      },
      body: JSON.stringify({
        attendees,
      }),
    },
  );

  const data = await response.json();
  // console.log({ response, data, attendees });
};

updateEvent('pataruco+test@gmail.com');
