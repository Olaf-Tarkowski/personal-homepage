import { nanoid } from "@reduxjs/toolkit";
import skillList from "../Data/skillList";
import { Text, ListItem, Tile, Title, Line } from "../styled";
import { List } from "./styled";

const Skills = () => {
    return (
        <Tile>
            <Title>
                My skillset includes 🛠️
            </Title>
            <Line />
            <List>
                {skillList.map(target => {
                    return (
                        <ListItem key={nanoid()}><Text>{target}</Text></ListItem>
                    )
                })}
            </List>
        </Tile>
    );
};

export default Skills;