export default class Treks {


    // --------------------------------------------------------------------------
    constructor() {

        this.treksJsonList =
        [
            '{  "id": "1", \
                "title": "Costeggiando l\'Elsa", \
                "description": "Colle Val d\'Elsa: Costeggiando l\'Elsa da Ponte di Spugna a Gracciano", \
                "trackfile": "20181021_Elsa_da_Ponte_di_Spugna_a_Gracciano.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Chianti", \
                "clArea": "Toscana" \
            }',
            '{  "id": "2", \
                "title": "Alpe Tre Potenze", \
                "description": "Da Le Regine all\'Abetone passando per la valle del Sestaione, il lago nero, l\'Alpe Tre Potenze, Monte Gomito e il Selletta", \
                "trackfile": "20180909_LeRegine_LagoNero_AlpeTrePotenze_Abetone.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Abetone", \
                "clArea": "Toscana" \
            }',
            '{  "id": "3", \
                "title": "Periplo di Monte Morello", \
                "description": "Da Sesto Fiorentino a Legri passando per le tre punte di Monte Morello", \
                "trackfile": "20180603_periplo_monte_morello.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Monte Morello", \
                "clArea": "Toscana" \
            }',
            '{  "id": "4", \
                "title": "Monte Morello, sgambata sopra Colonnata", \
                "description": "Sesto Fiorentino - Monte Morello, sgambata sopra Colonnata toccando il Viottolone Ginori, passando per il Cipressaio, la Fonte Giallina (con il Presepe), la Torre di Carmignanello e le Cave", \
                "trackfile": "20181020_morello_basso_lato_colonnata.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Monte Morello", \
                "clArea": "Toscana" \
            }',
            '{  "id": "5", \
                "title": "Monte Morello, Sgambata sopra le Cappelle", \
                "description": "Sesto Fiorentino - Monte Morello, semplice itinerario sopra le Cappelle avvicinandosi a Poggio Bati", \
                "trackfile": "20181007_SgambataMonteMorelloVicinoCasa.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Monte Morello", \
                "clArea": "Toscana" \
            }',
            '{  "id": "6", \
                "title": "Cinque escursioni sul Gran Paradiso", \
                "description": "Valle d\'Aosta, Gran Paradiso - Da Valnontey a Ceresole Reale (5 giorni)", \
                "trackfile": "201808_GranParadiso.gpx", \
                "nation": "Italia", \
                "region": "Val d\'Aosta", \
                "area": "Gran Paradiso", \
                "clArea": "Italia" \
            }',
            '{  "id": "7", \
                "title": "Valnontey - Rifugio Sella", \
                "description": "Valle d\'Aosta, Gran Paradiso - Da Valnontey al Rifugio Sella passando per i capanni dell\'Herbetet", \
                "trackfile": "20180820_Valnontey_CapanniHerbetet_RifSella.gpx", \
                "nation": "Italia", \
                "region": "Val d\'Aosta", \
                "area": "Valnontey", \
                "clArea": "Italia" \
            }',
            '{  "id": "8", \
                "title": "Il Col Loson", \
                "description": "Valle d\'Aosta, Gran Paradiso - Dal Rifugio Sella alla Valsavarenche superando il Col Lauson", \
                "trackfile": "20180821_RifSella_ColLauson_Valsavarenche.gpx", \
                "nation": "Italia", \
                "region": "Val d\'Aosta", \
                "area": "Valsavarenche", \
                "clArea": "Italia" \
            }',
            '{  "id": "9", \
                "title": "Da Pont al Rifugio Savoia", \
                "description": "Valle d\'Aosta, Gran Paradiso - da Pont (Valsavarenche) al Rifugio Savoia (Colli del Nivolet)", \
                "trackfile": "20180822_Pont_RifSavoia.gpx", \
                "nation": "Italia", \
                "region": "Val d\'Aosta", \
                "area": "Valsavarenche", \
                "clArea": "Italia" \
            }',
            '{  "id": "10", \
                "title": "Il Col Leynir", \
                "description": "Gran Paradiso, tra la Val d\'Aosta e il Piemonte - Giro sopra il Rifugio Savoia: laghi e Col Leynir", \
                "trackfile": "20180823_RifSavoia_Laghi_ColLeynir.gpx", \
                "nation": "Italia", \
                "region": "Val d\'Aosta", \
                "area": "Nivolet", \
                "clArea": "Italia" \
            }',
            '{  "id": "11", \
                "title": "Dal Rifugio Savoia a Ceresole Reale", \
                "description": "Gran Paradiso, Piemonte - Dal Rifugio Savoia a Ceresole Reale passando per il Colle della Terra e il lago Lillet", \
                "trackfile": "20180824_RifSavoia_ColleDellaTerra_RifMila.gpx", \
                "nation": "Italia", \
                "region": "Piemonte", \
                "area": "Nivolet", \
                "clArea": "Italia" \
            }',
            '{  "id": "12", \
                "title": "Escursione nel Landmannalaugar", \
                "description": "Escursione dal campo base del Landmannalaugar con salita al Blahnukur", \
                "trackfile": "20180701_Landmannalaugar_Blahnukur.gpx", \
                "nation": "Islanda", \
                "region": "Landmannalaugar", \
                "area": "Landmannalaugar", \
                "clArea": "Islanda" \
            }',
            '{  "id": "13", \
                "title": "Escursione nella regione del Thorsmork", \
                "description": "Breve passeggiata nel Thorsmork partendo da Basar", \
                "trackfile": "20180702_Thorsmork.gpx", \
                "nation": "Islanda", \
                "region": "Thorsmork", \
                "area": "Thorsmork", \
                "clArea": "Islanda" \
            }',
            '{  "id": "14", \
                "title": "Passeggiata sopra Skogafoss", \
                "description": "Islanda - Passeggiata sopra Skogafoss nella parte iniziale del trekking Skógar-Þórsmörk", \
                "trackfile": "20180703_Skogafoss.gpx", \
                "nation": "Islanda", \
                "region": "South Islanda", \
                "area": "Skogafoss", \
                "clArea": "Islanda" \
            }',
            '{  "id": "15", \
                "title": "Relitto aereo vicino Vik", \
                "description": "Il relitto aereo presso la spiaggia di Vik", \
                "trackfile": "20180703_VikRelittoAereo.gpx", \
                "nation": "Islanda", \
                "region": "South Islanda", \
                "area": "Vik", \
                "clArea": "Islanda" \
            }',
            '{  "id": "16", \
                "title": "Passeggiata nello Skaftafell", \
                "description": "Skaftafell, anello verso il Kristinatindar", \
                "trackfile": "20180705_SkaftafellAnelloStKristine.gpx", \
                "nation": "Islanda", \
                "region": "South Islanda", \
                "area": "Skaftafell", \
                "clArea": "Islanda" \
            }',
            '{  "id": "17", \
                "title": "Le cascate di Hengifoss", \
                "description": "Le cascate di Hengifoss", \
                "trackfile": "20180707_CascataHengifoss.gpx", \
                "nation": "Islanda", \
                "region": "East Islanda", \
                "area": "Hallormsstadhur", \
                "clArea": "Islanda" \
            }',
            '{  "id": "18", \
                "title": "I canyon di Asbyrgi", \
                "description": "Asbyrgi, lo zoccolo del cavallo di Odino visto dall\'alto", \
                "trackfile": "20180709_Asbyrgi.gpx", \
                "nation": "Islanda", \
                "region": "North East Islanda", \
                "area": "Asbyrgi", \
                "clArea": "Islanda" \
            }',
            '{  "id": "19", \
                "title": "Escursione nel Vesturdalur", \
                "description": "Vesturdalur: salita al Raudholar e ritorno", \
                "trackfile": "20180709_Vesturdalur_Raudholar.gpx", \
                "nation": "Islanda", \
                "region": "North East Islanda", \
                "area": "Vesturdalur", \
                "clArea": "Islanda" \
            }',
            '{  "id": "20", \
                "title": "800 gradini e Calvana sud", \
                "description": "Sulla Calvana sopra Prato. 800 gradini più una facile escursione con vista sulla piana, Prato e Firenze", \
                "trackfile": "20190101_800gradini_calvana.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Calvana", \
                "clArea": "Toscana" \
            }',
            '{  "id": "21", \
                "title": "Monte Morello, Circuito ad anello tra il Gualdo e le tre punte", \
                "description": "Escursione sul Morello con salita sulla prima punta e discesa dal Rompistinchi", \
                "trackfile": "20190103_Gualdo_cornacchiaccia.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Monte Morello", \
                "clArea": "Toscana" \
            }',
            '{  "id": "22", \
                "title": "Monte Gennaro e Volmiano", \
                "description": "Anello sopra Legri: monte Gennaro e Volmiano", \
                "trackfile": "20190106_Legri_MonteGennaro_Volmiano.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Monte Morello", \
                "clArea": "Toscana" \
            }',
            '{  "id": "23", \
                "title": "Escursione sulla Calvana", \
                "description": "Un\'escursione sul lato ovest della Calvana", \
                "trackfile": "20190120_Calvana.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Monte Morello", \
                "clArea": "Toscana" \
            }',
            '{  "id": "24", \
                "title": "Nei dintorni di Radda in Chianti", \
                "description": "Un\'escursione nel Chianti nei dintorni di Radda in Chianti", \
                "trackfile": "20190224_Chianti_vicino_radda.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Chianti", \
                "clArea": "Toscana" \
            }',
            '{  "id": "25", \
                "title": "Artimino", \
                "description": "Un\'escursione nei dintorni di Artimino", \
                "trackfile": "20190303_Artimino.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Prato", \
                "clArea": "Toscana" \
            }',
            '{  "id": "26", \
                "title": "Putizze di Sasso Pisano", \
                "description": "Un\'escursione nell\'area geotermica di Sasso Pisano e Monterotondo Marittimo", \
                "trackfile": "20190310_PutizzeDiSassoPisano.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Colline metallifere", \
                "clArea": "Toscana" \
            }',
            '{  "id": "27", \
                "title": "Escursione su Monte Morello basso", \
                "description": "Una sgambata sulla parte bassa di Monte Morello con partenza e ritorno a Sesto Fiorentino", \
                "trackfile": "20190315_Morello.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Monte Morello", \
                "clArea": "Toscana" \
            }',
            '{  "id": "28", \
                "title": "Isola d\'Elba: da Zanca a Pomonte", \
                "description": "Impegnativa passeggiata all\'isola d\'Elba: da Zanca a Pomonte passando per Marciana e Monte Capanne", \
                "trackfile": "20170903_Zanca_Marciana_MonteCapanne_Pomonte.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Isola d\'Elba", \
                "clArea": "Toscana" \
            }',
            '{  "id": "29", \
                "title": "Sul monte Falterona", \
                "description": "Escursione sul monte Falterona dalla fonte del Borbotto, con passaggio sul monte Falco, lago degli Idoli e Capo d\'Arno", \
                "trackfile": "20190324_Falterona.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Parco Foreste Casentinesi, monte Falterona e Campigna", \
                "clArea": "Toscana" \
            }',
            '{  "id": "30", \
                "title": "Corsetta a Sesto Fiorentino", \
                "description": "Corsetta a Sesto Fiorentino sulle pendici di Monte Morello", \
                "trackfile": "20190509_CorsaSesto.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Monte Morello", \
                "clArea": "Toscana" \
            }',

            '{  "id": "31", \
                "title": "Da Querceto al rifugio Gualdo", \
                "description": "Dalla chiesa di Querceto al Rifugio Gualdo", \
                "trackfile": "20190511_1_QuercetoGualdo.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Monte Morello", \
                "clArea": "Toscana" \
            }',
            '{  "id": "32", \
                "title": "Anello del Gualdo", \
                "description": "Percorso ad anello Gualdo - tre punte del Morello", \
                "trackfile": "20190511_2_AnelloGualdo.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Monte Morello", \
                "clArea": "Toscana" \
            }',
            '{  "id": "33", \
                "title": "Collina - Sesto", \
                "description": "Collina - Sesto", \
                "trackfile": "20190511_3_CollinaQuercetoViaCappelle.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Monte Morello", \
                "clArea": "Toscana" \
            }',
            '{  "id": "34", \
                "title": "Via degli Dei 1", \
                "description": "Via degli Dei tappa 1", \
                "trackfile": "via_degli_dei_01.gpx", \
                "nation": "Italia", \
                "region": "Emilia Romagna", \
                "area": "Via degli Dei", \
                "clArea": "Italia" \
            }',
            '{  "id": "35", \
                "title": "Via degli Dei 2", \
                "description": "Via degli Dei tappa 1", \
                "trackfile": "via_degli_dei_02.gpx", \
                "nation": "Italia", \
                "region": "Emilia Romagna", \
                "area": "Via degli Dei", \
                "clArea": "Italia" \
            }',
            '{  "id": "36", \
                "title": "Foresta del Teso", \
                "description": "Una passeggiata nella Foresta del Testo, sopra Maresca, Appennino pistoiese", \
                "trackfile": "20190530_ForestaDelTeso.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Appennino Tosco Emiliano", \
                "clArea": "Toscana" \
            }',
        ];

        this.treksList = [];

        this.treksJsonList.forEach(e => {
            this.treksList.push(JSON.parse(e));
        });
    }

    // --------------------------------------------------------------------------
    getTreks() {
        return this.treksList;
    }

    // --------------------------------------------------------------------------
    getTreksByArea(area) {
        var selectedTreks = [];

        this.getTreks().forEach(e => {
            if (e.clArea.toLowerCase() === area.toLowerCase()) {
                selectedTreks.push(e);
            }
        });

        return selectedTreks;
    }

    // --------------------------------------------------------------------------
    getClassificationAreas() {

        return this.getTreks().reduce((a, b) => {

            if (a.indexOf(b.clArea) == -1) {
                a.push(b.clArea);
            }
            return a;

        }, []);
    }

    // --------------------------------------------------------------------------
    getTrekById(idToSearch) {
        
        return this.treksList.find(e => {
            return (e.id === idToSearch);
        });
    }
}
