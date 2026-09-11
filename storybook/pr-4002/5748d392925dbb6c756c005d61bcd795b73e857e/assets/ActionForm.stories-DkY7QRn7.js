import{j as t,g as n}from"./iframe-DrGL59fh.js";import{A as r}from"./action-form-m3WwCBwb.js";import"./preload-helper-D-pltsU0.js";import"./DropdownField-CcRkuqdD.js";import"./debounce-C9pzeh_f.js";import"./useOsdkClient-Bq4QpKzc.js";import"./index-BPJV00wo.js";import"./Input-GRmoIvE6.js";import"./useBaseUiId-2W_ytHMV.js";import"./useControlled-D76B4nnK.js";import"./index-CAwEJolB.js";import"./index-cKTu6glV.js";import"./PopoverPopup-DyYNic55.js";import"./InternalBackdrop-m5QQAybv.js";import"./composite-VGQUbzTm.js";import"./index-BFxVNMj8.js";import"./getDisabledMountTransitionStyles-CLY_oqku.js";import"./ToolbarRootContext-C91J_2EK.js";import"./tick-BYEzfJH7.js";import"./svgIconContainer-CHeYR8wC.js";import"./small-cross-CITcdkqm.js";import"./search-D_KAjQsE.js";import"./cross-B3fC_apP.js";import"./useValueChanged-Cv10pSZl.js";import"./getPseudoElementBounds-D97GaXSX.js";import"./CompositeItem-BckOB5Eo.js";import"./makeExternalStore-Dar-D9jL.js";import"./BaseForm-MKOXuqzl.js";import"./ActionButton-D6TgzS-d.js";import"./Button-Dz98rt32.js";import"./SkeletonBar-BrIvGh1U.js";import"./Tooltip-CqOLiVEe.js";import"./info-sign-BH_PrUcb.js";import"./chevron-up-BX80xQ_d.js";import"./chevron-down-DCzbMy7Q.js";import"./useEventCallback-Be1n87Un.js";import"./iconLoader-DVt6Ae9v.js";import"./CompositeRoot-W6WIkq0A.js";import"./Switch-D78Pp4z0.js";import"./TimePicker-Bwep-Qtj.js";import"./CollapsiblePanel-C-SqBgY1.js";import"./error-B4r2g8yv.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-tWMBpvoz.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
