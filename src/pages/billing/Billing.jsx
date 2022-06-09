import { Plan } from "../../shared/display/plan/Plan"
import { useEffect, useState } from "react";
import { billingPlans } from "./BillingPlans";

export default function Billing(){
    const [plans, setPlans] = useState([]);
    useEffect(() => {
        setPlans(billingPlans);
    }, [])
    return (
        <div className="w-full h-full flex flex-wrap justify-center items-center mt-[30px]">
                {
                    plans.map((p, key) => {
                        return (
                            <div className="flex justify-center items-center basis-1/3" key={key}>
                                <Plan {...p} />
                            </div>
                        )
                    })
                }
            </div>
    )
}