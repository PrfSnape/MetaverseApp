import styles from "../../styles/one.module.scss";

import { MenuItem, Select, TextField, InputAdornment } from "@mui/material";
import {FilterList, Search} from "@mui/icons-material"
import { Autocomplete } from "@mui/lab";

import { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";

const filters=["asdf", "bbb", "ccc"];
const txs=[
    {
        icon:"",
        tokenvalue:0.35,
        tokensymbol:"ETH",
        type:"NFT",
        usdvalue:350
    }
];

export default function Walletpanel() {
    const [token, setToken] = useState(10 as ReactNode);

    const handleChange = (event: SelectChangeEvent) => {
        console.log(event.target.value);
        setToken(event.target.value as ReactNode);
    };
    return(
        <>
            <div className={styles.Walletpanel}>
                <div className={styles.Buttongroup}>
                    <div className={styles.Button} style={{backgroundColor: "#03435B", borderColor: "#067299"}}>
                        <div className={styles.Content}>
                            <img src="../../assets/icons/dashboard/postproject.png"></img>
                            <div>Post Project</div>
                        </div>
                    </div>
                    <div className={styles.Button} style={{backgroundColor: "#52041B", borderColor: "#8B062E"}}>
                        <div className={styles.Content}>
                            <img src="../../assets/icons/dashboard/buildavatar.png"></img>
                            <div>Build Avatar</div>
                        </div>
                    </div>
                    <div className={styles.Button} style={{backgroundColor: "#58004F", borderColor: "#940085"}}>
                        <div className={styles.Content}>
                            <img src="../../assets/icons/dashboard/buymetaverse.png"></img>
                            <div>Buy Metaverse</div>
                        </div>
                    </div>
                </div>
                <div className={styles.Walletbalance}>
                    <div>Wallet Balance</div>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleChange}
                        value={token}
                        style={{border:"none", color:"white"}}
                    >
                        <MenuItem value={10}>
                            <div style={{display: "flex", gap: "16px", flexDirection: "row", alignItems: "center", paddingRight: "60px"}}>
                                <img src="../../assets/icons/dashboard/ETHw.png" />
                                Ethereum ETH
                            </div>
                        </MenuItem>
                        <MenuItem value={20}>
                            <div style={{display: "flex", gap: "16px", flexDirection: "row", alignItems: "center", paddingRight: "60px"}}>
                                <img src="../../assets/icons/dashboard/PLG.png" />
                                Polygon PLG
                            </div>
                        </MenuItem>
                        <MenuItem value={30}>
                            <div style={{display: "flex", gap: "16px", flexDirection: "row", alignItems: "center", paddingRight: "60px"}}>
                                <img src="../../assets/icons/dashboard/SOL.png" />
                                Solana SOL
                            </div>
                        </MenuItem>
                    </Select>
                    <div className={styles.BalanceText}>
                        <div className={styles.Symbol}>ETH</div>
                        <div className={styles.Amount}>51.76845</div>
                    </div>
                    <div className={styles.InOutInfo}>
                        <div className={styles.InInfo}>
                            <div className={styles.Label}>
                                <img src="../../assets/icons/dashboard/inflow_label.png"></img>
                                <div>Inflow</div>
                            </div>
                            <div className={styles.InflowValue}>
                                <div className={styles.Amount}>+8.564</div>
                                <div className={styles.Symbol}>ETH</div>
                            </div>
                            <div>
                                <img src="../../assets/icons/dashboard/inflow_graph.png"></img>
                            </div>
                        </div>
                        <div className={styles.OutInfo}>
                            <div className={styles.Label}>
                                <img src="../../assets/icons/dashboard/outflow_label.png"></img>
                                <div>Outflow</div>
                            </div>
                            <div className={styles.OutflowValue}>
                                <div className={styles.Amount}>-8.564</div>
                                <div className={styles.Symbol}>ETH</div>
                            </div>
                            <div>
                                <img src="../../assets/icons/dashboard/outflow_graph.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.Transactions}>
                    <div className={styles.Label}>Recent Transactions</div>
                    <div className={styles.Lookingfor}>
                        <TextField
                            id="input-with-icon-textfield"
                            placeholder="Search..."
                            InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                            }}
                        />
                        <Autocomplete className={styles.Search}
                            options={filters.map((option)=>option)}
                            renderInput={(params) => <TextField {...params} placeholder="Filter" InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <FilterList />
                                    </InputAdornment>
                                )
                            }}/>}
                        />
                    </div>
                    <div className={styles.RecentTx}>
                        <div className={styles.Headbar}>
                            <div>Wallet</div>
                            <div>Amount in USD</div>
                        </div>
                        <div className={styles.Col}>
                            <div className={styles.TokenAmount}>
                                <div className={styles.Amount}>
                                    <img src="../../assets/icons/dashboard/ETH.png"></img>
                                    <div className={styles.AmountText}>
                                        <div className={styles.Balance}>0.35 ETH</div>
                                        <div className={styles.Type}>NFT</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.UsdAmount}>+$350</div>
                        </div>
                        <div className={styles.Col}>
                            <div className={styles.TokenAmount}>
                                <div className={styles.Amount}>
                                    <img src="../../assets/icons/dashboard/ETH.png"></img>
                                    <div className={styles.AmountText}>
                                        <div className={styles.Balance}>0.35 ETH</div>
                                        <div className={styles.Type}>Metaverse</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.UsdAmount} style={{color: "red"}}>-$350</div>
                        </div>
                        <div className={styles.Col}>
                            <div className={styles.TokenAmount}>
                                <div className={styles.Amount}>
                                    <img src="../../assets/icons/dashboard/PLG.png"></img>
                                    <div className={styles.AmountText}>
                                        <div className={styles.Balance}>0.35 PLG</div>
                                        <div className={styles.Type}>Talent</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.UsdAmount} style={{color: "red"}}>-$350</div>
                        </div>
                        <div className={styles.Col}>
                            <div className={styles.TokenAmount}>
                                <div className={styles.Amount}>
                                    <img src="../../assets/icons/dashboard/PLG.png"></img>
                                    <div className={styles.AmountText}>
                                        <div className={styles.Balance}>0.35 PLG</div>
                                        <div className={styles.Type}>Talent</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.UsdAmount}>+$350</div>
                        </div>
                        <div className={styles.Col}>
                            <div className={styles.TokenAmount}>
                                <div className={styles.Amount}>
                                    <img src="../../assets/icons/dashboard/SOL.png"></img>
                                    <div className={styles.AmountText}>
                                        <div className={styles.Balance}>0.35 SOL</div>
                                        <div className={styles.Type}>NFT</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.UsdAmount}>+$350</div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
}