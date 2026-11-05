import{j as t,g as n}from"./iframe-BA-BTX3-.js";import{A as r}from"./action-form-ugJh5UTy.js";import"./preload-helper-C5CDmGBs.js";import"./DropdownField-ClRlB2T0.js";import"./debounce-DGT6__t6.js";import"./useOsdkClient-DX1BaHYe.js";import"./index-CLtmtywH.js";import"./Input-BeTQsBeq.js";import"./useBaseUiId-BfS85IZC.js";import"./useControlled-UrjDpzSo.js";import"./index-CHEuFMH1.js";import"./index-PipwlUCm.js";import"./isObject-DKRs3Wgv.js";import"./InternalBackdrop-BRtp06hW.js";import"./composite-CTuwrQcp.js";import"./index-BwCVEmQa.js";import"./getDisabledMountTransitionStyles-Due7wGO5.js";import"./ToolbarRootContext-DhyEOAqU.js";import"./tick-_PKXPN2p.js";import"./svgIconContainer-Dgy3GTZl.js";import"./small-cross-CnxqgFjC.js";import"./search-DGIpilYo.js";import"./cross-D4r7ZnVQ.js";import"./useValueChanged-DkO6q2A4.js";import"./getPseudoElementBounds-COzzTRAU.js";import"./CompositeItem-domKBhoO.js";import"./makeExternalStore-BUw-VQ9F.js";import"./BaseForm-BQ3p0vc5.js";import"./ActionButton-D60qZq-8.js";import"./Button-CYmxxZwT.js";import"./SkeletonBar-BFsZEIKo.js";import"./Tooltip-DtxlDfYK.js";import"./info-sign-C4nOccfk.js";import"./chevron-up-BxOsADFS.js";import"./chevron-down-BhnESDG4.js";import"./useEventCallback-LqHpjxlt.js";import"./iconLoader-o-MsEXoH.js";import"./Switch-DClew81k.js";import"./CompositeRoot-vcMWJ3UX.js";import"./TimePicker-DsfTbO1r.js";import"./CollapsiblePanel-CpPszFea.js";import"./error-rq6qiBRx.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-bastq8vC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
