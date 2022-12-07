<script setup>
import Drop from './HistoriqueDropDown.vue';
import Vid from './HistoriqueVidPreview.vue';
import NoVid from './HistoriqueNoVidPreview.vue';
</script>

<template>
    <Drop titre="Décembre 2022">
        <template #vdo>
            <Vid titre="Hey" description="Eww" note="7" />
            <Vid titre="Yo" description="Incr" note="5" />
            <Vid titre="Salut" description="Pour aller où nan mais c'est quoi cette vidéo??" note="2" />
            <Vid titre="Salut" description="Pour aller où nan mais c'est quoi cette vidéo??" note="2" />
        </template>
    </Drop>
    <Drop titre="Novembre 2022">
        <template #vdo>
            <Vid titre="Hey" description="Eww" note="7" />
            <Vid titre="Yo" description="Incr" note="5" />
        </template>
    </Drop>
    <Drop titre="Octobre 2022">
        <template #vdo>
            <NoVid />
        </template>
    </Drop>
    <Drop titre="Septembre 2022">
        <template #vdo>
            <Vid titre="Hey" description="Eww" note="7" />
            <Vid titre="Yo" description="Incr" note="5" />
            <Vid titre="Salut" description="Pour aller où nan mais c'est quoi cette vidéo?? ça devrait etre interdit dans un pays" note="2" />
            <Vid titre="Salut" description="Pour aller où nan mais c'est quoi cette vidéo??" note="2" />
            <Vid titre="Salut" description="Pas envie d'écrire" note="2" />
            <Vid titre="Salut" description="J'ai rien compris" note="2" />
            <Vid titre="Salut" description="J'ai rien compris" note="2" />
            <Vid titre="Salut" description="J'ai rien compris" note="2" />
            <Vid titre="Salut" description="J'ai rien compris" note="2" />
            <Vid titre="Salut" description="J'ai rien compris" note="2" />
            <Vid titre="Salut" description="J'ai rien compris" note="2" />
            <Vid titre="Salut" description="J'ai rien compris" note="2" />
            <Vid titre="Salut" description="J'ai rien compris" note="2" />
            <Vid titre="Salut" description="J'ai rien compris" note="2" />
            <Vid titre="Salut" description="J'ai rien compris" note="2" />
            <Vid titre="Salut" description="J'ai rien compris" note="2" />
            <Vid titre="Salut" description="J'ai rien compris" note="2" />
            <Vid titre="Salut" description="J'ai rien compris" note="2" />
            <Vid titre="Salut" description="J'ai rien compris" note="2" />
            <Vid titre="Salut" description="J'ai rien compris" note="2" />
            <Vid titre="Salut" description="J'ai rien compris" note="2" />
            <Vid titre="Salut" description="J'ai rien compris" note="2" />
            <Vid titre="Salut" description="J'ai rien compris" note="2" />
            <Vid titre="Salut" description="J'ai rien compris" note="2" />
        </template>
    </Drop>
    <Drop titre="Août 2022">
        <template #vdo>
            <NoVid />
        </template>
    </Drop>
    <Drop titre="Juillet 2022">
        <template #vdo>
            <NoVid />
        </template>
    </Drop>
    <Drop titre="Juin 2022">
        <template #vdo>
            <NoVid />
        </template>
    </Drop>
    <Drop titre="Mai 2022">
        <template #vdo>
            <NoVid />
        </template>
    </Drop>
    <Drop titre="Avril 2022">
        <template #vdo>
            <NoVid />
        </template>
    </Drop>

</template>
