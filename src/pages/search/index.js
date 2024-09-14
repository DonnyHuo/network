import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import service from "../../request";
import { throttle, shortStr } from "../../utils";
import { message } from "antd";

const Stake = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState({});

  const getOrderId = async (orderID) => {
    if (orderID == "" || orderID.length !== 19) {
      return;
    }
    const data = await service({
      method: "get",
      url: "/zcloak-rest/zcloak/queryOrderId",
      params: {
        orderID: orderID,
      },
    });
    if (data.code === "000000") {
      setData(data.data);
    } else {
      setData({});
      message.error(data.message);
    }
  };

  useEffect(() => {
    getOrderId(value);
  }, []);

  return (
    <div className="search">
      <div className="content">
        <div className="searchBg2 w-full h-60"></div>
        <div className="pt-10">
          <div className="mx-10 bg-swapBg rounded-full Regular py-3">
            <div className="flex items-center justify-between px-4">
              <button className="flex items-center justify-center">
                <img
                  className="w-6"
                  src={require("../../assets/img/search.png")}
                  alt=""
                />
              </button>
              <input
                className="outline-none bg-transparent my-2 text-xl w-10/12"
                type="text"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  getOrderId(e.target.value);
                }}
                placeholder="Search your Order ID"
              />
            </div>
          </div>
          {data ? (
            <>
              {/* <div className="w-1/2 m-auto text-disable mt-4 Regular text-xs">
                You still have {data.total_amount} search attempts available
                today.
              </div> */}
              <div className="mt-6 mx-10">
                <p className="py-2 border-b border-solid border-disable">
                  UID: {data.order_id}
                </p>
                <p className="py-2 border-b border-solid border-disable">
                  Roothash:
                  <a
                    className="underline underline-offset-1"
                    href={data.zkAttestationOnChainTxHashUrl}
                    target="_blank"
                  >
                    {shortStr(data.zk_attestation_on_chain_tx_hash)}
                  </a>
                </p>
                <p className="py-2 border-b border-solid border-disable">
                  Attester:
                  <a
                    className="underline underline-offset-1"
                    href={data.dataAttestationOnChainTxHashUrl}
                    target="_blank"
                  >
                    {shortStr(data.data_attestation_on_chain_tx_hash)}
                  </a>
                </p>
                <p className="py-2 border-b border-solid border-disable">
                  Amount: {data.total_amount}
                </p>
              </div>
            </>
          ) : (
            <div className="h-[100px] flex items-center justify-center">
              No data
            </div>
          )}

          <div className="w-full absolute bottom-4">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stake;
