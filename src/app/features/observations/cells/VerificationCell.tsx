import { IconButton } from "@material-ui/core";
import {
  AddCircle,
  Check,
  CheckCircle,
  Clear,
  RadioButtonChecked,
  RadioButtonUnchecked
} from "@material-ui/icons";
import React from "react";
import { connect, DispatchProp } from "react-redux";
import { TmpObservation } from "../../../../store/reducers/observationListReducer";

export const VerificationCell = connect()(
  ({
    dispatch,
    observation
  }: DispatchProp & { observation: TmpObservation }) => (
    // TODO update api and wire up
    <>
      {observation.verified ? (
        <IconButton className="p-0 mr-2" disableRipple>
          <RadioButtonUnchecked />
        </IconButton>
      ) : (
        <IconButton className="p-0 mr-2 text-primary" disableRipple>
          <RadioButtonChecked />
        </IconButton>
      )}

      <IconButton className="p-0 mr-2" disableRipple>
        <Clear />
      </IconButton>
      <IconButton className="p-0 mr-2 text-danger" disableRipple>
        <AddCircle style={{ transform: "rotate(45deg)" }} />
      </IconButton>

      <IconButton className="p-0 mr-2 text-success" disableRipple>
        <CheckCircle />
      </IconButton>
      <IconButton className="p-0 mr-2" disableRipple>
        <Check />
      </IconButton>
    </>
  )
);