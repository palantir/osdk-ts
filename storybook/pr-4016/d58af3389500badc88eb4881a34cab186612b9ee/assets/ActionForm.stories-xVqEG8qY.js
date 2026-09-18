import{j as t,g as n}from"./iframe-DlB65lJW.js";import{A as r}from"./action-form-sN5AdM4x.js";import"./preload-helper-DV_Jg5FM.js";import"./DropdownField-dOSM9Rw1.js";import"./debounce-N0tv_m3M.js";import"./useOsdkClient-Bw3TotSy.js";import"./index-B8sBGRC5.js";import"./Input-CXcuZUCe.js";import"./useBaseUiId-C0JAm9wS.js";import"./useControlled-CQNoni_g.js";import"./index-Dk8pEk6M.js";import"./index-vvEU_kVM.js";import"./PopoverPopup-BG_vJMqS.js";import"./InternalBackdrop-SH1n7UWl.js";import"./composite-CUY2PD51.js";import"./index-BvPZVp58.js";import"./getDisabledMountTransitionStyles-CDFfMpVr.js";import"./ToolbarRootContext-BDX936Z-.js";import"./tick-u8fu2QmD.js";import"./svgIconContainer-DE9YLrbK.js";import"./small-cross-QFgDRgyE.js";import"./search-DUnv4tIx.js";import"./cross-BYT-n1qT.js";import"./useValueChanged-C824U35_.js";import"./getPseudoElementBounds-PXmrM0eY.js";import"./CompositeItem-PpZ3j7ZS.js";import"./makeExternalStore-OTHtuU79.js";import"./BaseForm-V9VLmhZO.js";import"./ActionButton-CQcpOspk.js";import"./Button-C6hVNenO.js";import"./SkeletonBar-DttNsmst.js";import"./Tooltip-D7WLW3WV.js";import"./info-sign-CSMqIfFe.js";import"./chevron-up-CLmE4ohw.js";import"./chevron-down-BHTjgyZJ.js";import"./useEventCallback-NsVuizNp.js";import"./iconLoader-CsfEsSKm.js";import"./Switch-LilXLkkM.js";import"./CompositeRoot-CV1MWrY1.js";import"./TimePicker-izCZbqLS.js";import"./CollapsiblePanel-SDxq7GAZ.js";import"./error-DriOx_PR.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-6eg3mxYV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
