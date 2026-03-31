import { configureStore } from "@reduxjs/toolkit";

// 1. Redux durumunun başlangıç değerini tanımlıyoruz
const initialState = {
    tasks: {
        items: [
          { id: 0, text: "Learn HTML and CSS", completed: true },
          { id: 1, text: "Get good at JavaScript", completed: true },
          { id: 2, text: "Master React", completed: false },
          { id: 3, text: "Discover Redux", completed: false },
          { id: 4, text: "Build amazing apps", completed: false },
        ]
    },
    filters: {
      status: "all",
    },
  };

  const rootReducer = (state = initialState, action) => {
    // Reducer, eylemleri type özelliğinin değerine göre ayırır
    switch (action.type) {
      // Eylem türüne bağlı olarak farklı bir mantık uygulanacaktır
  
     // Her reducer, store'a gönderilen tüm eylemleri alır.
     // Eğer bir reducer, belirli bir eylem türünü işlemek istemiyorsa,
     // mevcut durumu değişmeden döndürmek gerekir.
      default:
        return state;
    }
  };

export const store = configureStore({
    reducer: rootReducer,
});
