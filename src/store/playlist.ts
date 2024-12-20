import { create } from 'zustand'
// utils
import type { Season } from '../api/requests'

export interface PlayListData extends Season {
  showId: string
}

type Playlist = {
  data: PlayListData | null
  index: number
}

type Actions = {
  add: (data: PlayListData) => void
  setTrack: (episode: number) => void
  next: () => void
  previous: () => void
}

export const usePlaylist = create<Playlist & Actions>()((set) => ({
  data: null,
  index: 0,
  add: (data) => {
    set((state) => ({ ...state, data }))
  },
  setTrack: (episode) => {
    set((state) => {
      return {
        ...state,
        index: episode,
      }
      // if (state.data && episode >= 0 && episode < state.data.episodes.length) {
      // } else {
      //   return state
      // }
    })
  },
  next: () => {
    set((state) => {
      if (state.data && state.index < state.data.episodes.length - 1) {
        return { ...state, index: state.index + 1 }
      } else {
        return state
      }
    })
  },
  previous: () => {
    set((state) => {
      if (state.index > 0) {
        return { ...state, index: state.index - 1 }
      } else {
        return state
      }
    })
    return ''
  },
}))
