import{j as t,g as n}from"./iframe-3FtDhECv.js";import{A as r}from"./action-form-D61i6Wct.js";import"./preload-helper-70ekmL9Z.js";import"./DropdownField-DGhWjt6v.js";import"./debounce-D5jfSGyg.js";import"./useOsdkClient-B3tCYy8u.js";import"./index-DDuj02wW.js";import"./Input-eNpsdHBj.js";import"./useBaseUiId-ba-AZLlh.js";import"./useControlled-DAFRtrE7.js";import"./index-Di_GBi9u.js";import"./index-CdOyTJBF.js";import"./PopoverPopup-Cbhnh0d6.js";import"./InternalBackdrop-C2qcUA_S.js";import"./composite-l2Xk1Iwz.js";import"./index-Bb5nNbut.js";import"./getDisabledMountTransitionStyles-Sp-qRZJf.js";import"./ToolbarRootContext-DWWF2uk2.js";import"./tick-DP_oPzGl.js";import"./svgIconContainer-8d5y5XmV.js";import"./small-cross-CzrrmRc2.js";import"./search-DQyEiXG4.js";import"./cross-3payUlda.js";import"./useValueChanged-JT8yV3AQ.js";import"./getPseudoElementBounds-Bb3UwPzL.js";import"./CompositeItem-X94Emfw4.js";import"./makeExternalStore-Bttk8K2M.js";import"./BaseForm-BSlLMAOW.js";import"./ActionButton-D3HdF3S7.js";import"./Button-CtxTGJJ5.js";import"./SkeletonBar-BaDwHjIr.js";import"./Tooltip-DBBzsEJq.js";import"./info-sign-C-46li_s.js";import"./chevron-up-CN7EwXNY.js";import"./chevron-down-eXeXyWJp.js";import"./useEventCallback-BV-K2SB8.js";import"./iconLoader-gqMcjuVy.js";import"./Switch-BAwo87Cy.js";import"./CompositeRoot-BwQMDbzT.js";import"./TimePicker-Dt5gLnbH.js";import"./CollapsiblePanel-Bju8gm12.js";import"./error-Co_bSTMk.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CkiSk4kW.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
