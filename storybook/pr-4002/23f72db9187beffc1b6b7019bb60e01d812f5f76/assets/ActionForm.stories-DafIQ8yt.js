import{j as t,g as n}from"./iframe-BDntCMEH.js";import{A as r}from"./action-form-DSqSJtss.js";import"./preload-helper-B50VuOmN.js";import"./DropdownField-B9EyhDn4.js";import"./debounce-CkhlBaHF.js";import"./useOsdkClient-R1XeaFqw.js";import"./index-B0z8RHyd.js";import"./Input-CXpC2-sJ.js";import"./useBaseUiId-BTqLhW0i.js";import"./useControlled-B173rJPI.js";import"./index-CX_hrFB8.js";import"./index-BOofLcNJ.js";import"./PopoverPopup-C4ooFr_6.js";import"./InternalBackdrop-3bsfmQ8K.js";import"./composite-BQ7qlaUQ.js";import"./index-BBkRPYMA.js";import"./getDisabledMountTransitionStyles-karZ8d_E.js";import"./ToolbarRootContext-C8N9jA7J.js";import"./tick-Dc8_NDDZ.js";import"./svgIconContainer-B6ralbiB.js";import"./small-cross-Ctkk7cRd.js";import"./search-CYEButG9.js";import"./cross-BH8OF0Bn.js";import"./useValueChanged-DfkXLlVn.js";import"./getPseudoElementBounds-C0nyJPqP.js";import"./CompositeItem-BTJTpSwe.js";import"./makeExternalStore-j3YsZMxz.js";import"./BaseForm-D44FASRV.js";import"./ActionButton-t5HQKASd.js";import"./Button-Bpn7C7dn.js";import"./SkeletonBar-DhuVeAjE.js";import"./Tooltip-zHG5lzOj.js";import"./info-sign-BT3vXav5.js";import"./chevron-up-Disd9lAY.js";import"./chevron-down-BxBh9Dqz.js";import"./useEventCallback-CJ1ECKuN.js";import"./iconLoader-CVDSR8zR.js";import"./CompositeRoot-CqCXHM5p.js";import"./Switch-DoCD4RPJ.js";import"./TimePicker-D_UW_r8h.js";import"./CollapsiblePanel-DwIUcnuv.js";import"./error-CAncZcqv.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DaoCVVMK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
