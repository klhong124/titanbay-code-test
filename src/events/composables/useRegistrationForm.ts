import { ref, reactive } from 'vue'
import type { RegistrationFormData, FormErrors, NetworkingInterest } from '../types/event.types'

export function useRegistrationForm() {
    const form = reactive<RegistrationFormData>({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        role: '',
        experienceLevel: '',
        dietaryRestrictions: '',
        specialRequirements: '',
        interests: []
    })

    const errors = ref<FormErrors>({})
    const isLoading = ref(false)
    const showSuccess = ref(false)

    const networkingInterests: NetworkingInterest[] = [
        'Frontend Development',
        'Backend Development',
        'DevOps & Cloud',
        'Mobile Development',
        'Data Science & AI',
        'Cybersecurity',
        'Product Management',
        'UX/UI Design',
        'Startup Ecosystem',
        'Open Source Projects'
    ]

    const toggleInterest = (interest: NetworkingInterest) => {
        const index = form.interests.indexOf(interest)
        if (index > -1) {
            form.interests.splice(index, 1)
        } else {
            form.interests.push(interest)
        }
    }

    const validateForm = (): boolean => {
        errors.value = {}

        if (!form.firstName.trim()) {
            errors.value.firstName = 'First name is required'
        }

        if (!form.lastName.trim()) {
            errors.value.lastName = 'Last name is required'
        }

        if (!form.email.trim()) {
            errors.value.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            errors.value.email = 'Please enter a valid email address'
        }

        if (!form.company.trim()) {
            errors.value.company = 'Company is required'
        }

        if (!form.role.trim()) {
            errors.value.role = 'Role is required'
        }

        if (!form.experienceLevel) {
            errors.value.experienceLevel = 'Experience level is required'
        }

        return Object.keys(errors.value).length === 0
    }

    const submitForm = async () => {
        if (!validateForm()) {
            return
        }

        isLoading.value = true

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000))

            showSuccess.value = true
            console.log('Form submitted:', form)
        } catch (error) {
            console.error('Registration failed:', error)
        } finally {
            isLoading.value = false
        }
    }

    const resetForm = () => {
        Object.assign(form, {
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            role: '',
            experienceLevel: '',
            dietaryRestrictions: '',
            specialRequirements: '',
            interests: []
        })
        errors.value = {}
        showSuccess.value = false
    }

    return {
        form,
        errors,
        isLoading,
        showSuccess,
        networkingInterests,
        toggleInterest,
        validateForm,
        submitForm,
        resetForm
    }
}