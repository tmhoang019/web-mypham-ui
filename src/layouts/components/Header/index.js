import { isTablet, isDesktop } from 'react-device-detect';
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

function Header() {
  if (isDesktop) {
    return <DesktopHeader></DesktopHeader>
  } else if(isTablet){
    return <MobileHeader></MobileHeader>
  } else {
    return <MobileHeader></MobileHeader>
  }
  
}

export default Header;
