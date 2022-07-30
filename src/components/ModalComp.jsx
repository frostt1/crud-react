import { useState } from 'react'
import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
} from '@chakra-ui/react'

const ModalComp = ({data, setData, dataEdit, isOpen, onClose}) => {

    const [name, setName] = useState(dataEdit.name || "")
    const [email, setEmail] = useState(dataEdit.email || "")

  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
    </Modal>
    </>
  )
}

export default ModalComp