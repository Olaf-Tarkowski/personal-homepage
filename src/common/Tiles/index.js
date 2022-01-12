import { nanoid } from "@reduxjs/toolkit";
import { Text, List, ListItem, Tile, Title, Line } from "./styled";

const Tiles = ({ title, data }) => {
    return (
        <Tile>
            <Title>
                {title}
            </Title>
            <Line />
            <List>
                {data.map(target => {
                    return (
                        <ListItem key={nanoid()}><Text>{target}</Text></ListItem>
                    )
                })}
            </List>
        </Tile>
    );
};

export default Tiles;