import{j as t,g as n}from"./iframe-BFVvXCDn.js";import{A as r}from"./action-form-C1a6jW7t.js";import"./preload-helper-50_WzFUV.js";import"./DropdownField-DspSlDyP.js";import"./debounce-DWkSOkQq.js";import"./useOsdkClient-Cl7GKeeY.js";import"./index-QM5k4kGb.js";import"./Input-Dtig63-B.js";import"./useBaseUiId-B694u7eA.js";import"./useControlled-DyhWa7C1.js";import"./index-iRevsRnR.js";import"./index-BOeHgaJB.js";import"./isObject-C2c9eo6X.js";import"./InternalBackdrop-DBCVqNCu.js";import"./composite-CzVxjBsa.js";import"./index-CqQv2dpe.js";import"./getDisabledMountTransitionStyles-BOSuCcSN.js";import"./ToolbarRootContext-CrlmdYIj.js";import"./tick-CoqVexrK.js";import"./svgIconContainer-BV-Z1JXi.js";import"./small-cross-BxlAPzIk.js";import"./search-CW9s8WSc.js";import"./cross-BFaVqKHr.js";import"./useValueChanged-BGrg1pf-.js";import"./getPseudoElementBounds-D-HLiNmi.js";import"./CompositeItem-f5g69QxK.js";import"./makeExternalStore-BWSWF8JC.js";import"./BaseForm-D2DsOPGt.js";import"./ActionButton-1gMKJ2dZ.js";import"./Button-Dcbnl--f.js";import"./SkeletonBar-Bmfk3osh.js";import"./Tooltip-CALPreUU.js";import"./info-sign-C2r7lQyY.js";import"./chevron-up-DwgYDTTc.js";import"./chevron-down-BOFD2Flq.js";import"./useEventCallback-mJtTvRIv.js";import"./iconLoader-Dbe4Is9u.js";import"./Switch-DnN9Ng3R.js";import"./CompositeRoot-BCN3NHPA.js";import"./TimePicker-BxPxZoD6.js";import"./CollapsiblePanel-5KoLIkeE.js";import"./error-DOU--p1t.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-NltFnboY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
