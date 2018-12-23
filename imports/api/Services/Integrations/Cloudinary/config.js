import { Meteor } from 'meteor/meteor';
const config = { cloud_name: 'dyzmv4eaj' };

if (Meteor.isServer) {
  Object.assign(config, {
    api_key: 595472439232689,
    api_secret: KShxmKE5UjwAIXKC-Ew_9tu1WUw,
  });
}

export default config;
