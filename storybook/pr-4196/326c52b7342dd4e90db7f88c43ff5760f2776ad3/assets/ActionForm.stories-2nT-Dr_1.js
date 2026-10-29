import{j as t,g as n}from"./iframe-CXoxL7cT.js";import{A as r}from"./action-form-yFR-XnkT.js";import"./preload-helper-DMJKrzx6.js";import"./DropdownField-wsN4GW5v.js";import"./debounce-BePSlKc6.js";import"./useOsdkClient-Cwyh3mgC.js";import"./index-dBMA5UNn.js";import"./Input-DwAQ3sDB.js";import"./useBaseUiId-Izmi48hi.js";import"./useControlled-CEwBj1Zp.js";import"./index-UsCrzJ_A.js";import"./index-DzDKHmnK.js";import"./PopoverPopup-BIW3lqxC.js";import"./InternalBackdrop-mxeqeXwO.js";import"./composite-DMCRZOOJ.js";import"./index-BB4QshU1.js";import"./getDisabledMountTransitionStyles-LOCq1Tqm.js";import"./ToolbarRootContext-CoErepAo.js";import"./tick-LyPFWekw.js";import"./svgIconContainer-DtqPwXsL.js";import"./small-cross-CKzsSNgv.js";import"./search-D3KEpk03.js";import"./cross-XQWmBmUb.js";import"./useValueChanged-DZganrCm.js";import"./getPseudoElementBounds-DBTVlom9.js";import"./CompositeItem-CWiiOpZY.js";import"./makeExternalStore-CHMRsxiL.js";import"./BaseForm-BZZTbLGq.js";import"./ActionButton-DNc2uAWK.js";import"./Button-Cr7M9AYk.js";import"./SkeletonBar-Du45-Qw4.js";import"./Tooltip-Ccq41CCY.js";import"./info-sign-DUkRTkO0.js";import"./chevron-up-BvrSseHY.js";import"./chevron-down-tGjjwMVx.js";import"./useEventCallback-QfRioJwU.js";import"./iconLoader-DU-q-ox-.js";import"./Switch-ZUkFNeT4.js";import"./CompositeRoot-tn7BiEDT.js";import"./TimePicker-0ESLt-uj.js";import"./CollapsiblePanel-C2HOfB3-.js";import"./error-Bnpx40Rp.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CqzyuRHa.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
