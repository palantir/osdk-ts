import{j as t,g as n}from"./iframe-jYOV-b_F.js";import{A as r}from"./action-form-BFrz2A_9.js";import"./preload-helper-DU4dp1aN.js";import"./DropdownField-Zx-CWRyR.js";import"./debounce-Cc847J6k.js";import"./useOsdkClient-vN6DzTqs.js";import"./index-Dy8g3oXx.js";import"./Input-BMUKzcaw.js";import"./useBaseUiId-D96OAV6j.js";import"./useControlled-BTG7h9NE.js";import"./index-BeEj2nqC.js";import"./index-ClDKgmxW.js";import"./PopoverPopup-BPI3lODj.js";import"./InternalBackdrop-DVW8uuqD.js";import"./composite-BzmrUUlD.js";import"./index-CukOFad8.js";import"./getDisabledMountTransitionStyles-cOn0IGzp.js";import"./ToolbarRootContext-Cv9is8EX.js";import"./tick-DkNi67AQ.js";import"./svgIconContainer-CA_JwY2G.js";import"./small-cross-D0bLxDZ1.js";import"./search-D-KgauV4.js";import"./cross-CihzmSlG.js";import"./useValueChanged-DnbYI7cR.js";import"./getPseudoElementBounds-aXTAgs7l.js";import"./CompositeItem-kjf0evVY.js";import"./makeExternalStore-DApOP_f0.js";import"./BaseForm-B88nlAqE.js";import"./ActionButton-Dpswcr4W.js";import"./Button-CWhgA2iR.js";import"./SkeletonBar-DqT3CGGg.js";import"./Tooltip-DJD3gADX.js";import"./info-sign-BhacsR7V.js";import"./chevron-up-xJHgAzdd.js";import"./chevron-down-CXyzKCEE.js";import"./useEventCallback-CNXNkFCl.js";import"./iconLoader-byHZxqo3.js";import"./CompositeRoot-CGLqELS-.js";import"./Switch-D2j6GyxB.js";import"./TimePicker-BigRX2wJ.js";import"./CollapsiblePanel-BdQ-xqqb.js";import"./error-DuFL7DmE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D5SCgg1V.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
