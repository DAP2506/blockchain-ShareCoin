import React, { useContext, useEffect } from 'react'
import { TransactionContext } from "../context/TransactionContext"
import dummyData from "../utils/dummyData";
import swal from 'sweetalert';
import gifFetch from "../custom_hooks/gifFetch";



const Transcations = () => {




    const { currentAccount, transactions, transactionCount } = useContext(TransactionContext);

    useEffect(() => {
        
    }, [currentAccount, transactionCount]);

    const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {

        const gifUrl = gifFetch({ keyword });

        return (
            <div className='bg-[#181924] m-4 flex flex-1 2xl:min-w-[450px]2xl:max-w-[500px]sm:min-w-[250px] sm:max-w-[300px]min-w-fullflex-col p-3 rounded-md hover:shadow-2xl md:max-w-[30%] md:min-w-[30%] py-5  '>

                <div className="flex flex-col items-center w-full mt-3">

                    <div className="display-flex justify-start w-full mb-6 p-2">

                        <a href={`https://ropsten.eterscan.io/address/${addressFrom}`} target="_blank" rel='nooperener noreferrer' >
                            <p className="text-white text-base"> <span className='text-[cyan]' >From: </span> <button onClick={() => {
                                swal({
                                    title: "ETH given from this address ",
                                    text: addressFrom,
                                    showCancelButton: true,
                                    icon: "success",
                                })

                            }}>
                                {addressFrom.slice(0, 6)}...
                            </button> </p>
                        </a>

                        <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
                            <p className="text-white text-base"><span className='text-[cyan]' >To: </span><button onClick={() => {
                                swal({
                                    title: "ETH was paid on address i.e received by: ",
                                    text: addressTo,
                                    showCancelButton: true,
                                    icon: "success",
                                })

                            }}>
                                {addressTo.slice(0, 6)}...
                            </button> </p>
                        </a>
                        <p className="text-white text-base"><span className='text-[cyan]' >Amount:</span>{amount} ETH</p>

                        {message && (
                            <>
                                {/* <br /> */}
                                <p className="text-white text-base"><span className='text-[cyan]' >Message: </span>{message}</p>
                            </>
                        )}

                    </div>

                    <img
                        src={gifUrl || url}
                        alt="nature"
                        className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
                    />

                    <div className="bg-[white] p-3 px-5 w-max rounded-2xl -mt-5 shadow-2xl">
                        <p className="text-[black] font-cursive">{timestamp}</p>
                    </div>

                </div>


            </div>

        );

    }

    return (
        <div className='flex w-full justify-center items-center 2x1:px-20 gradient-bg-transactions' >
            <div className='flex flex-col md:p-12 py-12 px-4' >
                {currentAccount
                    ?
                    (<h2 className='text-white ext-3xl text-center my-2' >Your Transactions</h2>)
                    :
                    (<h2 className='text-white ext-3xl text-center my-2' >Connect your wallet to see your transactions!!<br />This are some Dummy Transactions! Your transactions will look like this!</h2>)

                }
                {
                    currentAccount
                        ? (<div className='flex flex-wrap justify-center items-center mt-10' >

                            {transactions.reverse().map((transaction, i) => (
                                <TransactionCard key={i} {...transaction} />
                            ))}

                        </div>)
                        : (<div className='flex flex-wrap justify-center items-center mt-10' >

                        {dummyData.reverse().map((transaction, i) => (
                            <TransactionCard key={i} {...transaction} />
                        ))}
    
                    </div>)
                }


            </div>

        </div>
    )
}

export default Transcations;