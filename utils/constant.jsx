const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
}

const labels = ["General", "Profile", "Instructions", "Intro", "Categories"];

const videoOptions = {
    title: 'Select Video',
    mediaType: 'video',
    takePhotoButtonTitle: 'Record Video',
    durationLimit: 180,
    allowsEditing: true,
    thumbnail: true,
    videoQuality: 'low',
    storageOptions: {
        skipBackup: true,
        path: 'videos'
    }
};

const categoriesArray = [
    {
        name: 'Tarot readings'
    },
    {
        name: 'Psychic readings'
    }, {
        name: 'Relationship coaching'
    },
    {
        name: 'Palm readings'
    },
    {
        name: 'Astrology & Horoscopes'
    },
    {
        name: 'Oracle guidance'
    },
    {
        name: 'Angel insights'
    },
    {
        name: 'Dream Analysis'
    }
]

const orderTypes = [
    {
        title: 'Video reading',
        subTitles: 'Recorded & delivered within 24 hours',
        price: '$10'
    },
    {
        title: 'Rush video reading',
        subTitles: 'Recorded & delivered within 60 minutes',
        price: '$15'
    },
    {
        title: 'Live chat',
        subTitles: 'Live caht reading - right now, no wait',
        price: '$0.99/min'
    },
    {
        title: 'Live video call',
        subTitles: 'Live video reading - right now, no wait',
        price: '$3.99/min'
    },
    {
        title: 'Live audio call',
        subTitles: 'Live audio reading - right now, no wait',
        price: '$1.99/min'
    }
]

export {
    customStyles,
    labels,
    videoOptions,
    categoriesArray,
    orderTypes
}