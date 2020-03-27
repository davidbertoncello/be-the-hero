import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({

    container : {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },

    header : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    incident : {
        marginTop: 48,
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },

    incidentProperty : {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },

    incidentValue : {
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
        marginBottom: 24
    },

    contactBox : {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },

    heroTitle : {
        fontWeight: 'bold',
        color: '#13131a',
        fontSize: 25,
        lineHeight: 30,
    },

    heroDescription : {
        color: '#737380',
        fontSize: 15,
        marginTop: 16
    },

    actions : {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    action : {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText : {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },




    headerText : {
        fontSize: 15,
        color: '#737380'
    },

    headerTextBold : {
        fontWeight: 'bold'
    },

    title : {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description : {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    incidentList : {
        marginTop: 32
    },




    detailsButton : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText : {
        fontSize: 15,
        color: '#e02041',
        fontWeight: 'bold'
    }

})