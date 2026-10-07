import{j as t,g as n}from"./iframe-Cm8T158U.js";import{A as r}from"./action-form-C9e6e3DH.js";import"./preload-helper-Dg6khx2b.js";import"./DropdownField-Dl8m0YJt.js";import"./debounce-DlkYXKLI.js";import"./useOsdkClient-D7ijOYA2.js";import"./index-CgyhAk5D.js";import"./Input-CwlN5ff_.js";import"./useBaseUiId-DOlC9YEi.js";import"./useControlled-2KbdkYL7.js";import"./index-B-f--Lzy.js";import"./index-DBvuzU0Y.js";import"./PopoverPopup-CIDF2QJi.js";import"./InternalBackdrop-BGasJMVv.js";import"./composite-BF9l_TFl.js";import"./index-B9yl0hZC.js";import"./getDisabledMountTransitionStyles-FM8gFJSe.js";import"./ToolbarRootContext-81tt_rrb.js";import"./tick-qL-0oQVk.js";import"./svgIconContainer-CwvpItZa.js";import"./small-cross-CuC0UbdT.js";import"./search-C5kq4KUb.js";import"./cross-DRMZ0Z7-.js";import"./useValueChanged-DPtvyx-N.js";import"./getPseudoElementBounds-Dy-hiku1.js";import"./CompositeItem-DdfovVZg.js";import"./makeExternalStore-Bwp5qgF6.js";import"./BaseForm-u1IQolwn.js";import"./ActionButton-CRZRMee5.js";import"./Button-CDJirsdr.js";import"./SkeletonBar-BQgWCrnN.js";import"./Tooltip-f6_C30K5.js";import"./info-sign-Bd0x7zLq.js";import"./chevron-up-DONvJUai.js";import"./chevron-down-CcWrtqn6.js";import"./useEventCallback-Dlv37ysr.js";import"./iconLoader-B6arN9Sj.js";import"./Switch-CPbFtpI1.js";import"./CompositeRoot-C7uTznLk.js";import"./TimePicker-CjPHCCVi.js";import"./CollapsiblePanel-CQcWGRlg.js";import"./error-W0yg1EoP.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-By5xofqX.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
