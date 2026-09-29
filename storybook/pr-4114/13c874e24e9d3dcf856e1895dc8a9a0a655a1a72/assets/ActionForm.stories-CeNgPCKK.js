import{j as t,g as n}from"./iframe-BDrYxAnj.js";import{A as r}from"./action-form-DQbwOFwL.js";import"./preload-helper-BbEpp3I7.js";import"./DropdownField-c9rafbuP.js";import"./debounce-BunXjI-p.js";import"./useOsdkClient-BlyxCpjB.js";import"./index-BPEebEts.js";import"./Input-C01z3l8s.js";import"./useBaseUiId-CAXuqLAY.js";import"./useControlled-BxTCkN_B.js";import"./index-BrKxc1O3.js";import"./index-7qmIIDvp.js";import"./PopoverPopup-Du5q3SlO.js";import"./InternalBackdrop-DWYHvnmi.js";import"./composite-DYyfkGU2.js";import"./index-CGlFVnJg.js";import"./getDisabledMountTransitionStyles-CpLEVLsZ.js";import"./ToolbarRootContext-GKsQXXvO.js";import"./tick-BobOfkxj.js";import"./svgIconContainer-Ds5xgQa8.js";import"./small-cross-BCuonOce.js";import"./search-bZxTGR19.js";import"./cross-DN7w6x3L.js";import"./useValueChanged-BIKs48bW.js";import"./getPseudoElementBounds-BKXXIJ8q.js";import"./CompositeItem-Bmk8s39S.js";import"./makeExternalStore-BknbLg4s.js";import"./BaseForm-C_E0pvvx.js";import"./ActionButton-Dt_BEibG.js";import"./Button-BXNKdTW4.js";import"./SkeletonBar-3MDKkZoz.js";import"./Tooltip-F1ZDXICZ.js";import"./info-sign-xPRrEppw.js";import"./chevron-up-DvvDuSOP.js";import"./chevron-down-DSLDVHXx.js";import"./useEventCallback-dV43fwqZ.js";import"./iconLoader-qBy6wwff.js";import"./Switch-CY9ywk35.js";import"./CompositeRoot-DZSZG_eB.js";import"./TimePicker-BrqipyYo.js";import"./CollapsiblePanel-CSDsM7aL.js";import"./error-Bic94l6Q.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-O05I0Pm6.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
