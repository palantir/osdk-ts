import{j as t,g as n}from"./iframe-ByMeZtzX.js";import{A as r}from"./action-form-S6KuoFKu.js";import"./preload-helper-CKCWlQAf.js";import"./DropdownField-8MU5Z2g6.js";import"./debounce-BUN5jtxl.js";import"./useOsdkClient-ixFLeVu3.js";import"./index-MjIH22RC.js";import"./Input-Cu1JHp0_.js";import"./useBaseUiId-COE4qdfZ.js";import"./useControlled-DCuR4lHr.js";import"./index-C5DhJsVj.js";import"./index-CGEFtaju.js";import"./PopoverPopup-CpgQFEX8.js";import"./InternalBackdrop-Dunp36dg.js";import"./composite-BJmqHe58.js";import"./index-BWU4Zziw.js";import"./getDisabledMountTransitionStyles-SuR5eTaW.js";import"./ToolbarRootContext-B0lEY-MF.js";import"./tick-DcrvbN3Y.js";import"./svgIconContainer-BWYJe8Lc.js";import"./small-cross-C4a4JTK6.js";import"./search-Cq1vvGyL.js";import"./cross-BL14zVVR.js";import"./useValueChanged-D09un0L_.js";import"./getPseudoElementBounds-DVrDM1RK.js";import"./CompositeItem-CEWc-TNz.js";import"./makeExternalStore-DbH4cGZ0.js";import"./BaseForm-DSqdOyz9.js";import"./ActionButton-DhKaPnov.js";import"./Button-CfzUE4zU.js";import"./SkeletonBar-DKliZ6jy.js";import"./Tooltip-CP2jx6MZ.js";import"./info-sign-cqzVNZ8H.js";import"./chevron-up-D8XQAZyy.js";import"./chevron-down-Chsl7nyR.js";import"./useEventCallback-CvBku6w-.js";import"./iconLoader-D0_hN2DL.js";import"./CompositeRoot-Ci5hTCFp.js";import"./Switch-CMaKvqEV.js";import"./TimePicker-CpP7S08o.js";import"./CollapsiblePanel-CD29H3XJ.js";import"./error-yKJFbcKE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CJVxpJaf.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
