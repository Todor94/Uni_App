const { NavigationView, Button, WebView, TextView, ui } = require('tabris');

var View = new NavigationView({ left: 0, top: 0, right: 0, bottom: 0, drawerActionVisible: true }).appendTo(ui.contentView);
var drawer = ui.drawer;

device.orientation = 'portrait-primary';

drawer.enabled = true;
drawer.background = '#2DB3FF';
drawer.on('open', () => createList());

function createList() {
    new tabris.TextView({
      left: 10, top: 10, right: 10,
      id: 'drawerLabel',
      text: 'Изберете опция:',
      alignment: 'center',
      font: "20px"
    }).appendTo(drawer);

    new Button({
        left: 10, top: '#drawerLabel 10', right: 10,
        id: 'mBtn',
        text: 'Информация',
        image: {
            src: 'Images/tv.png',
            scale: 55
        }
    }).on('select', () => createMainPage()).appendTo(drawer);

    new Button({
        left: 10, top: '#mBtn 10', right: 10,
        id: 'tBtn',
        text: 'Транспорт и трафик',
        image: {
            src: 'Images/tran.jpg',
            scale: 13
        }
    }).on('select', () => createTranPage()).appendTo(drawer);

    new Button({
        left: 10, top: '#tBtn 10', right: 10,
        id: 'cBtn',
        text: 'Поща, календар и бележки',
        image: {
            src: 'Images/check.png',
            scale: 4
        }
    }).on('select', () => createCheckPage()).appendTo(drawer);
}

createMainPage();

function createMainPage() {
    var mainPage = new tabris.Page({
        title: 'Информация'
    }).appendTo(View);

    new Button({
        id: 'weatherBtn',
        text: 'Времето',
        textColor: 'white',
        background: '#2DB3FF',
        image: {
            src: 'Images/weather1.png',
            scale: 3
        }

    }).on('select', () => CreateWeatherSite()).appendTo(mainPage);

    new Button({
        id: 'wikiBtn',
        text: 'Уикипедия',
        textColor: 'white',
        background: '#2DB3FF',
        image: {
            src: 'Images/wikipedia.jpg',
            scale: 4.05
        }
    }).on('select', () => CreateWikiPage()).appendTo(mainPage);

    new Button({
        id: 'newsBtn',
        text: 'Новини',
        textColor: 'white',
        background: '#2DB3FF',
        image: {
            src: 'Images/News.jpg',
            scale: 13.5
        }
    }).on('select', () => CreateNewsPage()).appendTo(mainPage);

    new Button({
        id: 'translateBtn',
        text: 'Речник',
        textColor: 'white',
        background: '#2DB3FF',
        image: {
            src: 'Images/translate.png',
            scale: 4.15
        }
    }).on('select', () => CreateTranslate()).appendTo(mainPage);

    new Button({
        id: 'progBtn',
        text: 'TV Програма',
        textColor: 'white',
        background: '#2DB3FF',
        image: {
            src: 'Images/tv.jpg',
            scale: 4.05
        }
    }).on('select', () => CreateProggramInfo()).appendTo(mainPage);

    mainPage.apply({
        '#weatherBtn': { left: 10, right: '50%', top: '10%' },
        '#progBtn': { left: 10, right: '50%', top: '30%' },
        '#translateBtn': { left: 10, right: '50%', top: '50%' },
        '#newsBtn': { left: '50%', right: 10, top: '10%' },
        '#wikiBtn': { left: '50%', right: 10, top: '30%' },

    });
    return mainPage;
}

function createTranPage() {

    var tranPage = new tabris.Page({
        title: 'Транспорт и трафик'
    }).appendTo(View);

    new Button({
        id: 'trafficBtn',
        text: 'Трафик',
        textColor: 'white',
        background: '#2DB3FF',
        image: {
            src: 'Images/traffic.jpeg',
            scale: 5.4
        }
    }).on('select', () => CreateInformationAboutTraffic()).appendTo(tranPage);

    new Button({
        id: 'transportBtn',
        text: 'Градски транспорт',
        textColor: 'white',
        background: '#2DB3FF',
        image: {
            src: 'Images/metro.png',
            scale: 1.45
        }
    }).on('select', () => CreateInformationAboutTransport()).appendTo(tranPage);

    new Button({
        id: 'navigationBtn',
        text: 'Навигация',
        textColor: 'white',
        background: '#2DB3FF',
        image: {
            src: 'Images/maps2.png',
            scale: 5.45
        }
    }).on('select', () => CreateNavigationPage()).appendTo(tranPage);

    tranPage.apply({
        '#transportBtn': { left: 10, right: '50%', top: '10%' },
        '#trafficBtn': { left: '50%', right: 10, top: '10%' },
        '#navigationBtn': { left: 10, right: '50%', top: '30%' }
    });
    return tranPage;
}

function createCheckPage() {
    var checkPage = new tabris.Page({
        title: 'Поща, календар и бележки'
    }).appendTo(View);

    new Button({
        id: 'mailBtn',
        text: 'Поща',
        textColor: 'white',
        background: '#2DB3FF',
        image: {
            src: 'Images/mail.jpg',
            scale: 18
        }
    }).on('select', () => CreateMailPage()).appendTo(checkPage);

    new Button({
        id: 'calendarBtn',
        text: 'Календар',
        textColor: 'white',
        background: '#2DB3FF',
        image: {
            src: 'Images/calendar.png',
            scale: 2.053
        }
    }).on('select', () => CreateCalendar()).appendTo(checkPage);

    new Button({
        id: 'notesBtn',
        text: 'Бележки',
        textColor: 'white',
        background: '#2DB3FF',
        image: {
            src: 'Images/notes.png',
            scale: 3.56
        }
    }).on('select', () => CreateNotesPage()).appendTo(checkPage);

    checkPage.apply({
        '#mailBtn': { left: 10, right: '50%', top: '10%' },
        '#calendarBtn': { left: '50%', right: 10, top: '10%' },
        '#notesBtn': { left: 10, right: '50%', top: '30%' }
    });
    return checkPage;
}

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
        textColor: 'white',
        background: '#2DB3FF',
        image: {
            src: 'Images/gmail.png',
            scale: 1.3
        }
    }).on('select', () => CreateGmail()).appendTo(MailPage);

    new Button({
        id: 'yahooMailBtn',
        text: 'Yahoo',
        textColor: 'white',
        background: '#2DB3FF',
        image: {
            src: 'Images/yahoo.png',
            scale: 4
        }
    }).on('select', () => CreateYahooMail()).appendTo(MailPage);

    new Button({
        id: 'abvMailBtn',
        text: 'ABV',
        textColor: 'white',
        background: '#2DB3FF',
        image: {
            src: 'Images/abv.png',
            scale: 4
        }
    }).on('select', () => CreateAbvMail()).appendTo(MailPage);

    MailPage.apply({
        '#mailsoptions': { left: 10, right: 10, top: '5%' },
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
        textColor: 'white',
        background: '#2DB3FF',
        image: {
            src: 'Images/newsbg.png',
            scale: 14.3
        }
    }).on('select', () => CreateNewsbg()).appendTo(newsPage);

    new Button({
        id: 'BulgariaNewsBtn',
        text: 'Bulgaria News',
        textColor: 'white',
        background: '#2DB3FF',
        image: {
            src: 'Images/bulgariannews.png',
            scale: 0.65
        }
    }).on('select', () => CreateBulgariaNews()).appendTo(newsPage);

    new Button({
        id: 'btvNewsBtn',
        text: 'Btv Новините',
        textColor: 'white',
        background: '#2DB3FF',
        image: {
            src: 'Images/BTV.png',
            scale: 3.95
        }
    }).on('select', () => CreateBtvNews()).appendTo(newsPage);

    new Button({
        id: 'novaNewsBtn',
        text: 'Nova News',
        textColor: 'white',
        background: '#2DB3FF',
        image: {
            src: 'Images/nova.png',
            scale: 5.3
        }
    }).on('select', () => CreateNovaNews()).appendTo(newsPage);

    newsPage.apply({
        '#newsoptions': { left: 10, right: 10, top: '5%' },
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
        textColor: 'white',
        background: '#2DB3FF',
        image: {
            src: 'Images/keep.jpg',
            scale: 6.55
        }
    }).on('select', () => CreateGNotes()).appendTo(notesPage);

    new Button({
        id: 'evernoteBtn',
        text: 'Evernote',
        textColor: 'white',
        background: '#2DB3FF',
        image: {
            src: 'Images/evernote.png',
            scale: 20.4
        }
    }).on('select', () => CreateENotes()).appendTo(notesPage);

    notesPage.apply({
        '#notesoptions': { left: 10, right: 10, top: '5%' },
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

function CreateProggramInfo() {
    let proggramPage = new tabris.Page({
        title: 'Програмата'
    }).appendTo(View);

    new tabris.WebView({
        left: 0, right: 0, top: 0, bottom: 0,
        url: 'http://www.start.bg/lenta/tv-programa/all.html'
    }).appendTo(proggramPage);
}
