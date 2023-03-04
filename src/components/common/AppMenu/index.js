import { AppBanner, AppLayout, CardMenu, MainContainer, Menuitem} from './appMenu.styles';
import logoImage from '../../../assets/images/logov.png';
import Logo from '../Logo';

import { appMenuItems } from '../../../assets/data';
import Text from '../Text';
import UserPage from '../../../pages/User';
import UserDropdown from "./userDropdown"

const AppMenu = () => {
    const { menuItems } = appMenuItems;
    return ( 
        <AppLayout>
            <AppBanner>
                <UserDropdown />
            </AppBanner>
            <CardMenu> 
                <Logo   
                    logoStyle={{width: "150px", marginBottom: "15px", padding: "1rem"}}
                    href="/app"
                    logoSrc={logoImage}
                    title="App Creative"
                    className="main-logo"
                />
                <span style={{marginBottom: '40px'}}></span>
                {menuItems.map((item) => 
                    <Menuitem>
                        <span style={{marginRight: "10px"}}>{item.icon}</span>
                        <Text content={item.name} />
                    </Menuitem>
                )}
            </CardMenu>
            <MainContainer>
                <UserPage />
            </MainContainer>
        </AppLayout>
     );
}
 
export default AppMenu;