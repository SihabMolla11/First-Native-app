import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './App/TabNavigatro/TabNavigator';
import AuthProvider from './App/authContext/AuthProvider';

const App = () => {
    return (
        <NavigationContainer>
            <AuthProvider>
                <TabNavigator />
            </AuthProvider>
        </NavigationContainer>
    );
};

export default App;
