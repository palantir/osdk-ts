import{j as t,g as n}from"./iframe-EpH4H8Ct.js";import{A as r}from"./action-form-Y4sFZzdj.js";import"./preload-helper-AInD9Bcq.js";import"./DropdownField-DQrZT-V6.js";import"./debounce-PtscUFWK.js";import"./useOsdkClient-Df-lYPH1.js";import"./index-6wkuS9kk.js";import"./Input-DNhi3I7C.js";import"./useBaseUiId-B53jZkpD.js";import"./useControlled-D6NLbg_O.js";import"./index-Dy-Nc8BB.js";import"./index-5GEbdtwp.js";import"./PopoverPopup-AU4um7RM.js";import"./InternalBackdrop-BVHPaONx.js";import"./composite-CXo_dnRM.js";import"./index-BQgIKsZn.js";import"./getDisabledMountTransitionStyles-Vp1URACM.js";import"./ToolbarRootContext-BhZagEjX.js";import"./tick-BpAUUczH.js";import"./svgIconContainer-BEULmRQq.js";import"./small-cross--Yq5_IWh.js";import"./search-Bdehc4Bq.js";import"./cross-Bw1kg8R1.js";import"./useValueChanged-CdM5uEF8.js";import"./getPseudoElementBounds-C0OS-1z6.js";import"./CompositeItem-DzD_vpNX.js";import"./makeExternalStore-BOo8e2Do.js";import"./BaseForm-D-_wHYTS.js";import"./ActionButton-BG7PpZze.js";import"./Button-BXHz7yPF.js";import"./SkeletonBar-Cwoxu6yL.js";import"./Tooltip-DZvrsB4L.js";import"./info-sign-DoULGRGA.js";import"./chevron-up-DUmXP7Zo.js";import"./chevron-down-B3Hf5n4h.js";import"./useEventCallback-DNP1HUKE.js";import"./iconLoader-BqS7M-Hn.js";import"./Switch-wzDSCZUm.js";import"./CompositeRoot-ln6Pmanu.js";import"./TimePicker-lVKeDtO1.js";import"./CollapsiblePanel-lqnKFpJk.js";import"./error-CwB_EWnJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cj7SQvcU.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
