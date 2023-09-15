import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { Button } from '@rneui/themed';
import { Card } from '@rneui/themed';
import { Avatar } from '@rneui/themed';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Welcome!</Text>
            <StatusBar style="auto" />

            <View row align="center" spacing={4}>
                <CheckBox checked title="Label" />
                <CheckBox checked disabled title="Label" />
            </View>

            <Button radius={"sm"} type="solid">
                Save
            </Button>

            <Button title="Solid" type="solid" loading />

            <Card>
                <Text>Word of the Day</Text>
                <Text h4>be-nev-o=lent</Text>
                <Text>adjective</Text>
                <Text>
                     well meaning and kindly.
                    {'"a benevolent smile"'}
                </Text>
                <Button size="sm" type="clear">
                     Learn More
                </Button>
            </Card>

            <View>
                <Avatar
                    size={32}
                    rounded
                    title="Rd"
                    containerStyle={{ backgroundColor: "blue" }}
                />
                <Avatar
                    size={32}
                    rounded
                    title="AB"
                    containerStyle={{ backgroundColor: "purple" }}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
