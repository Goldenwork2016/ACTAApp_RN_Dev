import React from 'react';
import { View, Modal, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

export default class AlertModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: true
        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ visible: false });
        }, 2000);
    }

    closeModal = () => {
        setTimeout(() => { this.setState({ visible: false }) }, 1000)
    }

    render() {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.visible}>
                <View style={styles.modalMainContainer}>
                    <View style={styles.container}>
                        <Text style={styles.text}>END WORKOUT</Text>
                        <Text style={styles.text}>Are you sure you want to end</Text>
                        <Text style={styles.text}>your workout?</Text>
                    </View>
                    <TouchableOpacity>
                        <Text>Complete Workout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Ouit Workout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Dismiss</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalMainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    container: {
        width: "80%",
        borderRadius: 8,
        backgroundColor: "white",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        paddingBottom: 25
    },
    logo: {
        width: "80%",
        resizeMode: "contain"
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#74CCDC",
        textAlign: 'center'
    }
});