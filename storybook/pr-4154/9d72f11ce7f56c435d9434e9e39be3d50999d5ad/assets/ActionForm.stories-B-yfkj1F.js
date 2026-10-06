import{j as t,g as n}from"./iframe-D6fPZnqe.js";import{A as r}from"./action-form-Ct4XondG.js";import"./preload-helper-CBKbTLo4.js";import"./DropdownField-DSKwjEDD.js";import"./debounce-BxsvKDso.js";import"./useOsdkClient-wl1q4R-Q.js";import"./index-DhSFErPm.js";import"./Input-DoNUyN0C.js";import"./useBaseUiId-D4NDHa5t.js";import"./useControlled-iYay2yJT.js";import"./index-DAhymAav.js";import"./index-D-Gucmtt.js";import"./PopoverPopup-Can2UDel.js";import"./InternalBackdrop-C5Ye3Vqn.js";import"./composite-Be4p-4ws.js";import"./index-BewO9ECR.js";import"./getDisabledMountTransitionStyles-DV-WhxgY.js";import"./ToolbarRootContext-DyAqKFWo.js";import"./tick-Cmu8hVd0.js";import"./svgIconContainer-DubCep_u.js";import"./small-cross-DR8DSWW3.js";import"./search-j5vkqq1q.js";import"./cross-9F8JKEQy.js";import"./useValueChanged-1d_1m1_Q.js";import"./getPseudoElementBounds-DJZ8Mcmv.js";import"./CompositeItem--v0QRyqL.js";import"./makeExternalStore-DTY2ua9-.js";import"./BaseForm-oZKEpzDX.js";import"./ActionButton-S2mIoAOj.js";import"./Button-BLxStAZZ.js";import"./SkeletonBar-BsphNaN3.js";import"./Tooltip-CfEkDLj5.js";import"./info-sign-BcK3WcRm.js";import"./chevron-up-BAHETOHn.js";import"./chevron-down-ClCJem65.js";import"./useEventCallback-DEXHHYRn.js";import"./iconLoader-DMMSN3r2.js";import"./Switch-DL6ZjgQG.js";import"./CompositeRoot-TqhddMsK.js";import"./TimePicker-D5d47nIV.js";import"./CollapsiblePanel-CxtE82_6.js";import"./error-1a5mXdNM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-IqNfL-7w.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
