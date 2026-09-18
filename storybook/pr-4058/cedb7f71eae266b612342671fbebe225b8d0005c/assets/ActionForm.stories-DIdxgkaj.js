import{j as t,g as n}from"./iframe-CNtj4pm0.js";import{A as r}from"./action-form-DHbPz31Y.js";import"./preload-helper-BS75hAbV.js";import"./DropdownField-Bnf0PiqN.js";import"./debounce--s-i1_AZ.js";import"./useOsdkClient-VbnySwVH.js";import"./index-sjmYZucR.js";import"./Input-C4ZhagKB.js";import"./useBaseUiId-lN80hZHi.js";import"./useControlled-B0rx1snt.js";import"./index-Cgs0l_sb.js";import"./index-CUZALXVA.js";import"./PopoverPopup-D6qb_igd.js";import"./InternalBackdrop-BMWNtsZU.js";import"./composite-GfxKj1uF.js";import"./index-djpdBoFm.js";import"./getDisabledMountTransitionStyles-BqG7Ghbq.js";import"./ToolbarRootContext-DeNcRZ79.js";import"./tick-BMhhdG7H.js";import"./svgIconContainer-KAKJdeY6.js";import"./small-cross-DtFIErRB.js";import"./search-D7W-cB43.js";import"./cross-BI_rXiCk.js";import"./useValueChanged-DDRJQ_I0.js";import"./getPseudoElementBounds-Cvn7IccH.js";import"./CompositeItem-BO5p0iBu.js";import"./makeExternalStore-CJ8yXjVF.js";import"./BaseForm-CosSIdYX.js";import"./ActionButton-CmPvNCl_.js";import"./Button-eHM7dp0m.js";import"./SkeletonBar-CZrTeSVQ.js";import"./Tooltip-CC9kMvNv.js";import"./info-sign-SYaAD2nE.js";import"./chevron-up-D5PugYmY.js";import"./chevron-down-DuRgHJud.js";import"./useEventCallback-DuERb84G.js";import"./iconLoader-B_B9gua0.js";import"./Switch-VH9hJOE6.js";import"./CompositeRoot-D-XIOelf.js";import"./TimePicker-7sMbrkxh.js";import"./CollapsiblePanel-D4KfY0r3.js";import"./error-BoQP4cSo.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D3scg1-Z.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
