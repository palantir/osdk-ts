import{j as t,g as n}from"./iframe-B89B5CWM.js";import{A as r}from"./action-form-D63izpbE.js";import"./preload-helper-BQ99I6nt.js";import"./DropdownField-Cq54mmNu.js";import"./debounce-Dl_IbEsP.js";import"./useOsdkClient-uulAZQLf.js";import"./index-D9SW0Yle.js";import"./Input-BTItB3zo.js";import"./useBaseUiId-DtDRBSq4.js";import"./useControlled-oTZtcuwA.js";import"./index-BWtJkqTj.js";import"./index-m1HPcpqW.js";import"./PopoverPopup-DefmT2bE.js";import"./InternalBackdrop-COfUIr0S.js";import"./composite-B50sO1rH.js";import"./index-DbCSIb3h.js";import"./getDisabledMountTransitionStyles-CtMZVl1t.js";import"./ToolbarRootContext-BUhhyvqJ.js";import"./tick-D72Jsudk.js";import"./svgIconContainer-ChPhhCD3.js";import"./small-cross-C8bFb-MH.js";import"./search-BIvcGDFg.js";import"./cross-BbpWCkxQ.js";import"./useValueChanged-DITF5IQQ.js";import"./getPseudoElementBounds-CKOvD078.js";import"./CompositeItem-CiUmrhhL.js";import"./makeExternalStore-Dng9Dmlv.js";import"./BaseForm-CBtgmJ3c.js";import"./ActionButton-6QvyZFZ4.js";import"./Button-Y1tATrz0.js";import"./SkeletonBar-pSM_YdGu.js";import"./Tooltip-DCjqoaml.js";import"./info-sign-spzsb-xs.js";import"./chevron-up-CDsSHZnt.js";import"./chevron-down-C8YyWC3O.js";import"./useEventCallback-HaOgpImO.js";import"./iconLoader-S2ZjvSjB.js";import"./Switch-B55tRo9n.js";import"./CompositeRoot-C40CMzTq.js";import"./TimePicker-B_-tvKz4.js";import"./CollapsiblePanel-CfrpUeu3.js";import"./error-yAZoJobu.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cct9f3WN.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
