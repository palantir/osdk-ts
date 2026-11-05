import{j as t,g as n}from"./iframe-CfP80nhE.js";import{A as r}from"./action-form-CEj5ZlzN.js";import"./preload-helper-DVx9So3f.js";import"./DropdownField-DFKXNXg2.js";import"./debounce-o-BE-ayW.js";import"./useOsdkClient-BiT3AVNq.js";import"./index-COwN8tdJ.js";import"./Input-C5rpYEfy.js";import"./useBaseUiId-BpCYJZt6.js";import"./useControlled-DY45BqZY.js";import"./index-CTbyqW3F.js";import"./index-5ZL8iVjG.js";import"./isObject-C97A8-HS.js";import"./InternalBackdrop-Bx7guY_d.js";import"./composite-BXpnnXVg.js";import"./index-yQDp3qiC.js";import"./getDisabledMountTransitionStyles-CkkZsrSS.js";import"./ToolbarRootContext-BNZ6uAxf.js";import"./tick-bPvw1r3T.js";import"./svgIconContainer-ByL1CzmI.js";import"./small-cross-MDPhdUvt.js";import"./search-DBbR_HQC.js";import"./cross-Dhhk-QOY.js";import"./useValueChanged-BWuoub0f.js";import"./getPseudoElementBounds-B5VczZa8.js";import"./CompositeItem-rrhF1DOt.js";import"./makeExternalStore-CX8kqVGx.js";import"./BaseForm-BwLmX78j.js";import"./ActionButton-bm-7ANXn.js";import"./Button-CBX6PhDU.js";import"./SkeletonBar-BTKdZ9Ff.js";import"./Tooltip-I7xftFyx.js";import"./info-sign-BLNYxIEz.js";import"./chevron-up-BspkruPc.js";import"./chevron-down-DosI46m-.js";import"./useEventCallback-BZgh7tEU.js";import"./iconLoader-C_OQ4FOV.js";import"./Switch-Bip7Yvtn.js";import"./CompositeRoot-CVXmLR7F.js";import"./TimePicker-C586dqS2.js";import"./CollapsiblePanel-C-Oui3tr.js";import"./error-D8W3ZfFh.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B-Iw4pyn.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
