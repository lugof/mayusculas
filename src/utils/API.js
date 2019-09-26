import axios from "axios";

export default {
  getCapitals: function(capitals){
    return axios.get("/api/liquids/getCapitals/"+capitals)

  }
}