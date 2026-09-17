import{j as t,g as n}from"./iframe-BtGRzxci.js";import{A as r}from"./action-form-B9Em139S.js";import"./preload-helper-CyrDjGUQ.js";import"./DropdownField-DhAab1KW.js";import"./debounce-YXq4O7nI.js";import"./useOsdkClient-DvX2DAiH.js";import"./index-tVIozFN1.js";import"./Input-DGQhm6BR.js";import"./useBaseUiId-XRf534_a.js";import"./useControlled-rccl1Nao.js";import"./index-Dv2SWeyR.js";import"./index-BV7_z1j7.js";import"./PopoverPopup-Ckm-Ve__.js";import"./InternalBackdrop-BfGRu2JH.js";import"./composite-Btju52rS.js";import"./index-Nbrbbk2B.js";import"./getDisabledMountTransitionStyles-CJvQQmV9.js";import"./ToolbarRootContext-D3OhDsHo.js";import"./tick-ac30L8P3.js";import"./svgIconContainer-CN6dxZIp.js";import"./small-cross-CkeumqgW.js";import"./search-BPr2MDER.js";import"./cross-7jkwYPrY.js";import"./useValueChanged-CjbtTYfl.js";import"./getPseudoElementBounds-Wk9KfacK.js";import"./CompositeItem-CG89Nl1U.js";import"./makeExternalStore-DP55EZzE.js";import"./BaseForm-9xfNoQ7U.js";import"./ActionButton-5xGca2at.js";import"./Button-CmbUXSv3.js";import"./SkeletonBar-DUe5rZ6s.js";import"./Tooltip-vzjWcP7C.js";import"./info-sign-BoSJIUJ4.js";import"./chevron-up-BZf-LWm3.js";import"./chevron-down-C1HWTq_e.js";import"./useEventCallback-BiNkxLXV.js";import"./iconLoader-CYn53S5b.js";import"./CompositeRoot-C6E6Nju3.js";import"./Switch-bnhPa2aJ.js";import"./TimePicker-qFoz_rre.js";import"./CollapsiblePanel-BaiGGDJy.js";import"./error-swCJC4aW.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-7PiZwI5Y.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
