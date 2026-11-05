import{j as t,g as n}from"./iframe-BRIJTziU.js";import{A as r}from"./action-form-RJuU76ra.js";import"./preload-helper-C7wNDItT.js";import"./DropdownField-CzDLyAqa.js";import"./debounce-C4CbbiU1.js";import"./useOsdkClient-Cymu9CBz.js";import"./index-A6JnTqM7.js";import"./Input-Boj06qte.js";import"./useBaseUiId-BsprSJc0.js";import"./useControlled-C4JFDSuR.js";import"./index-D9UptnGB.js";import"./index-B8iBQzP0.js";import"./PopoverPopup-DDFXARkA.js";import"./InternalBackdrop-ZzoKlD0h.js";import"./composite-C9avNQ9h.js";import"./index-CvbNR6cC.js";import"./getDisabledMountTransitionStyles-D5TfhzFv.js";import"./ToolbarRootContext-BQGWwMmx.js";import"./tick-B-d2xjTM.js";import"./svgIconContainer-CIdhA9rp.js";import"./small-cross-CsMKepR3.js";import"./search-BB6i5fl7.js";import"./cross-DvI1_HyP.js";import"./useValueChanged-CtSiK7PN.js";import"./getPseudoElementBounds-DSda8EI-.js";import"./CompositeItem-CJpL3T-F.js";import"./makeExternalStore-TKjWQKGl.js";import"./BaseForm-gNAN-Fjs.js";import"./ActionButton-BicTWFSp.js";import"./Button-Dh4qqTQa.js";import"./SkeletonBar-BP_l8aax.js";import"./Tooltip-CVqCP8mT.js";import"./info-sign-DELIK_wl.js";import"./chevron-up-BEWxaHRE.js";import"./chevron-down-DQOobcC7.js";import"./useEventCallback-DeOB15hi.js";import"./iconLoader-O0XFwLvX.js";import"./Switch-D0lQE6Jb.js";import"./CompositeRoot-c2XCuNRz.js";import"./TimePicker-DPY0kdZM.js";import"./CollapsiblePanel-D_KuOsno.js";import"./error-D4dPzE3W.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CS23iZYx.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
