import{j as t,g as n}from"./iframe-CImoBJWj.js";import{A as r}from"./action-form-L1gpksdN.js";import"./preload-helper-IQX6vey9.js";import"./DropdownField-BPXOmhtU.js";import"./debounce-CkFI5VMc.js";import"./useOsdkClient-DqZgonFV.js";import"./index-Cup5tXcg.js";import"./Input-Soc66haA.js";import"./useBaseUiId-DK9CjSol.js";import"./useControlled-5ShBBeuE.js";import"./index-Bp-sZfW0.js";import"./index-BO30NG2p.js";import"./PopoverPopup-B6cucSon.js";import"./InternalBackdrop-1dyRFkhN.js";import"./composite-wTqD7xb9.js";import"./index-B-OKDmMN.js";import"./getDisabledMountTransitionStyles-CETjyBx5.js";import"./ToolbarRootContext-UrwTEYWQ.js";import"./tick-B2SLTcTU.js";import"./svgIconContainer-CDIM8d0X.js";import"./small-cross-DUFIOJxP.js";import"./search-C3EkrB74.js";import"./cross-BqnYY50C.js";import"./useValueChanged-DU8FQ44D.js";import"./getPseudoElementBounds-BLg8_Dqh.js";import"./CompositeItem-wd-v0oiM.js";import"./makeExternalStore-DWGtL2cW.js";import"./BaseForm-CCHhXau9.js";import"./ActionButton-BVwRTNVr.js";import"./Button-DBcwhCWE.js";import"./SkeletonBar-lAqm2yHw.js";import"./Tooltip-C-UE3W8B.js";import"./info-sign-Qin464mH.js";import"./chevron-up-PBV9rbHb.js";import"./chevron-down-By6KsCFI.js";import"./useEventCallback-8HkFD2y4.js";import"./iconLoader-oMqSWl4a.js";import"./Switch-CJqV8-aH.js";import"./CompositeRoot-BdWSXYxZ.js";import"./TimePicker-hPGSPKHG.js";import"./CollapsiblePanel-C80L8NQi.js";import"./error-BhWP_ezt.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BzR5lmI7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
