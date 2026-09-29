import{j as t,g as n}from"./iframe-Cu9w7jcH.js";import{A as r}from"./action-form-DaIird53.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-CxinIrMS.js";import"./debounce-Bt8yXtd0.js";import"./useOsdkClient-DUbXAUGd.js";import"./index-CISo5zfR.js";import"./Input-B4v38P0N.js";import"./useBaseUiId-BjT3tUdU.js";import"./useControlled-8gLzMwC4.js";import"./index-D8iZ8WU_.js";import"./index-DiQpPnIR.js";import"./PopoverPopup-BD-mSjSu.js";import"./InternalBackdrop-DDT8m1IB.js";import"./composite-CQfO24RT.js";import"./index-DqpMoyiI.js";import"./getDisabledMountTransitionStyles-BqP1cavL.js";import"./ToolbarRootContext-TnMpdXUN.js";import"./tick-Blb6T-l7.js";import"./svgIconContainer-Dw0CoQx7.js";import"./small-cross-D6DQ7NJv.js";import"./search-BN3GL8EC.js";import"./cross-B8KHmrzZ.js";import"./useValueChanged-Be9YjO8J.js";import"./getPseudoElementBounds-BT81kHqt.js";import"./CompositeItem-kmbcRbAD.js";import"./makeExternalStore-ChDoBLQb.js";import"./BaseForm-BRdHwo5U.js";import"./ActionButton-CjgGx4Lw.js";import"./Button-D273o8ES.js";import"./SkeletonBar-DdY3k6U9.js";import"./Tooltip-B-4lupYo.js";import"./info-sign-DTQZOzOV.js";import"./chevron-up-DOEdmH9i.js";import"./chevron-down-C5muOK6K.js";import"./useEventCallback-BWcmln1Y.js";import"./iconLoader-DEDgljDG.js";import"./Switch-lL2pN6xe.js";import"./CompositeRoot-c0ezdUcI.js";import"./TimePicker-Diq33bqk.js";import"./CollapsiblePanel-BGK9MEKX.js";import"./error-DCGe0X_V.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DguEd9bl.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
