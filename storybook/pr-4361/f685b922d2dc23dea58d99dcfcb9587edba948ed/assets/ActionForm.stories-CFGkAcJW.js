import{j as t,g as n}from"./iframe-BVSi64oE.js";import{A as r}from"./action-form-BufLq7Lq.js";import"./preload-helper-BU1z3h6W.js";import"./DropdownField-BS4JU7i-.js";import"./debounce-BY-7KZ0_.js";import"./useOsdkClient-D_sxubmW.js";import"./index-CuytY3fR.js";import"./Input-9e4VYX3J.js";import"./useBaseUiId-CqqBN_pD.js";import"./useControlled-oPybVTav.js";import"./index-XyA3IOnM.js";import"./index-De4RyO4Q.js";import"./isObject-CZdk459R.js";import"./InternalBackdrop-VS02Mzpv.js";import"./composite-iCAL7ZoF.js";import"./index-DUkSDzym.js";import"./getDisabledMountTransitionStyles-DOr5eM0I.js";import"./ToolbarRootContext-nMjJNdxo.js";import"./tick-Bve-lzI5.js";import"./svgIconContainer-DOaF4Z7d.js";import"./small-cross-VuonqlHg.js";import"./search-DCcotSfq.js";import"./cross-BSD5cpOi.js";import"./useValueChanged-DLdh8GlI.js";import"./getPseudoElementBounds-m7eRXhrV.js";import"./CompositeItem-D9Lav6h_.js";import"./makeExternalStore-BZP7re_5.js";import"./BaseForm-daP-lxZU.js";import"./ActionButton-B1cEW1Xi.js";import"./Button-BWzl1MwA.js";import"./SkeletonBar-BTvQIWmF.js";import"./Tooltip-qdMmTZin.js";import"./info-sign-BAB_9yxN.js";import"./chevron-up-723EvyDD.js";import"./chevron-down-B1I3Tews.js";import"./useEventCallback-BcINQZvV.js";import"./iconLoader-BlqZivmG.js";import"./Switch-C-NGilf5.js";import"./CompositeRoot-dG33d86E.js";import"./TimePicker-BC82_4bX.js";import"./CollapsiblePanel-iyQmEFH5.js";import"./error-DNoXedqp.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DG2TDFRU.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
