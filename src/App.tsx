import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import { ModalNewTransaction } from './components/NewTransactionModal';
import { useState } from 'react';
import { TransactionsProvider } from './TransactionsContext';

export function App(): JSX.Element {
  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);

  function handleOpenNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true);
  };

  function handleCloseNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(false);
  };
  
  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModalOpen}
      />
      <Dashboard />
      <ModalNewTransaction
        onCloseNewTransactionModal={handleCloseNewTransactionModalOpen}
        onIsNewTransactionModalOpen={isNewTransactionModalOpen}
      />
    </TransactionsProvider>
  );
}
