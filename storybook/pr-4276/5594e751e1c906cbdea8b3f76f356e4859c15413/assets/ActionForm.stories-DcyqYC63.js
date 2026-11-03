import{j as t,g as n}from"./iframe-Cp-VmNqL.js";import{A as r}from"./action-form-D4-BF4Jp.js";import"./preload-helper-AzhWXDuQ.js";import"./DropdownField-BVLbkf-i.js";import"./debounce-DCaOx8Rx.js";import"./useOsdkClient-Dc4Jqd5m.js";import"./index-dpygWVpJ.js";import"./Input-BEEKmunm.js";import"./useBaseUiId-OdIul-yE.js";import"./useControlled-OYIwur-C.js";import"./index-tUkk1A8p.js";import"./index-yO_woVyq.js";import"./isObject-HPrV1TH6.js";import"./InternalBackdrop-Bt0yPmbq.js";import"./composite-DlQhckwI.js";import"./index-Dv_Pm10I.js";import"./getDisabledMountTransitionStyles-DUUZwERC.js";import"./ToolbarRootContext-DNY7Xc1D.js";import"./tick-Bfi0n5W9.js";import"./svgIconContainer-zkQ14032.js";import"./small-cross-CK1o2en6.js";import"./search-HIN2ZGpm.js";import"./cross-uOKlIsXG.js";import"./useValueChanged-PvBM_FRE.js";import"./getPseudoElementBounds-AmAefdLG.js";import"./CompositeItem-CzQ4Mwjm.js";import"./makeExternalStore-oKADq8a2.js";import"./BaseForm-Ch6PEwty.js";import"./ActionButton-BN3wr41o.js";import"./Button-NTUIWe38.js";import"./SkeletonBar-CobUMKVq.js";import"./Tooltip-BczU44S5.js";import"./info-sign-CtAe24tp.js";import"./chevron-up-C1IjPord.js";import"./chevron-down-Dk2LvJq7.js";import"./useEventCallback-DQ3ev7p0.js";import"./iconLoader-DCp_16Vd.js";import"./Switch-DiqNunZS.js";import"./CompositeRoot-BeA-03_-.js";import"./TimePicker-uO9xSpJT.js";import"./CollapsiblePanel-DBGwpADH.js";import"./error-BJ-TznDH.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CWuMV6f9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
