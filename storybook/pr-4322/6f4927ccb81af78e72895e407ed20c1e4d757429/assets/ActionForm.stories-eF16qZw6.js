import{j as t,g as n}from"./iframe-BvgKvBTT.js";import{A as r}from"./action-form-BnTlLFDx.js";import"./preload-helper-dVfNiIKn.js";import"./DropdownField-DGHHzxif.js";import"./debounce-Kd32bTE8.js";import"./useOsdkClient-B-GUKLiD.js";import"./index-C6P12W9x.js";import"./Input-B8f6lg4l.js";import"./useRenderElement-BFIknrE2.js";import"./useControlled-B2MP0s-G.js";import"./useBaseUiId-DWfZ2Kad.js";import"./index-yqy4XRqT.js";import"./index-BzjqKOq7.js";import"./PopoverPopup-P8XecnKG.js";import"./InternalBackdrop-m0dkTmEO.js";import"./composite-DfJtFIGD.js";import"./index-CbHQFypX.js";import"./getDisabledMountTransitionStyles-DXQCvg3E.js";import"./ToolbarRootContext-C5CAj_EH.js";import"./tick-UIVz0HQr.js";import"./svgIconContainer-BZvKBCv0.js";import"./small-cross-Clug_Kd9.js";import"./search-B95gAtiZ.js";import"./cross-Dgfh0hI8.js";import"./useValueChanged-BPblXw96.js";import"./getPseudoElementBounds-Cjaf3AfS.js";import"./CompositeItem-xDL0fAk1.js";import"./makeExternalStore-DebjiHh_.js";import"./BaseForm-P47mJtNL.js";import"./ActionButton-Db7nx97v.js";import"./Button-CZUmTkhK.js";import"./SkeletonBar-CFhg6IWc.js";import"./Tooltip-CjqFaYRm.js";import"./info-sign-mpQfWf7U.js";import"./chevron-up-aUqVWteC.js";import"./chevron-down-Df3bql-T.js";import"./useEventCallback-DNmABAT6.js";import"./iconLoader-TlQ568Yy.js";import"./Switch-BfnczgHr.js";import"./CompositeRoot-BLHVQZq-.js";import"./TimePicker-DP67JXD9.js";import"./CollapsiblePanel-DMDnXz2U.js";import"./error-B-n6_xad.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D0FOqMKK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const ee={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const te=["Default"];export{e as Default,te as __namedExportsOrder,ee as default};
