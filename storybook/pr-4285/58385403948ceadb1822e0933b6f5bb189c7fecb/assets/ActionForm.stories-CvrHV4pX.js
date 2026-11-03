import{j as t,g as n}from"./iframe-Do-VpOjh.js";import{A as r}from"./action-form-AI4vIyHE.js";import"./preload-helper-5MNjctgv.js";import"./DropdownField-Ds_qQON0.js";import"./debounce-BXhlOus3.js";import"./useOsdkClient-ClIl2h3b.js";import"./index-guBT-Q22.js";import"./Input-DBYDuVVL.js";import"./useBaseUiId-NGuXhXtm.js";import"./useControlled-Bktt7DnW.js";import"./index-BPQdlCoY.js";import"./index-Bl0nKd-v.js";import"./PopoverPopup-Bu1yL2u-.js";import"./InternalBackdrop-CAfbe648.js";import"./composite-XuPIjsZ0.js";import"./index-6QJ451ri.js";import"./getDisabledMountTransitionStyles-DJ-_H-jY.js";import"./ToolbarRootContext-ABr2rsL3.js";import"./tick-De1F-M9u.js";import"./svgIconContainer-Daa0qYJx.js";import"./small-cross-BbsWtOmh.js";import"./search-CUVFG7hS.js";import"./cross-ogJb6_71.js";import"./useValueChanged-BWy_YmP2.js";import"./getPseudoElementBounds-Dn4RekYY.js";import"./CompositeItem-tVccsBIo.js";import"./makeExternalStore-C6Ji6_pQ.js";import"./BaseForm-B7K7ijYi.js";import"./ActionButton-CGqklm4n.js";import"./Button-CyEQqHyS.js";import"./SkeletonBar-DEQbvDAC.js";import"./Tooltip-iQ-POIkn.js";import"./info-sign-BML9d41C.js";import"./chevron-up-DIgDXVQX.js";import"./chevron-down-CEDyHpu0.js";import"./useEventCallback-BfN-usbW.js";import"./iconLoader-iTOsuJnk.js";import"./Switch-0A-PG_3K.js";import"./CompositeRoot-myMewfo8.js";import"./TimePicker-CU3d1BkX.js";import"./CollapsiblePanel-DU8jndzx.js";import"./error-CfZglkqO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C1OJVKTR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
