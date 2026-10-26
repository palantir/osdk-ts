import{j as t,g as n}from"./iframe-BBSo5ZCd.js";import{A as r}from"./action-form-DncNbdjr.js";import"./preload-helper-Dzi5mX41.js";import"./DropdownField-BiBKyvt-.js";import"./debounce-BT0ZhofM.js";import"./useOsdkClient-BFKwqTbg.js";import"./index-B8ZS8eSl.js";import"./Input-CdlLpAfh.js";import"./useBaseUiId-OTe5-im2.js";import"./useControlled-B7b0Wh0w.js";import"./index-B2iIKgXF.js";import"./index-BBPJ8Eu5.js";import"./PopoverPopup-DGYqwH-3.js";import"./InternalBackdrop-BPj_TBK1.js";import"./composite-B78RY0fg.js";import"./index-BUB8f-4u.js";import"./getDisabledMountTransitionStyles-CLcMIQgP.js";import"./ToolbarRootContext-CROAvwzr.js";import"./tick-D66Od4kk.js";import"./svgIconContainer-BoEF3o2r.js";import"./small-cross-BIkOoKCV.js";import"./search-D9IvXS9T.js";import"./cross-CS1ZE-4d.js";import"./useValueChanged-DcBO1Vf5.js";import"./getPseudoElementBounds-CFV9xEQW.js";import"./CompositeItem-Bl0A6RCo.js";import"./makeExternalStore-CncG39Al.js";import"./BaseForm-Cnm9z20R.js";import"./ActionButton-CLNjgvvR.js";import"./Button-Dlb0le5d.js";import"./SkeletonBar-BGWBNq_c.js";import"./Tooltip-B33Nx4ET.js";import"./info-sign-DVzVI8Gt.js";import"./chevron-up-DlRdhiP2.js";import"./chevron-down-CTZm-1e2.js";import"./useEventCallback-CoqlHeZD.js";import"./iconLoader-D3_0sBVC.js";import"./Switch-CyfePxiJ.js";import"./CompositeRoot-D5kUl1oZ.js";import"./TimePicker-BXulL-s_.js";import"./CollapsiblePanel-CTr3LnIy.js";import"./error-DlnosDW0.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-_cs1V2V6.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
