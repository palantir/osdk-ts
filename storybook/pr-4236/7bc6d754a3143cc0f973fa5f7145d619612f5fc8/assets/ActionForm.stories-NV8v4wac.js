import{j as t,g as n}from"./iframe-D826lLui.js";import{A as r}from"./action-form-CMdUCUa8.js";import"./preload-helper-CGkAb-Wu.js";import"./DropdownField-JiLo16C6.js";import"./debounce-cNU0CJPI.js";import"./useOsdkClient-Bbo5pAbB.js";import"./index-DxNlvLAd.js";import"./Input-D8Q7l-gb.js";import"./useBaseUiId-CcA6f0Di.js";import"./useControlled-D2sq1Iv_.js";import"./index-e93ICMyG.js";import"./index-Dt4QZQ1m.js";import"./PopoverPopup-B6kEvXUf.js";import"./InternalBackdrop-D8CCCsk7.js";import"./composite-D5SkMTiw.js";import"./index-BjybkpAS.js";import"./getDisabledMountTransitionStyles-CWVYXsPM.js";import"./ToolbarRootContext-DY8S7jf3.js";import"./tick-DxttFOXl.js";import"./svgIconContainer-BjuGxCIz.js";import"./small-cross-Dy0HqjGX.js";import"./search-BEeF_4Rd.js";import"./cross-9ZGBzaem.js";import"./useValueChanged-D4utz3wv.js";import"./getPseudoElementBounds-DvlgftUk.js";import"./CompositeItem-DW0wn-NB.js";import"./makeExternalStore-B82ZGGVu.js";import"./BaseForm-DggZezLE.js";import"./ActionButton-BGwu0aco.js";import"./Button-DOLHRrn6.js";import"./SkeletonBar-DI4OC7oE.js";import"./Tooltip-DJDeXhNg.js";import"./info-sign-D5jdXKZf.js";import"./chevron-up-ByurXI35.js";import"./chevron-down-C1HuiRtn.js";import"./useEventCallback-Ef5EfyWq.js";import"./iconLoader-CgSUxPhT.js";import"./Switch-DoSY1YpW.js";import"./CompositeRoot-GXPFqGSE.js";import"./TimePicker-BFKhEutr.js";import"./CollapsiblePanel-B3fFT0gn.js";import"./error-DNLlyci1.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics--xMNvw5Y.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
