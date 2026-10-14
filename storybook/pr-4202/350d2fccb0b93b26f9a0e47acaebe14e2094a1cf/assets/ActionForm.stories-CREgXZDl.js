import{j as t,g as n}from"./iframe-CXk0WqhB.js";import{A as r}from"./action-form-ClPKJqnG.js";import"./preload-helper-ChjBfvhG.js";import"./DropdownField-9i-_p9Wp.js";import"./debounce-B5lQDrQ7.js";import"./useOsdkClient-uAkJXHAY.js";import"./index-ML5mwP3e.js";import"./Input-D9BOnKAN.js";import"./useBaseUiId-DHjZ3Omh.js";import"./useControlled-Bl28iO0R.js";import"./index-CjxpfJC5.js";import"./index-BT6_XaBS.js";import"./PopoverPopup-Cw8ntXH6.js";import"./InternalBackdrop-BrAyLlt0.js";import"./composite-ytyU9AJN.js";import"./index-Cl3j5frJ.js";import"./getDisabledMountTransitionStyles-DiTcMvjB.js";import"./ToolbarRootContext-DTmHJOM7.js";import"./tick-CZjZA-Lg.js";import"./svgIconContainer-Dcyi3Q_X.js";import"./small-cross-DrkIqI6L.js";import"./search-BLVXHNks.js";import"./cross-BmemhmuM.js";import"./useValueChanged-DVvNfwNT.js";import"./getPseudoElementBounds-DF3ARm9q.js";import"./CompositeItem-04P4zIgd.js";import"./makeExternalStore-Ck8wEGfj.js";import"./BaseForm-CEtJY5zg.js";import"./ActionButton-B4JsRdej.js";import"./Button-Dic26hGY.js";import"./SkeletonBar-BtOJaU67.js";import"./Tooltip-CKZmJ4aV.js";import"./info-sign-DjLVqIrc.js";import"./chevron-up-DXTTiNvj.js";import"./chevron-down-DQ2eC5iE.js";import"./useEventCallback-CR9JbWGL.js";import"./iconLoader-D8ZlmQ7B.js";import"./Switch-VIm4tU8f.js";import"./CompositeRoot-LDpbwH3I.js";import"./TimePicker-DP_37Llw.js";import"./CollapsiblePanel-DanBkqbp.js";import"./error-BWxZwg9W.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ChxJang_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
