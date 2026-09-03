import{j as t,g as n}from"./iframe-BfGhSrhj.js";import{A as r}from"./action-form-UgNZbqIT.js";import"./preload-helper-vxwuBi5M.js";import"./DropdownField-D4BYnBW1.js";import"./debounce-DNM_Pm0s.js";import"./useOsdkClient-BXxAdvut.js";import"./index-BpzGyY_9.js";import"./Input-BfWLU8Yl.js";import"./useBaseUiId-Crf4zNct.js";import"./useControlled-Cqj-8esb.js";import"./index-Bi5q9Arz.js";import"./index-DXdjOqiL.js";import"./PopoverPopup-CWniRTA-.js";import"./InternalBackdrop-CVI9nmOg.js";import"./composite-BgMCZbwS.js";import"./index-BWg0FpKS.js";import"./getDisabledMountTransitionStyles-QeVB0pEF.js";import"./ToolbarRootContext-CcKAs7gU.js";import"./tick-_Dn2hUgn.js";import"./svgIconContainer-B7iRS6fY.js";import"./small-cross-DZ73Q1fw.js";import"./search-ByYdnjPp.js";import"./cross-Bn7q8aps.js";import"./useValueChanged-Bpisl4CB.js";import"./getPseudoElementBounds-BmPRbc2u.js";import"./CompositeItem-6BwZmfcB.js";import"./makeExternalStore-s41uljGH.js";import"./BaseForm-UjVr43nN.js";import"./ActionButton-_wE0oZ9W.js";import"./Button-CF2oqfBr.js";import"./SkeletonBar-CEr1E5VO.js";import"./Tooltip-BwJ3b4PV.js";import"./info-sign-atf9qgC_.js";import"./chevron-up-pR3W0lnx.js";import"./chevron-down-CkhCniF6.js";import"./useEventCallback-BZV3Iwak.js";import"./iconLoader-B8NEd6VS.js";import"./CompositeRoot-DXDfiXKW.js";import"./Switch-CrccHehq.js";import"./TimePicker-CaF6LDa-.js";import"./CollapsiblePanel-BK0gVPbW.js";import"./error-CBS_ohw_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DtIhmsVW.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
