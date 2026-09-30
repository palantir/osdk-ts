import{j as t,g as n}from"./iframe-DfWRDQYW.js";import{A as r}from"./action-form-CK8Ic93a.js";import"./preload-helper-DztOS3mh.js";import"./DropdownField-BWEIQf9x.js";import"./debounce-Ci0e7f6p.js";import"./useOsdkClient-ClcuriQB.js";import"./index-V0duYaOI.js";import"./Input-DIDbgdBf.js";import"./useBaseUiId-CnljwGyr.js";import"./useControlled-DFU1H8fZ.js";import"./index-BhBX8uvN.js";import"./index-DMKrGJHK.js";import"./PopoverPopup-DdFaHp8R.js";import"./InternalBackdrop-DoRzr-yp.js";import"./composite-BvmRb9Ju.js";import"./index-DYScCha7.js";import"./getDisabledMountTransitionStyles-C83yZKEJ.js";import"./ToolbarRootContext-DK75y1Fb.js";import"./tick-BjABB7E4.js";import"./svgIconContainer-Djmd0i7i.js";import"./small-cross-njJyO2z5.js";import"./search-Dxbg6ZmT.js";import"./cross-MjnJnae7.js";import"./useValueChanged-BHeWLU1X.js";import"./getPseudoElementBounds-C114fu7w.js";import"./CompositeItem-Bp9WguhV.js";import"./makeExternalStore-CSrQpL3l.js";import"./BaseForm-DrI98wMy.js";import"./ActionButton-B83nj9fh.js";import"./Button-OSZ8RwgD.js";import"./SkeletonBar-CySSdz1h.js";import"./Tooltip-DfRWn6Xg.js";import"./info-sign-CCeG_nB-.js";import"./chevron-up-DV0heeBN.js";import"./chevron-down-DTtuRFlq.js";import"./useEventCallback-CYayy9CC.js";import"./iconLoader-DqfIxNrn.js";import"./Switch-CcYV0jWC.js";import"./CompositeRoot-0jTYfUgQ.js";import"./TimePicker-8ZQM6BQU.js";import"./CollapsiblePanel-BDCG0rsw.js";import"./error-D9hH3fxG.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BqT8ORay.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
