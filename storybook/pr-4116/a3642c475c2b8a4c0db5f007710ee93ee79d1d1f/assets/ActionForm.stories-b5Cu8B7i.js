import{j as t,g as n}from"./iframe-B2ksOBZK.js";import{A as r}from"./action-form-CNwq6XOd.js";import"./preload-helper-DwVeKaeD.js";import"./DropdownField-DLqjzm9N.js";import"./debounce-DrXd2sNW.js";import"./useOsdkClient-BexeExeh.js";import"./index-C0qxAnyg.js";import"./Input-DCyHQ82M.js";import"./useBaseUiId-DBFPNCWo.js";import"./useControlled-BKEjqMno.js";import"./index-DyyxI-I6.js";import"./index-rll2Ydt2.js";import"./PopoverPopup-CefU-B1a.js";import"./InternalBackdrop-Dzi45WTy.js";import"./composite-B-vnab_Z.js";import"./index-TB7zAsKF.js";import"./getDisabledMountTransitionStyles-CQawNBlY.js";import"./ToolbarRootContext-BqtVZI5F.js";import"./tick-qqyLXFxc.js";import"./svgIconContainer-BoLDP-in.js";import"./small-cross-Di5tDJTq.js";import"./search-BcOh8Jgz.js";import"./cross-DpwDHxX0.js";import"./useValueChanged-B3jNUwWr.js";import"./getPseudoElementBounds-B8e6uiFl.js";import"./CompositeItem-BrQKGcIu.js";import"./makeExternalStore-7lDBXMAq.js";import"./BaseForm-C8CF2PdJ.js";import"./ActionButton-D7Cv_dvM.js";import"./Button-CWbg3cyR.js";import"./SkeletonBar-CKJLp3uZ.js";import"./Tooltip-D7V59zE7.js";import"./info-sign-9DjKBxgg.js";import"./chevron-up-ByEr0L2t.js";import"./chevron-down-D80xuDhn.js";import"./useEventCallback-CtJLJCiI.js";import"./iconLoader-CaxDa45S.js";import"./Switch-DOX40OC2.js";import"./CompositeRoot-CzXRHvP9.js";import"./TimePicker-DlFNGl2V.js";import"./CollapsiblePanel-B4WKaPJO.js";import"./error-BDJdlY4T.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Da6CzeGO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
