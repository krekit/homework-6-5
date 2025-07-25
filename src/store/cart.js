import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist } from 'zustand/middleware';

const cartStore = create(persist(devtools(immer((set) => {
                return {
                    cartList: [],
                    addCart: (product) => {
                        set((state) => {
                            const idx = state.cartList.findIndex(item => item.id === product.id);
                            if (idx > -1) {
                                state.cartList[idx].count++;
                            } else {
                                state.cartList.unshift({
                                    count: 1,
                                    ...product
                                });
                            }
                        });
                    },
                    decrementCart: (product) => {
                        set((state) => {
                            const idx = state.cartList.findIndex(item => product.id === item.id);
                            if (idx > -1) {
                                state.cartList[idx].count--;
                                if (state.cartList[idx].count <= 0) {
                                    state.cartList = state.cartList.filter(item => item.id !== product.id);
                                }
                            }
                        });
                    },
                    deleteCart: (product) => {
                        set((state) => {
                            state.cartList = state.cartList.filter(item => item.id !== product.id);
                        });
                    },
                };
            }))));

export default cartStore;