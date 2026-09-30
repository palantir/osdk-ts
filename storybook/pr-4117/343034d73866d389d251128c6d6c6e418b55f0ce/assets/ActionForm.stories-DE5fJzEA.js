import{j as t,g as n}from"./iframe-CE_irqki.js";import{A as r}from"./action-form-Dx_S5aXE.js";import"./preload-helper-B0wObQeK.js";import"./DropdownField-Cc5Zze2e.js";import"./debounce-CRdC3fBU.js";import"./useOsdkClient-DUBVzTuP.js";import"./index-CbZ4Cj79.js";import"./Input-CQv_PU5A.js";import"./useBaseUiId-Cuodx7xu.js";import"./useControlled-BqInFAvQ.js";import"./index-D0l0Hg2C.js";import"./index-C-NLbbDg.js";import"./PopoverPopup-BcZdQHxz.js";import"./InternalBackdrop-Dkqi7a0r.js";import"./composite-CCcrzfR2.js";import"./index-_MWob-Zb.js";import"./getDisabledMountTransitionStyles-CYc6tB7S.js";import"./ToolbarRootContext-CDB_L_pZ.js";import"./tick-DeDyRDcO.js";import"./svgIconContainer-co06VEp6.js";import"./small-cross-DBd0iCaF.js";import"./search-BPF_4D3u.js";import"./cross-CiDhEPuo.js";import"./useValueChanged-BA6THRKJ.js";import"./getPseudoElementBounds-QK10hLQz.js";import"./CompositeItem-BnnmhO1F.js";import"./makeExternalStore-BFTnjumI.js";import"./BaseForm-CrWr78pR.js";import"./ActionButton-B_cFwAVF.js";import"./Button-Do97WS9c.js";import"./SkeletonBar-BLmbpfxb.js";import"./Tooltip-C24crhHA.js";import"./info-sign-D3RRIxQq.js";import"./chevron-up-X7mtzZB2.js";import"./chevron-down-oqAS4iB6.js";import"./useEventCallback-CUNobEcy.js";import"./iconLoader-Duedz8sG.js";import"./Switch-DJXhyjxX.js";import"./CompositeRoot-CjYH-Lye.js";import"./TimePicker-bFAwpmNj.js";import"./CollapsiblePanel-CzBB3n5y.js";import"./error-yF4FDunH.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-TAUr-869.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
