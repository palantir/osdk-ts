import{j as t,g as n}from"./iframe-CSN8hPBK.js";import{A as r}from"./action-form-2SBZGJaE.js";import"./preload-helper-CgkWS9T4.js";import"./DropdownField-DUXRBZrT.js";import"./debounce-ccFfTLWb.js";import"./useOsdkClient-B6qKL_vp.js";import"./index-LA6eGdrx.js";import"./Input-BG0-cI5h.js";import"./useBaseUiId-CST19_eI.js";import"./useControlled-BD5V0Ccm.js";import"./index-P9xxddcK.js";import"./index-DeMBNUsz.js";import"./PopoverPopup-CQJhkZED.js";import"./InternalBackdrop-CTXp7ef6.js";import"./composite-DSnE_YQk.js";import"./index-BIKPmtBh.js";import"./getDisabledMountTransitionStyles-DhTy_FKz.js";import"./ToolbarRootContext-CDg3nyHK.js";import"./tick-l3MhEpoD.js";import"./svgIconContainer-COOyKoHH.js";import"./small-cross-DqRZZTHz.js";import"./search-By7vWzyC.js";import"./cross-CLh64p0F.js";import"./useValueChanged-DROKVxxL.js";import"./getPseudoElementBounds-CVxG5WR2.js";import"./CompositeItem-BScttQtR.js";import"./makeExternalStore-DS_EZCHg.js";import"./BaseForm-Cn8NRSpu.js";import"./ActionButton-iRrLnlXb.js";import"./Button-CTdUnl-9.js";import"./SkeletonBar-BGTpH663.js";import"./Tooltip-Bv17cXKg.js";import"./info-sign-DGUwSjg3.js";import"./chevron-up-CVgCWLNr.js";import"./chevron-down-BhdvQ1g6.js";import"./useEventCallback-B81jpozq.js";import"./iconLoader-0-dHEIvP.js";import"./CompositeRoot-DQECtM5a.js";import"./Switch-hSpfsJzR.js";import"./TimePicker-BJh1sDH0.js";import"./CollapsiblePanel-BxP2J2Dt.js";import"./error-BtGej3op.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-jlPvbe-f.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
