import{j as t,g as n}from"./iframe-DFu988a9.js";import{A as r}from"./action-form-BqrZ4JTj.js";import"./preload-helper-Ct8docw7.js";import"./DropdownField-CF3gsiae.js";import"./debounce-CabyEDng.js";import"./useOsdkClient-D2jZVLbn.js";import"./index-DtOhOCRY.js";import"./Input-BESoTzvx.js";import"./useBaseUiId-DfpfcE5B.js";import"./useControlled-yPSACah0.js";import"./index-oZKnD5HE.js";import"./index-B1t2YxMt.js";import"./PopoverPopup-CW_pGXjQ.js";import"./InternalBackdrop-DpxPfaGd.js";import"./composite-CqpVVzkR.js";import"./index-CkBJ6EJa.js";import"./getDisabledMountTransitionStyles-C3yZ6yy9.js";import"./ToolbarRootContext-C15MGeq9.js";import"./tick-BR3rer0s.js";import"./svgIconContainer-HyV1TJqY.js";import"./small-cross-fz8OFb0W.js";import"./search-IsQI8GuL.js";import"./cross-CTTF3yR9.js";import"./useValueChanged-CYbng77M.js";import"./getPseudoElementBounds-BIueGgLb.js";import"./CompositeItem-DmVR8xyg.js";import"./makeExternalStore-D9C8VaXr.js";import"./BaseForm-DJ97U3AB.js";import"./ActionButton-Dzobjq1d.js";import"./Button-6zqiKmKY.js";import"./SkeletonBar-DjgWC4S2.js";import"./Tooltip-BTqW7Tma.js";import"./info-sign-CPd4WMmA.js";import"./chevron-up-C31YKC3J.js";import"./chevron-down-NXTIxDJ_.js";import"./useEventCallback-W1QvEMUe.js";import"./iconLoader-BmJSGZR4.js";import"./Switch-DdapYDEf.js";import"./CompositeRoot-zB1wsWJC.js";import"./TimePicker-ZGnFr-PI.js";import"./CollapsiblePanel-CpkVrlz9.js";import"./error-DqAZcTwE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BYOAqz11.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
