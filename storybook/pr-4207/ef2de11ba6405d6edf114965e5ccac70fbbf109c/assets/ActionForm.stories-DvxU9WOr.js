import{j as t,g as n}from"./iframe-D8GtPwc8.js";import{A as r}from"./action-form-T7lhqxaJ.js";import"./preload-helper-DM7AYsRe.js";import"./DropdownField-DIakJXQh.js";import"./debounce-4ipI9nx9.js";import"./useOsdkClient-D4kcyEkr.js";import"./index-BHvqAHvK.js";import"./Input-BQZ4zqRI.js";import"./useBaseUiId-cPjFtQbW.js";import"./useControlled-BGR8D7jw.js";import"./index-BFpMtvXB.js";import"./index-hBVFoSAx.js";import"./PopoverPopup-DnmZzlUY.js";import"./InternalBackdrop-BnVhbZ_p.js";import"./composite-C3gA3n5a.js";import"./index--mveQ4GA.js";import"./getDisabledMountTransitionStyles-OSessTJH.js";import"./ToolbarRootContext-BqDTk1g9.js";import"./tick-DbzPDmMF.js";import"./svgIconContainer-DlryWN-T.js";import"./small-cross-AU0AwZv4.js";import"./search-1VHOmlrx.js";import"./cross-DB6ZQcJi.js";import"./useValueChanged-Bvcq1JkK.js";import"./getPseudoElementBounds-DAdIAfjY.js";import"./CompositeItem-DiLTW9IV.js";import"./makeExternalStore-ByNN_qQg.js";import"./BaseForm-Duer3can.js";import"./ActionButton-COwhhG-g.js";import"./Button-BY4p0q88.js";import"./SkeletonBar-DhDYamN9.js";import"./Tooltip-CWkY425s.js";import"./info-sign-j4mGJXkr.js";import"./chevron-up-KgUDl0ry.js";import"./chevron-down-7LsT1DrB.js";import"./useEventCallback-JoMVAP4J.js";import"./iconLoader-Dyz9e-JA.js";import"./Switch-JH6DJj0m.js";import"./CompositeRoot-CgyL5Ynk.js";import"./TimePicker-Btx9W8oF.js";import"./CollapsiblePanel-DRmMBXX1.js";import"./error-DXFVtY0P.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BajG3tch.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
