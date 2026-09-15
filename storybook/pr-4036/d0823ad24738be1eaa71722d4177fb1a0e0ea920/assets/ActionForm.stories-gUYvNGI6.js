import{j as t,g as n}from"./iframe-yBf-ojhu.js";import{A as r}from"./action-form-DwFhv1kM.js";import"./preload-helper-CGYiisRB.js";import"./DropdownField-CBnk-NYj.js";import"./debounce-B2jafETK.js";import"./useOsdkClient-Bw9VJD_N.js";import"./index-CdRKjNXW.js";import"./Input-IJnkzHlh.js";import"./useBaseUiId-CZtNEuC3.js";import"./useControlled-DEWrsH1j.js";import"./index-BHACjACD.js";import"./index-CsTimawz.js";import"./PopoverPopup-wI-K4VZI.js";import"./InternalBackdrop-CSsFLgHu.js";import"./composite-BhJud1YY.js";import"./index-Dzg0FXju.js";import"./getDisabledMountTransitionStyles-CSwVJeOc.js";import"./ToolbarRootContext-CnGnSWc3.js";import"./tick-BXpIlGo8.js";import"./svgIconContainer-DzKsK3pp.js";import"./small-cross-Kn8vx_NT.js";import"./search-BZ0OOikS.js";import"./cross-CpqgxsIm.js";import"./useValueChanged-gQZ0oDOl.js";import"./getPseudoElementBounds-D2L7paF4.js";import"./CompositeItem-BMY8zStj.js";import"./makeExternalStore-BJgD01DS.js";import"./BaseForm-BBka8O0A.js";import"./ActionButton-C7HMH6t8.js";import"./Button-CqafgKxL.js";import"./SkeletonBar-CgzkWc0c.js";import"./Tooltip-Clch_Qe4.js";import"./info-sign-DMkJyY_W.js";import"./chevron-up-IoGAumLx.js";import"./chevron-down-C0-Ffhm_.js";import"./useEventCallback-BnKVbXQ1.js";import"./iconLoader-C1OzxgTM.js";import"./CompositeRoot-DIlOfpzd.js";import"./Switch-CxXqWMgh.js";import"./TimePicker-CK20zaAy.js";import"./CollapsiblePanel-Dv1dlGER.js";import"./error-C4tONck9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CxM1E0kE.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
