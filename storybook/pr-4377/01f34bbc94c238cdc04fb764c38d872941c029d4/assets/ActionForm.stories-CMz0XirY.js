import{j as t,g as n}from"./iframe-DJkts_RL.js";import{A as r}from"./action-form-cALTHSE6.js";import"./preload-helper-DnSYvyfS.js";import"./DropdownField-CG-CwPna.js";import"./debounce-CsNmpAAZ.js";import"./useOsdkClient-CytKAX8u.js";import"./index-AdNwtOlb.js";import"./Input-FCTts1k3.js";import"./useBaseUiId-BOJH0vIf.js";import"./useControlled-DasQvtmr.js";import"./index-Ci2eYgLO.js";import"./index-BDcDuz1j.js";import"./isObject-pPVUn46w.js";import"./InternalBackdrop-D5KetDnt.js";import"./composite-DDvCjav2.js";import"./index-CQxVkwph.js";import"./getDisabledMountTransitionStyles-BYybRfax.js";import"./ToolbarRootContext-DzjIN-OH.js";import"./tick-Bn4wwjz-.js";import"./svgIconContainer-C5-52KFN.js";import"./small-cross-CVWWEP0y.js";import"./search-_QUQf3i5.js";import"./cross-RIukJOv6.js";import"./useValueChanged-CZGvPtYp.js";import"./getPseudoElementBounds-CzOa17qB.js";import"./CompositeItem-LGAP8V9B.js";import"./makeExternalStore-phk9_3eu.js";import"./BaseForm-DKFYRFrj.js";import"./ActionButton-VwPGUJzv.js";import"./Button-sRivSwhn.js";import"./SkeletonBar-BvqjdvM1.js";import"./Tooltip-C3bMyjLM.js";import"./info-sign-CFRcli0j.js";import"./chevron-up-Dt9C6iT2.js";import"./chevron-down-DB2rAp0-.js";import"./useEventCallback-lKoyoV4u.js";import"./iconLoader-CE3o_Zfl.js";import"./Switch-Ci33pBnN.js";import"./CompositeRoot-BNjk1aB_.js";import"./TimePicker-Bgbp0k9V.js";import"./CollapsiblePanel-iUKB7uZT.js";import"./error-BqILnzwq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BoDHZnfJ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
