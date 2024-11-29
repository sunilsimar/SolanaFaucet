import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Airdrop } from './Airdrop';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {

  const endpoint = 'https://solana-devnet.g.alchemy.com/v2/T-U_eyoZhJoRdaopW6UbWpcd53G0L6D6';

  return (
    <>
      <ToastContainer
        position="top-right" // Position of the toast
        autoClose={5000}     // Auto close after 5 seconds
        hideProgressBar={false} // Show progress bar
        newestOnTop={false} // Keep older toasts at the top
        closeOnClick        // Close when clicked
        rtl={false}         // Left-to-right text direction
        pauseOnFocusLoss    // Pause on focus loss
        draggable           // Allow drag-and-drop
        pauseOnHover        // Pause toast on hover
        theme="dark"        // Use dark theme (optional)
      />
      {/* <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
              <div className="w-full max-w-4xl mx-auto">
                <div className="bg-zinc-900/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-purple-500/20">
                  <div className="flex justify-between items-center mb-12">
                    <div>
                      <h2 className="text-xl font-medium text-purple-300">Solana Devnet</h2>
                      <p className="text-zinc-400 text-sm">Request test tokens</p>
                    </div>
                    <div className="flex gap-4">
                      <WalletMultiButton className="!bg-purple-600 hover:!bg-purple-700 !rounded-lg !py-2" />
                      <WalletDisconnectButton className="!bg-zinc-800 hover:!bg-zinc-700 !rounded-lg !py-2" />
                    </div>
                  </div>

                  <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
                      Solana Faucet
                    </h1>
                    <p className="text-zinc-400 text-lg">
                      Get test SOL tokens for Devnet development
                    </p>
                  </div>

                  <Airdrop />

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-zinc-900/50 rounded-xl p-6 border border-purple-500/10">
                      <h3 className="text-purple-400 font-medium mb-2">Fast Delivery</h3>
                      <p className="text-zinc-400 text-sm">Instant token delivery to your connected wallet</p>
                    </div>
                    <div className="bg-zinc-900/50 rounded-xl p-6 border border-purple-500/10">
                      <h3 className="text-purple-400 font-medium mb-2">Devnet Only</h3>
                      <p className="text-zinc-400 text-sm">Tokens are for testing and development purposes</p>
                    </div>
                    <div className="bg-zinc-900/50 rounded-xl p-6 border border-purple-500/10">
                      <h3 className="text-purple-400 font-medium mb-2">No Limits</h3>
                      <p className="text-zinc-400 text-sm">Request tokens as needed for your development</p>
                    </div>
                  </div>
                </div>
                <footer className="container mx-auto px-4 py-8 mt-12 border-t border-gray-800">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500 mb-4 md:mb-0">
                      Developed by <a href="https://sunilsimar.me/" className="text-blue-400 hover:underline">Sunil</a>
                    </p>
                    <p className="text-sm text-gray-500">
                      © 2024 Wallet Creator. All rights reserved.
                    </p>
                  </div>
                </footer>
              </div>
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider> */}

      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
              <div className="w-full max-w-4xl mx-auto">
                <div className="bg-zinc-900/50 backdrop-blur-xl rounded-3xl p-4 sm:p-8 shadow-2xl border border-purple-500/20">
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
                    <div className="mb-4 sm:mb-0 text-center sm:text-left">
                      <h2 className="text-lg sm:text-xl font-medium text-purple-300">Solana Devnet</h2>
                      <p className="text-zinc-400 text-xs sm:text-sm">Request test tokens</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                      <WalletMultiButton className="!bg-purple-600 hover:!bg-purple-700 !rounded-lg !py-2 !w-full sm:!w-auto" />
                      <WalletDisconnectButton className="!bg-zinc-800 hover:!bg-zinc-700 !rounded-lg !py-2 !w-full sm:!w-auto" />
                    </div>
                  </div>

                  <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-4">
                      Solana Faucet
                    </h1>
                    <p className="text-zinc-400 text-sm sm:text-lg">
                      Get test SOL tokens for Devnet development
                    </p>
                  </div>

                  <Airdrop />

                  <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div className="bg-zinc-900/50 rounded-xl p-4 sm:p-6 border border-purple-500/10">
                      <h3 className="text-purple-400 font-medium mb-2 text-sm sm:text-base">Fast Delivery</h3>
                      <p className="text-zinc-400 text-xs sm:text-sm">Instant token delivery to your connected wallet</p>
                    </div>
                    <div className="bg-zinc-900/50 rounded-xl p-4 sm:p-6 border border-purple-500/10">
                      <h3 className="text-purple-400 font-medium mb-2 text-sm sm:text-base">Devnet Only</h3>
                      <p className="text-zinc-400 text-xs sm:text-sm">Tokens are for testing and development purposes</p>
                    </div>
                    <div className="bg-zinc-900/50 rounded-xl p-4 sm:p-6 border border-purple-500/10">
                      <h3 className="text-purple-400 font-medium mb-2 text-sm sm:text-base">No Limits</h3>
                      <p className="text-zinc-400 text-xs sm:text-sm">Request tokens as needed for your development</p>
                    </div>
                  </div>
                </div>
                <footer className="container mx-auto px-4 py-6 sm:py-8 mt-8 sm:mt-12 border-t border-gray-800">
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-0">
                      Developed by <a href="https://sunilsimar.me/" className="text-blue-400 hover:underline">Sunil</a>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      © 2024 Solana Faucet. All rights reserved.
                    </p>
                  </div>
                </footer>
              </div>
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  )
}

export default App
