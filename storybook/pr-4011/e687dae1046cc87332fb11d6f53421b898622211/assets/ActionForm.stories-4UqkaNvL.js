import{j as t,g as n}from"./iframe-dvXPHGEz.js";import{A as r}from"./action-form-EiHM1i_M.js";import"./preload-helper-BmaGIWKK.js";import"./DropdownField-CS7rxwg1.js";import"./debounce-DQGeitFh.js";import"./useOsdkClient-BaEF3EMY.js";import"./index-DyjG60lF.js";import"./Input-CQg1dEqW.js";import"./useBaseUiId-B5XDNhHC.js";import"./useControlled-C_6t7Yik.js";import"./index-DabbcYA7.js";import"./index-D0dNC_Uw.js";import"./PopoverPopup-C5XbR0Iv.js";import"./InternalBackdrop-DAJuntNY.js";import"./composite-CadSmb_E.js";import"./index-CaOHsNqN.js";import"./getDisabledMountTransitionStyles-AFbWhr8J.js";import"./ToolbarRootContext-puVPhTN3.js";import"./tick-DCw5S-Ab.js";import"./svgIconContainer-Cks84kGC.js";import"./small-cross-DKjM1orR.js";import"./search-DSXnECBw.js";import"./cross-Z5DuI0bi.js";import"./useValueChanged-CnI10VJe.js";import"./getPseudoElementBounds-D_O4eXO1.js";import"./CompositeItem-BOkdWJ_P.js";import"./makeExternalStore-CV6_Wrkf.js";import"./BaseForm-BIjIlSOs.js";import"./ActionButton-wFnbg4xS.js";import"./Button-XhiN3AVX.js";import"./SkeletonBar-Dv2M62ut.js";import"./Tooltip-Dr5evSCi.js";import"./info-sign-BxPc1olH.js";import"./chevron-up-D3T5OG4U.js";import"./chevron-down-EmJ3ovaR.js";import"./useEventCallback-nNaNdbMZ.js";import"./iconLoader-B5C1gqEc.js";import"./CompositeRoot-iMymv8X-.js";import"./Switch-_tS0UTyS.js";import"./TimePicker-DIAArYl9.js";import"./CollapsiblePanel-Uln4s1hx.js";import"./error-CQ-TuYDa.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-7z80YqAb.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

// ActionForm reads the action definition metadata and chooses default
// field components for supported parameter types.
//
// This story uses an action with this shape:
//
// {
//   apiName: "generatedFieldsStoryAction",
//   displayName: "Create employee profile",
//   parameters: {
//     fullName: {
//       displayName: "Full name",
//       dataType: { type: "string" },
//       required: true,
//     },
//     yearsExperience: {
//       displayName: "Years of experience",
//       dataType: { type: "integer" },
//     },
//     isRemote: {
//       displayName: "Remote employee",
//       dataType: { type: "boolean" },
//     },
//     startDate: {
//       displayName: "Start date",
//       dataType: { type: "timestamp" },
//     },
//     document: {
//       displayName: "Document",
//       dataType: { type: "attachment" },
//     },
//     manager: {
//       displayName: "Manager",
//       dataType: {
//         type: "object",
//         objectTypeApiName: "Employee",
//       },
//     },
//     reviewPool: {
//       displayName: "Review pool",
//       dataType: {
//         type: "objectSet",
//         objectTypeApiName: "Employee",
//       },
//     },
//   },
// }
//
// No formFieldDefinitions are passed here; the fields are generated from the
// action metadata above.
<ActionForm
  actionDefinition={generatedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>`}}}};var o,a,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."
      },
      source: {
        code: \`import { ActionForm } from "@osdk/react-components/action-form";

// ActionForm reads the action definition metadata and chooses default
// field components for supported parameter types.
//
// This story uses an action with this shape:
//
// {
//   apiName: "generatedFieldsStoryAction",
//   displayName: "Create employee profile",
//   parameters: {
//     fullName: {
//       displayName: "Full name",
//       dataType: { type: "string" },
//       required: true,
//     },
//     yearsExperience: {
//       displayName: "Years of experience",
//       dataType: { type: "integer" },
//     },
//     isRemote: {
//       displayName: "Remote employee",
//       dataType: { type: "boolean" },
//     },
//     startDate: {
//       displayName: "Start date",
//       dataType: { type: "timestamp" },
//     },
//     document: {
//       displayName: "Document",
//       dataType: { type: "attachment" },
//     },
//     manager: {
//       displayName: "Manager",
//       dataType: {
//         type: "object",
//         objectTypeApiName: "Employee",
//       },
//     },
//     reviewPool: {
//       displayName: "Review pool",
//       dataType: {
//         type: "objectSet",
//         objectTypeApiName: "Employee",
//       },
//     },
//   },
// }
//
// No formFieldDefinitions are passed here; the fields are generated from the
// action metadata above.
<ActionForm
  actionDefinition={generatedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>\`
      }
    }
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ee=["Default"];export{e as Default,ee as __namedExportsOrder,$ as default};
