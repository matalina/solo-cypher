<script lang="ts">
import { Dropbox, DropboxAuth } from 'dropbox';
import { user } from '../stores';
import { User } from '../types';
import { onMount } from 'svelte';

const options = { 
  clientId: 'am9ygq1wnzzxsxj',
  clientSecret: 'njnyk4jalpt0yis', 
};

const url = new URL(window.location.href);
const redirectUri = `${url.protocol}//${url.host}`;
const dbx = new Dropbox(options);
const auth = new DropboxAuth(options);
const code = url.searchParams.get('code') || null;

async function login() {
  const authUrl = await auth.getAuthenticationUrl(redirectUri,'','code','offline');
  window.location.href = authUrl.toString();
}

async function logout() {
  dbx.authTokenRevoke();
  user.delete();
  window.location.replace(redirectUri);
}

onMount(async () => {
  if(code) {
    const { result } = await auth.getAccessTokenFromCode(redirectUri, code);
    $user = result as User;

    window.location.replace(redirectUri);
  }
});

</script>

{#if !$user?.uid}
<button on:click={login}>Login</button>
{:else}
<button on:click={logout}>Logout</button>
{/if}