import{j as t,g as n}from"./iframe-BgXQ_2ZQ.js";import{A as r}from"./action-form-BSxZVBDN.js";import"./preload-helper-BidOVzf2.js";import"./DropdownField-CsQwc8Ii.js";import"./debounce-DWFh7d24.js";import"./useOsdkClient-CcbFY1-2.js";import"./index-Du7DARA2.js";import"./Input-snLmBrpI.js";import"./useBaseUiId-BDBZknBQ.js";import"./useControlled-BJTO4Tz0.js";import"./index-BrroAixZ.js";import"./index-BNVSiMmU.js";import"./PopoverPopup-BYQDCscd.js";import"./InternalBackdrop-c9jJBd1p.js";import"./composite-DkGW9dlU.js";import"./index-BSei0jMm.js";import"./getDisabledMountTransitionStyles-D_LWhqVm.js";import"./ToolbarRootContext-DnYkqago.js";import"./tick-Cj44jG3P.js";import"./svgIconContainer-Dt6fkfKI.js";import"./small-cross-DZhFWeH9.js";import"./search-DUa1f9S-.js";import"./cross-DjR1Bdqm.js";import"./useValueChanged-pU_y0YNC.js";import"./getPseudoElementBounds-Df9rfh-s.js";import"./CompositeItem-BoTWi4na.js";import"./makeExternalStore-Bhk5996J.js";import"./BaseForm-BBXv1xzW.js";import"./ActionButton-BXIrWwIY.js";import"./Button-DyzWkyRc.js";import"./SkeletonBar-BBIq-vhs.js";import"./Tooltip-KBTfxc0_.js";import"./info-sign-C49qBIGB.js";import"./chevron-up-DOlBMi8n.js";import"./chevron-down-xbEb9_oS.js";import"./useEventCallback-R0FrqxvI.js";import"./iconLoader-79VwTRlV.js";import"./Switch-DPUkBeV1.js";import"./CompositeRoot-CDxZD_lV.js";import"./TimePicker-O3VnPEfb.js";import"./CollapsiblePanel-Bdczxe9M.js";import"./error-DWfidi70.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DMzLVnra.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
