import{j as t,g as n}from"./iframe-DIZ-Bu8w.js";import{A as r}from"./action-form-Dlrw9C12.js";import"./preload-helper-BCeaJvSh.js";import"./DropdownField-qfJaQs7S.js";import"./debounce-C3kkqtjg.js";import"./useOsdkClient-BScEIiCr.js";import"./index-U9LN2Bz3.js";import"./Input-CIeGAlok.js";import"./useBaseUiId-CBNbS5zc.js";import"./useControlled-CLVHgJsp.js";import"./index-C_o4DvqR.js";import"./index-C_qvm4WD.js";import"./PopoverPopup-DYZGNom1.js";import"./InternalBackdrop-yM8Okk6y.js";import"./composite-g9iDGAQe.js";import"./index-gGnzolpv.js";import"./getDisabledMountTransitionStyles-CQ2DPXAp.js";import"./ToolbarRootContext-BVSgixiH.js";import"./tick-BgvY-8AZ.js";import"./svgIconContainer-IKodGSm3.js";import"./small-cross-CRaqECGa.js";import"./search-DmtLA8wB.js";import"./cross-DxgTLWiz.js";import"./useValueChanged-CGUyZDFO.js";import"./getPseudoElementBounds-BUnDKKdE.js";import"./CompositeItem-BtZ6x-gO.js";import"./makeExternalStore-DE0i2YSI.js";import"./BaseForm-BFMr6kez.js";import"./ActionButton-Dlu16gsr.js";import"./Button-B1ALhdFr.js";import"./SkeletonBar-C61w2HiA.js";import"./Tooltip-BMr-3bqI.js";import"./info-sign-CQCl5Uiw.js";import"./chevron-up-D9PLiJAm.js";import"./chevron-down-DSfB9wHE.js";import"./useEventCallback-BDzfSq7p.js";import"./iconLoader-CW36aO5B.js";import"./CompositeRoot-UKrC5Af_.js";import"./Switch-DbOppWIn.js";import"./TimePicker-CXWRMZZU.js";import"./CollapsiblePanel-DPTmyULg.js";import"./error-uSSd40F1.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CD3VlAOg.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
