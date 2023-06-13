import { AppBanner, AppLayout, CardMenu, MainContainer, Menuitem} from './appMenu.styles';
import logoImage from '../../../assets/images/logov.png';
import Logo from '../Logo';
import { appMenuItems } from '../../../assets/data';
import Text from '../Text';
import UserDropdown from "./userDropdown"
import Notification from '../utils/Notification';

const AppMenu = ({component}, page) => {
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
                    <Menuitem href={item.link} style={item.name === page ? {backgroundColor: "antiquewhite"} : {backgroundColor: "none"}} key={item.name}>
                        <a href={item.link} style={{display: "flex", color: "#6c757d "}}>
                            <span style={{marginRight: "10px"}}>{item.icon}</span>
                            <Text content={item.name} />
                        </a>
                    </Menuitem>
                )}
            </CardMenu>
            <MainContainer>
                {component}
            </MainContainer>
            <Notification />
        </AppLayout>
     );
}
 
export default AppMenu;