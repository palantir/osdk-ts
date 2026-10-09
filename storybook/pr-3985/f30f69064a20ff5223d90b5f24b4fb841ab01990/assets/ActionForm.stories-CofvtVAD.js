import{j as t,g as n}from"./iframe-DgBlFB-Q.js";import{A as r}from"./action-form-BkFkcJiH.js";import"./preload-helper-Ckmup5sP.js";import"./DropdownField-Dj93kePV.js";import"./debounce-BL9pRyBP.js";import"./useOsdkClient-Cxn_Aud3.js";import"./index-BMtmTjMy.js";import"./Input-MozziWfa.js";import"./useBaseUiId-64Qj4RH9.js";import"./useControlled-CHdQNKZn.js";import"./index-Cyc1Gn9L.js";import"./index-M-GOHxvS.js";import"./PopoverPopup-XB39lZ28.js";import"./InternalBackdrop-Bf-lpEqp.js";import"./composite-CMuAYTfG.js";import"./index-CRAJZKa6.js";import"./getDisabledMountTransitionStyles--7J5h99A.js";import"./ToolbarRootContext-qAA2IXiR.js";import"./tick-1y5udTAM.js";import"./svgIconContainer-D-J2n4Ka.js";import"./small-cross-PRTzBBfj.js";import"./search-CH52w7PT.js";import"./cross-BnOVBF-i.js";import"./useValueChanged-Du_p_uje.js";import"./getPseudoElementBounds-CNGbgi8W.js";import"./CompositeItem-i9lnYJRv.js";import"./makeExternalStore-BAWQH3mc.js";import"./BaseForm-1by1Dkbp.js";import"./ActionButton-QVdej9JF.js";import"./Button-Bq1DJjhz.js";import"./SkeletonBar-B-BCIDwW.js";import"./Tooltip-A0OoQpoo.js";import"./info-sign-1hyrRJ_q.js";import"./chevron-up-BXK6fdgq.js";import"./chevron-down-DTLIZ0ai.js";import"./useEventCallback-BCjZTutg.js";import"./iconLoader-CkamIUvb.js";import"./Switch-CJuwSWpV.js";import"./CompositeRoot-TcDwVcp-.js";import"./TimePicker-CdVKaZr4.js";import"./CollapsiblePanel-DjJ08X8d.js";import"./error-BOa7JtYq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CNTDHmXR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
