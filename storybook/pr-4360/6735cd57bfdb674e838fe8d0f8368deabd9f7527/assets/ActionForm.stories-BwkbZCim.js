import{j as t,g as n}from"./iframe-D0hYQ0ZS.js";import{A as r}from"./action-form-EOed2sIB.js";import"./preload-helper-CA2FQp3d.js";import"./DropdownField-DDHVxYRR.js";import"./debounce-Dai0imdk.js";import"./useOsdkClient-Dhz58JN-.js";import"./index-DmARC5st.js";import"./Input-DppPciYW.js";import"./useBaseUiId-XRgD1fAc.js";import"./useControlled-DFsigNjS.js";import"./index-dclRq-mv.js";import"./index-DET9q48x.js";import"./isObject-BfICCCNa.js";import"./InternalBackdrop-SIBrBcO2.js";import"./composite-DkKFn4B2.js";import"./index-BbLGiomW.js";import"./getDisabledMountTransitionStyles-CI56VyjH.js";import"./ToolbarRootContext-B3P_Il02.js";import"./tick-CAmkKM-G.js";import"./svgIconContainer-Bnj1Dnpn.js";import"./small-cross-BxDAgcxl.js";import"./search-DXnEIY7b.js";import"./cross-DGfZ9I8q.js";import"./useValueChanged-C5EsCsdO.js";import"./getPseudoElementBounds-DLUmkYq-.js";import"./CompositeItem-BfeA3NJO.js";import"./makeExternalStore-BcCQ6g4O.js";import"./BaseForm-Bq0473mK.js";import"./ActionButton-DpwsppbT.js";import"./Button-BBjgpomd.js";import"./SkeletonBar-C6N4_KPV.js";import"./Tooltip-CRcQ9riQ.js";import"./info-sign-A5t5WmSm.js";import"./chevron-up-CuguSENz.js";import"./chevron-down-DpAIzyvb.js";import"./useEventCallback-QgwS4DGJ.js";import"./iconLoader-vNS7BeHE.js";import"./Switch-DGzq6fCK.js";import"./CompositeRoot-eTw2gpKR.js";import"./TimePicker-_CnV9YJl.js";import"./CollapsiblePanel-BJaUHEEv.js";import"./error-DZHrzjAe.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dqap3OIg.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
