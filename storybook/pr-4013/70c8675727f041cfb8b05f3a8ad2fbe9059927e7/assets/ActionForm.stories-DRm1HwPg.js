import{j as t,g as n}from"./iframe-CZqFYSvz.js";import{A as r}from"./action-form-EOjyuh0o.js";import"./preload-helper-W-9dgf5b.js";import"./DropdownField-BI2c6Ebd.js";import"./debounce-iVB6b_Y1.js";import"./useOsdkClient-CH4uCo_W.js";import"./index-4I_FO6X-.js";import"./Input-DFczC5qB.js";import"./useBaseUiId-D1DgvgDy.js";import"./useControlled-BEhUjoKU.js";import"./index-CwvgB0UQ.js";import"./index-TcvRDgBd.js";import"./PopoverPopup-NWTu8aE_.js";import"./InternalBackdrop-CqAf0JXm.js";import"./composite-DshpnDaY.js";import"./index-DwIy-beY.js";import"./getDisabledMountTransitionStyles-BKCYmhLV.js";import"./ToolbarRootContext-FrGRfv5z.js";import"./tick-CC6n50A4.js";import"./svgIconContainer-B4GgTWLP.js";import"./small-cross-DqYGaSrZ.js";import"./search-DQIrKTJC.js";import"./cross-DwkOXENp.js";import"./useValueChanged-pQbly7Ct.js";import"./getPseudoElementBounds-BXEncbQt.js";import"./CompositeItem-BX8AU06n.js";import"./makeExternalStore-BLCxm6Ol.js";import"./BaseForm-CjEAdIQK.js";import"./ActionButton-DwlulUX5.js";import"./Button-DPWKZHun.js";import"./SkeletonBar-YNeerWRQ.js";import"./Tooltip-4cXVr-Gb.js";import"./info-sign-CmYucBPu.js";import"./chevron-up-tL_9_Z7X.js";import"./chevron-down-DW5k5Yie.js";import"./useEventCallback-C1QWqQSQ.js";import"./iconLoader-BaT349ra.js";import"./CompositeRoot-DDGOL2lB.js";import"./Switch-Tr5iJTyM.js";import"./TimePicker-DzlMZ8Yd.js";import"./CollapsiblePanel-fJf7Arc3.js";import"./error-B_2Afo6g.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BHAZhm5k.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
