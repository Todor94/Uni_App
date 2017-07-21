const { NavigationView, Button, WebView, ui } = require('tabris');

var View = new NavigationView({ left: 0, top: 0, right: 0, bottom: 0 }).appendTo(ui.contentView);

var mainPage = new tabris.Page({
    title: 'Универсално приложение'
}).appendTo(View);

new Button({
    id: 'weatherBtn',
    text: 'Времето',
    image: {
        src: 'Images/weather1.png',
        scale: 3
    }

}).on('select', () => CreateWeatherSite()).appendTo(mainPage);

new Button({
    id: 'trafficBtn',
    text: 'Трафика в София',
    image: {
        src: 'Images/traffic.jpeg',
        scale: 5.4
    }
}).on('select', () => CreateInformationAboutTraffic()).appendTo(mainPage);

new Button({
    id: 'transportBtn',
    text: 'Градски транспорт',
    image: {
        src: 'Images/metro.png',
        scale: 1.45
    }
}).on('select', () => CreateInformationAboutTransport()).appendTo(mainPage);

new Button({
    id: 'mailBtn',
    text: 'Поща',
    image: {
        src: 'Images/mail.jpg',
        scale: 18
    }
}).on('select', () => CreateMailPage()).appendTo(mainPage);

new Button({
    id: 'wikiBtn',
    text: 'Уикипедия',
    image: {
        src: 'Images/wikipedia.jpg',
        scale: 4.05
    }
}).on('select', () => CreateWikiPage()).appendTo(mainPage);

new Button({
    id: 'navigationBtn',
    text: 'Навигация',
    image: {
        src: 'Images/maps2.png',
        scale: 5.45
    }
}).on('select', () => CreateNavigationPage()).appendTo(mainPage);

new Button({
    id: 'newsBtn',
    text: 'Новини',
    image: {
        src: 'Images/News.jpg',
        scale: 13.5
    }
}).on('select', () => CreateNewsPage()).appendTo(mainPage);

new Button({
    id: 'translateBtn',
    text: 'Речник',
    image: {
        src: 'Images/translate.png',
        scale: 4.15
    }
}).on('select', () => CreateTranslate()).appendTo(mainPage);

new Button({
    id: 'calendarBtn',
    text: 'Календар',
    image: {
        src: 'Images/calendar.png',
        scale: 2.053
    }
}).on('select', () => CreateCalendar()).appendTo(mainPage);

new Button({
    id: 'notesBtn',
    text: 'Бележки',
    image: {
        src: 'Images/notes.png',
        scale: 3.56
    }
}).on('select', () => CreateNotesPage()).appendTo(mainPage);

mainPage.apply({
    '#weatherBtn': { left: 10, right: '50%', top: '10%' },
    '#trafficBtn': { left: 10, right: '50%', top: '30%' },
    '#transportBtn': { left: 10, right: '50%', top: '50%' },
    '#navigationBtn': { left: 10, right: '50%', top: '70%' },
    '#mailBtn': { left: 10, right: '50%', top: '90%' },
    '#newsBtn': { left: '50%', right: 10, top: '10%' },
    '#wikiBtn': { left: '50%', right: 10, top: '30%' },
    '#translateBtn': { left: '50%', right: 10, top: '50%' },
    '#calendarBtn': { left: '50%', right: 10, top: '70%' },
    '#notesBtn': { left: '50%', right: 10, top: '90%' }
});

function CreateWeatherSite() {
    let WeatherPage = new tabris.Page({
        title: 'Времето'
    }).appendTo(View);

    new tabris.WebView({
        left: 0, right: 0, top: 0, bottom: 0,
        url: 'http://dalivali.bg/'
    }).appendTo(WeatherPage);

    return WeatherPage;
}

function CreateInformationAboutTraffic() {
    let TrafficPage = new tabris.Page({
        title: 'Трафика в София'
    }).appendTo(View);

    new tabris.WebView({
        left: 0, right: 0, top: 0, bottom: 0,
        url: 'https://www.google.com/maps/d/viewer?mid=1cJ5jG_D4gMDw1fBUzNa5GZ5tr-o&hl=bg&ll=42.679339596193095%2C23.323716999999988&z=13'
    }).appendTo(TrafficPage);
}

function CreateInformationAboutTransport() {
    let TransportPage = new tabris.Page({
        title: 'Градски транспорт'
    }).appendTo(View);

    new tabris.WebView({
        left: 0, right: 0, top: 0, bottom: 0,
        url: 'https://www.sofiatraffic.bg/bg/transport/schedules'
    }).appendTo(TransportPage);
}

function CreateMailPage() {
    let MailPage = new tabris.Page({
        title: 'Поща'
    }).appendTo(View);

    new tabris.TextView({
      id: 'mailsoptions',
      text: 'Изберете опция:',
      alignment: 'center',
      font: "20px"
    }).appendTo(MailPage);

    new Button({
        id: 'googleMailBtn',
        text: 'Gmail',
        image: {
            src: 'Images/gmail.png',
            scale: 1.3
        }
    }).on('select', () => CreateGmail()).appendTo(MailPage);

    new Button({
        id: 'yahooMailBtn',
        text: 'Yahoo',
        image: {
            src: 'Images/yahoo.png',
            scale: 4
        }
    }).on('select', () => CreateYahooMail()).appendTo(MailPage);

    new Button({
        id: 'abvMailBtn',
        text: 'ABV',
        image: {
            src: 'Images/abv.png',
            scale: 4
        }
    }).on('select', () => CreateAbvMail()).appendTo(MailPage);

    MailPage.apply({
        '#mailsoptions': { left: 10, right: 10, top: 50 },
        '#googleMailBtn': { left: 10, right: 10, top: '10%' },
        '#yahooMailBtn': { left: 10, right: 10, top: '30%' },
        '#abvMailBtn': { left: 10, right: 10, top: '50%' }
    });
}

function CreateGmail() {
    let GmailPage = new tabris.Page({
        title: 'Gmail'
    }).appendTo(View);

    new tabris.WebView({
        left: 0, right: 0, top: 0, bottom: 0,
        url: 'https://www.google.com/gmail/'
    }).appendTo(GmailPage);
}

function CreateYahooMail() {
    let YahooMailPage = new tabris.Page({
        title: 'Yahoo Mail'
    }).appendTo(View);

    new tabris.WebView({
        left: 0, right: 0, top: 0, bottom: 0,
        url: 'https://bg.mail.yahoo.com/'
    }).appendTo(YahooMailPage);
}

function CreateAbvMail() {
    let AbvMailPage = new tabris.Page({
        title: 'Abv'
    }).appendTo(View);

    new tabris.WebView({
        left: 0, right: 0, top: 0, bottom: 0,
        url: 'https://www.abv.bg/'
    }).appendTo(AbvMailPage);
}

function CreateWikiPage() {
    let WikiPage = new tabris.Page({
        title: 'Уикипедия'
    }).appendTo(View);

    new tabris.WebView({
        left: 0, right: 0, top: 0, bottom: 0,
        url: 'https://bg.wikipedia.org/'
    }).appendTo(WikiPage);
}

function CreateNavigationPage() {
    let navigationPage = new tabris.Page({
        title: 'Навигация'
    }).appendTo(View);

    new tabris.WebView({
        left: 0, right: 0, top: 0, bottom: 0,
        url: 'https://www.google.bg/maps/'
    }).appendTo(navigationPage);
}

function CreateNewsPage() {
    let newsPage = new tabris.Page({
        title: 'Новини'
    }).appendTo(View);

    new tabris.TextView({
      id: 'newsoptions',
      text: 'Изберете опция:',
      alignment: 'center',
      font: "20px"
    }).appendTo(newsPage);

    new Button({
        id: 'newsBgBtn',
        text: 'News.bg',
        image: {
            src: 'Images/newsbg.png',
            scale: 14.3
        }
    }).on('select', () => CreateNewsbg()).appendTo(newsPage);

    new Button({
        id: 'BulgariaNewsBtn',
        text: 'Bulgaria News',
        image: {
            src: 'Images/bulgariannews.png',
            scale: 0.65
        }
    }).on('select', () => CreateBulgariaNews()).appendTo(newsPage);

    new Button({
        id: 'btvNewsBtn',
        text: 'Btv Новините',
        image: {
            src: 'Images/BTV.png',
            scale: 3.95
        }
    }).on('select', () => CreateBtvNews()).appendTo(newsPage);

    new Button({
        id: 'novaNewsBtn',
        text: 'Nova News',
        image: {
            src: 'Images/nova.png',
            scale: 5.3
        }
    }).on('select', () => CreateNovaNews()).appendTo(newsPage);

    newsPage.apply({
        '#newsoptions': { left: 10, right: 10, top: 50 },
        '#newsBgBtn': { left: 10, right: 10, top: '10%' },
        '#BulgariaNewsBtn': { left: 10, right: 10, top: '30%' },
        '#btvNewsBtn': { left: 10, right: 10, top: '50%' },
        '#novaNewsBtn': { left: 10, right: 10, top: '70%' }
    });
}

function CreateNewsbg() {
    let newsBgPage = new tabris.Page({
        title: 'News.bg'
    }).appendTo(View);

    new tabris.WebView({
        left: 0, right: 0, top: 0, bottom: 0,
        url: 'https://news.bg/'
    }).appendTo(newsBgPage);
}

function CreateBulgariaNews() {
    let bulgariaNewsPage = new tabris.Page({
        title: 'Bulgaria News'
    }).appendTo(View);

    new tabris.WebView({
        left: 0, right: 0, top: 0, bottom: 0,
        url: 'http://www.bulgaria-news.bg/'
    }).appendTo(bulgariaNewsPage);
}

function CreateBtvNews() {
    let btvNewsPage = new tabris.Page({
        title: 'Btv Новините'
    }).appendTo(View);

    new tabris.WebView({
        left: 0, right: 0, top: 0, bottom: 0,
        url: 'http://btvnovinite.bg/'
    }).appendTo(btvNewsPage);
}

function CreateNovaNews() {
    let novaNewsPage = new tabris.Page({
        title: 'Nova News'
    }).appendTo(View);

    new tabris.WebView({
        left: 0, right: 0, top: 0, bottom: 0,
        url: 'https://nova.bg/news'
    }).appendTo(novaNewsPage);
}

function CreateTranslate() {
    let translatePage = new tabris.Page({
        title: 'Речник'
    }).appendTo(View);

    new tabris.WebView({
        left: 0, right: 0, top: 0, bottom: 0,
        url: 'https://translate.google.bg/?hl=bg'
    }).appendTo(translatePage);
}

function CreateCalendar() {
    let calendarPage = new tabris.Page({
        title: 'Календар'
    }).appendTo(View);

    new tabris.WebView({
        left: 0, right: 0, top: 0, bottom: 0,
        url: 'https://www.google.com/calendar'
    }).appendTo(calendarPage);
}

function CreateNotesPage() {
    let notesPage = new tabris.Page({
        title: 'Бележки'
    }).appendTo(View);

    new tabris.TextView({
      id: 'notesoptions',
      text: 'Изберете опция:',
      alignment: 'center',
      font: "20px"
    }).appendTo(notesPage);

    new Button({
        id: 'gKeepBtn',
        text: 'Google Keep',
        image: {
            src: 'Images/keep.jpg',
            scale: 6.55
        }
    }).on('select', () => CreateGNotes()).appendTo(notesPage);

    new Button({
        id: 'evernoteBtn',
        text: 'Evernote',
        image: {
            src: 'Images/evernote.png',
            scale: 20.4
        }
    }).on('select', () => CreateENotes()).appendTo(notesPage);

    notesPage.apply({
        '#notesoptions': { left: 10, right: 10, top: 50 },
        '#gKeepBtn': { left: 10, right: 10, top: '10%' },
        '#evernoteBtn': { left: 10, right: 10, top: '30%' }
    });
}

function CreateGNotes() {
    let gNotesPage = new tabris.Page({
        title: 'Google Keep'
    }).appendTo(View);

    new tabris.WebView({
        left: 0, right: 0, top: 0, bottom: 0,
        url: 'https://keep.google.com/'
    }).appendTo(gNotesPage);
}

function CreateENotes() {
    let eNotesPage = new tabris.Page({
        title: 'Evernote'
    }).appendTo(View);

    new tabris.WebView({
        left: 0, right: 0, top: 0, bottom: 0,
        url: 'https://evernote.com/'
    }).appendTo(eNotesPage);
}
