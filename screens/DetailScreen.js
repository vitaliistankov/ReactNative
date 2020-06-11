import React, { useState } from 'react'
import { View, TextInput, Switch, Button } from 'react-native'

const DetailScreen = ({ navigation, route }) => {
    const [todoTitle, setTodoTitle] = useState(route.params.todo.title)
    const [todoCompleted, setTodoCompleted] = useState(route.params.todo.completed)

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, paddingHorizontal: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 1 }} value={todoTitle} onChangeText={text => setTodoTitle(text)} />
                <View style={{ width: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Switch value={todoCompleted} onValueChange={value => setTodoCompleted(value)} />
                </View>
            </View>
        </View>
    )
}

export default DetailScreen