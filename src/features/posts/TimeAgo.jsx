import { parseISO, formatDistanceToNow } from 'date-fns';

// Import parseISO and formatDistanceToNow from the date-fns library
// - parseISO: Parses an ISO format timestamp into a Date object
// - formatDistanceToNow: Converts a date into a human-readable relative time string

const TimeAgo = ({ timestamp }) => {
    let timeAgo = '';  // Initialize the time string
    if (timestamp) {
        const date = parseISO(timestamp) // Parse the timestamp into a Date object
        const timePeriod = formatDistanceToNow(date) // Get the time difference from now
        timeAgo = `${timePeriod} ago` // Format as "XX ago"
    }

    return (
    // Return the time string, showing the full timestamp on hover
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    );
}
export default TimeAgo