import{j as t,g as n}from"./iframe-DcZIbII1.js";import{A as r}from"./action-form-BLmntUKl.js";import"./preload-helper-CtJBcs4m.js";import"./DropdownField-9Vn4V-zp.js";import"./debounce-BPpQpvYV.js";import"./useOsdkClient-BlHc1QH0.js";import"./index-CknXFCuG.js";import"./Input-DgnbxA8W.js";import"./useBaseUiId-Bwnxqilm.js";import"./useControlled-CtuIn0tc.js";import"./index-Dkeo5kI9.js";import"./index-B9y2Cfx6.js";import"./PopoverPopup-CwL3PPak.js";import"./InternalBackdrop-vtxyY5fQ.js";import"./composite-im6S2sQa.js";import"./index-DPboZthR.js";import"./getDisabledMountTransitionStyles-BRHOOZl_.js";import"./ToolbarRootContext-DW70chtw.js";import"./tick-CLXIS-et.js";import"./svgIconContainer-CCPtMkY_.js";import"./small-cross-BNLYCYQq.js";import"./search-ByPzgBRT.js";import"./cross-B7rc_3vM.js";import"./useValueChanged-BCgCGkWP.js";import"./getPseudoElementBounds-CCVDhmIO.js";import"./CompositeItem-0HlJZQq8.js";import"./makeExternalStore-Dx5t4IsM.js";import"./BaseForm-GlGDnABR.js";import"./ActionButton-Bt_c9QVn.js";import"./Button-fbYfSW4g.js";import"./SkeletonBar-CGLWA7k6.js";import"./Tooltip-Cs9p6XT8.js";import"./info-sign-04bfbCeq.js";import"./chevron-up-DJd1hGhJ.js";import"./chevron-down-CgbkcCiQ.js";import"./useEventCallback-DUdSVzSq.js";import"./iconLoader-DovPRMXN.js";import"./Switch-1Rbj1ftr.js";import"./CompositeRoot-DHtGtgFZ.js";import"./TimePicker-1mgdx7Ms.js";import"./CollapsiblePanel-CJKXn1Jt.js";import"./error-CfhtcL_7.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D2PqzxOJ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
