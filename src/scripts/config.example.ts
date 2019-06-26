import convict from 'convict';

const config = convict({
  env: {
    CALENDAR_ID: '',
    CLIENT_ID: '',
    CLIENT_SECRET: '',
    EVENT_ID: '',
    REFRESH_TOKEN: '',
  },
});

export default config;
