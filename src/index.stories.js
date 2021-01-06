import React from 'react'
import * as Icon from './'
import styled from '@emotion/styled'

const StyledAlert = styled(Icon.Alert)`
  color: blue;
`

const StyledAlertOff = styled(Icon.AlertOff)`
  color: blue;
`

export const Comets = () => {
  const [size, setSize] = React.useState(32)

  return (
    <>
      <select
        name="sizes"
        onChange={event => {
          setSize(parseInt(event.target.value))
        }}
        defaultValue="32"
        style={{
          marginBottom: '32px',
          fontSize: '16px',
        }}
      >
        <option value="16">Icon size: 16</option>
        <option value="24">Icon size: 24</option>
        <option value="32">Icon size: 32</option>
        <option value="40">Icon size: 40</option>
        <option value="48">Icon size: 48</option>
        <option value="56">Icon size: 56</option>
      </select>
      <div
        style={{
          display: 'grid',
          gridGap: size / 2,
          gridTemplateColumns: `repeat(auto-fill, ${size}px)`,
        }}
      >
        <StyledAlert title="Alert" color="red" size={size} />
        <StyledAlertOff title="AlertOff" size={size} />
        <Icon.Android title="Android" color="green" size={size} />
        <Icon.Apple title="Apple" size={size} />
        <Icon.ArrowDown title="ArrowDown" size={size} />
        <Icon.ArrowDownRounded title="ArrowDownRounded" size={size} />
        <Icon.ArrowUpRounded title="ArrowUpRounded" size={size} />
        <Icon.Avatar title="Avatar" size={size} />
        <Icon.Calendar title="Calendar" size={size} />
        <Icon.CalendarClock title="CalendarClock" size={size} />
        <Icon.CalendarDay title="CalendarDay" size={size} />
        <Icon.CalendarWeekend title="CalendarWeekend" size={size} />
        <Icon.Cart title="Cart" size={size} />
        <Icon.Chat title="Chat" size={size} />
        <Icon.Checkmark title="Checkmark" color="lightgreen" size={size} />
        <Icon.CheckmarkRounded title="CheckmarkRounded" size={size} />
        <Icon.ChevronDown title="ChevronDown" size={size} />
        <Icon.ChevronDownAlt title="ChevronDownAlt" size={size} />
        <Icon.ChevronLeft title="ChevronLeft" size={size} />
        <Icon.ChevronLeftAlt title="ChevronLeftAlt" size={size} />
        <Icon.ChevronRight title="ChevronRight" size={size} />
        <Icon.ChevronRightAlt title="ChevronRightAlt" size={size} />
        <Icon.ChevronUp title="ChevronUp" size={size} />
        <Icon.ChevronUpAlt title="ChevronUpAlt" size={size} />
        <Icon.City title="City" size={size} />
        <Icon.Clock title="Clock" size={size} />
        <Icon.Close title="Close" size={size} />
        <Icon.CloseAlt title="CloseAlt" size={size} />
        <Icon.CloseRounded title="CloseRounded" size={size} />
        <Icon.Comment title="Comment" size={size} />
        <Icon.Copy title="Copy" size={size} />
        <Icon.CreditCard title="CreditCard" size={size} />
        <Icon.Dot title="Dot" size={size} />
        <Icon.Dots title="Dots" size={size} />
        <Icon.Entrance title="Entrance" size={size} />
        <Icon.Envelope title="Envelope" size={size} />
        <Icon.Error title="Error" size={size} />
        <Icon.Event title="Event" size={size} />
        <Icon.Eye title="Eye" size={size} />
        <Icon.Facebook title="Facebook" size={size} />
        <Icon.File title="File" size={size} />
        <Icon.Filter title="Filter" size={size} />
        <Icon.Flag title="Flag" size={size} />
        <Icon.Gear title="Gear" size={size} />
        <Icon.Github title="Github" size={size} />
        <Icon.Happy title="Happy" size={size} />
        <Icon.House title="House" size={size} />
        <Icon.Image title="Image" size={size} />
        <Icon.Info title="Info" size={size} />
        <Icon.InfoRounded title="InfoRounded" size={size} />
        <Icon.Instagram title="Instagram" size={size} />
        <Icon.List title="List" size={size} />
        <Icon.ListAlt title="ListAlt" size={size} />
        <Icon.Location title="Location" size={size} />
        <Icon.Logout title="Logout" size={size} />
        <Icon.Loudspeaker title="Loudspeaker" size={size} />
        <Icon.MagnifyingGlass title="MagnifyingGlass" size={size} />
        <Icon.MagnifyingGlassAlt title="MagnifyingGlassAlt" size={size} />
        <Icon.Masks title="Masks" size={size} />
        <Icon.Medium title="Medium" size={size} />
        <Icon.Messenger title="Messenger" size={size} />
        <Icon.Minus title="Minus" size={size} />
        <Icon.MinusAlt title="MinusAlt" size={size} />
        <Icon.MinusRounded title="MinusRounded" size={size} />
        <Icon.MobilePhone title="MobilePhone" size={size} />
        <Icon.Money title="Money" size={size} />
        <Icon.MusicalNote title="MusicalNote" size={size} />
        <Icon.Padlock title="Padlock" size={size} />
        <Icon.Paperclip title="Paperclip" size={size} />
        <Icon.Pencil title="Pencil" size={size} />
        <Icon.Phone title="Phone" size={size} />
        <Icon.PhoneVerified title="PhoneVerified" size={size} />
        <Icon.Pin title="Pin" size={size} />
        <Icon.Play title="Play" size={size} />
        <Icon.Plus title="Plus" size={size} />
        <Icon.PlusAlt title="PlusAlt" size={size} />
        <Icon.PlusRounded title="PlusRounded" size={size} />
        <Icon.Questionmark title="Questionmark" size={size} />
        <Icon.QuestionmarkRounded title="QuestionmarkRounded" size={size} />
        <Icon.Refresh title="Refresh" size={size} />
        <Icon.Row title="Row" size={size} />
        <Icon.Sad title="Sad" size={size} />
        <Icon.Seat title="Seat" size={size} />
        <Icon.Section title="Section" size={size} />
        <Icon.SellTicket title="SellTicket" size={size} />
        <Icon.Share title="Share" size={size} />
        <Icon.ShareAlt title="ShareAlt" size={size} />
        <Icon.Shield title="Shield" size={size} />
        <Icon.SoundCloud title="SoundCloud" size={size} />
        <Icon.Spinner title="Spinner" size={size} />
        <Icon.Spotify title="Spotify" size={size} />
        <Icon.Star title="Star" size={size} />
        <Icon.Sun title="Sun" size={size} />
        <Icon.Tag title="Tag" size={size} />
        <Icon.ThumbsDown title="ThumbsDown" size={size} />
        <Icon.ThumbsUp title="ThumbsUp" size={size} />
        <Icon.Ticket title="Ticket" size={size} />
        <Icon.TicketSwap title="TicketSwap" size={size} />
        <Icon.Trash title="Trash" size={size} />
        <Icon.Trophy title="Trophy" size={size} />
        <Icon.Twitter title="Twitter" size={size} />
        <Icon.Verified title="Verified" size={size} />
        <Icon.Voucher title="Voucher" size={size} />
        <Icon.Warning title="Warning" size={size} />
        <Icon.WarningRounded title="WarningRounded" size={size} />
        <Icon.WhatsApp title="WhatsApp" size={size} />
      </div>
    </>
  )
}

export default {
  title: 'Comets',
}
