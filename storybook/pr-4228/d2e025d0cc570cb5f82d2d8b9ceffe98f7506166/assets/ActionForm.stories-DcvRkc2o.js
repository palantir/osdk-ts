import{j as t,g as n}from"./iframe-DhXfIq6R.js";import{A as r}from"./action-form-GnGJYg3J.js";import"./preload-helper-DatgPFZX.js";import"./DropdownField-s38Gfc6y.js";import"./debounce-gdpJ20Mf.js";import"./useOsdkClient-DcI1QqiT.js";import"./index-CQ4eecZm.js";import"./Input-BBnEWswJ.js";import"./useBaseUiId-B3PC069q.js";import"./useControlled-3_t6o5ui.js";import"./index-Hw9O_E6A.js";import"./index-BFbo8Hvm.js";import"./PopoverPopup-Q9Yq24sl.js";import"./InternalBackdrop-J9PQGeSn.js";import"./composite-CCswUWBV.js";import"./index-vY9vJBl3.js";import"./getDisabledMountTransitionStyles-DzdB_-qH.js";import"./ToolbarRootContext-B9c-sG_O.js";import"./tick-CvbiSVsc.js";import"./svgIconContainer-4NKQuWor.js";import"./small-cross-C4GUnBXR.js";import"./search-Dx_Pysa4.js";import"./cross-CjebjloY.js";import"./useValueChanged-CxpIXHpQ.js";import"./getPseudoElementBounds-CsuJ4a0u.js";import"./CompositeItem-DvhhImuQ.js";import"./makeExternalStore-BPGOv1IN.js";import"./BaseForm-2GUiGSXi.js";import"./ActionButton-BkYoJ84i.js";import"./Button-Cy8uxh9T.js";import"./SkeletonBar-CInnzOG7.js";import"./Tooltip-Dt9x_i73.js";import"./info-sign-NKqrh5q0.js";import"./chevron-up-BOwCCtym.js";import"./chevron-down-CjJDYGij.js";import"./useEventCallback-CW5iGxQC.js";import"./iconLoader-Bue3ecR6.js";import"./Switch-dTJuXDLG.js";import"./CompositeRoot-DmcR1fWK.js";import"./TimePicker-zZN0nWW1.js";import"./CollapsiblePanel-BVGCo3Z2.js";import"./error-UalGv9XX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DbQJKwoW.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
