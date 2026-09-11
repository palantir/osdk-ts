import{j as t,g as n}from"./iframe-q73h-SNz.js";import{A as r}from"./action-form-Bj4yigmb.js";import"./preload-helper-BvXISORE.js";import"./DropdownField-DpBuPkD-.js";import"./debounce-DSfFacxB.js";import"./useOsdkClient-CVuR42rF.js";import"./index-CNgILQVN.js";import"./Input-CUYY-XQS.js";import"./useBaseUiId-BT4TVIMU.js";import"./useControlled-CIDCJXAS.js";import"./index-CmcHR3Mh.js";import"./index-GTDJrYHL.js";import"./PopoverPopup-Djh0qu5C.js";import"./InternalBackdrop-3dmgnm-B.js";import"./composite-DsUUOBpL.js";import"./index-CE_isF10.js";import"./getDisabledMountTransitionStyles-dAfff5JR.js";import"./ToolbarRootContext-XN_eoe5I.js";import"./tick-CDEBgOjy.js";import"./svgIconContainer-BnJjPefi.js";import"./small-cross-KtqmkdiH.js";import"./search-CyIDS8Xl.js";import"./cross-UurqhnpQ.js";import"./useValueChanged-vcJ35Sa1.js";import"./getPseudoElementBounds-BcUe90OX.js";import"./CompositeItem-8Q0GNXmT.js";import"./makeExternalStore-CvHnGZr3.js";import"./BaseForm-DHHgOriu.js";import"./ActionButton-DUEoS-Oq.js";import"./Button-DMD0TrjN.js";import"./SkeletonBar-CyVdL5QR.js";import"./Tooltip-C1ULjr5P.js";import"./info-sign-Db6aluQI.js";import"./chevron-up-CwrQarYn.js";import"./chevron-down-CcztAG1Q.js";import"./useEventCallback-DHiiVSQq.js";import"./iconLoader-KC3qckGv.js";import"./CompositeRoot-BPySZV7q.js";import"./Switch-BAEFsoA8.js";import"./TimePicker-6TXnEx8c.js";import"./CollapsiblePanel-D1igOUIW.js";import"./error-BBRDAF1W.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-mt0BkM0o.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
