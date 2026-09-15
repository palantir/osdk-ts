import{j as t,g as n}from"./iframe-DljkNNxK.js";import{A as r}from"./action-form-Dt0qPdpT.js";import"./preload-helper-Cpo1q_i6.js";import"./DropdownField-BJcI8ciq.js";import"./debounce-v1jWqcH4.js";import"./useOsdkClient-BkCV2xv_.js";import"./index-D64RJmhP.js";import"./Input-C1T-Uord.js";import"./useBaseUiId-BDewQ6nf.js";import"./useControlled-Chg_haxJ.js";import"./index-BwvPIv6E.js";import"./index-DVoFeU9w.js";import"./PopoverPopup-ABlhCtw7.js";import"./InternalBackdrop-Bvu56fjL.js";import"./composite-GUx361Ly.js";import"./index-Bwjaz__m.js";import"./getDisabledMountTransitionStyles-ClRtvzpg.js";import"./ToolbarRootContext-DT3K0tIr.js";import"./tick-BHidfImn.js";import"./svgIconContainer-CnhwGfa6.js";import"./small-cross-uYb4a6-f.js";import"./search-CviN7Quw.js";import"./cross-BC6Bgo8V.js";import"./useValueChanged-DZsMbhXQ.js";import"./getPseudoElementBounds-0bgPiDkB.js";import"./CompositeItem-asw0sP3K.js";import"./makeExternalStore-CQCn-_eJ.js";import"./BaseForm-DCPLSPZa.js";import"./ActionButton-WkEm3I4L.js";import"./Button-sFRd8YxN.js";import"./SkeletonBar-C5t-2Ut2.js";import"./Tooltip-DDI1N6qC.js";import"./info-sign-DHqcBiUy.js";import"./chevron-up-CO0SZdwt.js";import"./chevron-down-TeUlP9Ri.js";import"./useEventCallback-kYW6J0ZS.js";import"./iconLoader-BYqdfEtY.js";import"./CompositeRoot-9hHHwD3S.js";import"./Switch-3UuKDJ79.js";import"./TimePicker-MnNrq5gK.js";import"./CollapsiblePanel-DYjSn6NE.js";import"./error-M6Q45Sy0.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DgcAshrM.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
