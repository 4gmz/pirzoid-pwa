/**
 * Auth Module
 */
import Vue from 'vue'
import firebase from 'firebase';
import Nprogress from 'nprogress';
import router from '../../../router';
import { mapGetters } from "vuex";
import api from "Api";


const state = {
    user: null,
    isUserSigninWithAuth0: Boolean(localStorage.getItem('isUserSigninWithAuth0'))
}

// getters
const getters = {
    getUser: state => {
        return state.user;
    },
    isUserSigninWithAuth0: state => {
        return state.isUserSigninWithAuth0;
    }
}

// actions
const actions = {
    inicioSesion(context, payload) {
        const { user } = payload;
        context.commit('loginUser')

        api.post('api/login', {

                email: user.email,
                password: user.password

            })
            .then(function(response) {
                if (response.status == 200) {
                    context.commit('loginUserSuccess', response.data.success);
                } else if (response.status == 401) {
                    context.commit('loginUserFailure', response.data.error);
                }
            })
            .catch(function(error) {
                // handle error
                context.commit('loginUserFailure', 'Fallo al iniciar sesion');
            })

    },
    crearUsuario(context, payload) {
        const { userDetail } = payload;
        context.commit('signUpUser');
        api.post('api/register', {
            name: userDetail.name,
            email: userDetail.email,
            password: userDetail.password,
            c_password: userDetail.password
        }).then(function(response) {
            console.log(response.data);
            if (response.status == 200) {
                context.commit('signUpUserSuccess', response.data.success);
            } else {
                context.commit('signUpUserFailure', response.data.error);
            }
        }).catch(function(error) {
            // handle error
            context.commit('signUpUserFailure', 'Fallo al registrarse');
        })
    },
    logoutUserFromFirebase(context) {
        Nprogress.start();
        firebase.auth().signOut()
            .then(() => {
                Nprogress.done();
                setTimeout(() => {
                    context.commit('logoutUser');
                }, 500)
            })
            .catch(error => {
                context.commit('loginUserFailure', error);
            })
    },
}

// mutations
const mutations = {
    loginUser(state) {
        Nprogress.start();
    },
    loginUserSuccess(state, user) {
        console.log(user)
        state.user = user;

        localStorage.setItem('user', user.token);
        localStorage.setItem('temas', user.temas);
        localStorage.setItem('rol', user.rol);
        localStorage.setItem('permisos', user.permisos);
        localStorage.setItem('favoritos', user.favoritos);

        // state.isUserSigninWithAuth0 = false
        router.push("/default/estados");
        setTimeout(function() {
            Vue.notify({
                group: 'loggedIn',
                type: 'success',
                text: 'Usuario Loggeado con exito!'
            });
        }, 1500);


        // this.$store.dispatch("changeTheme", JSON.parse(user.temas.theme));
        // this.$vuetify.theme = JSON.parse(user.temas.theme.theme);

    },

    loginUserFailure(state, error) {
        Nprogress.done();
        Vue.notify({
            group: 'loggedIn',
            type: 'error',
            text: error
        });
    },
    logoutUser(state) {
        state.user = null
        localStorage.removeItem('user');
        localStorage.removeItem('rol');
        localStorage.removeItem('temas');
        localStorage.removeItem('permisos');
        localStorage.removeItem('favoritos');
        router.push("/session/login");
    },
    signUpUser(state) {
        Nprogress.start();
    },
    signUpUserSuccess(state, user) {
        state.user = user;

        localStorage.setItem('user', user.token);
        localStorage.setItem('temas', user.temas);
        localStorage.setItem('rol', user.rol);
        localStorage.setItem('permisos', user.permisos);
        localStorage.setItem('favoritos', user.favoritos);
        // state.isUserSigninWithAuth0 = false
        router.push("/default/estados");
        setTimeout(function() {
            Vue.notify({
                group: 'loggedIn',
                type: 'success',
                text: 'Usuario Loggeado con exito!'
            });
        }, 1500);
    },
    signUpUserFailure(state, error) {
        Nprogress.done();
        Vue.notify({
            group: 'loggedIn',
            type: 'error',
            text: error.message
        });
    },

}

export default {
    state,
    getters,
    actions,
    mutations
}
