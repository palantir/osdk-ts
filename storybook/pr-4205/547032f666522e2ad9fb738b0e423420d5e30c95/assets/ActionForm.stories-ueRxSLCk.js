import{j as t,g as n}from"./iframe-DxLh3JbF.js";import{A as r}from"./action-form-7nji9GeG.js";import"./preload-helper-CtguWtZv.js";import"./DropdownField-B27tcm_v.js";import"./debounce-DMvnj4rJ.js";import"./useOsdkClient-D-0q6D8B.js";import"./index-DKwvuwmq.js";import"./Input-Be22pwJh.js";import"./useBaseUiId-C0U6w1uv.js";import"./useControlled-CezKSMA-.js";import"./index-lMNDx7C7.js";import"./index-CcJor5Xx.js";import"./PopoverPopup-soj2Nfpm.js";import"./InternalBackdrop-CYZKR22v.js";import"./composite-BnT-JfoG.js";import"./index-JqNwC6gS.js";import"./getDisabledMountTransitionStyles-CcKSQ82e.js";import"./ToolbarRootContext-BeQWjnov.js";import"./tick-UzfIvE9e.js";import"./svgIconContainer-DVtbzSvb.js";import"./small-cross-CmZIK1pw.js";import"./search-6md9DSSP.js";import"./cross-Bq7Vu5_q.js";import"./useValueChanged-ZKInf5vA.js";import"./getPseudoElementBounds-Xs14tMhu.js";import"./CompositeItem-DzeDqabA.js";import"./makeExternalStore-CIacUB7Y.js";import"./BaseForm-CDsL2jsf.js";import"./ActionButton-B_sTpPMt.js";import"./Button-DkhW4pYf.js";import"./SkeletonBar-B3S-zvqX.js";import"./Tooltip-Cv44_0tC.js";import"./info-sign-KnFYLpSC.js";import"./chevron-up-B0ogPpOy.js";import"./chevron-down-C2jGd_Ay.js";import"./useEventCallback-BB6FPyf8.js";import"./iconLoader-D5KDQCF3.js";import"./Switch-D86tETee.js";import"./CompositeRoot-DvjsVfUo.js";import"./TimePicker-CJIgqRPm.js";import"./CollapsiblePanel-Bdhi8tcN.js";import"./error-DE0gSpIQ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-99fBVbxl.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
