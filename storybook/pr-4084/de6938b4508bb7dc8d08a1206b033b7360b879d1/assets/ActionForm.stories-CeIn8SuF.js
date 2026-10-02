import{j as t,g as n}from"./iframe-B60uIzqu.js";import{A as r}from"./action-form-DCXnfD8u.js";import"./preload-helper-jikZvyDa.js";import"./DropdownField-DhWDS7MC.js";import"./debounce-Y14coaTK.js";import"./useOsdkClient-C8IrJvuk.js";import"./index-BzSV7QsP.js";import"./Input-CI489aTx.js";import"./useBaseUiId-DIJoCSJF.js";import"./useControlled-DJ00XR1e.js";import"./index-DWJFVWYa.js";import"./index-DHpY-kFP.js";import"./PopoverPopup-mMeInTnK.js";import"./InternalBackdrop-CLXaH1Aa.js";import"./composite-FgUpy7wg.js";import"./index-5Hq3Nksu.js";import"./getDisabledMountTransitionStyles-Dva2U48F.js";import"./ToolbarRootContext-DNfnA9up.js";import"./tick-CFIe4FmU.js";import"./svgIconContainer-guiuIeqp.js";import"./small-cross-DmneRbUh.js";import"./search-W61rBGPZ.js";import"./cross-DOsmRzos.js";import"./useValueChanged-CGySjWpW.js";import"./getPseudoElementBounds-CLV_8asC.js";import"./CompositeItem-DumPFzxx.js";import"./makeExternalStore-D8fqJuwI.js";import"./BaseForm-WGdxG_Ru.js";import"./ActionButton-BwfVyv5Y.js";import"./Button-CwbHglSg.js";import"./SkeletonBar-gvdt352_.js";import"./Tooltip-CU9Zwhnt.js";import"./info-sign-wk_f5XhI.js";import"./chevron-up-i--mqvQq.js";import"./chevron-down-C_KV3jKU.js";import"./useEventCallback-B7QugTUD.js";import"./iconLoader-Bm9uG-UU.js";import"./Switch-B2_E7aqi.js";import"./CompositeRoot-DYfXO683.js";import"./TimePicker-C4XPurBQ.js";import"./CollapsiblePanel-CfyaXJrK.js";import"./error-CTvFY39O.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dg6VzMMR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
