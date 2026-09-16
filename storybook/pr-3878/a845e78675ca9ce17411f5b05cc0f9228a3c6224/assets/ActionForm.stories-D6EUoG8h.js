import{j as t,g as n}from"./iframe-nlmHRzbs.js";import{A as r}from"./action-form-Bqsgt6kV.js";import"./preload-helper-Bb4XP1JR.js";import"./DropdownField-CYPegbUm.js";import"./debounce-tbCf9dd0.js";import"./useOsdkClient-upaDZFfa.js";import"./index-BgU0BklA.js";import"./Input-C_WMBA0h.js";import"./useBaseUiId-BvXBgh7R.js";import"./useControlled-CL-2sXEB.js";import"./index-BBKiIpPq.js";import"./index-DrPWGN5f.js";import"./PopoverPopup-Cv6VjVH2.js";import"./InternalBackdrop-CEbVru8y.js";import"./composite-9JvUOFhV.js";import"./index-BvyZUx7D.js";import"./getDisabledMountTransitionStyles-BPlx4jy3.js";import"./ToolbarRootContext-C84AlWji.js";import"./tick-jNCOjvIC.js";import"./svgIconContainer-DS8QHuIj.js";import"./small-cross-BOjbtokm.js";import"./search-KdHomzFH.js";import"./cross-BQ8TIcPZ.js";import"./useValueChanged-Ct9fu7Wh.js";import"./getPseudoElementBounds-CbqeOO0o.js";import"./CompositeItem-DKy9HSNC.js";import"./makeExternalStore-CDFtpytl.js";import"./BaseForm-6N9rH-Bj.js";import"./ActionButton-DjrG6zzQ.js";import"./Button-u5u7l_L-.js";import"./SkeletonBar-CecNAbci.js";import"./Tooltip-h8u3LTdZ.js";import"./info-sign-CogLBN47.js";import"./chevron-up-CaxJAPWI.js";import"./chevron-down-DrD3cVw1.js";import"./useEventCallback-DdbGqZSc.js";import"./iconLoader-Cp1afRKt.js";import"./Switch-3pXOi5Ab.js";import"./CompositeRoot-D1o41xJY.js";import"./TimePicker-3FP_BRVw.js";import"./CollapsiblePanel-CY5PmDvT.js";import"./error-D0sD9myM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CYPNcnBx.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
