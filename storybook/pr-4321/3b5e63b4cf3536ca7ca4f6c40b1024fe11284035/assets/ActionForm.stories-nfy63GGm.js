import{j as t,g as n}from"./iframe-DyhO41Rj.js";import{A as r}from"./action-form-CC29cQ5N.js";import"./preload-helper-CIbx8URd.js";import"./DropdownField-vXp1_pry.js";import"./debounce-IRvapgvb.js";import"./useOsdkClient-CaJv5Gl-.js";import"./index-DwI7CQqH.js";import"./Input-dlG_yuK1.js";import"./useBaseUiId-Bew9-MTU.js";import"./useControlled-BDcMaUKC.js";import"./index-UqD0hRj3.js";import"./index-DR9hE8qy.js";import"./isObject-Bu43GTjb.js";import"./InternalBackdrop-FIq_NBf8.js";import"./composite-Brg7gMZI.js";import"./index-EkCVf_dq.js";import"./getDisabledMountTransitionStyles-DgZyOtdd.js";import"./ToolbarRootContext-CekAQhO_.js";import"./tick-DgUcKmPU.js";import"./svgIconContainer-DEkY-HLY.js";import"./small-cross-DjI62rJX.js";import"./search-D8ph0Tmj.js";import"./cross-CrdS3els.js";import"./useValueChanged-CMrkkb4b.js";import"./getPseudoElementBounds-BJc2NM_P.js";import"./CompositeItem-B1D8TqxB.js";import"./makeExternalStore-CEyr08K1.js";import"./BaseForm-B0gp89l7.js";import"./ActionButton-DMioYdTS.js";import"./Button-fa-PaPuc.js";import"./SkeletonBar-Bpd-j5zt.js";import"./Tooltip-BFvNQrGe.js";import"./info-sign-1vvSyml4.js";import"./chevron-up-Bj6qH8rB.js";import"./chevron-down-D6leDeN-.js";import"./useEventCallback-7-xYdRK3.js";import"./iconLoader-Bh6hbpMH.js";import"./Switch-BkeLfaDa.js";import"./CompositeRoot-C4L7PKop.js";import"./TimePicker-Bn5Mm9e0.js";import"./CollapsiblePanel-C9_ojemY.js";import"./error-DLjCGmmk.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-rGISHWN9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
