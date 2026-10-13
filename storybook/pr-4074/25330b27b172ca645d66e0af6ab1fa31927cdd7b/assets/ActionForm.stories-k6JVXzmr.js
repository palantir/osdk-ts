import{j as t,g as n}from"./iframe-C1tZXogj.js";import{A as r}from"./action-form-C_3NuL12.js";import"./preload-helper-CPtBFz2Y.js";import"./DropdownField-CEVJg6GB.js";import"./debounce-DQdrsuD1.js";import"./useOsdkClient-CKo6kWe-.js";import"./index-DxPI7-w_.js";import"./Input-BFJGoRS_.js";import"./useBaseUiId-BME5ZjIK.js";import"./useControlled-mPEThvmW.js";import"./index-BYD_xDue.js";import"./index-iBT1_a_C.js";import"./PopoverPopup-CSYBmUnF.js";import"./InternalBackdrop-DbtxnMvT.js";import"./composite-cuBDJi1p.js";import"./index-CLOhAn7T.js";import"./getDisabledMountTransitionStyles-yGOiSHQ6.js";import"./ToolbarRootContext-DgDYgZp9.js";import"./tick-ptBe7eW4.js";import"./svgIconContainer-CIq0Uduk.js";import"./small-cross-cDNVRd_G.js";import"./search-mQyGpkqY.js";import"./cross-D5lRpI2u.js";import"./useValueChanged-CQrg9p61.js";import"./getPseudoElementBounds-C_0gJLWO.js";import"./CompositeItem-BBNw29UQ.js";import"./makeExternalStore-y_SH3e4c.js";import"./BaseForm-4UkY_13_.js";import"./ActionButton-DCQj1wHm.js";import"./Button-IJ98NdC3.js";import"./SkeletonBar-BBB5XDDC.js";import"./Tooltip-DHorPnG5.js";import"./info-sign-CpyZ5B53.js";import"./chevron-up-Be-NaPtY.js";import"./chevron-down-CRmIr1SJ.js";import"./useEventCallback-BZxywBdB.js";import"./iconLoader-BybjyxDM.js";import"./Switch-BzjwUA64.js";import"./CompositeRoot-CsvAnYnK.js";import"./TimePicker-BMiA5yUf.js";import"./CollapsiblePanel-CLo4sI8H.js";import"./error-Ccxy7sxh.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DODMu06P.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
