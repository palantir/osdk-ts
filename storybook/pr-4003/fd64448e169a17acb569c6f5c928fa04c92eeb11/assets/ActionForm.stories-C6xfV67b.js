import{j as t,g as n}from"./iframe-C5ao1IvQ.js";import{A as r}from"./action-form-JMDbTBJd.js";import"./preload-helper-DGRqXtXi.js";import"./DropdownField-BNnQ-S--.js";import"./debounce-DqZmCH0E.js";import"./useOsdkClient-CZSnsobV.js";import"./index-Ceo1TM0H.js";import"./Input-jSAQ8Oo5.js";import"./useBaseUiId-CnKjhxxS.js";import"./useControlled-BT4ixp-u.js";import"./index-BdE4NmrR.js";import"./index-BR9sQfcO.js";import"./PopoverPopup-CummcjH_.js";import"./InternalBackdrop-DX4I219N.js";import"./composite-C9s-0UsJ.js";import"./index-Dl_5gpp4.js";import"./getDisabledMountTransitionStyles-rgB5HMnj.js";import"./ToolbarRootContext-DALSiAmf.js";import"./tick-Btjr_S2K.js";import"./svgIconContainer-XtON82xh.js";import"./small-cross-CExx4_xi.js";import"./search-Cn03k3ET.js";import"./cross-tL6C68Y8.js";import"./useValueChanged-BGuUHdGP.js";import"./getPseudoElementBounds-ZCf_GkCq.js";import"./CompositeItem-CbSSSK8r.js";import"./makeExternalStore-CCjQfhEF.js";import"./BaseForm-7eZVLnva.js";import"./ActionButton-BqCFxwRp.js";import"./Button-dQ0hHaFn.js";import"./SkeletonBar-BYTqUIXM.js";import"./Tooltip-Dhg69mhl.js";import"./info-sign-C46MFEDQ.js";import"./chevron-up-DN8532C2.js";import"./chevron-down-CMM_2MNN.js";import"./useEventCallback-DU-6RHtA.js";import"./iconLoader-20z5Iw2x.js";import"./CompositeRoot-CkS6ptRI.js";import"./Switch-CTSS13FF.js";import"./TimePicker-D_Rd7QWh.js";import"./CollapsiblePanel-D2FHKx7N.js";import"./error-MOhUoXAM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-vcpuoudd.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
