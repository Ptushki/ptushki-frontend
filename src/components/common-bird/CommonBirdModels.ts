import { IAutosuggest, IChangeValue } from "../autosuggest/Autosuggest";
import { IBird } from "../bird/Bird";
import { IInitialData } from "../../app/features/create-page/models";

export interface CollectionItem {
  value: string;
  id: number;
  label: string;
}

export interface PhotoItem {
  url: string;
  id: number;
}

export interface FormValueDescriptor {
  value: string;
  label: string;
}

export interface FormValues {
  euringCodeIdentifier: FormValueDescriptor;
  species?: FormValueDescriptor;
  speciesMentioned?: FormValueDescriptor;
  sexMentioned: FormValueDescriptor;
  ageMentioned: FormValueDescriptor;
  status: FormValueDescriptor;
  placeCode: FormValueDescriptor;
  coordinates: FormValueDescriptor;
  accuracyOfDate: FormValueDescriptor;
  comment: FormValueDescriptor;
  // TODO: integrate date picker
  date: any;
  longitude: FormValueDescriptor;
  latitude: FormValueDescriptor;
  verified: FormValueDescriptor;
  broodSizeMentioned: FormValueDescriptor;
  pullusAge: FormValueDescriptor;
  accuracyOfPullusAge: FormValueDescriptor;
  catchingMethod: FormValueDescriptor;
  catchingLures: FormValueDescriptor;
  manipulated: FormValueDescriptor;
  movedBeforeTheCapture: FormValueDescriptor;
  observer: FormValueDescriptor;
  eMail: FormValueDescriptor;
  observationPlace: FormValueDescriptor;
  day: FormValueDescriptor;
  month: FormValueDescriptor;
  year: FormValueDescriptor;
  hour: FormValueDescriptor;
  minute: FormValueDescriptor;
  сodeOfPlace: FormValueDescriptor;
  accuracyOfCoordinates: FormValueDescriptor;
  circumstances: FormValueDescriptor;
  circumstancesPresumed: FormValueDescriptor;
  primaryIdentificationMethod: FormValueDescriptor;
  ringNumber: FormValueDescriptor;
  ringSeria: FormValueDescriptor;
  numberInBase: FormValueDescriptor;
  verificationOfTheMetalRing: FormValueDescriptor;
  ringingScheme: FormValueDescriptor;
  metalRingInformation: FormValueDescriptor;
  otherMarksInformation: FormValueDescriptor;
}

interface FormLabels {
  title: string;
  subtitle?: string;
}

export interface ICommonBird extends IBird {
  initialValues?: IInitialData;
  onChangeBirdValues?: (birdParams: any) => void;
  onChangeFormValue?: ({ value, type }: IChangeValue) => void;
  formValues?: FormValues;
  observationsLabels: FormLabels;
  circumstancesLabels: FormLabels;
  photos?: Array<string>;
}

export interface IBlockHeader {
  title: string;
  subtitle?: string;
}

export interface IField extends IAutosuggest {
  label: string;
  classModifier?: string;
}
