import{j as t,g as n}from"./iframe-wedJSnud.js";import{A as r}from"./action-form-BllQoxvJ.js";import"./preload-helper-DcVHnV_i.js";import"./DropdownField-DA0RqhyD.js";import"./debounce-slxGNpXd.js";import"./useOsdkClient-C_rjoUrX.js";import"./index-BsI8HLJz.js";import"./Input-Z8OuidlN.js";import"./useBaseUiId-BGqSil3r.js";import"./useControlled-RZ5VMgMB.js";import"./index-Nf3FTUKP.js";import"./index-BCNEaR-3.js";import"./PopoverPopup-BS1FnNJF.js";import"./InternalBackdrop-CYExiY0H.js";import"./composite-CGFDwdnq.js";import"./index-DaGnA4hb.js";import"./getDisabledMountTransitionStyles-DGGlYbfe.js";import"./ToolbarRootContext-Bs5SB0fX.js";import"./tick-B3xCBs79.js";import"./svgIconContainer-CJJHSkNv.js";import"./small-cross-Cn8qa5Sh.js";import"./search-B0U_YWQT.js";import"./cross-CxbFlbaI.js";import"./useValueChanged-Bb0TAKp4.js";import"./getPseudoElementBounds-C5lKtGGS.js";import"./CompositeItem-DUPpieEN.js";import"./makeExternalStore-cCCuNZuQ.js";import"./BaseForm-DIGYHKL3.js";import"./ActionButton-DaNuKssk.js";import"./Button-UisMFP1d.js";import"./SkeletonBar-mu4DFzMg.js";import"./Tooltip-BnvTu1M2.js";import"./info-sign-DnSJlOV6.js";import"./chevron-up-C_Mmr20i.js";import"./chevron-down-DkT3Qzaa.js";import"./useEventCallback-CSpaNNY7.js";import"./iconLoader-BYJQdBKa.js";import"./Switch-DJ-yMZyd.js";import"./CompositeRoot-BiB9jmmP.js";import"./TimePicker-DFgh4Ggw.js";import"./CollapsiblePanel-C69XGwDY.js";import"./error-BFWppJ2G.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B2en0C3P.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
