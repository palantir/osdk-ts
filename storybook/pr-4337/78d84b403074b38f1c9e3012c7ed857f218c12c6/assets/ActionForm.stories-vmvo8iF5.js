import{j as t,g as n}from"./iframe-kWD-jdIM.js";import{A as r}from"./action-form-DuBiG3Az.js";import"./preload-helper-BYIpTBn0.js";import"./DropdownField-B2rD9Nef.js";import"./debounce-BUu0DgJ5.js";import"./useOsdkClient-DgtXvuGE.js";import"./index-DHpWRKQv.js";import"./Input-DOuHVujQ.js";import"./useBaseUiId-C60jF_o-.js";import"./useControlled-u0KjilF0.js";import"./index-DMVcTELQ.js";import"./index-D6dW0J7N.js";import"./PopoverPopup-BL8XjTGc.js";import"./InternalBackdrop-DyR0_bnS.js";import"./composite-BmOV-aCZ.js";import"./index-GH3PvjFS.js";import"./getDisabledMountTransitionStyles-Cfp--kIY.js";import"./ToolbarRootContext-QHke1z2n.js";import"./tick-Bkqq1dN2.js";import"./svgIconContainer-B8XSgAJk.js";import"./small-cross-B64fsBIe.js";import"./search-Xv8sEjS-.js";import"./cross-BSGzHacU.js";import"./useValueChanged-BFrDnBzs.js";import"./getPseudoElementBounds-ARNy8nkD.js";import"./CompositeItem-BYdOgjmY.js";import"./makeExternalStore-V_raLWeu.js";import"./BaseForm-Cb1c13bu.js";import"./ActionButton-Ci0HXhBZ.js";import"./Button-B37N9Ve_.js";import"./SkeletonBar-COIOzOry.js";import"./Tooltip-JdfuuPqa.js";import"./info-sign-Q7DJa7s5.js";import"./chevron-up-9p6rbyB0.js";import"./chevron-down-B5rYpa0g.js";import"./useEventCallback-DlpvfO9F.js";import"./iconLoader-gI7KbZaJ.js";import"./Switch-BUzcX59w.js";import"./CompositeRoot-BitI4MVN.js";import"./TimePicker-CDYrKmoh.js";import"./CollapsiblePanel-evQDlZSo.js";import"./error-DarRpeI1.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CKT8uRvg.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
