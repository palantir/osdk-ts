import{j as t,g as n}from"./iframe-BxJiroe5.js";import{A as r}from"./action-form-BywylNt1.js";import"./preload-helper-DLdhLncI.js";import"./DropdownField-DIb0z1YE.js";import"./debounce-ZBq--l-M.js";import"./useOsdkClient-DDpZHt2c.js";import"./index-D3_UFpM5.js";import"./Input-DEdpGx6f.js";import"./useBaseUiId-CsOPh1qV.js";import"./useControlled-DfqnBr2w.js";import"./index-nC3VniDk.js";import"./index-0CUe0U0r.js";import"./PopoverPopup-BhS3yPpf.js";import"./InternalBackdrop-AN7PHPbY.js";import"./composite-BKj-HEYH.js";import"./index-C_1QgYte.js";import"./getDisabledMountTransitionStyles-DsPFGkAu.js";import"./ToolbarRootContext--suhwR1X.js";import"./tick-D-qLi4Dk.js";import"./svgIconContainer-C-ufoPHL.js";import"./small-cross-CYWa9OHl.js";import"./search-JlbJ_F58.js";import"./cross-Bw3wvyRT.js";import"./useValueChanged-Cp5QQiYs.js";import"./getPseudoElementBounds-xDGWCFZp.js";import"./CompositeItem-BT8yR1a5.js";import"./makeExternalStore-CSiVCh7w.js";import"./BaseForm-CN6Ev0D4.js";import"./ActionButton-DQczrpII.js";import"./Button-Bo57TzJg.js";import"./SkeletonBar-CGOwo2DD.js";import"./Tooltip-DMWyzbQ6.js";import"./info-sign-PJ9A8XA-.js";import"./chevron-up-C402f-7H.js";import"./chevron-down-DjbhW8-h.js";import"./useEventCallback-D4kZLjoj.js";import"./iconLoader-DBsIs2Pc.js";import"./Switch-pXgBXsvB.js";import"./CompositeRoot-BLV6PWXU.js";import"./TimePicker-Ce5ilNJQ.js";import"./CollapsiblePanel-7oLCwys7.js";import"./error-CmKYwFXp.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BDE5PqUj.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
