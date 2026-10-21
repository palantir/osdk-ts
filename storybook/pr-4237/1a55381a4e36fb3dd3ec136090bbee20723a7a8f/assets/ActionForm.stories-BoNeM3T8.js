import{j as t,g as n}from"./iframe-DFGm32Bw.js";import{A as r}from"./action-form-CfywgG0J.js";import"./preload-helper-fy9m8Fnq.js";import"./DropdownField-DRjEtpTz.js";import"./debounce-CGY3R00a.js";import"./useOsdkClient-DRvI5chP.js";import"./index-DjqFaeTC.js";import"./Input-DL-Ka-L9.js";import"./useBaseUiId-DYKNlNgP.js";import"./useControlled-DGRdFYYN.js";import"./index-FvgKhH5U.js";import"./index-DyySrusV.js";import"./PopoverPopup-DcPuDwsK.js";import"./InternalBackdrop-DMMzhES7.js";import"./composite-B4OJQV7f.js";import"./index-BtNh-TEb.js";import"./getDisabledMountTransitionStyles-Bp5WDZ4V.js";import"./ToolbarRootContext-8KEPzI9b.js";import"./tick-BLcfeptW.js";import"./svgIconContainer-D-V_MVwY.js";import"./small-cross-D1IQ7GLs.js";import"./search-DNzannB5.js";import"./cross-DnLg4Ct0.js";import"./useValueChanged-Cy-yyTWd.js";import"./getPseudoElementBounds-opeseqFO.js";import"./CompositeItem-BNbv7BXO.js";import"./makeExternalStore-C_KPNZSJ.js";import"./BaseForm-CiSzEdFn.js";import"./ActionButton-DvfQCjtU.js";import"./Button-DZG39NOd.js";import"./SkeletonBar-BnB7SRxp.js";import"./Tooltip-gJq75AB8.js";import"./info-sign-DW8SFLTG.js";import"./chevron-up-BLN9pzIf.js";import"./chevron-down-PQvYLt7R.js";import"./useEventCallback-D-auj4HH.js";import"./iconLoader-xeIXI3vo.js";import"./Switch-BSb7A8qu.js";import"./CompositeRoot-Bd-bK81X.js";import"./TimePicker-BSIs583P.js";import"./CollapsiblePanel-BUe5kDOz.js";import"./error-Ce5TqXqV.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DGoS0Q7x.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
