import{j as t,g as n}from"./iframe-CiSnmsUY.js";import{A as r}from"./action-form-ChcWSRJP.js";import"./preload-helper-DB05R4R8.js";import"./DropdownField-CjTR3tJv.js";import"./debounce-BF_mGk1a.js";import"./useOsdkClient-CXCEo80y.js";import"./index-DtqJWAR1.js";import"./Input-DIUphC8P.js";import"./useBaseUiId-BgbryNLv.js";import"./useControlled-D6zDOA9R.js";import"./index-C3RlImgP.js";import"./index-MxmlqxL7.js";import"./PopoverPopup-NTD0YB3Q.js";import"./InternalBackdrop-BP7YEs8y.js";import"./composite-C3rcy89N.js";import"./index-BNNnVfG-.js";import"./getDisabledMountTransitionStyles-KZsVWxev.js";import"./ToolbarRootContext-DiETc3Jn.js";import"./tick-BKrT4vVQ.js";import"./svgIconContainer-YAuGbdcX.js";import"./small-cross-DoXZmpls.js";import"./search-BuUGV3qm.js";import"./cross-DqJ3usLj.js";import"./useValueChanged-hsux432g.js";import"./getPseudoElementBounds-CuJTK0LC.js";import"./CompositeItem-CZisrTyk.js";import"./makeExternalStore-QQZ63Ao7.js";import"./BaseForm-h45g5_3p.js";import"./ActionButton-CQ0ZQbLI.js";import"./Button-zNL5TU8S.js";import"./SkeletonBar-DpUtUaVO.js";import"./Tooltip-Db4p9Oq_.js";import"./info-sign-Cb6KV3Jt.js";import"./chevron-up-BZ9kE0fL.js";import"./chevron-down-NvsSukNZ.js";import"./useEventCallback-DqunfGDv.js";import"./iconLoader-BLbM9bYQ.js";import"./Switch-B4OQXHzL.js";import"./CompositeRoot-D51iu23b.js";import"./TimePicker-DwPsnyKZ.js";import"./CollapsiblePanel-7EwtkYsj.js";import"./error-D4igt9j_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B44dBrFm.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
