import{j as t,g as n}from"./iframe-Dhbpz2gi.js";import{A as r}from"./action-form-BhaBFEcL.js";import"./preload-helper-pmClhyIA.js";import"./DropdownField-Bykj9lDw.js";import"./debounce-zud5xvpI.js";import"./useOsdkClient-SDPeNtQ5.js";import"./index-DSV0RL80.js";import"./Input-BnzP7kbL.js";import"./useBaseUiId-CACE2Sja.js";import"./useControlled-VMxlV8-z.js";import"./index-Ca39Bid0.js";import"./index-CnSMSR0R.js";import"./PopoverPopup-Dd7ELU_i.js";import"./InternalBackdrop-CU5AdZzY.js";import"./composite-DOBXXfvc.js";import"./index-Dew5d4z1.js";import"./getDisabledMountTransitionStyles-Bh-dMn6q.js";import"./ToolbarRootContext-Bg810oqs.js";import"./tick-CIrlrYqM.js";import"./svgIconContainer-D2dXNiPy.js";import"./small-cross-B_L6MZIl.js";import"./search-u8YFrvlf.js";import"./cross-CFyO1iLs.js";import"./useValueChanged-BOsd1GIT.js";import"./getPseudoElementBounds-DAcEjJ_C.js";import"./CompositeItem-lexcaFgm.js";import"./makeExternalStore-BBmrBF7y.js";import"./BaseForm-DtsnHtJI.js";import"./ActionButton-ChCcvaQX.js";import"./Button-BBeJRgfu.js";import"./SkeletonBar-ChcHrYnF.js";import"./Tooltip-BEukUHQs.js";import"./info-sign-DJM7boqC.js";import"./chevron-up-x9brra2q.js";import"./chevron-down-CiaZa2yM.js";import"./useEventCallback-CJaRWzg5.js";import"./iconLoader-CaVgYBAz.js";import"./Switch-DOfmu6aE.js";import"./CompositeRoot-B8-0DYhw.js";import"./TimePicker-DhmIWM5L.js";import"./CollapsiblePanel-nyUJPFc3.js";import"./error-BXnEUtGZ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D8w7KGDl.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
