import{j as t,g as n}from"./iframe-YrpSpTvs.js";import{A as r}from"./action-form-CipaqDss.js";import"./preload-helper-DxNq55wa.js";import"./DropdownField-BFTWMxkB.js";import"./debounce-BaFZDc5z.js";import"./useOsdkClient-hs785eW6.js";import"./index-BrVf8lWl.js";import"./Input-32CO0l-U.js";import"./useBaseUiId-nYNd-3tJ.js";import"./useControlled-2o6j3dfP.js";import"./index-Di4tHAvA.js";import"./index-BIHLBcFj.js";import"./PopoverPopup-Bz5N51mo.js";import"./InternalBackdrop-B7DfYIYc.js";import"./composite-5Mv9D3-A.js";import"./index-CsSm3NU5.js";import"./getDisabledMountTransitionStyles-BnFsI7c-.js";import"./ToolbarRootContext-8z2gQ1ff.js";import"./tick-B5LbKbnR.js";import"./svgIconContainer-BtBzrjkO.js";import"./small-cross-BGabRNmn.js";import"./search-B0P1cBIF.js";import"./cross-B0Aawxg9.js";import"./useValueChanged-BqrtuFIH.js";import"./getPseudoElementBounds-Dw8pXuDb.js";import"./CompositeItem-B56fR4fH.js";import"./makeExternalStore-C6NSSiHx.js";import"./BaseForm-DaePeFqc.js";import"./ActionButton-CHDejxq_.js";import"./Button-CYGEL5Qg.js";import"./SkeletonBar-CaULgTN_.js";import"./Tooltip-DoIwzql8.js";import"./info-sign-DaJUhxeT.js";import"./chevron-up-G8psbIi6.js";import"./chevron-down-BfPcmD3R.js";import"./useEventCallback-BgeJ4XJ6.js";import"./iconLoader-CIEm2a32.js";import"./Switch-Uaqbe-98.js";import"./CompositeRoot-CtHmiIPr.js";import"./TimePicker-CGW06XSL.js";import"./CollapsiblePanel-sGxNkfQy.js";import"./error-DewscpxX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-GBGU8c2D.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
