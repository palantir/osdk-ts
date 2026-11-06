import{j as t,g as n}from"./iframe-FZKVnNVk.js";import{A as r}from"./action-form-chbX0JKd.js";import"./preload-helper-3dwBIJCj.js";import"./DropdownField-D0HrafpY.js";import"./debounce-BBy5KbHR.js";import"./useOsdkClient-DZXuGuSk.js";import"./index-Dde_nhTq.js";import"./Input-CZghJbmx.js";import"./useBaseUiId-CHWJmPEK.js";import"./useControlled-z91UpuYz.js";import"./index-CF9ImBhb.js";import"./index-DcCADMqh.js";import"./isObject-DSmxuai9.js";import"./InternalBackdrop-BqJGJ_zZ.js";import"./composite-pRARdUSn.js";import"./index-CkeIfmFs.js";import"./getDisabledMountTransitionStyles-LA4j7wgS.js";import"./ToolbarRootContext-DURRKwiG.js";import"./tick-BfEHlf8d.js";import"./svgIconContainer-XHaqdbDx.js";import"./small-cross-NJGDyAQR.js";import"./search-UOw594pj.js";import"./cross-Dm4ybRp6.js";import"./useValueChanged-C5VkOvOI.js";import"./getPseudoElementBounds-DzPv2Lpp.js";import"./CompositeItem-DwzK3_pD.js";import"./makeExternalStore-BWIKD2My.js";import"./BaseForm-DNU6BFT8.js";import"./ActionButton-CdreXPwS.js";import"./Button-CYIzntRV.js";import"./SkeletonBar-BGliQaQA.js";import"./Tooltip-CNa5ZfhK.js";import"./info-sign-B2O9vHTE.js";import"./chevron-up-D77dziJ5.js";import"./chevron-down-D0c3SzT7.js";import"./useEventCallback-zjPLn5wF.js";import"./iconLoader-DT7L5K1K.js";import"./Switch-eeTaoHOk.js";import"./CompositeRoot-Cyq7teef.js";import"./TimePicker-BKXOkMIq.js";import"./CollapsiblePanel-CmKPWPla.js";import"./error-ClLL5bQm.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BeTzvhLK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
