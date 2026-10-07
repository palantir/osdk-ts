import{j as t,g as n}from"./iframe-BPW75i9n.js";import{A as r}from"./action-form-d-n3omic.js";import"./preload-helper-a9fOHNzQ.js";import"./DropdownField-Doe0OcpJ.js";import"./debounce-DaEjldS8.js";import"./useOsdkClient-B9pJ8mJX.js";import"./index-CvyyfkHF.js";import"./Input-BS3fT59v.js";import"./useBaseUiId-BskbZTX7.js";import"./useControlled-DpyeG9JO.js";import"./index-CZgk2iR4.js";import"./index-CpaVcYAE.js";import"./PopoverPopup-DY0LcGcs.js";import"./InternalBackdrop-DkH7cpcS.js";import"./composite-DOgbsbPD.js";import"./index-DaSb3oWd.js";import"./getDisabledMountTransitionStyles-78X03ELi.js";import"./ToolbarRootContext-DTxcajEt.js";import"./tick-B92vo0mZ.js";import"./svgIconContainer-Dn5PDua5.js";import"./small-cross-CU1xwLoD.js";import"./search-CE2Gzn1t.js";import"./cross-pajyLa9G.js";import"./useValueChanged-Cn93vlbX.js";import"./getPseudoElementBounds-DTCBrtzp.js";import"./CompositeItem-CF5_8-vA.js";import"./makeExternalStore-DcLh29q-.js";import"./BaseForm-CUw-IPU3.js";import"./ActionButton-DDSIjAJm.js";import"./Button-BtJ38CWb.js";import"./SkeletonBar-DDJ2BNxZ.js";import"./Tooltip-CvhMlFuZ.js";import"./info-sign-Czp8WfKL.js";import"./chevron-up-Bo_GdUzh.js";import"./chevron-down-BSmURfPK.js";import"./useEventCallback-DY5lK-td.js";import"./iconLoader-BjYWOKlM.js";import"./Switch-DZhIJMp1.js";import"./CompositeRoot-ByHspQR2.js";import"./TimePicker-CXl2iXTF.js";import"./CollapsiblePanel-BNZ-hzTi.js";import"./error-BRhZWJA2.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CPmfqFkZ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
