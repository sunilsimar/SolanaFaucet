import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

//use wallet hook provides the wallet variable inside this component
//because i wrapped the airdrop component inside the wallet provider
export function Airdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();
    const [isSending, setIsSending] = useState(false);
    const { publicKey, signMessage } = useWallet();

    useEffect(() => {
        if (publicKey) {
            wlcMsg();
        }

    }, [publicKey]);

    async function wlcMsg() {
        const message = "👋 Welcome to our platform! Please sign this message with your wallet to continue securely. Your signature ensures a safe and personalized experience. 😊"
        const encodedMessage = new TextEncoder().encode(message);
        await signMessage(encodedMessage);
    }

    async function sendAirdropToUser() {
        try {
            if (!wallet.publicKey) {
                toast.error("Please connect your wallet first");
                return;
            }
            setIsSending(true);

            const inputField = document.getElementById("publicKey");
            const amount = inputField.value;
            await connection.requestAirdrop(wallet.publicKey, 1000000000);
            const balance = await connection.getBalance(wallet.publicKey);

            toast.success(`Airdrop Successful! Your balance is ${balance / 1000000000} SOL`, {
                style: { backgroundColor: "#6b46c1", color: "#ffffff" }, // Custom styling
            });

            inputField.value = ''

        } catch (error) {
            toast.error(`Airdrop Failed: ${error.message}`, {
                style: { backgroundColor: "#dc2626", color: "#ffffff" }, // Custom styling
            });
        } finally {
            setIsSending(false)
        }
    }

    return (
        <div className="max-w-md mx-auto space-y-4">
            <div className="relative">
                <input
                    id='publicKey'
                    type="text"
                    placeholder="Amount"
                    defaultValue="1"
                    className="w-full px-4 py-3 bg-zinc-900/50 rounded-lg text-white placeholder-zinc-500 border border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <span className="absolute right-3 top-3 text-zinc-500">SOL</span>
            </div>
            <button
                onClick={sendAirdropToUser}
                disabled={isSending} // Disable button while airdrop is in progress
                className={`w-full ${isSending
                    ? "bg-purple-400 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700"
                    } text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 ease-in-out transform ${isSending ? "" : "hover:translate-y-[-1px]"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50`}
            >
                {isSending ? "Sending..." : "Request Airdrop"}
            </button>
        </div>
    )
}