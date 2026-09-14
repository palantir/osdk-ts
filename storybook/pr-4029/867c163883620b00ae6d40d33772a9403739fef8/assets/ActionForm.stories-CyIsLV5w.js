import{j as t,g as n}from"./iframe-Elh15CPO.js";import{A as r}from"./action-form-DPPNIzpY.js";import"./preload-helper-Df_Un8ev.js";import"./DropdownField-CL6X_FSf.js";import"./debounce-BkKFILxU.js";import"./useOsdkClient-CBxlc9T9.js";import"./index-DTYWX8Gd.js";import"./Input-C_Udp-5V.js";import"./useBaseUiId-DnwRjc07.js";import"./useControlled-enifNsDV.js";import"./index-Doj8EHeU.js";import"./index-DPHcjEKY.js";import"./PopoverPopup-CmeyaCH5.js";import"./InternalBackdrop-DMjCkzTC.js";import"./composite-BSEtTnKL.js";import"./index-DWJg2tV_.js";import"./getDisabledMountTransitionStyles-BZhGmJyD.js";import"./ToolbarRootContext--FtOM0jf.js";import"./tick-K9jJxqF2.js";import"./svgIconContainer-BzS94m4s.js";import"./small-cross-BRdYRDe1.js";import"./search-O3qV3BZP.js";import"./cross-W2wOrtb4.js";import"./useValueChanged-CY4pDDqC.js";import"./getPseudoElementBounds-DHu47n9G.js";import"./CompositeItem-CzwKTDvK.js";import"./makeExternalStore-DrH3viZo.js";import"./BaseForm-BUxO5T3D.js";import"./ActionButton-DAxrmY5m.js";import"./Button-D4CjXtEU.js";import"./SkeletonBar-C40l-VqG.js";import"./Tooltip-CDuc6-QX.js";import"./info-sign-DUpnofPB.js";import"./chevron-up-CSkdsCL2.js";import"./chevron-down-vAkfWkS9.js";import"./useEventCallback-DN9b37tD.js";import"./iconLoader-bXjMwlKd.js";import"./CompositeRoot-DLmeUXo9.js";import"./Switch-CsdlqzKv.js";import"./TimePicker-AWBq_VuI.js";import"./CollapsiblePanel-BuwRJmVL.js";import"./error-B_1KE3-h.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-SkuWgDWO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
