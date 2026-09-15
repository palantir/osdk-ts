import{j as t,g as n}from"./iframe-SCQrgHSr.js";import{A as r}from"./action-form-DE5tpftV.js";import"./preload-helper-ruFAjrX8.js";import"./DropdownField-C7QjeZet.js";import"./debounce-BzGmHbO5.js";import"./useOsdkClient-osmLaNC1.js";import"./index-BUtIlNP3.js";import"./Input-CnPO-APv.js";import"./useBaseUiId-BR-Fy_C2.js";import"./useControlled-Cz7FsEHc.js";import"./index--0Ld1SF2.js";import"./index-w54i75Ov.js";import"./PopoverPopup-Be5JEcOd.js";import"./InternalBackdrop-CVssRVAp.js";import"./composite-Dt5lUk_W.js";import"./index-CT5e1oGB.js";import"./getDisabledMountTransitionStyles-BTvGlHNw.js";import"./ToolbarRootContext-BfCeEs7c.js";import"./tick-D-DSVTdq.js";import"./svgIconContainer-PYczuJwB.js";import"./small-cross-Bw4zLqUD.js";import"./search-Dm4EdHL9.js";import"./cross-RzKZrUkh.js";import"./useValueChanged-B1QwrseW.js";import"./getPseudoElementBounds-BmOO-M7r.js";import"./CompositeItem-Co12UxPz.js";import"./makeExternalStore-CUOtWXW6.js";import"./BaseForm-CTSpJIKQ.js";import"./ActionButton-Czv-I_yU.js";import"./Button-CuEtz6jx.js";import"./SkeletonBar-DuD90zQc.js";import"./Tooltip-BR8Gpg6Y.js";import"./info-sign-7yxIGgDc.js";import"./chevron-up-DkMOD8xG.js";import"./chevron-down-CgTNl4cy.js";import"./useEventCallback-C4za5yjU.js";import"./iconLoader-BE89wqNi.js";import"./CompositeRoot-BCA50m_r.js";import"./Switch-CgrkAm9R.js";import"./TimePicker-BnyDOkQw.js";import"./CollapsiblePanel-DkamSJ2Z.js";import"./error-bDXyKJC8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-tKMMAYTA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
