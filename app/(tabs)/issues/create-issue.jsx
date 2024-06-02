import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Field from '../../components/fieldsets/fields'
import Button from '../../components/buttons/button'
import Icon from '../../components/icons/lucide'
import Back from '../../components/Navigators/Back'
const CreateIssue = () => {
  return (
    <SafeAreaView className="flex-1 px-5 bg-white justify-center items-center" style={{gap:30}}>
      <Back path='/issues'/>
      <Text className='self-start text-3xl font-psemibold'>Create Issue</Text>
      <View className='' style={{gap:20}}>
        <Field label={"Issue Type"} />
        <Field label={"Describe your issue"} />
        <View style={{gap:10}}>
          <Text className='text-base font-pmedium'>Upload relevant evidence</Text>
          <View className='h-36 bg-sky-50 justify-center items-center rounded-lg'>
            <Icon name={'Image'} size={25} color={'lightblue'} strokeWidth={2}/>
            <Text className='font-pmedium text-sm text-primary mt-4'>Tap to add image</Text>
          </View>
        </View>
      </View>
      <Button text={'Create Issue'} style='mt-5'/>
    </SafeAreaView>
  );
}

export default CreateIssue