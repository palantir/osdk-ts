import{j as t,g as n}from"./iframe-NrfGywpz.js";import{A as r}from"./action-form-BWJgWqcz.js";import"./preload-helper-B_PzSpqk.js";import"./DropdownField-CuIAd7EW.js";import"./debounce-CsnCNeb8.js";import"./useOsdkClient-DsjVhBsW.js";import"./index-B4J3JGGr.js";import"./Input-CCWHU-92.js";import"./useBaseUiId-DgnEpncS.js";import"./useControlled-DTlMTcYw.js";import"./index-D-R7Oq4i.js";import"./index-ALjvoOKD.js";import"./PopoverPopup-hYgPs6_l.js";import"./InternalBackdrop-DwTNI5Cd.js";import"./composite-DA8gx3Og.js";import"./index-D3KOsz6o.js";import"./getDisabledMountTransitionStyles-z6rzoWNn.js";import"./ToolbarRootContext-DXSxTdJI.js";import"./tick-ZKA2ZAhf.js";import"./svgIconContainer-Cgk6hNay.js";import"./small-cross-CqGyxp_N.js";import"./search-DU1IM6NB.js";import"./cross-Caw6Pz43.js";import"./useValueChanged-DybLxmI0.js";import"./getPseudoElementBounds-ButHWGJx.js";import"./CompositeItem-DkX84chI.js";import"./makeExternalStore-D2ri9UvN.js";import"./BaseForm-BFNE4V_M.js";import"./ActionButton-CKkZcYry.js";import"./Button-DIZaR5tq.js";import"./SkeletonBar-DEllJNlP.js";import"./Tooltip-DpVDM5M6.js";import"./info-sign-Bt6NB1t1.js";import"./chevron-up-Cnlk7Nam.js";import"./chevron-down-Cswe4CW9.js";import"./useEventCallback-DGcpXBNW.js";import"./iconLoader-BqF6-UAv.js";import"./CompositeRoot-DpR0zZ54.js";import"./Switch-pT7tSJSY.js";import"./TimePicker-CSJODvBl.js";import"./CollapsiblePanel-CdmC8pOd.js";import"./error-DaUrBpBS.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-5_2pgCwu.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
