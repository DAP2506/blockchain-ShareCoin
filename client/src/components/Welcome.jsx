import React, { useContext } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from "react-icons/si";
import { Loader } from './';
import { TransactionContext } from '../context/TransactionContext';
import swal from 'sweetalert';


const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
);


const Welcome = () => {

    const { connectWallet, currentAccount, handleChange, formData, setFormData, sendTransaction, isLoading } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { addressTo, amount, keyword, message } = formData;

        if (!addressTo || !amount || !keyword || !message) {
            alert("Enter the credientials to make a transaction!");
            return
        }

        sendTransaction();

    }

    return (
        <div className='flex md:flex-row flex-col w-full justify-centre items-centre py-20'>
            <div className="flex ms:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start items-start flex-col md:mr-10">
                    <h1 className='text-3xl sm:text-5xl text-white' > SEND ETHEREUM  </h1>
                </div>
                <p className=' mt-5 text-white font-light md:w-9/12 w-11/12 text-base' >
                    Make your first ETHEREUM transactions safely and Enjoy the growth of crypto.
                </p>


                {!currentAccount &&
                    <button
                        type="button"
                        onClick={connectWallet}
                        className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                    >
                        <AiFillPlayCircle className="text-white mr-2" />
                        <p className="text-white text-base font-semibold">
                            Connect Your Wallet
                        </p>

                    </button>
                }
            </div>


            <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10 ">
                <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
                    <div className="flex justify-between flex-col w-full h-full">
                        <div className="flex justify-between items-start">
                            <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                <SiEthereum fontSize={21} color="#fff" />
                            </div>

                        </div>
                        <div>
                            <p className="text-white font-light text-sm">
                                {currentAccount ?

                                    (
                                        <button onClick={() => {
                                            swal({
                                                title: "Account Connected is ",
                                                text: currentAccount,
                                                showCancelButton: true,
                                                icon: "success",
                                            })

                                        }}>
                                            {currentAccount.slice(0, 6)}...
                                        </button>
                                    )
                                    : <span>Connect your wallet</span>
                                }
                            </p>
                            <p className="text-white font-semibold text-lg mt-1">
                                Ethereum
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                    <Input
                        placeholder="Address To"
                        name="addressTo"
                        type="text"
                        handleChange={handleChange}
                    />

                    <Input
                        placeholder="Add Amount in (ETH)"
                        name="amount"
                        type="number"
                        handleChange={handleChange}
                    />
                    <Input
                        placeholder="Keyword for (Gif)"
                        name="keyword"
                        type="text"
                        handleChange={handleChange}
                    />
                    <Input
                        placeholder="Enter Message"
                        name="message"
                        type="text"
                        handleChange={handleChange}
                    />

                    <div className="h-[1px] w-full bg-gray-400 my-2" />

                    {isLoading
                        ? <Loader />
                        : (
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                            >
                                Send now
                            </button>
                        )}
                </div>


            </div>
        </div>


    )
}

export default Welcome;