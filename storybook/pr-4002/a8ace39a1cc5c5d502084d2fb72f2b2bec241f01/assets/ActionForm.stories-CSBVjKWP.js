import{j as t,g as n}from"./iframe-Dhq7AaUP.js";import{A as r}from"./action-form-Dda0juMm.js";import"./preload-helper-B5t1nGT4.js";import"./DropdownField-CfokxXbx.js";import"./debounce-DxmZJnBK.js";import"./useOsdkClient-CIEi34cT.js";import"./index-505BPbMk.js";import"./Input-BLnXCCTA.js";import"./useBaseUiId-8_wbyGGA.js";import"./useControlled-CWg50-5h.js";import"./index-5i4D4FjR.js";import"./index-Cn7LZsiB.js";import"./PopoverPopup-CbuPYz_R.js";import"./InternalBackdrop-BwExNyw1.js";import"./composite-m_TTOmrH.js";import"./index-Ds9Aeuo4.js";import"./getDisabledMountTransitionStyles-CskAKAe0.js";import"./ToolbarRootContext-BPtqJH5V.js";import"./tick-BxbL6Sum.js";import"./svgIconContainer-D5rjHQJh.js";import"./small-cross-C-lwhhcT.js";import"./search-D9UNy25Q.js";import"./cross-BTExjjDl.js";import"./useValueChanged-Ba8xukC7.js";import"./getPseudoElementBounds-DfU8GLtR.js";import"./CompositeItem-CmAuNbAQ.js";import"./makeExternalStore-v3dRS4Sg.js";import"./BaseForm-FRUsgVDH.js";import"./ActionButton-KqE6rva2.js";import"./Button-DHokje8p.js";import"./SkeletonBar-Dfu2XLH1.js";import"./Tooltip-DNpuDERk.js";import"./info-sign-CHzWGV-K.js";import"./chevron-up-Bck8wAdS.js";import"./chevron-down-D4blBvUy.js";import"./useEventCallback-DrWx2I0p.js";import"./iconLoader-Cj1DUiYf.js";import"./CompositeRoot-m8DgL1Mk.js";import"./Switch-_U7WTKpt.js";import"./TimePicker-CA-X889n.js";import"./CollapsiblePanel-B1W1icVw.js";import"./error-_SQQqIaC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CQGMBuHv.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
