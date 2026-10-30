import{j as t,g as n}from"./iframe-Br8xONPm.js";import{A as r}from"./action-form-C3WwOyei.js";import"./preload-helper-DQgVVB6U.js";import"./DropdownField-ryKhHmHs.js";import"./debounce-B803r_X5.js";import"./useOsdkClient-CY-_x2aU.js";import"./index-B2krqAG0.js";import"./Input-BHVdEi5Z.js";import"./useBaseUiId-BZnTNrwC.js";import"./useControlled-BLiUdu5J.js";import"./index-D9czVAyf.js";import"./index-jHhc_U3n.js";import"./PopoverPopup-CnuFOAXl.js";import"./InternalBackdrop-6cvjFa41.js";import"./composite-C9h1Nrh8.js";import"./index-B-GeqWm0.js";import"./getDisabledMountTransitionStyles-C2DvpNtJ.js";import"./ToolbarRootContext-CI35CvFn.js";import"./tick-Dsc87XPT.js";import"./svgIconContainer-CSQu9ec3.js";import"./small-cross-CeJ3wQjx.js";import"./search-DZd-hDvg.js";import"./cross-DuxFWD_g.js";import"./useValueChanged-Dcm4p7P9.js";import"./getPseudoElementBounds-DYtuX3rf.js";import"./CompositeItem-yj6TyWdn.js";import"./makeExternalStore-N49v7_Hy.js";import"./BaseForm-dFR6IOOX.js";import"./ActionButton-z1YZZnng.js";import"./Button-CpiJCvHd.js";import"./SkeletonBar-PkMTMVi0.js";import"./Tooltip-BMqnNLGs.js";import"./info-sign-Ce54NFRe.js";import"./chevron-up-OS1T51px.js";import"./chevron-down-CG3ZsjCs.js";import"./useEventCallback-C7zCd0lh.js";import"./iconLoader-D4NrGoI6.js";import"./Switch-Du08lpcS.js";import"./CompositeRoot-D70_kQpu.js";import"./TimePicker-o2VCV1-2.js";import"./CollapsiblePanel-CU3saAtT.js";import"./error-5UgtcFK8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BaSLlHt7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
