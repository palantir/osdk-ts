import{j as t,g as n}from"./iframe-CTMkKkzw.js";import{A as r}from"./action-form-lTBtTbNH.js";import"./preload-helper-DG8pwmv3.js";import"./DropdownField-Cg1kzpH9.js";import"./debounce-ByrkZFkK.js";import"./useOsdkClient-DH7pH4yQ.js";import"./index-BL_iYgDS.js";import"./Input-SxG8NTwK.js";import"./useBaseUiId-Nc3myLqM.js";import"./useControlled-Dmn8OKSb.js";import"./index-B9bA0pQd.js";import"./index-KMN5SPjN.js";import"./PopoverPopup-CqAzZfVr.js";import"./InternalBackdrop-svBxXw7w.js";import"./composite-np7yuSJU.js";import"./index-BJk5b2Mi.js";import"./getDisabledMountTransitionStyles-DWNlrkIU.js";import"./ToolbarRootContext-CIGDW9Ar.js";import"./tick-ZXxKzXjV.js";import"./svgIconContainer-BUps9CL-.js";import"./small-cross-reWYho1p.js";import"./search-8dNzS2xV.js";import"./cross-B-D9SFl0.js";import"./useValueChanged-DAzMvShK.js";import"./getPseudoElementBounds-CcioB7ar.js";import"./CompositeItem-CSULberz.js";import"./makeExternalStore-CLmOAONC.js";import"./BaseForm-Bp2et_am.js";import"./ActionButton-DwFZ69ro.js";import"./Button-u7wDd7Jy.js";import"./SkeletonBar-Cam1cO27.js";import"./Tooltip-DQT__ibc.js";import"./info-sign-Dy0xQ-LK.js";import"./chevron-up-QV-8O4iZ.js";import"./chevron-down-BCsUFncR.js";import"./useEventCallback-f_5J5lhm.js";import"./iconLoader-Ds636xDE.js";import"./Switch-sP9U6soM.js";import"./CompositeRoot-BgCNcQb8.js";import"./TimePicker-DESF-39e.js";import"./CollapsiblePanel-q_Q68xut.js";import"./error-BFPACif0.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BkagLhYt.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
