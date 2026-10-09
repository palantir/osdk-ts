import{j as t,g as n}from"./iframe-7DO_hgMQ.js";import{A as r}from"./action-form-DlXwHkLA.js";import"./preload-helper-B5hnoC7R.js";import"./DropdownField-DfRF7x4Q.js";import"./debounce-fWQ1Uyi8.js";import"./useOsdkClient-CzqB3KxT.js";import"./index-C29pOm1T.js";import"./Input-BSSTxlm0.js";import"./useBaseUiId-Oq1MgnVD.js";import"./useControlled-C5lH_kP3.js";import"./index-CpBs9sRH.js";import"./index-kxscKf13.js";import"./PopoverPopup-OXRN3eBM.js";import"./InternalBackdrop-Dl6a1-jN.js";import"./composite-BIyzFJw4.js";import"./index-B0-vcEDH.js";import"./getDisabledMountTransitionStyles-DSUse_yu.js";import"./ToolbarRootContext-D-ECRYtl.js";import"./tick-CX03s7uJ.js";import"./svgIconContainer-DzpdNPkA.js";import"./small-cross-CU3PqcXv.js";import"./search-BiYpAlM6.js";import"./cross-D_9OLgop.js";import"./useValueChanged-DqawIZVU.js";import"./getPseudoElementBounds-CjuU1qh7.js";import"./CompositeItem-CRzuvZSB.js";import"./makeExternalStore-C0_o8WAL.js";import"./BaseForm-NTGDJHpk.js";import"./ActionButton-mzmJtNoX.js";import"./Button-CG_O6ptK.js";import"./SkeletonBar-Dtl4JXfg.js";import"./Tooltip-DvjdNXO5.js";import"./info-sign-QiN1oqlP.js";import"./chevron-up-C8FDwmBW.js";import"./chevron-down-Cv_rBr5Q.js";import"./useEventCallback-DxKGXWo7.js";import"./iconLoader-BMsw50nC.js";import"./Switch-BR7le4Qk.js";import"./CompositeRoot-C_Fyw_jj.js";import"./TimePicker-C1Tt7qyx.js";import"./CollapsiblePanel-Bp7Wi5LO.js";import"./error-CYThlbbP.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BBFkx9l4.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
