import{j as t,g as n}from"./iframe-DlEUhHi7.js";import{A as r}from"./action-form-D4YXwkvV.js";import"./preload-helper-Dp1pzeXC.js";import"./useDebouncedCallback-1RUstQeW.js";import"./useEventCallback-qQtofjUs.js";import"./isEqual-CK8CnT9X.js";import"./_baseIsEqual-B3kSfXIp.js";import"./PopoverPopup-CmFEZPXr.js";import"./InternalBackdrop-Dj4rbrk1.js";import"./useBaseUiId-tb0rTi4h.js";import"./composite-C8IR1RxG.js";import"./index-BZc9O5Mh.js";import"./index-BetcjBuf.js";import"./index-LGLGISh5.js";import"./getDisabledMountTransitionStyles-COXtAQgb.js";import"./ToolbarRootContext-B2EyZNnQ.js";import"./Select-CRKcgbl8.js";import"./useOsdkClient-RXiRMbJA.js";import"./index-BdObmdSk.js";import"./Input-LD__uDdD.js";import"./useControlled-DUY1KYlM.js";import"./tick-554cqJa-.js";import"./svgIconContainer-Bju_1rFh.js";import"./small-cross-CReZphMa.js";import"./search-DpAuH-Nq.js";import"./cross-qXDV-79n.js";import"./useValueChanged-D-FJ2lNx.js";import"./getPseudoElementBounds-Ca9OCr_g.js";import"./CompositeItem-Ds-80rJN.js";import"./DropdownField-Et1bzqkY.js";import"./makeExternalStore-CQqAo0Kp.js";import"./BaseForm-C_N5G3Xq.js";import"./ActionButton-DcjyntQn.js";import"./Button-B-c1jfrq.js";import"./SkeletonBar-DVU3TCkY.js";import"./Tooltip-B7ze2o3f.js";import"./info-sign-Bt-fhMMV.js";import"./chevron-up-b0hlIUdw.js";import"./chevron-down-DMneEgPP.js";import"./iconLoader-BC6zj7bL.js";import"./Switch-CTaLY5pu.js";import"./CompositeRoot-D7T1GYKa.js";import"./TimePicker-BeI3UdGa.js";import"./CollapsiblePanel-BGvjwfhf.js";import"./error-CpjEBkuC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CgnK2w0k.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const oe={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ae=["Default"];export{e as Default,ae as __namedExportsOrder,oe as default};
