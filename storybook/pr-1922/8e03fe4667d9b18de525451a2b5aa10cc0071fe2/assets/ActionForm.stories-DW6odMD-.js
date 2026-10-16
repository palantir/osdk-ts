import{j as t,g as n}from"./iframe-CX9YXgSA.js";import{A as r}from"./action-form-D-XFHcSR.js";import"./preload-helper-DtqkPlr3.js";import"./DropdownField-94zOpfvL.js";import"./debounce-jRrecCNv.js";import"./useOsdkClient-DpMK-LnF.js";import"./index-CHu8oj4z.js";import"./Input-Cz4ERfsw.js";import"./useBaseUiId-CCOn5SM4.js";import"./useControlled-DmxCQxaW.js";import"./index-I5XF2J3w.js";import"./index-CU1lbmk7.js";import"./PopoverPopup-CV-lyuv2.js";import"./InternalBackdrop-BepV41uE.js";import"./composite-Buss17U8.js";import"./index-DqtGTCxT.js";import"./getDisabledMountTransitionStyles-CaxJBU-f.js";import"./ToolbarRootContext-oh9KPlPl.js";import"./tick-DKFgC3oF.js";import"./svgIconContainer-B6cy_VMV.js";import"./small-cross-B9xThdJa.js";import"./search-N9rV3LuD.js";import"./cross-RF9BS1x-.js";import"./useValueChanged-BlgjX7r-.js";import"./getPseudoElementBounds-tIu6DOku.js";import"./CompositeItem-4eZutR_U.js";import"./makeExternalStore-BTzOXgaO.js";import"./BaseForm-Dj8248uX.js";import"./ActionButton-DE-sYlp6.js";import"./Button-CXKnl_XI.js";import"./SkeletonBar-O2sp2JAt.js";import"./Tooltip-BxJhAj2y.js";import"./info-sign-D0uYMpKX.js";import"./chevron-up-IQzmRrJF.js";import"./chevron-down-Dc86wWzz.js";import"./useEventCallback-foM6gK6J.js";import"./iconLoader--WbmDtR9.js";import"./Switch-O6t7BjK4.js";import"./CompositeRoot-BB1Obmjv.js";import"./TimePicker-COtqs6xu.js";import"./CollapsiblePanel-BNaRB7Gp.js";import"./error-D_HPKerG.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DLY6T-R6.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
