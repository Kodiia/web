import { error, redirect } from '@sveltejs/kit'

export const actions = {
    register: async ({ locals, request }) => {
        const body = Object.fromEntries(await request.formData())

        try {
            await locals.pb.collection('courseApplications').create({...body})
        } catch (err) {
            console.log('Error: ', err)
            throw error(500, 'Something went wrong')
        }

        throw redirect(303, '/thanks')
    }
}