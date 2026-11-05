import{j as t,g as n}from"./iframe-CBNXxCfo.js";import{A as r}from"./action-form-7YH_U0ri.js";import"./preload-helper-hNq2x0aF.js";import"./DropdownField-ANoM4Blt.js";import"./debounce-D69uVilQ.js";import"./useOsdkClient-B1CDiX_g.js";import"./index-tOjn3DuJ.js";import"./Input-B4HJdzdZ.js";import"./useBaseUiId-DYvTCLZM.js";import"./useControlled-C7MVIRPF.js";import"./index-CWKiu_fE.js";import"./index-FTKj7eco.js";import"./PopoverPopup-uHJwtGzf.js";import"./InternalBackdrop-BuFEQUHh.js";import"./composite-DK294pzn.js";import"./index-Bt0LUvaM.js";import"./getDisabledMountTransitionStyles-DSnPBVQi.js";import"./ToolbarRootContext-BkEzRPqI.js";import"./tick-Bz4lVOau.js";import"./svgIconContainer-Aeg62PdB.js";import"./small-cross-CKdL694I.js";import"./search-DDNU23bi.js";import"./cross-ByQeE0-e.js";import"./useValueChanged-6a_WmB-v.js";import"./getPseudoElementBounds-DWf_NHYE.js";import"./CompositeItem-CMo1LSw0.js";import"./makeExternalStore-Bv9y4KPm.js";import"./BaseForm-PPhofIgH.js";import"./ActionButton-6ZtJVgb1.js";import"./Button-DGZpthjp.js";import"./SkeletonBar-BRD_fo5h.js";import"./Tooltip-DtvJQRxc.js";import"./info-sign-0mEMfsJ8.js";import"./chevron-up-D5hUGuwy.js";import"./chevron-down-CDGLawXt.js";import"./useEventCallback-DpIm7-am.js";import"./iconLoader-Ctqhnn1q.js";import"./Switch-CfWki26L.js";import"./CompositeRoot-BIgxY0lU.js";import"./TimePicker-DtN9uy5Z.js";import"./CollapsiblePanel-CNnQ_Tqx.js";import"./error-DX2juQ7l.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DJhX3-qL.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
