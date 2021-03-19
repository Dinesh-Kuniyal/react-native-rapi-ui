import React from 'react';
import { ScrollView, View } from 'react-native';
import {
	Layout,
	TopNav,
	Text,
	Button,
	theme,
	Section,
	SectionContent,
} from '../rapi';
import { Ionicons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { MainStackParamList } from '../types/navigation';

export default function ({
	navigation,
}: StackScreenProps<MainStackParamList, 'Buttons'>) {
	return (
		<Layout>
			<TopNav
				leftContent={
					<Ionicons name="chevron-back" size={20} color={theme.black} />
				}
				leftAction={() => navigation.goBack()}
				middleContent="Buttons"
			/>
			<ScrollView>
				<Section style={{ marginHorizontal: 20, marginTop: 20 }}>
					<SectionContent>
						<Text fontWeight="medium">Button behaviour type</Text>

						<Button
							style={{ marginTop: 10 }}
							text="TouchableOpacity"
							status="primary"
							type="TouchableOpacity"
						/>
						<Button
							style={{ marginTop: 10 }}
							text="TouchableHighlight"
							status="primary"
							type="TouchableHighlight"
						/>
						<Button
							style={{ marginTop: 10 }}
							type="TouchableWithoutFeedback"
							text="TouchableWithoutFeedback"
							status="primary"
						/>
					</SectionContent>
				</Section>
				<Section style={{ marginHorizontal: 20, marginTop: 20 }}>
					<SectionContent>
						<Text fontWeight="medium">Colors Status</Text>
						<View
							style={{
								flexDirection: 'row',
								flexWrap: 'wrap',
							}}
						>
							<Button
								style={{ marginTop: 10, marginRight: 10 }}
								text="Primary"
								status="primary"
							/>
							<Button
								style={{ marginTop: 10, marginRight: 10 }}
								text="Success"
								status="success"
							/>
							<Button
								style={{ marginTop: 10, marginRight: 10 }}
								text="Info"
								status="info"
							/>
							<Button
								style={{ marginTop: 10, marginRight: 10 }}
								text="Warning"
								status="warning"
							/>
							<Button
								style={{ marginTop: 10, marginRight: 10 }}
								text="Danger"
								status="danger"
							/>
						</View>
					</SectionContent>
				</Section>
				<Section style={{ marginHorizontal: 20, marginTop: 20 }}>
					<SectionContent>
						<Text fontWeight="medium">Outline</Text>
						<View
							style={{
								flexDirection: 'row',
								flexWrap: 'wrap',
							}}
						>
							<Button
								style={{ marginTop: 10, marginRight: 10 }}
								text="Primary"
								status="primary"
								outline
							/>
							<Button
								style={{ marginTop: 10, marginRight: 10 }}
								text="Success"
								status="success"
								outline
							/>
							<Button
								style={{ marginTop: 10, marginRight: 10 }}
								text="Info"
								status="info"
								outline
							/>
							<Button
								style={{ marginTop: 10, marginRight: 10 }}
								text="Warning"
								status="warning"
								outline
							/>
							<Button
								style={{ marginTop: 10, marginRight: 10 }}
								text="Danger"
								status="danger"
								outline
							/>
						</View>
					</SectionContent>
				</Section>
				<Section style={{ marginHorizontal: 20, marginTop: 20 }}>
					<SectionContent>
						<Text fontWeight="medium">Disabled</Text>
						<View
							style={{
								flexDirection: 'row',
								flexWrap: 'wrap',
							}}
						>
							<Button
								style={{ marginTop: 10, marginRight: 10 }}
								text="Normal"
								status="primary"
								disabled
							/>
							<Button
								style={{ marginTop: 10, marginRight: 10 }}
								text="Outline"
								status="success"
								outline
								disabled
							/>
						</View>
					</SectionContent>
				</Section>
				<Section style={{ marginHorizontal: 20, marginTop: 20 }}>
					<SectionContent>
						<Text fontWeight="medium">Size</Text>
						<View>
							<View style={{ flexDirection: 'row' }}>
								<Button
									style={{ marginTop: 10, marginRight: 10 }}
									text="Large lg"
									status="primary"
									size="lg"
								/>
								<Button
									style={{ marginTop: 10, marginRight: 10 }}
									text="Large lg"
									status="primary"
									size="lg"
									outline
								/>
							</View>
							<View style={{ flexDirection: 'row' }}>
								<Button
									style={{ marginTop: 10, marginRight: 10 }}
									text="Medium md"
									status="primary"
									size="md"
								/>
								<Button
									style={{ marginTop: 10, marginRight: 10 }}
									text="Medium md"
									status="primary"
									size="md"
									outline
								/>
							</View>
							<View style={{ flexDirection: 'row' }}>
								<Button
									style={{ marginTop: 10, marginRight: 10 }}
									text="Small sm"
									status="primary"
									size="sm"
								/>
								<Button
									style={{ marginTop: 10, marginRight: 10 }}
									text="Small sm"
									status="primary"
									size="sm"
									outline
								/>
							</View>
						</View>
					</SectionContent>
				</Section>
				<Section style={{ marginHorizontal: 20, marginTop: 20 }}>
					<SectionContent>
						<Text fontWeight="medium">Button with leftContent</Text>
						<Button
							style={{ marginTop: 10 }}
							text="Continue with twitter"
							leftContent={
								<Ionicons name="logo-twitter" size={20} color={theme.white} />
							}
							status="primary"
							type="TouchableOpacity"
						/>
						<Text style={{ marginTop: 20 }} fontWeight="medium">
							Button with rightContent
						</Text>
						<Button
							style={{ marginTop: 10 }}
							text="Continue"
							rightContent={
								<Ionicons name="arrow-forward" size={20} color={theme.white} />
							}
							status="primary"
							type="TouchableOpacity"
						/>
					</SectionContent>
				</Section>
			</ScrollView>
		</Layout>
	);
}
