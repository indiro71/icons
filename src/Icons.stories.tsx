import React, { useCallback, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import * as components from './icons/';
import { ArrowPrev } from './index';

export default {
    title: 'Icons',
    component: ArrowPrev,
    args: {
        width: 30,
        fill: 'black'
    },
} as ComponentMeta<typeof ArrowPrev>;

const Container = styled.div`
  padding: 30px;
  margin: auto;
`
const Search = styled.div`
  width: 400px;
  margin: auto;
  
  input {
    width: 100%;
    height: 20px;
    padding: 3px;
    font-size: 14px;
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`

const IconItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  margin: 15px;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  width: 70px;
  height: 70px;
  
  svg {
    max-width: 50px;
    max-height: 50px;
  }
  
  &:hover {
    background: rgba(47, 47, 47, 0.1);
  }
`

const IconTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  width: 100%;
  font-size: 12px;
  margin-top: 10px;
`

const NotFound = styled.div`
  width: 100%;
  font-size: 20px;
  margin: 30px;
  text-align: center;
`

const Template: ComponentStory<typeof ArrowPrev> = (args) => {
    const [icons, setIcons] = useState(Object.keys(components));
    const handleSearchIcons = useCallback((e) => {
        const searchStr = e.target.value.toLowerCase();
        const searchedIcons = icons.filter(icon => icon.toLowerCase().includes(searchStr));
        setIcons(searchedIcons);
    }, []);
    return (
        <Container>
            <Search>
                <input type="text" onChange={handleSearchIcons}/>
            </Search>

            <IconContainer>
                {icons?.length === 0 && <NotFound>Элементы не найдены</NotFound>}
                {icons.map(iconName => {
                    const Component = components[iconName];
                    return (<IconItem>
                        <Component key={iconName}   {...args} />
                        <IconTitle>{iconName}</IconTitle>
                    </IconItem>);
                })}
            </IconContainer>
        </Container>
    )
};

export const Icons = Template.bind({});