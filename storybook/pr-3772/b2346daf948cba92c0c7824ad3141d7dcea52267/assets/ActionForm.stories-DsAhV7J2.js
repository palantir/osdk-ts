import{j as t,g as n}from"./iframe-BzQifrbm.js";import{A as r}from"./action-form-ChQApZd-.js";import"./preload-helper-CfkbdYt3.js";import"./DropdownField-DraiChM8.js";import"./debounce-Sps1lGtX.js";import"./useOsdkClient-0x6uRQKq.js";import"./index-DmrXmCsp.js";import"./Input-D_KI0oie.js";import"./useBaseUiId-6fIHZX7k.js";import"./useControlled-D0PoBQGG.js";import"./index-DRwqomtN.js";import"./index-C6mlQsvu.js";import"./PopoverPopup-D0vD4SOK.js";import"./InternalBackdrop-DxY1hq72.js";import"./composite-Bm8VjQnK.js";import"./index-qmPNzRKp.js";import"./getDisabledMountTransitionStyles-B7tYoP6C.js";import"./ToolbarRootContext-CUQpKqWY.js";import"./tick-XeSdjeFz.js";import"./svgIconContainer-eTPVDcxE.js";import"./small-cross-BhH4Yfcj.js";import"./search-i0ScbyPC.js";import"./cross-BtXGESXa.js";import"./useValueChanged-DiLiLELv.js";import"./getPseudoElementBounds-DWmaTZ67.js";import"./CompositeItem-CA5vFsEl.js";import"./makeExternalStore-CKMY6uVx.js";import"./BaseForm-CxTt8R8j.js";import"./ActionButton-CgR-hyHr.js";import"./Button-DGOVPU6o.js";import"./SkeletonBar-cD86ls7w.js";import"./Tooltip-BLUAc2Lq.js";import"./info-sign-Bq-OhDvU.js";import"./chevron-up-Djx50XjO.js";import"./chevron-down-DgIB0DB7.js";import"./useEventCallback-63f5yGFn.js";import"./iconLoader-DE43lmy9.js";import"./CompositeRoot-CGj0oX1M.js";import"./Switch-vM4Wx4yn.js";import"./TimePicker-DSIhLmtK.js";import"./CollapsiblePanel-B1A-vb9Z.js";import"./error-C5OE11e3.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-QrXZuSy4.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
