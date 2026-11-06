import{j as t,g as n}from"./iframe-DOoViGQC.js";import{A as r}from"./action-form-DkRLkG0K.js";import"./preload-helper-D6M-lWMp.js";import"./DropdownField-CW8S6woh.js";import"./debounce-DshVKYBV.js";import"./useOsdkClient-BvJQMhJJ.js";import"./index-x4gpFwBp.js";import"./Input-Bq0XAGaR.js";import"./useBaseUiId-CEA0ov3F.js";import"./useControlled-DyFvS3eo.js";import"./index-uZqGKRzq.js";import"./index-C5WAn5Dx.js";import"./isObject-B3qfbi9s.js";import"./InternalBackdrop-Cvfzz2Gg.js";import"./composite-DG_OLYDF.js";import"./index-oSIBYKmR.js";import"./getDisabledMountTransitionStyles-FChDzxHp.js";import"./ToolbarRootContext-BICNcApQ.js";import"./tick-BcBfo_Ik.js";import"./svgIconContainer-DDehFQ37.js";import"./small-cross-CkiB4kAk.js";import"./search-BtSuJQ9M.js";import"./cross-BAqH0G--.js";import"./useValueChanged-sHXiC0u3.js";import"./getPseudoElementBounds-CCgIuocG.js";import"./CompositeItem-C-YvkCMY.js";import"./makeExternalStore-_9NPeB4S.js";import"./BaseForm-BniZBlxq.js";import"./ActionButton-CT-L5CB7.js";import"./Button-DnpTR9kP.js";import"./SkeletonBar-yxb5jjnx.js";import"./Tooltip-Ct-G7N11.js";import"./info-sign-DWDHnNSz.js";import"./chevron-up-PxyOElDq.js";import"./chevron-down-BssNm1rB.js";import"./useEventCallback-2cQhO8Od.js";import"./iconLoader-DWzIwihA.js";import"./Switch-CnssbGAJ.js";import"./CompositeRoot-5fWrehja.js";import"./TimePicker-CtZ3grik.js";import"./CollapsiblePanel--B4cqlmx.js";import"./error-CMiAPzhy.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DkYGNx1N.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
