import{j as t,g as n}from"./iframe-CnB-nyYL.js";import{A as r}from"./action-form-DlhQfwSL.js";import"./preload-helper-Q1kWDOMf.js";import"./DropdownField-BXVTK7oo.js";import"./debounce-BTDM9WLA.js";import"./useOsdkClient-DJoDqONI.js";import"./index-BxeA_yCq.js";import"./Input-BnfiihnE.js";import"./useBaseUiId-CHGGJD75.js";import"./useControlled-Dq4TuQGF.js";import"./index-B_mCg7VC.js";import"./index-CRK0fjNK.js";import"./PopoverPopup-BkXRyCMb.js";import"./InternalBackdrop-BZj78jFb.js";import"./composite-rNpDadLs.js";import"./index-CNnaAkES.js";import"./getDisabledMountTransitionStyles-CX_nbaPq.js";import"./ToolbarRootContext-BGykyxF8.js";import"./tick-HZfaF6Nf.js";import"./svgIconContainer-C7kPmSlO.js";import"./small-cross-BaAEbGi-.js";import"./search-B_Ak-sTr.js";import"./cross-B8WrElap.js";import"./useValueChanged-BlEozEqt.js";import"./getPseudoElementBounds-CSUzuC87.js";import"./CompositeItem-BvTU3-ui.js";import"./makeExternalStore-BA4R21ZY.js";import"./BaseForm-BM6XGpX4.js";import"./ActionButton-Bqin8RB2.js";import"./Button-BB8T2OOy.js";import"./SkeletonBar-B-v-TkMy.js";import"./Tooltip-BgGrBifp.js";import"./info-sign-CT4_91uG.js";import"./chevron-up-oCn_TAwO.js";import"./chevron-down-CnfHtb5Z.js";import"./useEventCallback-CA4NJ-uN.js";import"./iconLoader-Dh5QSW6V.js";import"./CompositeRoot-BQtokc11.js";import"./Switch-sKStkwu7.js";import"./TimePicker-BugPDXyo.js";import"./CollapsiblePanel-B6BY82OC.js";import"./error-DNv14KIg.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CruR8e4i.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
