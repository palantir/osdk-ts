import{j as t,g as n}from"./iframe-DcYOqu2U.js";import{A as r}from"./action-form-D0o7u_q3.js";import"./preload-helper-S82--H9u.js";import"./DropdownField-DfYmYHBy.js";import"./debounce-B7Bz9Zmz.js";import"./useOsdkClient-DO7IEPKY.js";import"./index-DiVuESi1.js";import"./Input-BDRGIKaZ.js";import"./useBaseUiId-BCzIH_us.js";import"./useControlled-BUaPb3-r.js";import"./index-EYomkAWT.js";import"./index-0CesUQZv.js";import"./PopoverPopup-VAITxfkO.js";import"./InternalBackdrop-CeJDAv-U.js";import"./composite-z-1xLKDd.js";import"./index-CknGzI9c.js";import"./getDisabledMountTransitionStyles-csMlkapf.js";import"./ToolbarRootContext-_iXFA-YU.js";import"./tick-9LlYbapO.js";import"./svgIconContainer-yWnKapjH.js";import"./small-cross-BTclTiS1.js";import"./search-DkFuHynJ.js";import"./cross-CDM50iQ0.js";import"./useValueChanged-CZEDJKXE.js";import"./getPseudoElementBounds-B3R2Xnt1.js";import"./CompositeItem-DDIaKXMB.js";import"./makeExternalStore-DkFMYs8N.js";import"./BaseForm-o8wsVh6H.js";import"./ActionButton-CVvGpKcN.js";import"./Button-_cT9fEiv.js";import"./SkeletonBar-FDu5_K5F.js";import"./Tooltip-CZmshqBI.js";import"./info-sign-Bo57Tiy2.js";import"./chevron-up-B_Nni4TF.js";import"./chevron-down-CJhuOc7o.js";import"./useEventCallback-CcAOlUNX.js";import"./iconLoader-D1IkpUxo.js";import"./Switch-CPUsaHps.js";import"./CompositeRoot-fDb1G_2Z.js";import"./TimePicker-Da6uo5PO.js";import"./CollapsiblePanel-DdleFq3w.js";import"./error-CugXhAIj.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D3ra-NNv.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
