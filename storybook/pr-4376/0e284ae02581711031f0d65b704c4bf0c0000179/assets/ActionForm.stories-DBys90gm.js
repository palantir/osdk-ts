import{j as t,g as n}from"./iframe-Chfnu1YD.js";import{A as r}from"./action-form-DHU_9V-Q.js";import"./preload-helper-8IaaIvc6.js";import"./DropdownField-BBRj5dwe.js";import"./debounce-D2wam908.js";import"./useOsdkClient-v00nyVWz.js";import"./index-vEtNoJy3.js";import"./Input-DWPUbvhX.js";import"./useBaseUiId-1GAAVutu.js";import"./useControlled-G2n_omSR.js";import"./index-DvqaWTEs.js";import"./index-Bbt8955e.js";import"./isObject-BCq84zEs.js";import"./InternalBackdrop-DLHFnO4E.js";import"./composite-ptzmGyTW.js";import"./index-C4q2PejQ.js";import"./getDisabledMountTransitionStyles-BhZDCpH_.js";import"./ToolbarRootContext-BC9rkGH_.js";import"./tick-DN0NnQtg.js";import"./svgIconContainer-Cemmf0nA.js";import"./small-cross-CA-g_M_D.js";import"./search-BNvr0C3M.js";import"./cross-DDh1oeg3.js";import"./useValueChanged-NA9qAH4Q.js";import"./getPseudoElementBounds-BJU_D_lr.js";import"./CompositeItem-B84_RNVq.js";import"./makeExternalStore-CYR-IDnU.js";import"./BaseForm-fASXrcQp.js";import"./ActionButton-CBNCZv9P.js";import"./Button-Ciq9JFcz.js";import"./SkeletonBar-ikqiEJT9.js";import"./Tooltip-D2XqF5oz.js";import"./info-sign-DbVmHjNf.js";import"./chevron-up-DiUNmFhg.js";import"./chevron-down-lrpzUfD-.js";import"./useEventCallback-Dz5cwNMH.js";import"./iconLoader-DFbZlJyI.js";import"./Switch-BJtzm06a.js";import"./CompositeRoot-CnTPcoLH.js";import"./TimePicker-CF0ub_wQ.js";import"./CollapsiblePanel-C_TGf3AQ.js";import"./error-Dy9PQux-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DRREQEVj.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
