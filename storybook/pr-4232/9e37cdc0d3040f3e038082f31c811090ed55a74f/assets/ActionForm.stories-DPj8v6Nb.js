import{j as t,g as n}from"./iframe-p2YICxUI.js";import{A as r}from"./action-form-D5wmsu5U.js";import"./preload-helper-C_d8LugS.js";import"./DropdownField-BezvDOf1.js";import"./debounce-fGYFEdED.js";import"./useOsdkClient-i5Bf0XJq.js";import"./index-CsAVedHf.js";import"./Input-se4kwers.js";import"./useBaseUiId-CsBNKmu8.js";import"./useControlled-DfYpZvNd.js";import"./index-4ZagnSn6.js";import"./index-XAimxDaP.js";import"./PopoverPopup-BLF-1tn1.js";import"./InternalBackdrop-Bl4pAqkn.js";import"./composite-BPYrj6eG.js";import"./index-BvbPlynd.js";import"./getDisabledMountTransitionStyles-B3K2sZ2M.js";import"./ToolbarRootContext-DOpGxQlA.js";import"./tick-Bp4sawQk.js";import"./svgIconContainer-ByMgsc6W.js";import"./small-cross-CsgJpP59.js";import"./search-h5TogDUF.js";import"./cross-DphGr94_.js";import"./useValueChanged-Oji2CKci.js";import"./getPseudoElementBounds-DoNDWMZt.js";import"./CompositeItem-BejJ0cXB.js";import"./makeExternalStore-DCD_3Y1Y.js";import"./BaseForm-tLPVITxr.js";import"./ActionButton-BQ6YslU0.js";import"./Button-ByiY3lLu.js";import"./SkeletonBar-Da2Aho7B.js";import"./Tooltip-CaUh6MSb.js";import"./info-sign-Dkv_BqPV.js";import"./chevron-up-Cnpzjsni.js";import"./chevron-down-CvKzqnOZ.js";import"./useEventCallback-DNjRXV4C.js";import"./iconLoader-CyAJHzqa.js";import"./Switch-pjpfT7UM.js";import"./CompositeRoot-EfSmRFb2.js";import"./TimePicker-20DwFWLZ.js";import"./CollapsiblePanel-J0gq_9ov.js";import"./error-LbvP5jG0.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DKcHZ6W6.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
