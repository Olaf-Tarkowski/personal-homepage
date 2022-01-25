import { nanoid } from "@reduxjs/toolkit";
import targetList from "../Data/targetList";
import { Text, ListItem, Tile, Title, Line } from "../styled";
import { List } from "./styled";

const Goals = () => {
    return (
        <Tile>
            <Title>
                What I want to learn next 🚀
            </Title>
            <Line />
            <List>
                {targetList.map(target => {
                    return (
                        <ListItem key={nanoid()}><Text>{target}</Text></ListItem>
                    )
                })}
            </List>
        </Tile>
    );
};

export default Goals;