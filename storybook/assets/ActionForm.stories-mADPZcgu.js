import{j as t,g as n}from"./iframe-yLJxkVzB.js";import{A as r}from"./action-form-DDu2EaAy.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-BBTmJj7c.js";import"./debounce-CAdN6VB_.js";import"./useOsdkClient-BeKNNCDt.js";import"./index-nIKj5uY4.js";import"./Input-CPmagxfJ.js";import"./useBaseUiId-C2QLSnG8.js";import"./useControlled-CJJ5Ltiy.js";import"./index-BA5McYn9.js";import"./index-DfLe8XpU.js";import"./PopoverPopup-DvlntHwZ.js";import"./InternalBackdrop-BBxC8DKB.js";import"./composite-dCt9YpUk.js";import"./index-CozEKZMT.js";import"./getDisabledMountTransitionStyles-Dokq89QC.js";import"./ToolbarRootContext-LMgR1PX5.js";import"./tick-BN9LdMqy.js";import"./svgIconContainer-TK-Ji3z6.js";import"./small-cross-CG34SVyC.js";import"./search-B5yRV9xp.js";import"./cross-Owpme9BE.js";import"./useValueChanged-BAqw25z8.js";import"./getPseudoElementBounds-B28lIi_Q.js";import"./CompositeItem-Bteys6EZ.js";import"./makeExternalStore-BrbywmR6.js";import"./BaseForm-BpxC-lzN.js";import"./ActionButton-Clr_BQ-v.js";import"./Button-wUttMbxG.js";import"./SkeletonBar-DZZlKsf1.js";import"./Tooltip-D82BZFwQ.js";import"./info-sign-BgdbgKHa.js";import"./chevron-up-CjZcFQnk.js";import"./chevron-down-NEt8c7o4.js";import"./useEventCallback-fdgxuXgo.js";import"./iconLoader-BeKo-3Co.js";import"./Switch-9RuXuW2I.js";import"./CompositeRoot-9vcarpiT.js";import"./TimePicker-BSQXpcd9.js";import"./CollapsiblePanel-DgS9WHma.js";import"./error-CkjCJkJz.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-EW4d60np.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
