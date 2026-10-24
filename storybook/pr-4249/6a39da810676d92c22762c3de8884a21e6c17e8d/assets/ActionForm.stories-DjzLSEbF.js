import{j as t,g as n}from"./iframe-8pDs9AML.js";import{A as r}from"./action-form-DgBYDght.js";import"./preload-helper-DR90AuyO.js";import"./DropdownField-DnQ0gVMB.js";import"./debounce-DeNQnw9V.js";import"./useOsdkClient-wRikYwpV.js";import"./index-BgxF440z.js";import"./Input-ClAW_50X.js";import"./useBaseUiId-Y2Bqc82V.js";import"./useControlled-DjP6n15o.js";import"./index-gTFJVjv-.js";import"./index-DoNWJbFe.js";import"./PopoverPopup-DVuRwmdG.js";import"./InternalBackdrop-DMqXw_ve.js";import"./composite-DXO-Xhg7.js";import"./getDisabledMountTransitionStyles-DqLgMH-z.js";import"./ToolbarRootContext-BlIr8usp.js";import"./tick-Bx8QqUf_.js";import"./svgIconContainer-BOUHKa6M.js";import"./small-cross-DgbGi55m.js";import"./search-D5muLECQ.js";import"./cross-FlHZ6uvS.js";import"./useValueChanged-CwdZzKW1.js";import"./getPseudoElementBounds-C8btizZ2.js";import"./CompositeItem-B2g2yaWL.js";import"./makeExternalStore-B6vEKUuF.js";import"./BaseForm-iRt7zBbm.js";import"./ActionButton-CIqGiuh_.js";import"./Button-DIdY9EdX.js";import"./SkeletonBar-CuHnw5RE.js";import"./Tooltip-B6mBrT6t.js";import"./info-sign-NxK9Vr1o.js";import"./chevron-up-wQgVC5xx.js";import"./chevron-down-Be7tG24a.js";import"./useEventCallback-B_8pzo0G.js";import"./iconLoader-QEoJB-ml.js";import"./Switch-7H5D5h5b.js";import"./CompositeRoot-BMRtaivU.js";import"./TimePicker-CNBO4yQk.js";import"./CollapsiblePanel-CbmM2mnP.js";import"./error-HBrPbPXF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-QxEi4RWI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const Z={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const $=["Default"];export{e as Default,$ as __namedExportsOrder,Z as default};
