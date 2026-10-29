import{j as t,g as n}from"./iframe-4r61WmRz.js";import{A as r}from"./action-form-Cg8bX7p5.js";import"./preload-helper-DDuQcRVJ.js";import"./DropdownField-TF8tLIy4.js";import"./debounce-CXjzscB7.js";import"./useOsdkClient-D-iMASPG.js";import"./index-kkt68f5x.js";import"./Input-gOgOsLX3.js";import"./useBaseUiId-B6Vv4jgV.js";import"./useControlled-586q8Cy3.js";import"./index-3UzI-GML.js";import"./index-Nju1pOqo.js";import"./PopoverPopup-DIv3maom.js";import"./InternalBackdrop-Bzos0xM-.js";import"./composite-DlrParFv.js";import"./index-YOStIHYQ.js";import"./getDisabledMountTransitionStyles-1j4GIo6j.js";import"./ToolbarRootContext-B5z6j76t.js";import"./tick-DLIe0J3Q.js";import"./svgIconContainer-EEsRKnTp.js";import"./small-cross-DRIvZps7.js";import"./search-D6jPfv1v.js";import"./cross-CNjOzwil.js";import"./useValueChanged-Bi7kMqvE.js";import"./getPseudoElementBounds-DvDk6n8U.js";import"./CompositeItem-D0ha4eYX.js";import"./makeExternalStore-DOF5HV2v.js";import"./BaseForm-DkQYG6uB.js";import"./ActionButton-CjM_8QQ8.js";import"./Button-gqFcTzpQ.js";import"./SkeletonBar-qrhSNk5E.js";import"./Tooltip-DaNbGCQf.js";import"./info-sign-quCNmgqz.js";import"./chevron-up-e1gp8suS.js";import"./chevron-down-fJwSRjPJ.js";import"./useEventCallback-Mutezj7j.js";import"./iconLoader-DPi1cJpV.js";import"./Switch-CyJ0UGY7.js";import"./CompositeRoot-B7XVPv1E.js";import"./TimePicker-BWOQ-NK2.js";import"./CollapsiblePanel-C45NHvuI.js";import"./error-DeL9Ip3k.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B9hUZ7DO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
