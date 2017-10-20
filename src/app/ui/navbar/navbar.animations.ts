import { trigger, state, style, animate, transition } from '@angular/animations';

export function navbarBgAnimation() {

  return trigger('animNavBg', [
    state('above', style({ background: 'rgba(97, 140, 170, 0.35)' })),
    state('below', style({ background: 'rgba(83, 92, 112, 1)' })),
    transition('above => below', animate('1s ease-in')),
    transition('below => above', animate('1s ease-in'))
  ])
}

export function navbarLogoAnimation() {

  return trigger('animNavLogo', [
    state('above', style({
      transform: 'translateX(0)',
      width: '20%'
    })),
    state('below', style({
      transform: 'translate(-275%, -5%)',
      width: '15%'
    })),
    transition('above => below', animate('500ms 350ms ease-in')),
    transition('below => above', animate('500ms ease-in'))
  ])
}

export function navbarLinkAnimation() {

  return trigger('animNavLinks', [
    state('above', style({
      transform: 'scale(1)'
    })),
    state('below', style({
      transform: 'scale(0)'
    })),
    transition('above => below', animate('350ms ease-in')),
    transition('below => above', animate('350ms 1.5s ease-in'))
  ])
}

export function navbarLowerLinkAnimation() {

  return trigger('animLowerLinks', [
    state('above', style({
      opacity: '0'
    })),
    state('below', style({
      opacity: '1'
    })),
    transition('above => below', animate('550ms 1.75s ease-in')),
    transition('below => above', animate('550ms ease-in'))
  ])
}

export function upperNavbarNavAnimation() {

  return trigger('animUpNavNav', [
    state('above', style({width: '100%'})),
    state('below', style({width: '25%'})),
    transition('above => below', animate('550ms 350ms ease-in')),
    transition('below => above', animate('550ms ease-in'))
  ])
}

export function navbarNavAnimation() {

  return trigger('animNavNav', [
    state('above', style({transform: 'translateX(100%)', width: '0%'})),
    state('below', style({transform: 'translateX(0)', width: '100%'})),
    transition('above => below', animate('550ms 1.5s ease-in')),
    transition('below => above', animate('550ms ease-in'))
  ])
}