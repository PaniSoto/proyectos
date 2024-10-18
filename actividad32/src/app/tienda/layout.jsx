
import menuTienda from "@/components/menuTienda.jsx";


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <tbody>
        <menuTienda />
        {children}
      </tbody>
    </html>
  );
}