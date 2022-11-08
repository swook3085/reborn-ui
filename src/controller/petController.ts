import http from '@http'
import {
  IKindParams,
  IPetParams,
  ISidoParams,
  ISigunguParams,
} from '@interface/IPet'

export const selectSidoList = async (params: ISidoParams) => {
  const response = await http.get('/api/pet/selectSidoList', { params })
  return response
}

export const selectSigunguList = async (params: ISigunguParams) => {
  const response = await http.get('/api/pet/selectSigunguList', { params })
  return response
}

export const selectKindList = async (params: IKindParams) => {
  const response = await http.get('/api/pet/selectKindList', { params })
  return response
}

export const selectPetList = async (params: IPetParams) => {
  const response = await http.get('/api/pet/selectPetList', { params })
  return response
}
