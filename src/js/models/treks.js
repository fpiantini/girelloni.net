import { EWOULDBLOCK } from "constants";

export default class Treks {


    // --------------------------------------------------------------------------
    constructor() {

        this.treksJsonList =
        [
            '{  "id": "1", \
                "title": "Costeggiando l\'Elsa", \
                "description": "Colle Val d\'Elsa: Costeggiando l\'Elsa da Ponte di Spugna a Gracciano", \
                "trackfile": "tracks/20181021_Elsa_da_Ponte_di_Spugna_a_Gracciano.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Chianti", \
                "clArea": "Toscana" \
            }',
            '{  "id": "2", \
                "title": "Alpe Tre Potenze", \
                "description": "Da Le Regine all\'Abetone passando per la valle del Sestaione, il lago nero, l\'Alpe Tre Potenze, Monte Gomito e il Selletta", \
                "trackfile": "tracks/20180909_LeRegine_LagoNero_AlpeTrePotenze_Abetone.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Abetone", \
                "clArea": "Toscana" \
            }',
            '{  "id": "3", \
                "title": "Periplo di Monte Morello", \
                "description": "Da Sesto Fiorentino a Legri passando per le tre punte di Monte Morello", \
                "trackfile": "tracks/20180603_periplo_monte_morello.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Monte Morello", \
                "clArea": "Toscana" \
            }',
            '{  "id": "4", \
                "title": "Monte Morello, sgambata sopra Colonnata", \
                "description": "Sesto Fiorentino - Monte Morello, sgambata sopra Colonnata toccando il Viottolone Ginori, passando per il Cipressaio, la Fonte Giallina (con il Presepe), la Torre di Carmignanello e le Cave", \
                "trackfile": "tracks/20181020_morello_basso_lato_colonnata.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Monte Morello", \
                "clArea": "Toscana" \
            }',
            '{  "id": "5", \
                "title": "Monte Morello, Sgambata sopra le Cappelle", \
                "description": "Sesto Fiorentino - Monte Morello, semplice itinerario sopra le Cappelle avvicinandosi a Poggio Bati", \
                "trackfile": "tracks/20181007_SgambataMonteMorelloVicinoCasa.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Monte Morello", \
                "clArea": "Toscana" \
            }',
            '{  "id": "6", \
                "title": "Cinque escursioni sul Gran Paradiso", \
                "description": "Valle d\'Aosta, Gran Paradiso - Da Valnontey a Ceresole Reale (5 giorni)", \
                "trackfile": "tracks/201808_GranParadiso.gpx", \
                "nation": "Italia", \
                "region": "Val d\'Aosta", \
                "area": "Gran Paradiso", \
                "clArea": "Italia" \
            }',
            '{  "id": "7", \
                "title": "Valnontey - Rifugio Sella", \
                "description": "Valle d\'Aosta, Gran Paradiso - Da Valnontey al Rifugio Sella passando per i capanni dell\'Herbetet", \
                "trackfile": "tracks/20180820_Valnontey_CapanniHerbetet_RifSella.gpx", \
                "nation": "Italia", \
                "region": "Val d\'Aosta", \
                "area": "Valnontey", \
                "clArea": "Italia" \
            }',
            '{  "id": "8", \
                "title": "Il Col Loson", \
                "description": "Valle d\'Aosta, Gran Paradiso - Dal Rifugio Sella alla Valsavarenche superando il Col Lauson", \
                "trackfile": "tracks/20180821_RifSella_ColLauson_Valsavarenche.gpx", \
                "nation": "Italia", \
                "region": "Val d\'Aosta", \
                "area": "Valsavarenche", \
                "clArea": "Italia" \
            }',
            '{  "id": "9", \
                "title": "Da Pont al Rifugio Savoia", \
                "description": "Valle d\'Aosta, Gran Paradiso - da Pont (Valsavarenche) al Rifugio Savoia (Colli del Nivolet)", \
                "trackfile": "tracks/20180822_Pont_RifSavoia.gpx", \
                "nation": "Italia", \
                "region": "Val d\'Aosta", \
                "area": "Valsavarenche", \
                "clArea": "Italia" \
            }',
            '{  "id": "10", \
                "title": "Il Col Leynir", \
                "description": "Gran Paradiso, tra la Val d\'Aosta e il Piemonte - Giro sopra il Rifugio Savoia: laghi e Col Leynir", \
                "trackfile": "tracks/20180823_RifSavoia_Laghi_ColLeynir.gpx", \
                "nation": "Italia", \
                "region": "Val d\'Aosta", \
                "area": "Nivolet", \
                "clArea": "Italia" \
            }',
            '{  "id": "11", \
                "title": "Dal Rifugio Savoia a Ceresole Reale", \
                "description": "Gran Paradiso, Piemonte - Dal Rifugio Savoia a Ceresole Reale passando per il Colle della Terra e il lago Lillet", \
                "trackfile": "tracks/20180824_RifSavoia_ColleDellaTerra_RifMila.gpx", \
                "nation": "Italia", \
                "region": "Piemonte", \
                "area": "Nivolet", \
                "clArea": "Italia" \
            }',
            '{  "id": "12", \
                "title": "Escursione nel Landmannalaugar", \
                "description": "Escursione dal campo base del Landmannalaugar con salita al Blahnukur", \
                "trackfile": "tracks/20180701_Landmannalaugar_Blahnukur.gpx", \
                "nation": "Islanda", \
                "region": "Landmannalaugar", \
                "area": "Landmannalaugar", \
                "clArea": "Islanda" \
            }',
            '{  "id": "13", \
                "title": "Escursione nella regione del Thorsmork", \
                "description": "Breve passeggiata nel Thorsmork partendo da Basar", \
                "trackfile": "tracks/20180702_Thorsmork.gpx", \
                "nation": "Islanda", \
                "region": "Thorsmork", \
                "area": "Thorsmork", \
                "clArea": "Islanda" \
            }',
            '{  "id": "14", \
                "title": "Passeggiata sopra Skogafoss", \
                "description": "Islanda - Passeggiata sopra Skogafoss nella parte iniziale del trekking Skógar-Þórsmörk", \
                "trackfile": "tracks/20180703_Skogafoss.gpx", \
                "nation": "Islanda", \
                "region": "South Islanda", \
                "area": "Skogafoss", \
                "clArea": "Islanda" \
            }',
            '{  "id": "15", \
                "title": "Relitto aereo vicino Vik", \
                "description": "Il relitto aereo presso la spiaggia di Vik", \
                "trackfile": "tracks/20180703_VikRelittoAereo.gpx", \
                "nation": "Islanda", \
                "region": "South Islanda", \
                "area": "Vik", \
                "clArea": "Islanda" \
            }',
            '{  "id": "16", \
                "title": "Passeggiata nello Skaftafell", \
                "description": "Skaftafell, anello verso il Kristinatindar", \
                "trackfile": "tracks/20180705_SkaftafellAnelloStKristine.gpx", \
                "nation": "Islanda", \
                "region": "South Islanda", \
                "area": "Skaftafell", \
                "clArea": "Islanda" \
            }',
            '{  "id": "17", \
                "title": "Le cascate di Hengifoss", \
                "description": "Le cascate di Hengifoss", \
                "trackfile": "tracks/20180707_CascataHengifoss.gpx", \
                "nation": "Islanda", \
                "region": "East Islanda", \
                "area": "Hallormsstadhur", \
                "clArea": "Islanda" \
            }',
            '{  "id": "18", \
                "title": "I canyon di Asbyrgi", \
                "description": "Asbyrgi, lo zoccolo del cavallo di Odino visto dall\'alto", \
                "trackfile": "tracks/20180709_Asbyrgi.gpx", \
                "nation": "Islanda", \
                "region": "North East Islanda", \
                "area": "Asbyrgi", \
                "clArea": "Islanda" \
            }',
            '{  "id": "19", \
                "title": "Escursione nel Vesturdalur", \
                "description": "Vesturdalur: salita al Raudholar e ritorno", \
                "trackfile": "tracks/20180709_Vesturdalur_Raudholar.gpx", \
                "nation": "Islanda", \
                "region": "North East Islanda", \
                "area": "Vesturdalur", \
                "clArea": "Islanda" \
            }',
            '{  "id": "20", \
                "title": "800 gradini e Calvana sud", \
                "description": "Sulla Calvana sopra Prato. 800 gradini più una facile escursione con vista sulla piana, Prato e Firenze", \
                "trackfile": "tracks/20190101_800gradini_calvana.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Calvana", \
                "clArea": "Toscana" \
            }',
            '{  "id": "21", \
                "title": "Monte Morello, Circuito ad anello tra il Gualdo e le tre punte", \
                "description": "Escursione sul Morello con salita sulla prima punta e discesa dal Rompistinchi", \
                "trackfile": "tracks/20190103_Gualdo_cornacchiaccia.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Monte Morello", \
                "clArea": "Toscana" \
            }',
            '{  "id": "22", \
                "title": "Monte Gennaro e Volmiano", \
                "description": "Anello sopra Legri: monte Gennaro e Volmiano", \
                "trackfile": "tracks/20190106_Legri_MonteGennaro_Volmiano.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Monte Morello", \
                "clArea": "Toscana" \
            }',
            '{  "id": "23", \
                "title": "Escursione sulla Calvana", \
                "description": "Un\'escursione sul lato ovest della Calvana", \
                "trackfile": "tracks/20190120_Calvana.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Monte Morello", \
                "clArea": "Toscana" \
            }',
            '{  "id": "24", \
                "title": "Nei dintorni di Radda in Chianti", \
                "description": "Un\'escursione nel Chianti nei dintorni di Radda in Chianti", \
                "trackfile": "tracks/20190224_Chianti_vicino_radda.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Chianti", \
                "clArea": "Toscana" \
            }',
            '{  "id": "25", \
                "title": "Artimino", \
                "description": "Un\'escursione nei dintorni di Artimino", \
                "trackfile": "tracks/20190303_Artimino.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Prato", \
                "clArea": "Toscana" \
            }',
            '{  "id": "26", \
                "title": "Putizze di Sasso Pisano", \
                "description": "Un\'escursione nell\'area geotermica di Sasso Pisano e Monterotondo Marittimo", \
                "trackfile": "tracks/20190310_PutizzeDiSassoPisano.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Colline metallifere", \
                "clArea": "Toscana" \
            }',
            '{  "id": "27", \
                "title": "Escursione su Monte Morello basso", \
                "description": "Una sgambata sulla parte bassa di Monte Morello con partenza e ritorno a Sesto Fiorentino", \
                "trackfile": "tracks/20190315_Morello.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Monte Morello", \
                "clArea": "Toscana" \
            }',
            '{  "id": "28", \
                "title": "Isola d\'Elba: da Zanca a Pomonte", \
                "description": "Impegnativa passeggiata all\'isola d\'Elba: da Zanca a Pomonte passando per Marciana e Monte Capanne", \
                "trackfile": "tracks/20170903_Zanca_Marciana_MonteCapanne_Pomonte.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Isola d\'Elba", \
                "clArea": "Toscana" \
            }',
            '{  "id": "29", \
                "title": "Sul monte Falterona", \
                "description": "Escursione sul monte Falterona dalla fonte del Borbotto, con passaggio sul monte Falco, lago degli Idoli e Capo d\'Arno", \
                "trackfile": "tracks/20190324_Falterona.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Parco Foreste Casentinesi, monte Falterona e Campigna", \
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
        
        console.log(`searching for a trek with id = ${idToSearch}`);
        return this.treksList.find(e => {
            return (e.id === idToSearch);
        });
    }
}
