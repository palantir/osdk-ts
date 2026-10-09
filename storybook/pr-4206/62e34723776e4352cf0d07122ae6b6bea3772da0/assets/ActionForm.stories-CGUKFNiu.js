import{j as t,g as n}from"./iframe-kxdUQCve.js";import{A as r}from"./action-form-BEb1ty__.js";import"./preload-helper-Cuq4TkHU.js";import"./DropdownField-ggEkgwUW.js";import"./debounce-BnMuliNi.js";import"./useOsdkClient-B1pTCJqX.js";import"./index-Dj-vHPb7.js";import"./Input-DaXzRTeY.js";import"./useBaseUiId-DHH2yIbk.js";import"./useControlled-BW2k3psm.js";import"./index-DLOXxPse.js";import"./index-Cm3W4-OV.js";import"./PopoverPopup-uby0I1CE.js";import"./InternalBackdrop-BZ9l1zrW.js";import"./composite-Bj70JY7P.js";import"./index-ClZwirhD.js";import"./getDisabledMountTransitionStyles-lcQ0Umsd.js";import"./ToolbarRootContext-CW6avnm2.js";import"./tick-Brv0cW5L.js";import"./svgIconContainer-0muFsb9b.js";import"./small-cross-CNq41qjz.js";import"./search-Dtrnv9od.js";import"./cross-BGuVVI58.js";import"./useValueChanged-DqoHHV3-.js";import"./getPseudoElementBounds-CPNZb4-2.js";import"./CompositeItem-CSpMJ9Wh.js";import"./makeExternalStore-CNzfft50.js";import"./BaseForm-B79Kjc6p.js";import"./ActionButton-DqspKp5t.js";import"./Button-Ca-rtxgT.js";import"./SkeletonBar-tkvmB8An.js";import"./Tooltip-BfGevlTY.js";import"./info-sign-fCFxSzzM.js";import"./chevron-up-sYdp_yxo.js";import"./chevron-down-CKJ5Wwcf.js";import"./useEventCallback-Bq9ZgDOO.js";import"./iconLoader-jBjFtpe9.js";import"./Switch-ebm2QK8f.js";import"./CompositeRoot-CF97c9v_.js";import"./TimePicker-aQ7bY4BY.js";import"./CollapsiblePanel-MI7Qpoh1.js";import"./error-Dc_ezcGJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BsNzoRp3.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
