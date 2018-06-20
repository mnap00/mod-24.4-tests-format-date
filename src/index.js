const formatDate = (timeInSeconds) => {
    if (timeInSeconds === 0 || timeInSeconds == '' || isNaN(timeInSeconds)) {
        return '0s';
    } else if (timeInSeconds < 60) {
        return `${timeInSeconds}s`;
    } else if (timeInSeconds < 3600) {
        if (timeInSeconds % 60 === 0) {
            return `${timeInSeconds / 60}m`;
        } else {
            return `${Math.floor(timeInSeconds / 60)}m ${timeInSeconds % 60}s`;
        }
    } else {
        if (timeInSeconds % 3600 === 0) {
            return `${timeInSeconds / 3600}h`;
        } else if (timeInSeconds % 60 === 0) {
            return `${Math.floor(timeInSeconds / 3600)}h ${timeInSeconds % 3600 / 60}m`;
        } else if (timeInSeconds % 3600 < 60) {
            return `${Math.floor(timeInSeconds / 3600)}h ${timeInSeconds % 3600 % 60}s`;
        } else {
            return `${Math.floor(timeInSeconds / 3600)}h ${Math.floor(timeInSeconds % 3600 / 60)}m ${timeInSeconds % 3600 % 60}s`;
        }
    }
};

module.exports = formatDate;
