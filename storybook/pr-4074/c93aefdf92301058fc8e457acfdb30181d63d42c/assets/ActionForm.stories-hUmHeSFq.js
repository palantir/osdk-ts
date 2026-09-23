import{j as t,g as n}from"./iframe-DGt_wNwK.js";import{A as r}from"./action-form-BWKNADYU.js";import"./preload-helper-DROywWZr.js";import"./DropdownField-BjN9Z-rg.js";import"./debounce-D4ERLSUT.js";import"./useOsdkClient-CsXE7S4d.js";import"./index-DQChOSqq.js";import"./Input-TkUYfjKo.js";import"./useBaseUiId-C69sf6z7.js";import"./useControlled-CVm____s.js";import"./index-CvHeI6FX.js";import"./index-D8zmmPkx.js";import"./PopoverPopup-CQEfdNJX.js";import"./InternalBackdrop-BoIr8mGI.js";import"./composite-LkGdti_A.js";import"./index-CVfN9RsA.js";import"./getDisabledMountTransitionStyles-Bp3EcrUB.js";import"./ToolbarRootContext-CszZ8CJF.js";import"./tick-DpVf1RzV.js";import"./svgIconContainer-D7UZVecC.js";import"./small-cross-DUBDtFaA.js";import"./search-DyFNjb5Q.js";import"./cross-BGkapFHE.js";import"./useValueChanged-CYmdB-rd.js";import"./getPseudoElementBounds-DuFjvkkb.js";import"./CompositeItem-CarXUbLm.js";import"./makeExternalStore-UXCR43hi.js";import"./BaseForm-B7tMdFFl.js";import"./ActionButton-kGYifaIO.js";import"./Button-BNxQZVJ4.js";import"./SkeletonBar-ClTE1RAP.js";import"./Tooltip-D200fGQb.js";import"./info-sign-CKv2y48e.js";import"./chevron-up-DbBFvFx-.js";import"./chevron-down-Dgt5xHaY.js";import"./useEventCallback-D3k2FKOQ.js";import"./iconLoader-V-n342uW.js";import"./Switch-CYe0IeY3.js";import"./CompositeRoot-CxqmDkqJ.js";import"./TimePicker-TQUH-CNT.js";import"./CollapsiblePanel-B53z1qp2.js";import"./error-CIpMfC0e.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CDbkSkNJ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
