import{j as t,g as n}from"./iframe-ErFjiRdR.js";import{A as r}from"./action-form-2aYlIBgt.js";import"./preload-helper-QXATeijz.js";import"./DropdownField-CxUf6e52.js";import"./debounce-DAbWe4HY.js";import"./useOsdkClient-B2bg1Zbb.js";import"./index-CprRWtZ0.js";import"./Input-5vpb7ex0.js";import"./useBaseUiId-q1R-2ocn.js";import"./useControlled-y5HTd1hS.js";import"./index-DyME0HO3.js";import"./index-R776mpCr.js";import"./PopoverPopup-CBq8CNSA.js";import"./InternalBackdrop-BVX_h7aO.js";import"./composite-BNsKQKoz.js";import"./index-CioP4s9H.js";import"./getDisabledMountTransitionStyles-CudQAnha.js";import"./ToolbarRootContext-DKYtYCzN.js";import"./tick-CsfDOtgs.js";import"./svgIconContainer-DwCJmDQ6.js";import"./small-cross-W7MFHZ4g.js";import"./search-D70lAymL.js";import"./cross-DA1xIqSH.js";import"./useValueChanged-sN946PV6.js";import"./getPseudoElementBounds-BWDQXgDF.js";import"./CompositeItem-CXu476SC.js";import"./makeExternalStore-BmDH-BLi.js";import"./BaseForm-CasV9SYQ.js";import"./ActionButton-BmfgSZLa.js";import"./Button-Bkuli5yv.js";import"./SkeletonBar-9G0HH7I4.js";import"./Tooltip-DVQuoGJ7.js";import"./info-sign-C1oZedid.js";import"./chevron-up-BOr_C0-0.js";import"./chevron-down-8N5DEpE8.js";import"./useEventCallback-CsjBQJGO.js";import"./iconLoader-CoKYIFY2.js";import"./Switch-RUbqI5CH.js";import"./CompositeRoot-jtppVHZr.js";import"./TimePicker-DX9sKZ8B.js";import"./CollapsiblePanel-Cb17J6r_.js";import"./error-D-xAMd6a.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-LLxyWREg.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
