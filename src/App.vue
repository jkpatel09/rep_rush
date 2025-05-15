<script setup>
import { computed, onMounted, ref } from 'vue';
import Layout from './components/layouts/Layout.vue';
import Dashboard from './components/pages/Dashboard.vue';
import Welcome from './components/pages/Welcome.vue';
import Workout from './components/pages/Workout.vue';
import { workoutProgram } from './utils';

const defaultData = {}
for (let workoutIdx in workoutProgram) {
    const workoutData = workoutProgram[workoutIdx]
    defaultData[workoutIdx] = {}

    for (let e of workoutData.workout) {
        defaultData[workoutIdx] [e.name] = ''
    }
}

const selectedDisplay = ref(1)
const data = ref(defaultData)
const selectedWorkout = ref(-1)

const isWorkoutComplete = computed(() => {
    const currWorkout = data.value?.[selectedWorkout.value]
    if (!currWorkout){ return false}

    const isCompleteCheck = Object.values(currWorkout).every(ex => !!ex)
    console.log(isCompleteCheck)
    return isCompleteCheck
})

const firstIncompleteWorkoutIndex = computed(() => {
    const allWorkouts = data.value
    if (!allWorkouts) { return -1}

    for (const [index, workout] of Object.entries(allWorkouts)){
        const isComplete = Object.values(workout).every(ex => !!ex)
        if(!isComplete) {
            return parseInt(index)
        }
    }
    return -1
})

function handleChangeDisplay(idx) {
    selectedDisplay.value = idx
}

function handleSelectWorkout(idx) {
    selectedDisplay.value = 3;
    selectedWorkout.value = idx
}

function handleSaveWorkout(){
    localStorage.setItem('workouts', JSON.stringify(data.value))

    selectedDisplay.value = 2
    selectedWorkout.value = -1 
}

function handleResetPlan() {
    selectedDisplay.value = 2
    selectedWorkout.value = -1
    data.value = defaultData
    localStorage.removeItem('workouts')
}

onMounted(() => {
    if (!localStorage) {return}
    if(localStorage.getItem('workouts')) {
        const saveData = JSON.parse(localStorage.getItem('workouts'))
        data.value = saveData
        selectedDisplay.value = 2
        
    }
})

</script>

<template>
    <Layout>
        <Welcome :handleChangeDisplay="handleChangeDisplay" v-if="selectedDisplay == 1"/>
        
        <Dashboard :firstIncompleteWorkoutIndex="firstIncompleteWorkoutIndex" 
            :handleSelectWorkout="handleSelectWorkout" :handleResetPlan="handleResetPlan"
            v-if="selectedDisplay == 2"/>
        
        <Workout :handleSaveWorkout="handleSaveWorkout" 
            :isWorkoutComplete="isWorkoutComplete" :data="data" 
            :selectedWorkout="selectedWorkout" 
            v-if="workoutProgram?.[selectedWorkout]"/>
    </Layout>
</template>

<style scoped>
</style>
