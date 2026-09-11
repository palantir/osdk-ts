import{j as t,g as n}from"./iframe-CINa6Zgf.js";import{A as r}from"./action-form-B7li4HJK.js";import"./preload-helper-By73o2jw.js";import"./DropdownField-BPtamgR3.js";import"./debounce-W9feSSbl.js";import"./useOsdkClient-lu0DiUxq.js";import"./index-BP4TKibe.js";import"./Input-CsP9VOhj.js";import"./useBaseUiId-CWUgitm1.js";import"./useControlled-CIQnPEcE.js";import"./index-CxG-P-nc.js";import"./index-CA-7i9jO.js";import"./PopoverPopup-DyMWOWhV.js";import"./InternalBackdrop-CiQDmEMW.js";import"./composite-OajiVgE3.js";import"./index-BtagJvg8.js";import"./getDisabledMountTransitionStyles-DGkpLrSf.js";import"./ToolbarRootContext-DNhRV4PI.js";import"./tick-BdMwtH9z.js";import"./svgIconContainer-CNFEqHpH.js";import"./small-cross-DpLPdGHk.js";import"./search-DndjkDUR.js";import"./cross-BkRnKOPP.js";import"./useValueChanged-BGQoiKWM.js";import"./getPseudoElementBounds-B_xY--Sp.js";import"./CompositeItem-BieHCh4d.js";import"./makeExternalStore-BvvEwv00.js";import"./BaseForm-DJ7IqbNg.js";import"./ActionButton-DDDKBEV5.js";import"./Button-S_wwBFsV.js";import"./SkeletonBar-UkW_OkZD.js";import"./Tooltip-DRox557f.js";import"./info-sign-B4FDDgxU.js";import"./chevron-up-C1BGfacZ.js";import"./chevron-down-DnNAIf49.js";import"./useEventCallback-BEdjHVFi.js";import"./iconLoader-BXhubZIu.js";import"./CompositeRoot-CI7nAOO0.js";import"./Switch-C2uGlVd7.js";import"./TimePicker-DPy4daPz.js";import"./CollapsiblePanel-_7NHSAW-.js";import"./error-BIO08ioS.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Ct4i0IXa.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
