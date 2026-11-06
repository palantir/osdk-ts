import{j as t,g as n}from"./iframe-CT0ueW5J.js";import{A as r}from"./action-form-2FFODJ3L.js";import"./preload-helper-CJAqHn_u.js";import"./DropdownField-BRVEW7-m.js";import"./debounce-D8sdisyq.js";import"./useOsdkClient-DaWrwNax.js";import"./index-BnCCNHc8.js";import"./Input-DATuNACb.js";import"./useBaseUiId-sdgRlT1f.js";import"./useControlled-FL95Cn3G.js";import"./index-C9OqCYVT.js";import"./index-BjzTUR_u.js";import"./PopoverPopup-wk_1VcH9.js";import"./InternalBackdrop-IMT1pB90.js";import"./composite-DKQtJrfK.js";import"./index-D9FtuD0I.js";import"./getDisabledMountTransitionStyles-C5eHg9LA.js";import"./ToolbarRootContext-B-rHXnnf.js";import"./tick-DafMeIZ7.js";import"./svgIconContainer-IfNYosH4.js";import"./small-cross-B5bSG8T4.js";import"./search-LkIpH0hE.js";import"./cross-Cyv96KiS.js";import"./useValueChanged-BH-DNPTf.js";import"./getPseudoElementBounds-CX5xt4_X.js";import"./CompositeItem-iZ_HyQEG.js";import"./makeExternalStore-DU28tiTB.js";import"./BaseForm-_HCpqiwR.js";import"./ActionButton-DUhBWnTe.js";import"./Button-ICT0IjE_.js";import"./SkeletonBar-BOkXS-5U.js";import"./Tooltip-C8DWe441.js";import"./info-sign-DXnngIuJ.js";import"./chevron-up-YMHc84Sj.js";import"./chevron-down-CY0HcTjS.js";import"./useEventCallback-CgkxQMVg.js";import"./iconLoader-B88ijwiQ.js";import"./Switch-BmiThLf4.js";import"./CompositeRoot-BotftMZY.js";import"./TimePicker-B-RtWAJ4.js";import"./CollapsiblePanel-C_pT0bYR.js";import"./error-D7Pe4Z66.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-HMzwH_1Q.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
