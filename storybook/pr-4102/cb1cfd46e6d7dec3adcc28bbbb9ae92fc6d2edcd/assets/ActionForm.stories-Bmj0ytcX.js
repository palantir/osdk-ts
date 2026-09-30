import{j as t,g as n}from"./iframe-DwrFhh8X.js";import{A as r}from"./action-form-DJmpiQji.js";import"./preload-helper-CtRLQ8d2.js";import"./DropdownField-69nLBGPA.js";import"./debounce-Do8EHXfQ.js";import"./useOsdkClient-BGkJfb9L.js";import"./index-2C7ws8qd.js";import"./Input-CETxnph3.js";import"./useBaseUiId-hjF8-Tkz.js";import"./useControlled-BWpptLO1.js";import"./index-BkjyrkST.js";import"./index-8KaHvHT1.js";import"./PopoverPopup-AoPTNcjX.js";import"./InternalBackdrop-DmelpGzC.js";import"./composite-CQaDz_1E.js";import"./index-B506KqcM.js";import"./getDisabledMountTransitionStyles-DEaamNv3.js";import"./ToolbarRootContext-BgJLWr5w.js";import"./tick-FFgtl-J5.js";import"./svgIconContainer-Dfv48f4w.js";import"./small-cross-rfi-MHsz.js";import"./search-B4eh0B39.js";import"./cross-CPVTirRP.js";import"./useValueChanged-OVYV8k4d.js";import"./getPseudoElementBounds-Bjx3ag9L.js";import"./CompositeItem-Cjr-y7lk.js";import"./makeExternalStore-BDmfTWiu.js";import"./BaseForm-CKlHMJ9U.js";import"./ActionButton-DK21FKAO.js";import"./Button-DEic01Xh.js";import"./SkeletonBar-CMgVfScc.js";import"./Tooltip-D0M9LXTB.js";import"./info-sign-CYSPyeMY.js";import"./chevron-up-DvEyCsoq.js";import"./chevron-down-BBihCk-h.js";import"./useEventCallback-CbGT4h-v.js";import"./iconLoader-nPNFNrGy.js";import"./Switch-CXSsslRM.js";import"./CompositeRoot-mI7XZoke.js";import"./TimePicker-BjC2sPWX.js";import"./CollapsiblePanel-noq47swC.js";import"./error-Cw2yDStD.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BhQ--KKZ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
