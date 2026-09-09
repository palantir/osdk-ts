import{j as t,g as n}from"./iframe-9-OswRKS.js";import{A as r}from"./action-form-K0QosLWV.js";import"./preload-helper-DYL5InEO.js";import"./DropdownField-BZtIeQpR.js";import"./debounce-Bb1Cpy72.js";import"./useOsdkClient-B_1Wh43n.js";import"./index-SvIFWBde.js";import"./Input-0npSrlPh.js";import"./useBaseUiId-CXx1U6Z5.js";import"./useControlled-CGEFCoiG.js";import"./index-HMIJrenA.js";import"./index-D2h7VYDA.js";import"./PopoverPopup-KmKJk9qz.js";import"./InternalBackdrop-B8-pARTC.js";import"./composite-BDc56zIL.js";import"./index-CgAEYrry.js";import"./getDisabledMountTransitionStyles-B9CzyLp8.js";import"./ToolbarRootContext-DtmptTL0.js";import"./tick-DBm-RnL7.js";import"./svgIconContainer-DVdpIesk.js";import"./small-cross-zc5ZGHVz.js";import"./search-DPzUsQds.js";import"./cross-C9OnvPLu.js";import"./useValueChanged-D0cvyeOe.js";import"./getPseudoElementBounds-CkUMfr4i.js";import"./CompositeItem-TZo4ZNUL.js";import"./makeExternalStore-D5luXUgx.js";import"./BaseForm-BeZkJJWH.js";import"./ActionButton-mnEAQH7e.js";import"./Button-gzjofzeF.js";import"./SkeletonBar-B0TH4rTw.js";import"./Tooltip-BCzkmJcH.js";import"./info-sign-By8wt1Hi.js";import"./chevron-up-DL9e-aG3.js";import"./chevron-down-B8yYoTwv.js";import"./useEventCallback-Jrhf3FEf.js";import"./iconLoader-IuaTb_qg.js";import"./CompositeRoot-BEz_RrX4.js";import"./Switch-DOfHBq8o.js";import"./TimePicker-DHKh81H7.js";import"./CollapsiblePanel-DZN0B05J.js";import"./error-BLLqk3sD.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DVJybCh6.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
