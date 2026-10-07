import{j as t,g as n}from"./iframe-Bs9Zqqf-.js";import{A as r}from"./action-form-PpV85z8Z.js";import"./preload-helper-Cp9usskF.js";import"./DropdownField-D9LMnY0i.js";import"./debounce-CqWMxEN-.js";import"./useOsdkClient-B6joKZOa.js";import"./index-BDMfxNxX.js";import"./Input-DFM7xw9J.js";import"./useBaseUiId-9IsGojkB.js";import"./useControlled-DkY88gS_.js";import"./index-Dblp0HKE.js";import"./index-EMOKDP2T.js";import"./PopoverPopup-BcfSdZdq.js";import"./InternalBackdrop-BGL8gebb.js";import"./composite-Cqp0rQwX.js";import"./index-Cfs5giYo.js";import"./getDisabledMountTransitionStyles-B4RdPd8-.js";import"./ToolbarRootContext-ZHsiNOiv.js";import"./tick-CXdTppsu.js";import"./svgIconContainer-aOhTN_D5.js";import"./small-cross-DrXs_-qZ.js";import"./search-D6HT7gEm.js";import"./cross-BNRY-s17.js";import"./useValueChanged-9Rhs99cV.js";import"./getPseudoElementBounds-DSR0VlQK.js";import"./CompositeItem-ctTapvtZ.js";import"./makeExternalStore-CdBELGf5.js";import"./BaseForm-Csytxrv-.js";import"./ActionButton-BgsU4BKW.js";import"./Button-DE9Fucz0.js";import"./SkeletonBar-D3b4PSYB.js";import"./Tooltip-Bdagy_hn.js";import"./info-sign-B652hdL9.js";import"./chevron-up-3vtSrJAp.js";import"./chevron-down-Dg71DAa4.js";import"./useEventCallback-CPnYLf1v.js";import"./iconLoader-JMOWVHaV.js";import"./Switch-DW6uXpZW.js";import"./CompositeRoot-CkifGjSv.js";import"./TimePicker-DrCijAd8.js";import"./CollapsiblePanel-Uvb76fMO.js";import"./error-EzQ0dI5s.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DDUrYl-m.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
