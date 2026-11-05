import{j as t,g as n}from"./iframe-NfexZY9x.js";import{A as r}from"./action-form-coWmyJED.js";import"./preload-helper-CLTJrXfR.js";import"./DropdownField-CcTDIp1R.js";import"./debounce-ChoeoRSR.js";import"./useOsdkClient-Bp3-RDM4.js";import"./index-DHazzmu_.js";import"./Input-CPs1rDr1.js";import"./useBaseUiId-C16bF6M9.js";import"./useControlled-qgEamnCT.js";import"./index-DaRojdGd.js";import"./index-Dp-u7LeB.js";import"./isObject-CQ_LajrM.js";import"./InternalBackdrop-8mGv6jNv.js";import"./composite-BGUozWMo.js";import"./index-BnBOcHOT.js";import"./getDisabledMountTransitionStyles-C9b0y1iT.js";import"./ToolbarRootContext-BdUx3mSp.js";import"./tick-BpZziSjB.js";import"./svgIconContainer-p6aEe31f.js";import"./small-cross-BjgiVUVX.js";import"./search-CmlPMAF4.js";import"./cross-BPxlVDyK.js";import"./useValueChanged-CYgXq6N-.js";import"./getPseudoElementBounds-LhciNlN1.js";import"./CompositeItem-CHYMHjt2.js";import"./makeExternalStore-C62gR5VT.js";import"./BaseForm-D9pDsth8.js";import"./ActionButton-BT8WXcBI.js";import"./Button-DY6lym1F.js";import"./SkeletonBar-_pY-LFxw.js";import"./Tooltip-BQGbUuSo.js";import"./info-sign-iHAVWDBG.js";import"./chevron-up-Dz_N7Qax.js";import"./chevron-down-ZCZOaNcj.js";import"./useEventCallback-DTK6M9zp.js";import"./iconLoader-EAMsFILq.js";import"./Switch-Bhh8rKlJ.js";import"./CompositeRoot-Hy35wcS-.js";import"./TimePicker-C5eYntCe.js";import"./CollapsiblePanel-izSDW4TN.js";import"./error-CIC9WqgE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DSmb0LrF.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
