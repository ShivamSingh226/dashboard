import { GridColumnMenuContainer,GridColumnMenuHideItem,GridColumnMenuFilterItem } from "@mui/x-data-grid";


const CustomColumnMenu = (props) => {
    const{hideMenu,currentColumn,open}=props;

  return (
    <GridColumnMenuContainer
   hideMenu={hideMenu}
   colDef={currentColumn}
   open={open}>
        <GridColumnMenuFilterItem onClick={hideMenu} colDef={currentColumn}/>
        <GridColumnMenuHideItem onClick={hideMenu} colDef={currentColumn}/>
    </GridColumnMenuContainer>
  )
}

export default CustomColumnMenu