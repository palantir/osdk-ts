import{j as t,g as n}from"./iframe-q7KMYOTO.js";import{A as r}from"./action-form-BpB9vW6Z.js";import"./preload-helper-6z_lVhDZ.js";import"./DropdownField-BkshEdmJ.js";import"./debounce-B7cPm2rs.js";import"./useOsdkClient-ZW2UQ2oM.js";import"./index-Bu4qz67A.js";import"./Input-DS3b7656.js";import"./useBaseUiId-CDKYXFfl.js";import"./useControlled-wetohDUI.js";import"./index-CbNuHbfY.js";import"./index-B07PL0k3.js";import"./PopoverPopup-DStAvLoC.js";import"./InternalBackdrop-SsdrZW55.js";import"./composite-msqnCEF7.js";import"./index-DME5nm9i.js";import"./getDisabledMountTransitionStyles-DhiQdtvX.js";import"./ToolbarRootContext-Bn2kB8OQ.js";import"./tick-DCE-nm-7.js";import"./svgIconContainer-Lo22dyXX.js";import"./small-cross-D3tEyg0V.js";import"./search-BHHQGkAK.js";import"./cross-GKTMVUJ_.js";import"./useValueChanged-D5kaD1qi.js";import"./getPseudoElementBounds-BE8y4_SX.js";import"./CompositeItem-p-JPFChH.js";import"./makeExternalStore-CrT5GEV3.js";import"./BaseForm-Bx20tPyI.js";import"./ActionButton-CNFIbDZG.js";import"./Button-4IQspW2w.js";import"./SkeletonBar-Ccfu4MLI.js";import"./Tooltip-CcU2cDQW.js";import"./info-sign-CDT4xcI4.js";import"./chevron-up-gZ1gDCJg.js";import"./chevron-down-CBifMXCi.js";import"./useEventCallback-DJZrmYeM.js";import"./iconLoader-CehKSCeY.js";import"./Switch-BvPPlL43.js";import"./CompositeRoot-CHZbYlDd.js";import"./TimePicker-HsyiEi0k.js";import"./CollapsiblePanel-H_6Jafs5.js";import"./error-BS4T7RXs.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B9467pZU.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
