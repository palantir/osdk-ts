import{j as t,g as n}from"./iframe-DGk-Gwvb.js";import{A as r}from"./action-form-BZRAjDI9.js";import"./preload-helper-DZHE4yfF.js";import"./DropdownField-BarJItLo.js";import"./debounce-DdquZemZ.js";import"./useOsdkClient-nqMxZ_CW.js";import"./index-CHt6784l.js";import"./Input-lpBjDH3J.js";import"./useBaseUiId-CYF4ttQ0.js";import"./useControlled-BLk_1CnQ.js";import"./index--TUwCCTO.js";import"./index-Y3fUVY7j.js";import"./PopoverPopup-8NMKP2yH.js";import"./InternalBackdrop-2qC76XrM.js";import"./composite-UKbswMLH.js";import"./index-Dmy594Bz.js";import"./getDisabledMountTransitionStyles-DzmBA_gO.js";import"./ToolbarRootContext-DYa8q61O.js";import"./tick-Co26rO3c.js";import"./svgIconContainer-DWhpBW2K.js";import"./small-cross-CqqiVSV9.js";import"./search-DuL1IKxe.js";import"./cross-Bv56pu7B.js";import"./useValueChanged-DAOfQ09L.js";import"./getPseudoElementBounds-Caw7OuxZ.js";import"./CompositeItem-CaGEr3lp.js";import"./makeExternalStore-DekmBIJm.js";import"./BaseForm-CSyMwfvI.js";import"./ActionButton-DrJeruLF.js";import"./Button-D8mEnRQz.js";import"./SkeletonBar-C2y2uMzP.js";import"./Tooltip-B8a6AeiL.js";import"./info-sign-CNzTCofE.js";import"./chevron-up-DOU89T7t.js";import"./chevron-down-F0KSYD0T.js";import"./useEventCallback-2nXbXvpA.js";import"./iconLoader-2m_rjlFO.js";import"./CompositeRoot-DDgk6TJM.js";import"./Switch-DgXnA4Y9.js";import"./TimePicker-DAUxj0bB.js";import"./CollapsiblePanel-TiLElam_.js";import"./error-CNFmOPSg.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B38cTpqn.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
