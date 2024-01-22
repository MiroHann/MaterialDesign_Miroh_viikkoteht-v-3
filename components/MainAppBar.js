import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default function MainAppBar(props) { 
    return (
<Appbar.Header mode='center-aligned' elevated={true}>
    <Appbar.Content title={props.title}></Appbar.Content>
</Appbar.Header>
    )
}