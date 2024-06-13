import axios from "axios";



export const clasificar = async (mensaje) => {
  const form = new FormData();
  form.append("mensaje", mensaje);

  try {
    const response = await axios.post(
      "192.168.1.10:5000/predict",
      form,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    console.log('Si se respondio');

    return response.data.prediction;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error;
  }
};
