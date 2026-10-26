import{j as t,g as n}from"./iframe-BX9a9lIA.js";import{A as r}from"./action-form-0rmLR1k7.js";import"./preload-helper-BlXb_Vg9.js";import"./DropdownField-aWbBYl77.js";import"./debounce-BV21oJOA.js";import"./useOsdkClient-Bh-oR6BU.js";import"./index-DU3Z-NO3.js";import"./Input-R8AltOJ3.js";import"./useBaseUiId-rZTTYrCD.js";import"./useControlled-D1C6STzO.js";import"./index-Xkcqocgf.js";import"./index-Cmn1GPS_.js";import"./PopoverPopup-B82LsnQc.js";import"./InternalBackdrop-D0pdeOz1.js";import"./composite-BZsQ_ZE_.js";import"./index-BGOtK9pW.js";import"./getDisabledMountTransitionStyles-GzpTE14B.js";import"./ToolbarRootContext-CfpoMHoy.js";import"./tick-BulTBCV9.js";import"./svgIconContainer-UHOj5M6P.js";import"./small-cross-CEZM1_xp.js";import"./search-D5VPbQqk.js";import"./cross-DuBsq8tA.js";import"./useValueChanged-jvisKX1J.js";import"./getPseudoElementBounds-DTY5_p4Y.js";import"./CompositeItem-h-F_V8Zb.js";import"./makeExternalStore-BYhN6o4S.js";import"./BaseForm-CHBMdUCC.js";import"./ActionButton-FmCiWWCn.js";import"./Button-nhugV28E.js";import"./SkeletonBar-CvROekkE.js";import"./Tooltip-DIBDL7CT.js";import"./info-sign-V6NIviEU.js";import"./chevron-up-DfEuNmrF.js";import"./chevron-down-Baa_eZBL.js";import"./useEventCallback-BewJa_r1.js";import"./iconLoader-411qIW4q.js";import"./Switch-srIO-8DP.js";import"./CompositeRoot-DQdBi0T7.js";import"./TimePicker-D3-r2Y7Q.js";import"./CollapsiblePanel-CKvjIGAx.js";import"./error-BEhn7utC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C7fLYswC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
