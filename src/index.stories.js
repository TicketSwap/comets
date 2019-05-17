import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Icon from './'

storiesOf('Comets', module).add('all', () => (
  <div
    style={{
      display: 'grid',
      gridGap: 16,
      gridTemplateColumns: 'repeat(auto-fill, 32px)',
    }}
  >
    <Icon.Alert title="Alert" />
    <Icon.AlertOff title="AlertOff" />
    <Icon.Android title="Android" />
    <Icon.Apple title="Apple" />
    <Icon.ArrowDown title="ArrowDown" />
    <Icon.Avatar title="Avatar" />
    <Icon.AvatarAlt title="AvatarAlt" />
    <Icon.Calendar title="Calendar" />
    <Icon.Cart title="Cart" />
    <Icon.Chat title="Chat" />
    <Icon.ChatAlt title="ChatAlt" />
    <Icon.Checkmark title="Checkmark" />
    <Icon.ChevronDown title="ChevronDown" />
    <Icon.ChevronDownAlt title="ChevronDownAlt" />
    <Icon.ChevronLeft title="ChevronLeft" />
    <Icon.ChevronLeftAlt title="ChevronLeftAlt" />
    <Icon.ChevronRight title="ChevronRight" />
    <Icon.ChevronRightAlt title="ChevronRightAlt" />
    <Icon.ChevronUp title="ChevronUp" />
    <Icon.ChevronUpAlt title="ChevronUpAlt" />
    <Icon.Close title="Close" />
    <Icon.CloseAlt title="CloseAlt" />
    <Icon.CloseRounded title="CloseRounded" />
    <Icon.Comment title="Comment" />
    <Icon.CreditCard title="CreditCard" />
    <Icon.Dots title="Dots" />
    <Icon.Download title="Download" />
    <Icon.Envelope title="Envelope" />
    <Icon.Error title="Error" />
    <Icon.Event title="Event" />
    <Icon.Eye title="Eye" />
    <Icon.Facebook title="Facebook" />
    <Icon.File title="File" />
    <Icon.Happy title="Happy" />
    <Icon.House title="House" />
    <Icon.Image title="Image" />
    <Icon.Info title="Info" />
    <Icon.Instagram title="Instagram" />
    <Icon.List title="List" />
    <Icon.ListAlt title="ListAlt" />
    <Icon.Location title="Location" />
    <Icon.Logout title="Logout" />
    <Icon.MagnifyingGlass title="MagnifyingGlass" />
    <Icon.MagnifyingGlassAlt title="MagnifyingGlassAlt" />
    <Icon.Medium title="Medium" />
    <Icon.Megaphone title="Megaphone" />
    <Icon.Messenger title="Messenger" />
    <Icon.Minus title="Minus" />
    <Icon.MinusAlt title="MinusAlt" />
    <Icon.MobilePhone title="MobilePhone" />
    <Icon.Padlock title="Padlock" />
    <Icon.Paperclip title="Paperclip" />
    <Icon.Pencil title="Pencil" />
    <Icon.Phone title="Phone" />
    <Icon.PhoneVerified title="PhoneVerified" />
    <Icon.Pin title="Pin" />
    <Icon.Play title="Play" />
    <Icon.Plus title="Plus" />
    <Icon.PlusAlt title="PlusAlt" />
    <Icon.Questionmark title="Questionmark" />
    <Icon.QuestionmarkAlt title="QuestionmarkAlt" />
    <Icon.Sad title="Sad" />
    <Icon.SellTicket title="SellTicket" />
    <Icon.Share title="Share" />
    <Icon.SoundCloud title="SoundCloud" />
    <Icon.Spinner title="Spinner" />
    <Icon.Spotify title="Spotify" />
    <Icon.Star title="Star" />
    <Icon.ThumbsDown title="ThumbsDown" />
    <Icon.ThumbsUp title="ThumbsUp" />
    <Icon.Ticket title="Ticket" />
    <Icon.TicketSwap title="TicketSwap" />
    <Icon.Trash title="Trash" />
    <Icon.Twitter title="Twitter" />
    <Icon.Warning title="Warning" />
    <Icon.WarningAlt title="WarningAlt" />
    <Icon.WhatsApp title="WhatsApp" />
  </div>
))
