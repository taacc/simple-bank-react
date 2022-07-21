import { useState } from 'react'
export const useTransferTradePage = (initialMode = false) => {
    const [modalOpen, setModalOpen] = useState(initialMode);
    const toggle = () => setModalOpen(!modalOpen)
    return [modalOpen, setModalOpen, toggle]
}

export const useTransferTradePageWithData = (
    initialMode = false,
    initialSelected = null
  ) => {
    const [modalOpen, setModalOpen] = useTransferTradePage(initialMode)
    const [selected, setSelected] = useState(initialSelected)
    const setModalState = state => {
      setModalOpen(state)
      if (state === false) {
        setSelected(null)
      }
    }
    return { modalOpen, setModalOpen, selected, setSelected, setModalState }
  }