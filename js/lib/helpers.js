import { Linking } from 'react-native';

export const goToUrl = (url) => {
  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        console.log("Can't handle URL:", url);
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => console.error('An error occurred', err));
};

export const formatSessionData = (sessions) => {
  return sessions
    .reduce((acc, curr) => {
      const timeExists = acc.find(
        (section) => section.title === curr.startTime
      );
      timeExists
        ? timeExists.data.push(curr)
        : acc.push({ title: curr.startTime, data: [curr] });
      return acc;
    }, [])
    .sort((a, b) => a.title - b.title);
};