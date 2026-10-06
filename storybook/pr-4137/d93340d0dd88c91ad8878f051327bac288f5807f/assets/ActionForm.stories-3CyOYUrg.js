import{j as t,g as n}from"./iframe-el7bjSAH.js";import{A as r}from"./action-form-DdFnLhKg.js";import"./preload-helper-DLIuAVkn.js";import"./DropdownField-CmRqBaKg.js";import"./debounce-jh4ZJlD3.js";import"./useOsdkClient-d2eky65A.js";import"./index-DqdFzNH7.js";import"./Input-CL8_Xm7J.js";import"./useBaseUiId-BMJSE7oP.js";import"./useControlled-B75sCM7T.js";import"./index-C95mnJoM.js";import"./index-0oAMicpD.js";import"./PopoverPopup-DwVOyFYi.js";import"./InternalBackdrop-BMvERWIA.js";import"./composite-CNO4lqFc.js";import"./index-BVkx0JYL.js";import"./getDisabledMountTransitionStyles-D3JoAvA2.js";import"./ToolbarRootContext-B3AP-FE_.js";import"./tick-0qxmk6XW.js";import"./svgIconContainer-DsqZkZNx.js";import"./small-cross-DlbYuuLD.js";import"./search-BcW8-7NR.js";import"./cross-DKrIoJp0.js";import"./useValueChanged-DS-0ugoh.js";import"./getPseudoElementBounds-Dey8uGuB.js";import"./CompositeItem-2Q_-fuaz.js";import"./makeExternalStore-F3_wqthP.js";import"./BaseForm-9IgujUbF.js";import"./ActionButton-CHJoFoX3.js";import"./Button-CzJbluPV.js";import"./SkeletonBar-Cm8w6Wrq.js";import"./Tooltip-LLGUzx8a.js";import"./info-sign-DJw0OnrJ.js";import"./chevron-up-DUc-JZ6h.js";import"./chevron-down-C0Gm8Kcu.js";import"./useEventCallback-ENJpX7A2.js";import"./iconLoader-C-PskIB-.js";import"./Switch-DF0jyVUA.js";import"./CompositeRoot-BkTRdWQt.js";import"./TimePicker-B8FUUu4j.js";import"./CollapsiblePanel-BVK3lBnv.js";import"./error-D7fY3cPV.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BlbIxaEE.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
