import{j as t,g as n}from"./iframe-CziGYRZ5.js";import{A as r}from"./action-form-DwgY64kB.js";import"./preload-helper-gc9urLS2.js";import"./DropdownField-DPVN1Ym_.js";import"./debounce-B8aqKZgz.js";import"./useOsdkClient-ixR0tRCy.js";import"./index-FTgGsQkL.js";import"./Input-B_f-YNqg.js";import"./useBaseUiId-DlaJxT3G.js";import"./useControlled-Cl0l9Mrk.js";import"./index-DvwMpTX4.js";import"./index-BgvYMuxB.js";import"./PopoverPopup-C9gHOQmg.js";import"./InternalBackdrop-CmQk3LXX.js";import"./composite-BvX1_pb1.js";import"./index-Dh3a3xZV.js";import"./getDisabledMountTransitionStyles-DXKrtJSh.js";import"./ToolbarRootContext-YLrOIXIR.js";import"./tick-D6YJJ1hj.js";import"./svgIconContainer-DFNJwVrV.js";import"./small-cross-BvEW3fuD.js";import"./search-cETe_cym.js";import"./cross-BHNWGXzB.js";import"./useValueChanged-OL0F_VvO.js";import"./getPseudoElementBounds-Cbnbi5z8.js";import"./CompositeItem-Bv09Xrw7.js";import"./makeExternalStore-CKEXKIUu.js";import"./BaseForm-BXY2V4Kz.js";import"./ActionButton-CuomlX14.js";import"./Button-DfO3Y95R.js";import"./SkeletonBar-D7G546qA.js";import"./Tooltip-xz9w5Bgx.js";import"./info-sign-CIFeH-38.js";import"./chevron-up-DowPrP_U.js";import"./chevron-down-BzHtNLP_.js";import"./useEventCallback-C84SdZch.js";import"./iconLoader-BjyjWJq0.js";import"./Switch-C_aMPe55.js";import"./CompositeRoot-Cmcfk9Du.js";import"./TimePicker-DDJveGIu.js";import"./CollapsiblePanel-D1R6dB3U.js";import"./error-q8pihEMG.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B4ICqk1s.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
