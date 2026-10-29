import{j as t,g as n}from"./iframe-B5Ajdn-Z.js";import{A as r}from"./action-form-DGwGISj2.js";import"./preload-helper-B5yP3JPh.js";import"./DropdownField-DrMdgMG0.js";import"./debounce-DMWFSr1X.js";import"./useOsdkClient-B5semh5Y.js";import"./index-DILEzbbv.js";import"./Input-BBXfcLrJ.js";import"./useBaseUiId-C1Uihcd0.js";import"./useControlled-UxmqIdoS.js";import"./index-DVmTRqee.js";import"./index-0i5GjvBZ.js";import"./PopoverPopup-BCkS-3aI.js";import"./InternalBackdrop-Cqris0fZ.js";import"./composite-CnqlIWYg.js";import"./index-Cpe77fYH.js";import"./getDisabledMountTransitionStyles-D8H2JrcK.js";import"./ToolbarRootContext-BWtD2D4r.js";import"./tick-B-THAU8k.js";import"./svgIconContainer-DoY_K777.js";import"./small-cross-DPps9k0B.js";import"./search-BuV2lV03.js";import"./cross-BBK4wgqQ.js";import"./useValueChanged-CifUOmFK.js";import"./getPseudoElementBounds-Bk-nLSGa.js";import"./CompositeItem-CVzNQNnm.js";import"./makeExternalStore-2_jyxYjq.js";import"./BaseForm-DrHOWJnC.js";import"./ActionButton-BTL1_xvj.js";import"./Button-CF8mdfVJ.js";import"./SkeletonBar-Kw7gcQkG.js";import"./Tooltip-Bhg5Xees.js";import"./info-sign-C2Bl1qdU.js";import"./chevron-up-Bo63fypX.js";import"./chevron-down-BAJRL46i.js";import"./useEventCallback-B2QaC4UY.js";import"./iconLoader-ahAPV0jt.js";import"./Switch-C97oT2Zh.js";import"./CompositeRoot-CHqdcnrC.js";import"./TimePicker-Cey1Kv-u.js";import"./CollapsiblePanel-Dt-j0qol.js";import"./error-DVp4qBBx.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bk1GhbZz.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
