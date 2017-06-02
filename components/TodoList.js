import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
} from 'react-native';
import { connect } from 'react-redux';

class TodoList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.todos),
    };
  }
  render() {
    return (
      <View style={styles.helloWorld}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(todo) => <Text>{todo.text}</Text>}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const styles = StyleSheet.create({
  helloWorld: {
    marginTop: 50,
  },
});

export default connect(mapStateToProps)(TodoList);
