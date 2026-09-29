import{j as t,g as n}from"./iframe-DKYmESdc.js";import{A as r}from"./action-form-Cn-PdjMq.js";import"./preload-helper-D5LE5Idy.js";import"./DropdownField-DdjBmbfl.js";import"./debounce-DJdertEZ.js";import"./useOsdkClient-D7r4vk7f.js";import"./index-DiIAgi_U.js";import"./Input-BxCkIabd.js";import"./useBaseUiId-CdKuMMMb.js";import"./useControlled-B4q39qZO.js";import"./index-Dh-P4ImN.js";import"./index-BEPjmphW.js";import"./PopoverPopup-18xMmYUE.js";import"./InternalBackdrop-D2B5n5hm.js";import"./composite-DHljAWKo.js";import"./index-C6gaZbLL.js";import"./getDisabledMountTransitionStyles-C2zNLNsa.js";import"./ToolbarRootContext-CrwTeoix.js";import"./tick-CfTVfx8m.js";import"./svgIconContainer-D8ijfEF1.js";import"./small-cross-CgLsC0gq.js";import"./search-B7mMrQlf.js";import"./cross-yKYTlWK6.js";import"./useValueChanged-UpP8-F1K.js";import"./getPseudoElementBounds-CQqlgHcK.js";import"./CompositeItem-DhBadV4y.js";import"./makeExternalStore-DpXPZl7r.js";import"./BaseForm-BTxLkI0d.js";import"./ActionButton-BU5G-FGV.js";import"./Button-DgkmSaF3.js";import"./SkeletonBar-B4aoYFGC.js";import"./Tooltip-CyVgxnxr.js";import"./info-sign-D1PKRbPK.js";import"./chevron-up-BmWTrK3U.js";import"./chevron-down-D1R0n3KO.js";import"./useEventCallback-ClNFTONN.js";import"./iconLoader-Ddn4oYrl.js";import"./Switch-DXnBPMeI.js";import"./CompositeRoot-DH-62Ccm.js";import"./TimePicker-Dbbg-7NX.js";import"./CollapsiblePanel-rz3tKFdi.js";import"./error-DPhIreuO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-WG4CGMhx.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
