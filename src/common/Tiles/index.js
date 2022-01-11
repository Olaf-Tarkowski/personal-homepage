import { nanoid } from "@reduxjs/toolkit";
import { Line, List, ListItem, Tile, Title } from "./styled";

const Tiles = ({ title, data }) => {
    return (
        <Tile>
            <Title>
                {title}
            </Title>
            <List>
                {data.map(target => {
                    return (
                        <ListItem key={nanoid()}><Line>{target}</Line></ListItem>
                    )
                })}
            </List>
        </Tile>
    );
};

export default Tiles;