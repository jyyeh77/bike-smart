import React, {Component} from 'react';
import ContentView from './ContentView';
import Menu from './Menu';
import {View, Image, TouchableOpacity} from 'react-native';
import SideMenu from 'react-native-side-menu';
import SidebarToggleButton from './SidebarToggleButton';


export default class App extends Component {
	constructor () {
		super();
		this.state = {
			isOpen: false,
			selectedItem: 'About'
		};
	}

	toggle () {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	updateMenuState (isOpen) {
		this.setState({isOpen,});
	}

	onMenuItemSelected (item) {
		this.setState({
			isOpen: false,
			selectedItem: item,
		});
	}

	render () {
		const menu = <Menu onItemSelected={this.onMenuItemSelected}/>;

		return (
			<SideMenu menu={menu} isOpen={this.state.isOpen} onChange={(isOpen) => this.updateMenuState(isOpen)}>
				<ContentView/>
				<SidebarToggleButton onPress={() => this.toggle()}>
					<Image source={require('../assets/menu.png')} style={{width: 32, height: 32}}/>
				</SidebarToggleButton>
			</SideMenu>
		)
	}
}




