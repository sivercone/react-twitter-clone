import enLang from 'date-fns/locale/en-US';
import { formatDistance } from 'date-fns';

export const formatDate = (date: Date): string => {
   return formatDistance(date, new Date(), { locale: enLang });
};
