<template>
    <b-form @submit.prevent="$emit('processTodo', todo)">
        <b-form-group id="todo" label="todo" label-for="todo"></b-form-group>
        <b-form-input autocomplete="off" id="todo" v-model="todo" 
            :state="$v.todo.text.$invalid" placeholder="Introduce la tarea"
            @input="$v.todo.$touch"></b-form-input>
        <b-form-invalid-feedback id="todoInfo" v-if="$v.todo.$dirty">
            Este campo es requerido
        </b-form-invalid-feedback>
        <b-button variant="primary" type="submit" :disabled="$v.todo.$invalid">{{todoSubmit}}</b-button>
    </b-form>
</template>

<script>
import {validationMixin} from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
    mixins: [validationMixin],
    props: {
        todo: {
            type: Object,
            required: true
        },
        todoSubmit: {
            type: String,
            default: 'Crear TODO'
        }
    },
    validations: {
        todo: {
            text: {
                required, minLength: minLength(4)
            }
        }
    }
}
</script>

