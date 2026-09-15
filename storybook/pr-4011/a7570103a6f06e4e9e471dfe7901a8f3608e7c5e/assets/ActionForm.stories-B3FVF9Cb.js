import{j as t,g as n}from"./iframe-BD39Do8C.js";import{A as r}from"./action-form-C9ZdXucg.js";import"./preload-helper-JSiQ8WbR.js";import"./DropdownField-sKOGesOW.js";import"./debounce-Bbpr-sop.js";import"./useOsdkClient-s9NhLy7T.js";import"./index-BCxf04aV.js";import"./Input-C2jmuYOz.js";import"./useBaseUiId-CixWZYdi.js";import"./useControlled-eZ44qZZ0.js";import"./index-BxvffljR.js";import"./index-BlGl871Z.js";import"./PopoverPopup-B0-uC8s0.js";import"./InternalBackdrop-JgUl4SpN.js";import"./composite-Dw7ZpZcU.js";import"./index-BMGw1Ywl.js";import"./getDisabledMountTransitionStyles-CF6npNkJ.js";import"./ToolbarRootContext-CEznXclz.js";import"./tick--a7d8SCu.js";import"./svgIconContainer-BGfZ28Se.js";import"./small-cross-v3WipyAt.js";import"./search-DKvlAX7y.js";import"./cross-CMhnMXoS.js";import"./useValueChanged-DEs8VwNn.js";import"./getPseudoElementBounds-muQrWTVi.js";import"./CompositeItem-ucwXIdj-.js";import"./makeExternalStore-3auNYjTa.js";import"./BaseForm-DxJbutHC.js";import"./ActionButton-7xwBUzYP.js";import"./Button-u59jaYGp.js";import"./SkeletonBar-ChYm8Pif.js";import"./Tooltip-A3U5tZhT.js";import"./info-sign-NtBJDT6U.js";import"./chevron-up-DOjPgZ4U.js";import"./chevron-down-Xa2zxhAU.js";import"./useEventCallback-CAno7Uq2.js";import"./iconLoader-D2WLq0hB.js";import"./CompositeRoot-cE8fIZuj.js";import"./Switch-vmhuYawG.js";import"./TimePicker-CEQq17AJ.js";import"./CollapsiblePanel-Drtssh2l.js";import"./error-Bjl2LrVO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dp5pMzPZ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
