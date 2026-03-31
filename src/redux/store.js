import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
		items: []
	},
  filters: {
		name: ""
	}
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
