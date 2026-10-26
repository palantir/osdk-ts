import{j as t,g as n}from"./iframe-Bgb2wSaw.js";import{A as r}from"./action-form-C7cVSHfZ.js";import"./preload-helper-CAyUgZKm.js";import"./DropdownField-CkS9IXqj.js";import"./debounce-BEqEgf8r.js";import"./useOsdkClient-jOrP_Hjl.js";import"./index-Lnta--SZ.js";import"./Input-CqMZoAkj.js";import"./useBaseUiId-Cl3siqr8.js";import"./useControlled-C5Efmt4q.js";import"./index-DE8mIe1g.js";import"./index-CYHybnYf.js";import"./PopoverPopup-CB4Z_i75.js";import"./InternalBackdrop-PRRj70IN.js";import"./composite-BJNESzre.js";import"./index-dezdEXRW.js";import"./getDisabledMountTransitionStyles-DQt5A1ew.js";import"./ToolbarRootContext-CPL7CHly.js";import"./tick-BdYlxEi1.js";import"./svgIconContainer-DLn89RUi.js";import"./small-cross-C_y-cV78.js";import"./search-B8Q2SaYZ.js";import"./cross-BBwyRiM8.js";import"./useValueChanged-DciPxUCb.js";import"./getPseudoElementBounds-BIQliNTO.js";import"./CompositeItem-D-n20gZA.js";import"./makeExternalStore-C86iDpxn.js";import"./BaseForm-0Dm_16-5.js";import"./ActionButton-BW0pCsIy.js";import"./Button-ckHDf9dN.js";import"./SkeletonBar-CV5mZHb2.js";import"./Tooltip-LmdpxSyk.js";import"./info-sign-ILeTz-BD.js";import"./chevron-up-D1mB9LMY.js";import"./chevron-down-Lx8JbYiI.js";import"./useEventCallback-BpovZ0Ho.js";import"./iconLoader-B0PEnPzh.js";import"./Switch-R_wLK2U0.js";import"./CompositeRoot-Fi8j_VfN.js";import"./TimePicker-fdAg5JBn.js";import"./CollapsiblePanel-DMdGItnd.js";import"./error-4j4VkswI.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D_vYT_n9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
