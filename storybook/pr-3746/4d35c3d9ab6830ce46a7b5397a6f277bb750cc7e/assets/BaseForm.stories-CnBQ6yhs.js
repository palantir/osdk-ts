import{h as i,f as r,b as m}from"./baseFormStoryHelpers-dAyd2u9k.js";import"./iframe-Da42tfo0.js";import"./preload-helper-DAikJXZa.js";import"./SubmissionOutputPanel-DG4irKhJ.js";import"./BaseForm-BisQz914.js";import"./index-Bomen_f9.js";import"./ActionButton-BvqT7-oi.js";import"./Button-DNGlddJW.js";import"./useBaseUiId-BeAjw0Pz.js";import"./SkeletonBar-BqNP19Zt.js";import"./Tooltip-s5Zvo8l1.js";import"./index-CMocEMCd.js";import"./index-B31UFyDN.js";import"./InternalBackdrop-B0vh3c6g.js";import"./composite-BM8dnVYH.js";import"./index-Dneb3Ic8.js";import"./getDisabledMountTransitionStyles-BcsBiRAn.js";import"./ToolbarRootContext-BmwtS_AT.js";import"./PopoverPopup-B2KF4r0_.js";import"./info-sign-Bw_bRdxv.js";import"./svgIconContainer-C1uFDFQ-.js";import"./DropdownField-lD6ZutwA.js";import"./toNumber-B2CaCxn8.js";import"./useOsdkClient-BxBRpG4B.js";import"./Input-CsGs3Ea-.js";import"./useControlled-tfkpEIEU.js";import"./tick-Djt3HCnR.js";import"./isObject-GrzurbJg.js";import"./search-CMGFB0Gl.js";import"./cross-DG6Fu1MX.js";import"./useValueChanged-Cr9sCKBo.js";import"./getPseudoElementBounds-BkbDXquO.js";import"./CompositeItem-BgwdEem5.js";import"./makeExternalStore-DY6l4t0Z.js";import"./chevron-up-HpUmaoT2.js";import"./chevron-down-B9ztHwbJ.js";import"./useEventCallback-DQIdBA5X.js";import"./Switch-CnAP0jNF.js";import"./iconLoader-CUqjgfX-.js";import"./CompositeRoot-4xhbfFIS.js";import"./TimePicker-CtZZuoEY.js";import"./CollapsiblePanel-DPDXkpk-.js";import"./error-C20szSnY.js";const J={...m,title:"Components/ActionForm/Building Blocks/BaseForm"},e={args:{formContent:r,onSubmit:i},parameters:{docs:{source:{code:`import { BaseForm } from "@osdk/react-components/experimental";
import {
  THEMED_SLIDER_DEFAULT_VALUE,
  ThemedSliderField,
} from "./ThemedSliderField";

const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "description",
    fieldComponent: "TEXT_AREA",
    label: "Description",
    fieldComponentProps: { placeholder: "Enter a description", rows: 3 },
  },
  {
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    isRequired: true,
    fieldComponentProps: { min: 0, max: 1000, step: 1 },
  },
  {
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    fieldComponentProps: {
      items: ["Low", "Medium", "High"],
      placeholder: "Select priority",
    },
  },
  {
    fieldKey: "isActive",
    fieldComponent: "RADIO_BUTTONS",
    label: "Is Active",
    fieldComponentProps: {
      options: [
        { label: "True", value: true },
        { label: "False", value: false },
      ],
    },
  },
  {
    fieldKey: "startDate",
    fieldComponent: "DATETIME_PICKER",
    label: "Start Date",
    fieldComponentProps: { placeholder: "Select a date" },
  },
  {
    fieldKey: "document",
    fieldComponent: "FILE_PICKER",
    label: "Document",
    fieldComponentProps: { accept: ".pdf,.doc,.docx" },
  },
  {
    fieldKey: "completion",
    fieldComponent: "CUSTOM",
    label: "Completion",
    fieldComponentProps: {
      defaultValue: THEMED_SLIDER_DEFAULT_VALUE,
      customRenderer: (props) => <ThemedSliderField {...props} />,
    },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}};var o,n,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    formContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`import { BaseForm } from "@osdk/react-components/experimental";
import {
  THEMED_SLIDER_DEFAULT_VALUE,
  ThemedSliderField,
} from "./ThemedSliderField";

const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "description",
    fieldComponent: "TEXT_AREA",
    label: "Description",
    fieldComponentProps: { placeholder: "Enter a description", rows: 3 },
  },
  {
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    isRequired: true,
    fieldComponentProps: { min: 0, max: 1000, step: 1 },
  },
  {
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    fieldComponentProps: {
      items: ["Low", "Medium", "High"],
      placeholder: "Select priority",
    },
  },
  {
    fieldKey: "isActive",
    fieldComponent: "RADIO_BUTTONS",
    label: "Is Active",
    fieldComponentProps: {
      options: [
        { label: "True", value: true },
        { label: "False", value: false },
      ],
    },
  },
  {
    fieldKey: "startDate",
    fieldComponent: "DATETIME_PICKER",
    label: "Start Date",
    fieldComponentProps: { placeholder: "Select a date" },
  },
  {
    fieldKey: "document",
    fieldComponent: "FILE_PICKER",
    label: "Document",
    fieldComponentProps: { accept: ".pdf,.doc,.docx" },
  },
  {
    fieldKey: "completion",
    fieldComponent: "CUSTOM",
    label: "Completion",
    fieldComponentProps: {
      defaultValue: THEMED_SLIDER_DEFAULT_VALUE,
      customRenderer: (props) => <ThemedSliderField {...props} />,
    },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const Y=["Default"];export{e as Default,Y as __namedExportsOrder,J as default};
