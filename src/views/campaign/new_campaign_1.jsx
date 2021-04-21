import React from "react";
import blue from "../../img/blue.png";
import FormInput from "../../components/Forms/FormInput";
import FormText from "../../components/Forms/FormText";
export default function NewCampaign() {
  return (
    <>
      <div className="setup-campaign">
        <div className="eclipse">
          <img src={blue} alt="" />
        </div>
        <div className="text-fore">Set Up Campaign</div>
        <div className="setup-campaign-form-areas">
          <FormInput
            name=""
            label_class="label-normal"
            title="Campaign Title"
            placeholder="My Soap Promo"
            className="input-normal"
          />
          <FormInput
            name=""
            label_class="label-normal"
            title="From"
            placeholder="type in the sender name. E.g: Alpha XYZ stores"
            className="input-normal"

          />
          <FormText label_class="label-normal" name="" title="From" placeholder="Type your message here" />
        </div>
      </div>
    </>
  );
}
