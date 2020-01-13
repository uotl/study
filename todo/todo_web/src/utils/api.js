import {get,post} from '@/utils/http';

export const todoList = p => get('list',p)

export const update_status = p => post('update_status',p)

export const addTodo = p => post('create',p)

export const editTodo = p => post('update',p)