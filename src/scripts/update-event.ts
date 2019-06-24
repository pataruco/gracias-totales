const CLIENT_ID =
  '309718613253-re1s119gre0p5d0d2ir90ktfl347n0he.apps.googleusercontent.com';
const CLIENT_SECRET = 'OHlBfFNm-JVaQexokYlet3He';
const CALENDAR_ID = 'pataruco@gmail.com';
const EVENT_ID = '3je4tu7k6pkav5issgotebmeae';
const REFRESH_TOKEN = '1/EGlYKQqAAJ8g6Z3vJweTC3ofS0ANUq-s6o-v4SkBlXs';
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
  return response.json();
};

export const updateEvent = async (email: string): Promise<boolean> => {
  const accessToken = await getToken();
  const event = await getEvent();
  const { attendees } = event;
  const attendee = { email };

  attendees.push(attendee);
  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events/${EVENT_ID}`,
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
