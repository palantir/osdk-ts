import{j as t,g as n}from"./iframe-eyZPO-r8.js";import{A as r}from"./action-form-DDEypybW.js";import"./preload-helper-D1V99eN4.js";import"./DropdownField-B28WZREh.js";import"./debounce-DpI20L6M.js";import"./useOsdkClient-DpWMI8Fp.js";import"./index-Gdnr7hdE.js";import"./Input-CwJlG5HX.js";import"./useBaseUiId-DuycL1XH.js";import"./useControlled-RnivCiUR.js";import"./index-BW1bbNNA.js";import"./index-BSykaiWk.js";import"./PopoverPopup-D20NUS2f.js";import"./InternalBackdrop-47eHZtxY.js";import"./composite-BQIBWjV1.js";import"./index-DQ49IRLG.js";import"./getDisabledMountTransitionStyles-D1KI5R6m.js";import"./ToolbarRootContext-DsL0BSnt.js";import"./tick-DL7gzaWC.js";import"./svgIconContainer-BYYEkT6q.js";import"./small-cross-DM_xhuPC.js";import"./search-C_tBHa91.js";import"./cross-BDtR8km0.js";import"./useValueChanged-gzjrwQir.js";import"./getPseudoElementBounds-DGpPk1TO.js";import"./CompositeItem-D72MffoG.js";import"./makeExternalStore-TlPHbOId.js";import"./BaseForm-DZYooYZ5.js";import"./ActionButton-DepzqUcv.js";import"./Button-DYsGegFs.js";import"./SkeletonBar-Czp6H1QV.js";import"./Tooltip-UpAI-IXV.js";import"./info-sign-3xSf0LEE.js";import"./chevron-up-BhRUrBcF.js";import"./chevron-down-C6BwuTUh.js";import"./useEventCallback-0WugJweh.js";import"./iconLoader-CKZKZ4Xz.js";import"./Switch-4ZOC65Zk.js";import"./CompositeRoot-B-KKg4_Z.js";import"./TimePicker-CqdpK_Ak.js";import"./CollapsiblePanel-CpdU7F-n.js";import"./error-vxQVtw9f.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-O_Dwj_Kt.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
