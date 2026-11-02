import{j as t,g as n}from"./iframe-BnrsOFns.js";import{A as r}from"./action-form-DgSWfVdl.js";import"./preload-helper-C6w5d29Q.js";import"./DropdownField-STvnB7PE.js";import"./debounce-CkNSqP1Q.js";import"./useOsdkClient-zEriq08y.js";import"./index-tNt1Rsha.js";import"./Input-Bh0uDmot.js";import"./useBaseUiId-CnooZjs2.js";import"./useControlled-BkaP8RLt.js";import"./index-BGU_qlki.js";import"./index-COCOeC7h.js";import"./PopoverPopup-C5dDiQD8.js";import"./InternalBackdrop-BaF0YRGc.js";import"./composite-D8-ppVWB.js";import"./index-BZW31MjY.js";import"./getDisabledMountTransitionStyles-Da1PpZL2.js";import"./ToolbarRootContext-DKbWnJ_n.js";import"./tick-CjP_LBfV.js";import"./svgIconContainer-DHTpClH2.js";import"./small-cross-C6Err9V7.js";import"./search-Ch8w7dwR.js";import"./cross-DmYEQL4N.js";import"./useValueChanged-qkyo_zF3.js";import"./getPseudoElementBounds-yJ_WHN74.js";import"./CompositeItem-CoclYseh.js";import"./makeExternalStore-EV-ALQ58.js";import"./BaseForm-CbLlUJoB.js";import"./ActionButton-zIEW8ID5.js";import"./Button-CQyg3zRK.js";import"./SkeletonBar-6aKx3xfA.js";import"./Tooltip-BujJSCDB.js";import"./info-sign-DlrZw2Ly.js";import"./chevron-up-C1tOweU3.js";import"./chevron-down-CJXJGt0n.js";import"./useEventCallback-CZng5Hbt.js";import"./iconLoader-BK47SSRU.js";import"./Switch-rUIOZq7V.js";import"./CompositeRoot-DO44Qm0Q.js";import"./TimePicker-DNVc7ASe.js";import"./CollapsiblePanel-gvQpiFoS.js";import"./error-5DZ7K3HO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-zFHODIcB.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
