export const electronicMenuItems = [
    { categoryId: 1, text: 'Bilgisayar/Tablet' },
    { categoryId: 2, text: 'Yazıcılar & Projeksiyon' },
    { categoryId: 3, text: 'Telefon & Telefon Aksesuarları' },
    { categoryId: 4, text: 'TV,Görüntü & Ses Sistemleri' },
    { categoryId: 5, text: 'Beyaz Eşya' },
    { categoryId: 6, text: 'Klima ve Isıtıcılar' },
    { categoryId: 7, text: 'Elektrikli Ev Aletleri' },
    { categoryId: 8, text: 'Foto & Kamera' },
    { categoryId: 9, text: 'Oyun & Oyun Konsolları' },
];

/* {categoryId : data} */
export const data = {
    1: {
        subCount: 12,
        column: 2,
        category: 'Bilgisayar/Tablet',
        subCategories: [
            {
                category: 'Dizüstü Bilgisayar',
                subCategories: [
                    'Notebook',
                    'Oyun Bilgisayarları',
                    'İkisi Bir Arada',
                ],
            },
            {
                category: 'Tablet',
                subCategories: [
                    'Apple',
                    'Samsung',
                    'Lenovo',
                    'Alcatel',
                    'Hometech',
                    'Huawei',
                    'Reeder',
                    'Diğer',
                    'Casper',
                ],
            },
            {
                category: 'Masaüstü Bilgisayar',
                subCategories: ['All-in-One', 'Masaüstü', 'Mini Masaüstü'],
            },
            {
                category: 'Oyuncu Özel',
                subCategories: [
                    'Klavye',
                    'Mouse',
                    'Kulaklık',
                    'Oyun Bilgisayarı',
                    'Monitör',
                    'Oyun Donanımları',
                    'Oyuncu Masası',
                    'Oyuncu Koltuğu',
                ],
            },
            {
                category: 'Veri Depolama',
                subCategories: [
                    'Anakart',
                    'Ekran Kartları',
                    'Bellek (RAM)',
                    'İşlemciler',
                    'Disk',
                    'Kasa',
                ],
            },
            {
                category: 'Yurt Dışından',
                subCategories: [],
            },
            {
                category: 'Ağ - Modem - Akıllı Ev',
                subCategories: ['Access Point', 'Router', 'Modemler'],
            },
            {
                category: 'Grafik Tablet',
                subCategories: [
                    'Xiaomi',
                    'Veikk',
                    '10moons',
                    'Wacom',
                    'Xp',
                    'Pen',
                    'Huion',
                ],
            },
            {
                category: 'Çevre Birimleri',
                subCategories: [
                    'Mouse',
                    'Klavye & Mouse Set',
                    'Klavye',
                    'Monitör',
                    'Yazıcı',
                    'Simülasyon Aksesuarları & Sanal Gerçeklik Gözlüğü',
                ],
            },
            {
                category: 'Yazılım Ürünleri',
                subCategories: ['Antivirüs ve Güvenlik', 'Office Yazılımları'],
            },
            {
                category: 'Aksesuarlar',
                subCategories: [
                    'Notebook Çantaları',
                    'Tablet ve iPad Aksesuarları',
                    'Kablolar/Switch ve Çoklayıcılar',
                ],
            },
            {
                category: 'Kulaklık',
                subCategories: [
                    'Razer',
                    'Sony',
                    'Philips',
                    'James Donkey',
                    'Rampage',
                    'HyperX',
                    'Steelseries',
                    'HP',
                    'Corsair',
                    'Gamepower',
                    'Asus',
                    'Logitech',
                ],
            },
        ],
    },
    2: {
        subCount: 6,
        column: 2,
        category: 'Yazıcılar & Projeksiyon',
        subCategories: [
            {
                category: 'Yazıcılar',
                subCategories: [
                    'Lazer Yazıcı',
                    'Tanklı Yazıcı',
                    'Mürekkep Püskürtmeli Yazıcı',
                    'Nokta Vuruşlu Yazıcı',
                    'Fotoğraf Yazıcısı',
                    '3D Yazıcı',
                    'Barkod Yazıcı',
                    'Tarayıcı',
                ],
            },
            {
                category: 'Sarf Malzemeleri',
                subCategories: [
                    'Toner',
                    'Kartuş',
                    'Drum',
                    'Şerit',
                    'Yazıcı Kağıdı',
                ],
            },
            {
                category: 'Tüm Kategoriler',
                subCategories: [],
            },
            {
                category: 'Projeksiyon Cihazı',
                subCategories: [],
            },
            {
                category: 'Projeksiyon Ekipmanları',
                subCategories: [
                    'Sunum Kumandası',
                    'Projeksiyon Perdesi',
                    'Askı Aparatı',
                    'Projeksiyon Lambası',
                ],
            },
            {
                category: 'Yurt Dışından',
                subCategories: [],
            },
        ],
    },
    3: {
        subCount: 16,
        column: 2,
        category: 'Telefon & Telefon Aksesuarları',
        subCategories: [
            {
                category: 'Cep Telefonu',
                subCategories: [
                    'iPhone iOS Telefonlar',
                    'Tüm Android Telefonlar',
                    'Samsung',
                    'Xiaomi',
                    'Oppo',
                    'Eskiyi Getir Yeniyi Götür',
                    'Huawei',
                    'Reeder',
                    'İkinci El',
                    'POCO',
                    'TECNO',
                    'HONOR',
                    'vivo',
                    'Realme',
                    'Tuşlu Telefonlar',
                ],
            },

            {
                category: 'Akıllı Saatler',
                subCategories: [
                    'Akıllı Saatler',
                    'Akıllı Çocuk Saatleri',
                    'Kordonlar ve Aksesuarlar',
                ],
            },
            {
                category: 'Akıllı Bileklikler',
                subCategories: [],
            },
            {
                category: 'Bluetooth Kulaklık',
                subCategories: [],
            },
            {
                category: 'Kılıflar',
                subCategories: ['Koruyucu Kılıflar', 'Tasarım Kılıflar'],
            },
            {
                category: 'Ekran Koruyucular',
                subCategories: [],
            },
            {
                category: 'Şarj Cihazları',
                subCategories: [],
            },
            {
                category: 'Şarj Kabloları',
                subCategories: [],
            },
            {
                category: 'Taşınabilir Hoparlörler',
                subCategories: [],
            },
            {
                category: 'Araç İçi Telefon Tutucular ve Araç Şarj Cihazları',
                subCategories: [
                    'Araç İçi Telefon Tutucular',
                    'Araç Şarj Cihazları',
                ],
            },
            {
                category: 'Selfie Çubukları',
                subCategories: [],
            },
            {
                category:
                    'Telefon Oyun Aksesuarları ve Sanal Gerçeklik Gözlükleri',
                subCategories: [
                    'Telefon Oyun Aksesuarları',
                    'Sanal Gerçeklik Gözlükleri',
                ],
            },
            {
                category: 'Telsiz ve Masaüstü Telefonlar',
                subCategories: [],
            },
            {
                category: 'Yurt dışından',
                subCategories: [],
            },
            {
                category: 'Tüm Cep Telefonu Aksesuarları',
                subCategories: [
                    'Akıllı Saatler',
                    'Akıllı Bileklik',
                    'Powerbank',
                    'Bluetooth Kulaklıklar',
                    'Kılıflar',
                    'Şarj Cihazları',
                    'Şarj Kabloları',
                    'Araç İçi Telefon Tutucular',
                    ' Ekran Koruyucular',
                    'Telefon Kulaklıkları',
                    'Taşınabilir Hoparlörler',
                    'Telefon Oyun Aksesuarları',
                    'Selfie (Özçekim) Çubukları',
                    'Tasarım Kılıflar',
                    'Sanal Gerçeklik Gözlüğü',
                    'Bluetooth Araç Kitleri',
                    'Akıllı Saat ve Bileklik Aksesuarları',
                    'Bluetooth Kulaklık Aksesuarları',
                    'Cep Telefonu Yedek Parçaları ve Bataryalar',
                    ' Diğer Telefon Aksesuarları',
                    'GPS Takip Cihazları',
                ],
            },
        ],
    },
    4: {
        subCount: 14,
        column: 2,
        category: 'TV,Görüntü & Ses Sistemleri',
        subCategories: [
            {
                category: 'Televizyon',
                subCategories: [
                    'Samsung',
                    'LG',
                    'Vestel',
                    'Philips',
                    'Grundig',
                    'Toshiba',
                    'TCL',
                ],
            },

            {
                category: 'Ev Sinema Sistemleri',
                subCategories: [
                    'Samsung',
                    'LG',
                    'Harman Kardon',
                    'Sony',
                    'Bose',
                    'Philips',
                    'Bang & Olufsen',
                    'JBL',
                    'Xiaomi',
                    'Yamaha',
                    'Pioneer',
                    'Denon',
                ],
            },
            {
                category: 'Bluetooth Hoparlör',
                subCategories: [
                    'JBL',
                    'Harman Kardon',
                    'Philips',
                    'Bose',
                    'Mikado',
                    'Yamaha',
                    'Denon',
                    'Ultimate Ears',
                    'LG',
                    'Marshall',
                    'Huawei',
                    'Sony',
                    'Grundig',
                    'Xiaomi',
                    'Anker',
                ],
            },
            {
                category: 'Müzik Sistemleri',
                subCategories: [
                    ' Alarm Saatli Radyolar',
                    'Portatif Sistemler',
                    'Müzik Seti',
                ],
            },
            {
                category: 'Projeksiyon Sistemleri',
                subCategories: [
                    'Projeksiyon Sistemleri',
                    'Projeksiyon Cihazları',
                    'Projeksiyon Lambaları',
                    'Projeksiyon Perdeleri',
                    'Sunum Kumandaları',
                ],
            },
            {
                category: 'Tüm Kategoriler',
                subCategories: [],
            },
            {
                category: 'Uydu Alıcıları',
                subCategories: [
                    'Next',
                    'Dreamstar',
                    'Hiremco',
                    'Redline',
                    'Botech',
                    'Hi-Tech',
                    'Sun Plus',
                    'Goldmaster',
                ],
            },
            {
                category: 'Yurt Dışından',
                subCategories: [],
            },
            {
                category: 'Blu-Ray ve DVD Oynatıcılar',
                subCategories: ['Samsung', 'Sony', 'Philips', 'Goldmaster'],
            },
            {
                category: '  Kablo & Soketler',
                subCategories: [
                    'HDMI Kablo',
                    'Ses Kabloları',
                    'Uzatıcı Çoklayıcılar',
                    'Kablosuz Ses Görüntü Aktarıcı',
                    'Dönüştürücüler',
                ],
            },
            {
                category: '  TV Aksesuarları',
                subCategories: [
                    'TV Askı Aparatları',
                    'Akım Korumalı Priz',
                    '3D Gözlükler',
                    'TV Ekran Koruyucuları',
                ],
            },
            {
                category: 'Güvenlik Sistemleri',
                subCategories: [
                    'Kamera Sistemi',
                    'Güvenlik Kamerası',
                    'DVR Kayıt Cihazı',
                    'Alarm Sistemleri',
                ],
            },
            {
                category: 'Media Player',
                subCategories: [
                    'Xiaomi',
                    'Google',
                    'Apple',
                    'Case4u',
                    'Wechip',
                    'Zappiti',
                ],
            },
            {
                category: 'Kablosuz Ses ve Görüntü Aktarıcı',
                subCategories: [],
            },
        ],
    },
    5: {
        subCount: 14,
        column: 2,
        category: 'Beyaz Eşya',
        subCategories: [
            {
                category: 'Çamaşır Makineleri',
                subCategories: [
                    'Samsung',
                    'Bosch',
                    'Altus',
                    'Arçelik',
                    'Hoover',
                    'Beko',
                    'Grundig',
                    'Vestel',
                    'Profilo',
                    'Electrolux',
                    'Vestfrost',
                    'LG',
                    'Siemens',
                    'Miele',
                    'Regal',
                    'Seg',
                    'Candy',
                ],
            },

            {
                category: 'Buzdolapları',
                subCategories: [
                    'Arçelik',
                    'Bosch',
                    'Grundig',
                    'Samsung',
                    'Profilo',
                    'Altus',
                    'Siemens',
                    'Vestel',
                    'Hoover',
                    'Electrolux',
                    'Vestfrost',
                    'LG',
                    'Beko',
                    'Miele',
                    'Liebherr',
                    'Regal',
                ],
            },
            {
                category: 'Bulaşık Makineleri',
                subCategories: [
                    'Grundig',
                    'Bosch',
                    'Beko',
                    'Samsung',
                    'Arçelik',
                    'Altus',
                    'Siemens',
                    'Vestel',
                    'Hoover',
                    'Electrolux',
                    'Vestfrost',
                    'LG',
                    'Profilo',
                    'Miele',
                    'Regal',
                    'Seg',
                    'Candy',
                ],
            },
            {
                category: 'Kurutmalı Çamaşır Makineleri',
                subCategories: [
                    'Hoover',
                    'LG',
                    'Bosch',
                    'Samsung',
                    'Siemens',
                    'Electrolux',
                    'Vestel',
                ],
            },
            {
                category: 'Kurutma Makineleri',
                subCategories: [
                    'Electrolux',
                    'Bosch',
                    'Hoover',
                    'Samsung',
                    'Profilo',
                    'Altus',
                    'Siemens',
                    'Vestel',
                    'Beko',
                    'Arçelik',
                    'LG',
                    'Grundig',
                    'Miele',
                    'Regal',
                    'Candy',
                ],
            },
            {
                category: 'Su Sebili',
                subCategories: [
                    'Arçelik',
                    'Bosch',
                    'Beko',
                    'Altus',
                    'Siemens',
                    'Vestel',
                    'Dijitsu',
                    'Awox',
                ],
            },
            {
                category: 'Tüm Kategoriler',
                subCategories: [],
            },
            {
                category: 'Derin Dondurucular',
                subCategories: [
                    'Arçelik',
                    'Bosch',
                    'Beko',
                    'Altus',
                    'Grundig',
                    'Uğur',
                    'Delta',
                    'Vestel',
                    'Şenocak',
                    'Simfer',
                    'Profilo',
                    'Regal',
                    'Seg',
                ],
            },
            {
                //----------------------------
                category: 'Ocaklar',
                subCategories: [
                    'Arçelik',
                    'Kumtel',
                    'Hoover',
                    'Bosch',
                    'Simfer',
                    'Oscar',
                    'Electrolux',
                    'Luxell',
                    'Franke',
                    'Silverline',
                    'Siemens',
                    'Altus',
                    'Vestel',
                    'Profilo',
                    'Teka',
                    'Femaş',
                    'Ferre',
                    'Beko',
                    'Samsung',
                    'Esty',
                ],
            },
            {
                category: 'Ankastre Setler',
                subCategories: [
                    'Arçelik',
                    'Kumtel',
                    'Hoover',
                    'Simfer',
                    'Oscar',
                    'Electrolux',
                    'Luxell',
                    'Franke',
                    'Silverline',
                    'Siemens',
                    'Altus',
                    'Vestel',
                    'Profilo',
                    'Teka',
                    'Femaş',
                    'Bosch',
                    'Ferre',
                    'Samsung',
                    'Esty',
                ],
            },
            {
                category: 'Fırınlar',
                subCategories: [
                    'Arçelik',
                    'Kumtel',
                    'Hoover',
                    'Simfer',
                    'Oscar',
                    'Electrolux',
                    'Luxell',
                    'Franke',
                    'Silverline',
                    'Siemens',
                    'Altus',
                    'Vestel',
                    'Profilo',
                    'Teka',
                    'Bosch',
                    'Ferre',
                    'Beko',
                    'Samsung',
                    'Esty',
                ],
            },
            {
                category: 'Mikrodalga Fırınlar',
                subCategories: [
                    'Arçelik',
                    'Samsung',
                    'Beko',
                    'Bosch',
                    'Siemens',
                    'Vestel',
                    'Awox',
                    'Franke',
                    'Silverline',
                    'Dijitsu',
                    'Simfer',
                    'Electrolux',
                ],
            },
            {
                category: 'Davlumbazlar',
                subCategories: [
                    'Arçelik',
                    'Bosch',
                    'Beko',
                    'Siemens',
                    'Vestel',
                    'Profilo',
                    'Silverline',
                    'Simfer',
                    'Hoover',
                    'Samsung',
                    'Franke',
                    'Kumtel',
                    'Luxell',
                    'Termikel',
                    'Kügerr',
                    'Alveus',
                    'White Daisy',
                    'Ferre',
                ],
            },
            {
                category: 'Beyaz Eşya Aksesuar & Yedek Parçaları',
                subCategories: [
                    'Electrolux',
                    'Arçelik',
                    'Ehla Filtre',
                    'White Daisy',
                    'Parmis',
                    'Bosch',
                    'Fipgo',
                    'Afs',
                    'Teka',
                    'Kemos',
                ],
            },
        ],
    },
    6: {
        subCount: 8,
        column: 2,
        category: 'Klima ve Isıtıcılar',
        subCategories: [
            {
                category: 'Klimalar',
                subCategories: [
                    'Baymak',
                    'Samsung',
                    'Vestel',
                    'Toshiba',
                    'Electrolux',
                    'Mitsubishi Heavy',
                    'Airfel',
                    'Demirdöküm',
                    'Vestfrost',
                    'Altus',
                    'LG',
                    'Arçelik',
                    'ECA',
                ],
            },

            {
                category: 'Kombiler',
                subCategories: [
                    'Baymak',
                    'Demirdöküm',
                    'Vaillant',
                    'Buderus',
                    'Daikin',
                    'ECA',
                    'Viesmann',
                    'Alarko',
                    'Bosch',
                ],
            },
            {
                category: 'Şofbenler',
                subCategories: [
                    'Fakir',
                    'Vaillant',
                    'CVS',
                    'Baymak',
                    'Demirdöküm',
                    'Beko',
                ],
            },
            {
                category: 'Tüm Kategoriler',
                subCategories: [],
            },
            {
                category: 'Termosifonlar',
                subCategories: [
                    'Baymak',
                    'Hotpoint Ariston',
                    'Demirdöküm',
                    'Vestel',
                    'Arçelik',
                ],
            },
            {
                category: 'Vantilatörler',
                subCategories: [
                    'Dijitsu',
                    'Raks',
                    'Fakir',
                    'Rubenis',
                    'Goldmaster',
                    'Cvs',
                    'Ufo',
                ],
            },
            {
                category: '    Sobalar ve Isıtıcılar',
                subCategories: [
                    'Infrared Isıtıcılar',
                    'Yağlı Radyatörler',
                    'Quartz Sobalar',
                    'Fanlı Isıtıcılar',
                ],
            },
            {
                category: 'Yurt Dışından',
                subCategories: [],
            },
        ],
    },
    7: {
        subCount: 15,
        column: 2,
        category: 'Elektrikli Ev Aletleri',
        subCategories: [
            {
                category: 'Ütü',
                subCategories: [
                    'Tüm Ütüler',
                    'Buhar Kazanlı Ütü',
                    'Otomatik Kapanma Özellikli Ütü',
                    'Kireç Önleme Özellikli Ütü',
                ],
            },

            {
                category: 'Süpürge',
                subCategories: [
                    'Toz Torbasız Süpürge',
                    'Toz Torbalı Süpürge',
                    'Tüm Süpürgeler',
                    'Dikey Süpürge',
                    'Kablosuz & Şarjlı Süpürge',
                    'Robot Süpürge',
                    'Halı Yıkama Makinesi',
                    'Yedek Parça ve Aksesuar',
                ],
            },
            {
                category: 'Robot Süpürgeler',
                subCategories: [],
            },
            {
                category: 'Saç ve Sakal Makineleri',
                subCategories: [
                    'Tıraş Makinesi',
                    'Şekillendirici Tıraş Makineleri',
                    'Yedek Parça',
                ],
            },
            {
                category: 'Saç Kurutma ve Şekillendirme',
                subCategories: [
                    'Saç Kurutma Makinesi',
                    'Saç Maşası',
                    'Saç Düzleştirici',
                    'Saç Şekillendirici Fırça & Tarak',
                ],
            },
            {
                category: 'Aksesuarlar ve Yedek Parçalar',
                subCategories: [
                    'Kişisel Bakım Aletleri',
                    'Hava Temizleme Cihazları',
                    'Elektrikli Mutfak Aletleri',
                    'Mini - Midi Fırınlar',
                    'Süpürge',
                    'Robot Süpürge',
                    'Çay ve Kahve Makineleri',
                ],
            },
            {
                category: 'Epilatörler ve IPL Cihazları',
                subCategories: ['Epilatör', 'IPL Cihazı', 'Yedek Parça'],
            },
            {
                category: 'Tüm Kategoriler',
                subCategories: [],
            },
            {
                category: 'İçecek Hazırlama',
                subCategories: [
                    'Çay Makinesi',
                    'Kahve Makinesi',
                    'Blender',
                    'Meyve Sıkıcı',
                    'Su Isıtıcı (Kettle)',
                    'Soda Makinesi',
                ],
            },
            {
                category: 'Yiyecek Hazırlama',
                subCategories: [
                    'Blender',
                    'Mutfak Şefi',
                    'Doğrayıcı',
                    'Rondo',
                    'Kıyma Makinesi',
                    'Mikser',
                    'Mutfak Robotu',
                    'Yoğurt Makinesi',
                    'Mutfak Tartısı',
                ],
            },
            {
                category: 'Pişirme',
                subCategories: [
                    'Tost Makinesi',
                    'Fritöz',
                    'Mini',
                    'Midi Fırın',
                    'Buharlı Pişirici',
                    'Elektrikli Izgara',
                    'Barbekü',
                    'Elektrikli Tencere',
                    'Tava',
                    'Ekmek Kızartıcı',
                    'Ekmek Yapma Makinesi',
                    'Mısır Patlatma Makinesi',
                    'Waffle Makinesi',
                    'Yumurta Pişirme Makinesi',
                    'Diğer Mutfak Aletleri',
                    'Endüstriyel Mutfak Ürünleri',
                    'Yedek Parça & Aksesuar',
                ],
            },
            {
                category: 'Hava Temizleme ve Nem Alma Cihazları',
                subCategories: [],
            },
            {
                category: 'Çay ve Kahve Makineleri',
                subCategories: ['Çay Makinesi', 'Kahve Makinesi'],
            },
            {
                category: 'Blender',
                subCategories: [],
            },
            {
                category: 'Tost Makinesi',
                subCategories: [],
            },
        ],
    },
    8: {
        subCount: 11,
        column: 2,
        category: 'Foto & Kamera',
        subCategories: [
            {
                category: 'SLR Fotoğraf Makineleri',
                subCategories: ['Canon', 'Nikon', 'Sony'],
            },

            {
                category: 'Dijital Fotoğraf Makineleri',
                subCategories: [
                    'Canon',
                    'Nikon',
                    'Samsung',
                    'Sony',
                    'Panasonic',
                    'Kodak',
                    'Diğer',
                ],
            },
            {
                category: 'Aksiyon Kamera',
                subCategories: ['GoPro', 'DJI', 'Sony', 'Sjcam', 'Eken'],
            },
            {
                category: 'Outdoor & Sualtı Foto. Mk.',
                subCategories: [],
            },
            {
                category: 'Drone',
                subCategories: ['DJI', 'Corby', 'Aden'],
            },
            {
                category: 'Aksesuarlar',
                subCategories: [
                    'Lensler ve Filtreler',
                    'Hafıza Kartı & Kart Okuyucuları',
                    'Fotoğraf Makinesi Çantaları',
                    'Pil ve Şarj Cihazları',
                    'Dijital Fotoğraf Çerçeveleri',
                    'Sabitleyiciler (Tripod)',
                    'Boş Kaset & DVD',
                    'SLR Aksesuarları',
                ],
            },
            {
                category: 'Aynasız Kompakt SLR Mk.',
                subCategories: [
                    'Panasonic',
                    'Samsung',
                    'Olympus',
                    'Fujifilm',
                    'Diğer',
                ],
            },
            {
                category: 'Video KameralarTüm Kategoriler',
                subCategories: ['Sony', 'Diğer'],
            },
            {
                category: 'Elektronik-Optik (GPS,Dürbün)',
                subCategories: [
                    'GPS Cihazı (El Tipi)',
                    'Teleskop & Aksesuarları',
                    'Dürbün',
                    ' Fenerler',
                    'Spotting Scope',
                ],
            },
            {
                category: 'Yurt Dışından',
                subCategories: [],
            },
            {
                category: 'Tüm Kategoriler',
                subCategories: [],
            },
        ],
    },
    9: {
        subCount: 12,
        column: 2,
        category: 'Oyun & Oyun Konsolları',
        subCategories: [
            {
                category: 'Playstation 5',
                subCategories: ['Konsol', 'Oyunlar', 'Aksesuarlar'],
            },

            {
                category: 'Playstation 4',
                subCategories: ['Konsol', 'Oyunlar', 'Aksesuarlar'],
            },
            {
                category: 'Playstation 3',
                subCategories: ['Konsol', 'Oyunlar', 'Aksesuarlar'],
            },
            {
                category: 'PSP / Vita',
                subCategories: ['Oyunlar', 'Aksesuarlar'],
            },
            {
                category: 'Nintendo',
                subCategories: ['Konsol', 'Oyunlar', 'Aksesuarlar'],
            },
            {
                category: 'Playstation 2',
                subCategories: [],
            },
            {
                category: 'Tüm Kategoriler',
                subCategories: [],
            },
            {
                category: 'Xbox Series X',
                subCategories: ['Konsol', 'Aksesuarlar'],
            },
            {
                category: 'Xbox Series S',
                subCategories: ['Konsol'],
            },
            {
                category: 'Xbox 360',
                subCategories: ['Konsol', 'Oyunlar', 'Aksesuarlar'],
            },
            {
                category: 'Xbox One',
                subCategories: ['Konsol', 'Oyunlar', 'Aksesuarlar'],
            },
            {
                category: 'Bilgisayar',
                subCategories: [
                    'Oyuncu Laptop PC',
                    'PC Oyunları',
                    'Oyuncu Masaüstü PC',
                    'Oyuncu Donanımları',
                    'Klavye',
                    'Mouse',
                    'Kulaklık',
                    'Direksiyon Seti',
                    'Joystick & Gamepad Diğer Oyun Konsolları',
                    'Koleksiyon & Figür',
                    'Yurt Dışından',
                ],
            },
        ],
    },
    10: {
        subCount: 11,
        column: 3,
        category: 'Moda',
        subCategories: [
            {
                category: 'Moda Anasayfa',
                subCategories: [],
            },
            {
                category: 'Moda Kampanyaları',
                subCategories: [],
            },
            {
                category: 'Kadın',
                subCategories: [
                    'Giyim',
                    'Elbise',
                    'Triko & Kazak',
                    'Kaban, Mont',
                    'Sweatshirt',
                    'Bluz',
                    'Gömlek',
                    'Pantolon',
                    'Kot Etek, Kadın Kot Ceket',
                    'T-Shirt',
                    'Ceket',
                    'Etek',
                    'Tayt',
                    'Trençkot',
                    'Hamile Giyim',
                    'Spor Giyim',
                    'Büyük Beden',
                    'Tesettür Giyim',
                    'İç Giyim',
                    'Plaj Giyim',
                    'Kadın Pijama',
                    'Kadın Ev Rahatlığı',
                ],
            },
            {
                category: 'Kadın Aksesuar & Takı',
                subCategories: [
                    'Saat',
                    'Güneş Gözlüğü',
                    'Takı & Bijuteri',
                    'Mücevher',
                ],
            },
            {
                category: 'Erkek',
                subCategories: [
                    'Giyim',
                    'T-Shirt',
                    'Polo T-shirt',
                    'Gömlek',
                    'Pantolon',
                    'Şort',
                    'Eşofman',
                    'Sweatshirt',
                    'Ceket',
                    'Takım Elbise',
                    'Yağmurluk',
                    'Triko & Kazak',
                    'Mont & Kaban',
                    'Erkek Kot Gömlek, Erkek Denim Pantolonlar',
                    'Spor Giyim',
                    'Outdoor Giyim',
                    'Klasik Giyim',
                    'İç Giyim',
                    'Plaj Giyim',
                    'Pijama & Ev Giyim',
                ],
            },
            {
                category: 'Erkek Aksesuar & Takı',
                subCategories: ['Saat', 'Güneş Gözlüğü', 'Takı', 'Aksesuar'],
            },
            {
                category: 'Altın',
                subCategories: [],
            },
            {
                category: 'Outdoor Giyim & Ayakkabı',
                subCategories: [],
            },
            {
                category: 'Ayakkabı & Çanta',
                subCategories: [
                    'Kadın Ayakkabı',
                    'Günlük Ayakkabı',
                    'Spor Ayakkabı',
                    'Klasik Ayakkabı',
                    'Topuklu Ayakkabı',
                    'Kadın Çizme, Kadın Bot',
                    'Kadın Sandalet, Kadın Terlik',
                    'Kadın Sandalet',
                    'Erkek Ayakkabı',
                    'Günlük Ayakkabı',
                    'Spor Ayakkabı',
                    'Klasik Ayakkabı',
                    'Outdoor Ayakkabı',
                    'Bot',
                    'Erkek Sandalet, Erkek Terlik',
                    'Erkek Sandalet',
                    'Sneaker',
                    'Koşu Ayakkabısı',
                    'Kadın Çanta',
                    'Erkek Çanta',
                    'Valiz & Seyahat',
                ],
            },
            {
                category: 'Çocuk',
                subCategories: [
                    'Kız Çocuk',
                    'Erkek Çocuk',
                    'Bebek',
                    'Kız Çocuk Ayakkabısı',
                    'Erkek Çocuk Ayakkabısı',
                    'Bebek Ayakkabısı',
                ],
            },
            {
                category: 'Yurt Dışından',
                subCategories: [],
            },
        ],
    },
};
