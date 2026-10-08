import{j as t,g as n}from"./iframe-Ds_0fUNG.js";import{A as r}from"./action-form-BKRV03J8.js";import"./preload-helper-rl_3IysT.js";import"./DropdownField-DsGQRL42.js";import"./debounce-Biv857Xj.js";import"./useOsdkClient-MZwKjimd.js";import"./index-CfHbFnsm.js";import"./Input-DML-f9Nt.js";import"./useBaseUiId-BTcKJi-m.js";import"./useControlled-BJ5XCIhk.js";import"./index-B3M6RB_Y.js";import"./index-BcshOSPh.js";import"./PopoverPopup-ByN3B_TH.js";import"./InternalBackdrop-DglM94TH.js";import"./composite-BQp92XLf.js";import"./index--pKFQ4Lz.js";import"./getDisabledMountTransitionStyles-Dx8Now2z.js";import"./ToolbarRootContext-WaLBUvtM.js";import"./tick-AwKzn_MI.js";import"./svgIconContainer-Bnjtz_zA.js";import"./small-cross-Dz6lKUNI.js";import"./search-D8R0XkDu.js";import"./cross-CPIn0YCt.js";import"./useValueChanged-DNt4iD_c.js";import"./getPseudoElementBounds-DMltA1Ta.js";import"./CompositeItem-Cd9-IsCw.js";import"./makeExternalStore-pijIp4DO.js";import"./BaseForm-ArASXQPk.js";import"./ActionButton-Bt69IyHY.js";import"./Button-BIMxSH7M.js";import"./SkeletonBar-L7SILJmc.js";import"./Tooltip-C_aXZE6C.js";import"./info-sign-B_aa_9Ea.js";import"./chevron-up-C-wtdL_e.js";import"./chevron-down-QYpALvW6.js";import"./useEventCallback-Bj0Lmw5H.js";import"./iconLoader-CCEeUXcF.js";import"./Switch-Dyszus5S.js";import"./CompositeRoot-BhbhTpin.js";import"./TimePicker-h6fNCP7_.js";import"./CollapsiblePanel-aLSMls02.js";import"./error-BqmstoPM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bofw38ai.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
