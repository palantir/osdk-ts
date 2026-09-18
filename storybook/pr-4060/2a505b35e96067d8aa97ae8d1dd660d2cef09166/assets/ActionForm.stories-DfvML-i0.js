import{j as t,g as n}from"./iframe-DYP6I0EJ.js";import{A as r}from"./action-form-CNLmFwQD.js";import"./preload-helper-sS4hYFkK.js";import"./DropdownField-CjaSoiXx.js";import"./debounce-BaQbuarC.js";import"./useOsdkClient-Cplqkh8-.js";import"./index-DIhwEquj.js";import"./Input-CX9B7mOe.js";import"./useBaseUiId-BZiJrEE8.js";import"./useControlled-CBcSqYsQ.js";import"./index-kgSrvS5D.js";import"./index-C2R1rTgL.js";import"./PopoverPopup-BtgbBgDL.js";import"./InternalBackdrop-71TCmGDX.js";import"./composite-DQKMgq2L.js";import"./index-Bu9lWdWG.js";import"./getDisabledMountTransitionStyles-_04rz-EH.js";import"./ToolbarRootContext-6dERQM_o.js";import"./tick-Clj_LCer.js";import"./svgIconContainer-C4jga87M.js";import"./small-cross--hwGWXHG.js";import"./search-DC-q2Fvd.js";import"./cross-bDPWwylA.js";import"./useValueChanged-DYyvPFZ9.js";import"./getPseudoElementBounds-pXf6ipeD.js";import"./CompositeItem-BuWL3KPI.js";import"./makeExternalStore-DN0LusY8.js";import"./BaseForm-BfTmmodn.js";import"./ActionButton-BWEQ465S.js";import"./Button-BBpZA8JE.js";import"./SkeletonBar-BcB8RILE.js";import"./Tooltip-BRru9_rR.js";import"./info-sign-ClW4zQo-.js";import"./chevron-up-BU90ll14.js";import"./chevron-down-DgAcZbyD.js";import"./useEventCallback-viQBOCoU.js";import"./iconLoader-Bu9LqMIo.js";import"./Switch-CFx7n2tG.js";import"./CompositeRoot-ByWoXpEH.js";import"./TimePicker-D4iEIZSX.js";import"./CollapsiblePanel-gA7_qpOX.js";import"./error-BJ0QSSt_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-1ciRu-eY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
