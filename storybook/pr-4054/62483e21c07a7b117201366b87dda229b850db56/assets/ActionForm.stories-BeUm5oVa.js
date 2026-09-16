import{j as t,g as n}from"./iframe-CVz_WeOC.js";import{A as r}from"./action-form-X9O0YLJ-.js";import"./preload-helper-D0q6PXbw.js";import"./DropdownField-BcK9lDxz.js";import"./debounce-l5vaE6ps.js";import"./useOsdkClient-DylnfcpV.js";import"./index-BDflHgEd.js";import"./Input-BT5FMPCr.js";import"./useBaseUiId-tRRlvhxI.js";import"./useControlled-D3k60qqO.js";import"./index-DIHi61Zo.js";import"./index-Cd-fS6dr.js";import"./PopoverPopup-CMdx60IF.js";import"./InternalBackdrop-hiDKfjs3.js";import"./composite-Dj-vL0W9.js";import"./index-BW7Ibqv5.js";import"./getDisabledMountTransitionStyles-CM3FK5cI.js";import"./ToolbarRootContext-BUfksNXb.js";import"./tick-DKNFoxMi.js";import"./svgIconContainer-D2LVORHL.js";import"./small-cross-Bl3UDKAT.js";import"./search-DCAwdpsl.js";import"./cross-C8noeNqn.js";import"./useValueChanged-CH5NOABR.js";import"./getPseudoElementBounds-BQgoGGXw.js";import"./CompositeItem-D5028N7a.js";import"./makeExternalStore-CChDsTbl.js";import"./BaseForm-BrFyrbww.js";import"./ActionButton-By1jCsLC.js";import"./Button-DhCGu5I6.js";import"./SkeletonBar-D4YfVhlj.js";import"./Tooltip-Bvg92253.js";import"./info-sign-CxV7urCo.js";import"./chevron-up-DuoexgqE.js";import"./chevron-down-D7PojQw9.js";import"./useEventCallback-BowLlq6N.js";import"./iconLoader-Fmqf-7NT.js";import"./Switch-CEFsg_Cq.js";import"./CompositeRoot-yESHWrl7.js";import"./TimePicker-BK-z0f1l.js";import"./CollapsiblePanel-wiPKjvqv.js";import"./error-DIsBLczr.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-h90fRcpC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
