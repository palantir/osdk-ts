import{j as t,g as n}from"./iframe-TTTmSYHm.js";import{A as r}from"./action-form-C5GU9W2M.js";import"./preload-helper-ClYOkReB.js";import"./DropdownField-Cmj70H5z.js";import"./debounce-COnGppqi.js";import"./useOsdkClient-ATs7aeG_.js";import"./index-MsEGuD0o.js";import"./Input-B2lkln1U.js";import"./useBaseUiId-DzbI9-Sb.js";import"./useControlled-bG7LsTar.js";import"./index-CF7SEcu1.js";import"./index-Cqp_2UpH.js";import"./PopoverPopup-Ezl5Gloz.js";import"./InternalBackdrop-mImnYcgQ.js";import"./composite-BPJ0g_Cp.js";import"./index-B9nxHhHn.js";import"./getDisabledMountTransitionStyles-DvLD3XZY.js";import"./ToolbarRootContext-Da-vX-iu.js";import"./tick-F9zQ07Eh.js";import"./svgIconContainer-DU6hcGdL.js";import"./small-cross-CNQD1rAJ.js";import"./search-CpIo6FKV.js";import"./cross-DqugLD6r.js";import"./useValueChanged-BXWrU09i.js";import"./getPseudoElementBounds-C3b80VkD.js";import"./CompositeItem-DOKaGOjC.js";import"./makeExternalStore-BiPnQfDm.js";import"./BaseForm-DDncZgRS.js";import"./ActionButton-kMMiGbeY.js";import"./Button-D_Pqa9bY.js";import"./SkeletonBar-Bu7s4m6h.js";import"./Tooltip-Dz8LBLaM.js";import"./info-sign-RW0JtRkB.js";import"./chevron-up-DKUANvKI.js";import"./chevron-down-BWZ8_fkX.js";import"./useEventCallback-BjYhRPw3.js";import"./iconLoader-CMmqb-Gm.js";import"./Switch-BHKJATcr.js";import"./CompositeRoot-_Zl1bY7P.js";import"./TimePicker-B_tiWWw3.js";import"./CollapsiblePanel-ExecBSLk.js";import"./error-BU0mbQfC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C1xKtNKq.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
