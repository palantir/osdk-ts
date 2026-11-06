import{j as t,g as n}from"./iframe-Dg2rP9Po.js";import{A as r}from"./action-form-CAYEbCsi.js";import"./preload-helper-C62MX-HV.js";import"./DropdownField-B07IQ1gj.js";import"./debounce-C5ixXv23.js";import"./useOsdkClient-ecHM5SMR.js";import"./index-Bk_L59vo.js";import"./Input-CLdANV8F.js";import"./useBaseUiId-BrByyFcr.js";import"./useControlled-CPVhNzyr.js";import"./index-D51t4EhI.js";import"./index-BTK-QJaX.js";import"./PopoverPopup-BUDSqNW1.js";import"./InternalBackdrop-BhWyWYDG.js";import"./composite-DwarrJ_d.js";import"./index-BuWg-_ox.js";import"./getDisabledMountTransitionStyles-BVaUCF8Y.js";import"./ToolbarRootContext-DWEMgL85.js";import"./tick-D-NdcMXs.js";import"./svgIconContainer-CrwUJVFh.js";import"./small-cross-DW-MJuWV.js";import"./search-7S2iycUI.js";import"./cross-ByHx960q.js";import"./useValueChanged-BFNbOulV.js";import"./getPseudoElementBounds-B2mLNmmG.js";import"./CompositeItem-Iitq3-0I.js";import"./makeExternalStore-CyhjwBot.js";import"./BaseForm-1opvKR5S.js";import"./ActionButton-vxF6e2oH.js";import"./Button-3owJgmEd.js";import"./SkeletonBar-Dyoh3Oqn.js";import"./Tooltip-BYn5P6nw.js";import"./info-sign-jwb6G0LO.js";import"./chevron-up-B-SEP9hD.js";import"./chevron-down-DghOfrxO.js";import"./useEventCallback-y6eWXZb0.js";import"./iconLoader-Bszrzhtz.js";import"./Switch-DkcCg7Y4.js";import"./CompositeRoot-CH3hmoo4.js";import"./TimePicker-BJF0MKi6.js";import"./CollapsiblePanel-Cdh4aus9.js";import"./error-CpY5WHNo.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DWMO9N5k.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
