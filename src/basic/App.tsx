import { useState } from "react";

import { Header, AdminPage, CartPage } from "./components/layout";
import { Toast } from "./components/ui/Toast";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className='min-h-screen bg-gray-50'>
      <Toast />
      <Header
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cart={cart}
      />
      <main className='max-w-7xl mx-auto px-4 py-8'>{isAdmin ? <AdminPage /> : <CartPage />}</main>
    </div>
  );
};

export default App;
