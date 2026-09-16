import{j as t,g as n}from"./iframe-CFSd_ghT.js";import{A as r}from"./action-form-D7VOTd12.js";import"./preload-helper-ZllT-xST.js";import"./DropdownField-BXoQO-Qa.js";import"./debounce-Cqi7OFEi.js";import"./useOsdkClient-C-wItY3f.js";import"./index-BVC2DtDE.js";import"./Input-B266R5K5.js";import"./useBaseUiId-Bi512Q4g.js";import"./useControlled-CUIixQM1.js";import"./index-CX8cSHY9.js";import"./index-PmO53gZu.js";import"./PopoverPopup-CZqjkl0j.js";import"./InternalBackdrop-KQmr3-ne.js";import"./composite-rhm-ES_j.js";import"./index-CeP15cDX.js";import"./getDisabledMountTransitionStyles-LtEOHvLP.js";import"./ToolbarRootContext-87swm1F0.js";import"./tick-Bd_VGJ-8.js";import"./svgIconContainer-CuLuTWV9.js";import"./small-cross-DefbWUHG.js";import"./search-CiZh2SnD.js";import"./cross-Pk2YzKDQ.js";import"./useValueChanged-D-s1qoWy.js";import"./getPseudoElementBounds-GHyUotEa.js";import"./CompositeItem-DvZYqwOH.js";import"./makeExternalStore-BPSbFC_f.js";import"./BaseForm-oLN0dD35.js";import"./ActionButton-DyXI2aTY.js";import"./Button-CII42J6y.js";import"./SkeletonBar-DjQkHXkX.js";import"./Tooltip-Qcx9gV6X.js";import"./info-sign-DDskuTZG.js";import"./chevron-up-CtjHTlSw.js";import"./chevron-down-CkZ0acRz.js";import"./useEventCallback-DwcyWwyP.js";import"./iconLoader-BkjURiY5.js";import"./Switch-CvEka2ON.js";import"./CompositeRoot-D_0QRgdK.js";import"./TimePicker-Dv2oK-7w.js";import"./CollapsiblePanel-D8d1ogGm.js";import"./error-QrCIC66e.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D3lDS6Ow.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
