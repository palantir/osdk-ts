import{j as t,g as n}from"./iframe-CaPOT9dY.js";import{A as r}from"./action-form-CxkWW0Qt.js";import"./preload-helper-CSJav7MA.js";import"./DropdownField-BaMFvM0M.js";import"./debounce-CKJ32hy1.js";import"./useOsdkClient-DrLWF_Tb.js";import"./index-Ho8J3uum.js";import"./Input-BuXaNZ_G.js";import"./useBaseUiId-53CqlhMX.js";import"./useControlled-Desmn_f_.js";import"./index-DSxM7sDI.js";import"./index-93ZDer7j.js";import"./PopoverPopup-MxHlhfA4.js";import"./InternalBackdrop-BbFTOoCN.js";import"./composite-D8pTE5q2.js";import"./index-d9vg3R-3.js";import"./getDisabledMountTransitionStyles-CDxcKCec.js";import"./ToolbarRootContext-DKDtUl7Y.js";import"./tick-BpCC2p4B.js";import"./svgIconContainer-4uAuruPa.js";import"./small-cross-ZhzSbXj6.js";import"./search-BIzPRVvQ.js";import"./cross-Cgcm5Piu.js";import"./useValueChanged-oispFcSe.js";import"./getPseudoElementBounds-Dkvs0jvh.js";import"./CompositeItem-BhgS6pAU.js";import"./makeExternalStore-B6NoTbNG.js";import"./BaseForm-D0EOdfMA.js";import"./ActionButton-CRVG5z67.js";import"./Button-D6M8kmX2.js";import"./SkeletonBar-CBVZTqOR.js";import"./Tooltip-Bh3th1RS.js";import"./info-sign-BRld3JnC.js";import"./chevron-up-E1lyOaVz.js";import"./chevron-down-D1yx8BpO.js";import"./useEventCallback-CSKwn_Ie.js";import"./iconLoader-C2gfrcVY.js";import"./Switch-Dd2ZzfXs.js";import"./CompositeRoot-DqLGM9re.js";import"./TimePicker-CWNbmVlV.js";import"./CollapsiblePanel-tClOO0R1.js";import"./error-D6rGwYTa.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CqZfQr7E.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
