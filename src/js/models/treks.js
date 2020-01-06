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
            '{  "id": "37", \
                "title": "Sotto il Catinaccio", \
                "description": "Tra i rifugi, sotto il Catinaccio e poi fino al lago di Carezza", \
                "trackfile": "2019-07-06_0929__20190706_coronelle.gpx", \
                "nation": "Italia", \
                "region": "Trentino Alto Adige", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "38", \
                "title": "Rasciesa e la forcella Pana", \
                "description": "In val Gardena salendo a Rasciesa, passando dalla forcella Pana e scendendo sotto le Odle", \
                "trackfile": "2019-07-08_0938__20190708_forcella_pana.gpx", \
                "nation": "Italia", \
                "region": "Trentino Alto Adige", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "39", \
                "title": "Le cinque Torri", \
                "description": "Le cinque Torri", \
                "trackfile": "2019-07-09_1016__20190709_cinque_torri.gpx", \
                "nation": "Italia", \
                "region": "Veneto", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "40", \
                "title": "Salita al rifugio Antermoia", \
                "description": "Salita la rifugio Antermoia dal Rifugio Micheluzzi e ritorno a Campitello di Fassa", \
                "trackfile": "2019-07-10_1044__20190710_antermoia.gpx", \
                "nation": "Italia", \
                "region": "Trentino Alto Adige", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "41", \
                "title": "Anello delle dolomiti friulane 1: da Forni di Sopra al Rifugio Giaf", \
                "description": "Anello delle dolomiti friulane 1: da Forni di Sopra al Rifugio Giaf", \
                "trackfile": "2019-07-21_1616__20190721_1616_adf1_forni_di_sopra_rifugio_giaf.gpx", \
                "nation": "Italia", \
                "region": "Friuli Venezia Giulia", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "42", \
                "title": "Anello delle dolomiti friulane 2: dal rifugio Giaf al rifugio Pordenone", \
                "description": "Anello delle dolomiti friulane 2: dal rifugio Giaf al rifugio Pordenone", \
                "trackfile": "2019-07-22_0805__20190722_0805_adf2_rifugio_giaf_rifugio_pordenone.gpx", \
                "nation": "Italia", \
                "region": "Friuli Venezia Giulia", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "43", \
                "title": "Anello delle dolomiti friulane 3: dal rifugio Pordenone al rifugio Padova", \
                "description": "Anello delle dolomiti friulane 3: dal rifugio Pordenone al rifugio Padova", \
                "trackfile": "2019-07-23_0818__20190723_0818_adf3_rifugio_pordenone_rifugio_padova.gpx", \
                "nation": "Italia", \
                "region": "Friuli Venezia Giulia", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
              '{  "id": "44", \
                "title": "Anello delle dolomiti friulane 4: dal rifugio Padova al rifugio Giaf", \
                "description": "Anello delle dolomiti friulane 4: dal rifugio Padova al rifugio Giaf", \
                "trackfile": "2019-07-24_0831__20190724_0831_adf4_rifugio_padova_rifugio_giaf.gpx", \
                "nation": "Italia", \
                "region": "Friuli Venezia Giulia", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "45", \
                "title": "Anello delle dololiti friulane", \
                "description": "Anello delle dolomiti friulane", \
                "trackfile": "2019-07_anello_delle_dolomiti_friulane.gpx", \
                "nation": "Italia", \
                "region": "Friuli Venezia Giulia", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "46", \
                "title": "Dalla val di Fassa alla Val Gardena - Dolomiti 2019", \
                "description": "Dalla val di Fassa alla val Gardena - Dolomiti 2019", \
                "trackfile": "201907_dolomititrek2019.gpx", \
                "nation": "Italia", \
                "region": "Trentino Alto Adige", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "47", \
                "title": "Catinaccio: dalle funivie di Pera di Fassa al rifugio Vajolet con salita al passo Santner", \
                "description": "Catinaccio: dalle funivie di Pera di Fassa al rifugio Vajolet con salita al passo Santner", \
                "trackfile": "20190714_intorno_al_rifugio_vajolet.gpx", \
                "nation": "Italia", \
                "region": "Trentino Alto Adige", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "48", \
                "title": "Dal rifugio Vajolet al rifugio Sassopiatto", \
                "description": "Dal rifugio Vajolet al rifugio Sassopiatto", \
                "trackfile": "20190715_dal_rifugio_vajolet_al_rif_sassopiatto.gpx", \
                "nation": "Italia", \
                "region": "Trentino Alto Adige", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "49", \
                "title": "Dal rifugio Sassopiatto a Plan de Gralba", \
                "description": "Dal rifugio Sassopiatto a Plan de Gralba", \
                "trackfile": "20190716_dal_rif_sassopiatto_a_plan_de_gralba.gpx", \
                "nation": "Italia", \
                "region": "Trentino Alto Adige", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "50", \
                "title": "Da passo Gardena al rifugio Puez", \
                "description": "Da passo Gardena al rifugio Puez", \
                "trackfile": "20190717_da_passo_gardena_a_rif_puez.gpx", \
                "nation": "Italia", \
                "region": "Trentino Alto Adige", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "51", \
                "title": "Dal rifugio Puez alla Cima Puez Est e ritorno", \
                "description": "Dal rifugio Puez alla Cima Puez Est e ritorno", \
                "trackfile": "20190718_da_rif_puez_alla_cima_puez_e_ritorno.gpx", \
                "nation": "Italia", \
                "region": "Trentino Alto Adige", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "52", \
                "title": "Anello della Gardenaccia e salita al Col da la Sonè con partenza e arrivo al rifugio Puez", \
                "description": "Anello della Gardenaccia e salita al Col da la Sonè con partenza e arrivo al rifugio Puez", \
                "trackfile": "20190719_giro_altopiano_gardenaccia.gpx", \
                "nation": "Italia", \
                "region": "Trentino Alto Adige", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "53", \
                "title": "Dal rifugio Puez al Col Raiser passando per la forcella de Forces de Sieles", \
                "description": "Dal rifugio Puez al Col Raiser passando per la forcella de Forces de Sieles", \
                "trackfile": "20190720_dal_rif_puez_al_col_raiser.gpx", \
                "nation": "Italia", \
                "region": "Trentino Alto Adige", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "54", \
                "title": "Dal Col Raiser alla Malga Brogles passando dalla forcella Pana e proseguimento fino alla funivia a Furnes", \
                "description": "Dal Col Raiser alla Malga Brogles passando dalla forcella Pana e proseguimento fino alla funivia a Furnes", \
                "trackfile": "20190721_col_raiser_malga_brogles_dalla_forcella_pana.gpx", \
                "nation": "Italia", \
                "region": "Trentino Alto Adige", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "55", \
                "title": "Andata e ritorno Col Raiser - Seceda", \
                "description": "Andata e ritorno Col Raiser - Seceda", \
                "trackfile": "20190721_col_raiser_seceda_a_r.gpx", \
                "nation": "Italia", \
                "region": "Trentino Alto Adige", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "56", \
                "title": "Salita al Pic dal Col Raiser con discesa fino alla funivia Fermeda passando dalla malga del formaggio", \
                "description": "Salita al Pic dal Col Raiser con discesa fino alla funivia Fermeda passando dalla malga del formaggio", \
                "trackfile": "20190722_col_raiser_pic_e_discesa_alla_funivia_fermeda.gpx", \
                "nation": "Italia", \
                "region": "Trentino Alto Adige", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "57", \
                "title": "Discesa da Seceda a Col Raiser passando da Pieralongia", \
                "description": "Discesa da Seceda a Col Raiser passando da Pieralongia", \
                "trackfile": "20190722_seceda_col_raiser_con_variante_pieralongia.gpx", \
                "nation": "Italia", \
                "region": "Trentino Alto Adige", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "58", \
                "title": "Anello delle Dolomiti Friulane: Salita al rifugio Giaf da Forni di Sopra", \
                "description": "Anello delle Dolomiti Friulane Tappa 1: Salita al rifugio Giaf da Forni di Sopra", \
                "trackfile": "adf01_salita_al_rifugiogiaf_da_forni_di_sopra.gpx", \
                "nation": "Italia", \
                "region": "Friuli Venezia Giulia", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "59", \
                "title": "Anello delle Dolomiti Friulane Tappa 1: dal rifugio Giaf al rifugio Flaiban Pacherini", \
                "description": "Anello delle Dolomiti Friulane Tappa 2: dal rifugio Giaf al rifugio Flaiban Pacherini", \
                "trackfile": "adf02_dal_rifugiogiaf_al_rifugioflaibanpacherini.gpx", \
                "nation": "Italia", \
                "region": "Friuli Venezia Giulia", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "60", \
                "title": "Anello delle Dolomiti Friulane Tappa 2: dal rifugio Flaiban Pacherini al rifugio Pordenone con salita sul monte Pramaggiore", \
                "description": "Anello delle Dolomiti Friulane Tappa 3: dal rifugio Flaiban Pacherini al rifugio Pordenone con salita sul monte Pramaggiore", \
                "trackfile": "adf03_dal_rifugioflaibanpacherini_al_rifugiopordenone.gpx", \
                "nation": "Italia", \
                "region": "Friuli Venezia Giulia", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "61", \
                "title": "Anello delle Dolomiti Friulane Tappa 3: dal rifugio Pordenone al rifugio Padova", \
                "description": "Anello delle Dolomiti Friulane Tappa 3: dal rifugio Pordenone al rifugio Padova", \
                "trackfile": "adf04_dal_rifugiopordenone_al_rifugiopadova.gpx", \
                "nation": "Italia", \
                "region": "Friuli Venezia Giulia", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "62", \
                "title": "Anello delle Dolomiti Friulane Tappa 4: dal rifugio Padova al rifugio Giaf", \
                "description": "Anello delle Dolomiti Friulane Tappa 4: dal rifugio Padova al rifugio Giaf", \
                "trackfile": "adf05_dal_rifugiopadova_al_rifugiogiaf.gpx", \
                "nation": "Italia", \
                "region": "Friuli Venezia Giulia", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "63", \
                "title": "Anello delle Dolomiti Friulane: discesa dal rifugio Giaf a Forni di Sopra attraverso il Truoi dal Von", \
                "description": "Anello delle Dolomiti Friulane: discesa dal rifugio Giaf a Forni di Sopra attraverso il Truoi dal Von", \
                "trackfile": "adf06_discesa_dal_rifugiogiaf_a_forni_di_sopra.gpx", \
                "nation": "Italia", \
                "region": "Friuli Venezia Giulia", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "64", \
                "title": "Anello delle Dolomiti Friulane. Percorso completo partendo da Forni di Sopra", \
                "description": "Anello delle Dolomiti Friulane. Percorso completo partendo da Forni di Sopra", \
                "trackfile": "adf00_completo.gpx", \
                "nation": "Italia", \
                "region": "Friuli Venezia Giulia", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "65", \
                "title": "Dolomiti Friulane: semplice passeggiata sopra il rifugio Giaf (Monte Boschet)", \
                "description": "Dolomiti Friulane: semplice passeggiata sopra il rifugio Giaf (Monte Boschet)", \
                "trackfile": "breve_escurione_sopra_il_rifugio_giaf.gpx", \
                "nation": "Italia", \
                "region": "Friuli Venezia Giulia", \
                "area": "Dolomiti", \
                "clArea": "Italia" \
            }',
            '{  "id": "66", \
                "title": "Da Fornovolasco (Aleva) al Monte Forato", \
                "description": "Da Fornovolasco (Aleva) al Monte Forato", \
                "trackfile": "20190915_MonteForato.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Alpi Apuane", \
                "clArea": "Toscana" \
            }',
            '{  "id": "67", \
                "title": "La ferrata del Monte Procinto", \
                "description": "La ferrata del Monte Procinto", \
                "trackfile": "20190921_FerrataProcinto.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Alpi Apuane", \
                "clArea": "Toscana" \
            }',
            '{  "id": "68", \
                "title": "Lago di Garda: la ferrata Susatti e Cima Capi", \
                "description": "Lago di Garda: la ferrata Susatti e Cima Capi", \
                "trackfile": "20191005_FerrataSusattiCimaCapi.gpx", \
                "nation": "Italia", \
                "region": "Trentino", \
                "area": "Lago di Garda", \
                "clArea": "Italia" \
            }',
            '{  "id": "69", \
                "title": "Lago di Garda: la ferrata Gerardo Sega", \
                "description": "Lago di Garda: la ferrata Gerardo Sega", \
                "trackfile": "20191006_FerrataGerardoSega.gpx", \
                "nation": "Italia", \
                "region": "Trentino", \
                "area": "Lago di Garda", \
                "clArea": "Italia" \
            }',
            '{  "id": "70", \
                "title": "Monte Morello: da Sesto Fiorentino alle Croci di Calenzano", \
                "description": "Monte Morello: da Sesto Fiorentino alle Croci di Calenzano", \
                "trackfile": "20200104_SestoLeCroci.gpx", \
                "nation": "Italia", \
                "region": "Toscana", \
                "area": "Monte Morello", \
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
