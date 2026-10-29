import{j as t,g as n}from"./iframe-DFOR2onK.js";import{A as r}from"./action-form-q22nA9iA.js";import"./preload-helper-ByXSQw30.js";import"./DropdownField-DXyB4HbV.js";import"./debounce-CgV8usSM.js";import"./useOsdkClient-MN7PkG3f.js";import"./index-BVkLsmBt.js";import"./Input-tEOQdwSz.js";import"./useBaseUiId-Dsp7jumh.js";import"./useControlled-CtMTriq1.js";import"./index-DY_-DVUB.js";import"./index-OUX8MUQn.js";import"./PopoverPopup-Cuu9Pm_U.js";import"./InternalBackdrop-DvUh0nKI.js";import"./composite-CRJMZ4tZ.js";import"./index-Dmn1pJPY.js";import"./getDisabledMountTransitionStyles-LtGV7XWM.js";import"./ToolbarRootContext-DMxHSqVF.js";import"./tick-DIYXFliV.js";import"./svgIconContainer-DjkUaIxk.js";import"./small-cross-BDzP7tAy.js";import"./search-4X3AVeSP.js";import"./cross-C9kRknfx.js";import"./useValueChanged-CgXmK7v2.js";import"./getPseudoElementBounds-Bzd3adVt.js";import"./CompositeItem-CtUWLqeJ.js";import"./makeExternalStore-CaVoQzcs.js";import"./BaseForm-DwgWrYSv.js";import"./ActionButton-DSajpJr8.js";import"./Button-MewiuY9J.js";import"./SkeletonBar-BdI0Hxl4.js";import"./Tooltip-BbqW-UvY.js";import"./info-sign-w4HakqJN.js";import"./chevron-up-DC98x_tH.js";import"./chevron-down-BMNaDKAR.js";import"./useEventCallback-PkaVDlo9.js";import"./iconLoader-DsmTl1Pg.js";import"./Switch-DgeJe4K_.js";import"./CompositeRoot-s1Ihit7X.js";import"./TimePicker-CT1rFgyv.js";import"./CollapsiblePanel-B8axV45E.js";import"./error-BAimxzZD.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-of9jSM-3.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
