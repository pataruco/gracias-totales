// I couldn't resolve .env using dotenv webpack
// Is a known problem when webpack is written on TS
// I used Mozilla convict to introduce env vars
// ENV can be found at @see{https://gist.github.com/pataruco/6e6a39f336483b806ca5dc312b113986}
import config from './config';
const { CALENDAR_ID, CLIENT_ID, CLIENT_SECRET, EVENT_ID, REFRESH_TOKEN } =
  config.get('env');

const refreshTokenUrl = `https://www.googleapis.com/oauth2/v4/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&refresh_token=${REFRESH_TOKEN}&grant_type=refresh_token`;

const getToken = async () => {
  const response = await fetch(refreshTokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const data = await response.json();
  const { access_token } = data;
  return access_token;
};

const getEvent = async () => {
  const accessToken = await getToken();
  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events/${EVENT_ID}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
    },
  );
  const data = response.json();

  console.log({ data });
  return data;
};

export const updateEvent = async (email: string): Promise<boolean> => {
  const accessToken = await getToken();
  const event = await getEvent();
  const { attendees } = event;
  const attendee = { email };

  attendees.push(attendee);
  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events/${EVENT_ID}?sendUpdates=all`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        attendees,
      }),
    },
  );
  return response.ok;
};
