import React, { useState, useEffect } from 'react'
import { View, FlatList, Text } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'

const ListScreen = ({ navigation }) => {
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(responce => responce.json())
            .then(responceJson => setTodoList(responceJson))
    }, [])

    const toggleCompleted = (todoId) => {
        todoList[todoId].completed = !todoList[todoId].completed
    } 

    const ListItem = (item) => {
        const { item: todo } = item
        return (
            <TouchableNativeFeedback onPress={() => navigation.navigate("Detail", { todo, toggleCompleted })}>
                <View style={{ padding: 10 }}>
                    <Text
                        style={{
                            textDecorationLine: todo.completed ? "line-through" : "none"
                        }}>
                        {todo.title}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        )
    }

    return (
        <View>
            <FlatList
                data={todoList}
                keyExtractor={item => item.id.toString()}
                renderItem={ListItem}
            />
        </View>
    )
}

export default ListScreen;