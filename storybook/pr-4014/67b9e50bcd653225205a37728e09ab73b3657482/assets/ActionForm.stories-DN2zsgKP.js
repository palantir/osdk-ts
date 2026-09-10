import{j as t,g as n}from"./iframe-vYDcoh77.js";import{A as r}from"./action-form-Bgk8shzf.js";import"./preload-helper-DSINEazd.js";import"./DropdownField-CfMw9HLs.js";import"./debounce-DUf2Feva.js";import"./useOsdkClient-Bc2tSKuP.js";import"./index-Dvlndinu.js";import"./Input-D4hoKYSh.js";import"./useBaseUiId-D0wGlEuT.js";import"./useControlled-9JxLuZTe.js";import"./index-CnEHE-8v.js";import"./index-k5xDOMrk.js";import"./PopoverPopup-Cgz3LCEw.js";import"./InternalBackdrop-Bmbg-Qqi.js";import"./composite-CbGeFR41.js";import"./index-SN9c52dU.js";import"./getDisabledMountTransitionStyles-CPDXZ_d3.js";import"./ToolbarRootContext-DC4Rn718.js";import"./tick-CryZzvkg.js";import"./svgIconContainer-DRRBBWTo.js";import"./small-cross-DXqEeC7m.js";import"./search-BbY6TLBc.js";import"./cross-Bh3JhpLG.js";import"./useValueChanged-DvGgnr1I.js";import"./getPseudoElementBounds-D-Q4b5_k.js";import"./CompositeItem-tKjm3ITX.js";import"./makeExternalStore-C5vRMRFb.js";import"./BaseForm-BQuHBhA1.js";import"./ActionButton-CEGBUekT.js";import"./Button-C4utuT7d.js";import"./SkeletonBar-DDd9jroq.js";import"./Tooltip-7NXZ14u1.js";import"./info-sign-Bid1UE6j.js";import"./chevron-up-DxnjXjNM.js";import"./chevron-down-DE4Yil-_.js";import"./useEventCallback-HvgQ2Jp9.js";import"./iconLoader-CltpuKNJ.js";import"./CompositeRoot-Diwji8kf.js";import"./Switch-BztS8gcD.js";import"./TimePicker-CWn9wqv2.js";import"./CollapsiblePanel-ClbxZsmn.js";import"./error-BQSdaUYK.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-o2mYvA2y.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
