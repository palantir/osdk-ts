import{j as t,g as n}from"./iframe-CoFJxwHv.js";import{A as r}from"./action-form-BTJ5ok1Q.js";import"./preload-helper-D-SgnzBV.js";import"./DropdownField-CBHpKdZq.js";import"./debounce-OWWmpWc0.js";import"./useOsdkClient-u5ILwDJn.js";import"./index--Ea47wZq.js";import"./Input-DKwzPwJ8.js";import"./useBaseUiId-2pTyOHN-.js";import"./useControlled-BYI1O7tr.js";import"./index-Cisz4sZL.js";import"./index-DB_u2R0T.js";import"./PopoverPopup-B30sWIBx.js";import"./InternalBackdrop-CW-JCB6u.js";import"./composite-D_cfAskA.js";import"./index-Bm20SrpM.js";import"./getDisabledMountTransitionStyles-5g03uBQa.js";import"./ToolbarRootContext-wMltP8Ko.js";import"./tick-BeCAXAuB.js";import"./svgIconContainer-DEFqmnfP.js";import"./small-cross-CkY1R3ge.js";import"./search-XDurstN3.js";import"./cross-OzyUyhBS.js";import"./useValueChanged-Bzeit28k.js";import"./getPseudoElementBounds-C6R4Oz02.js";import"./CompositeItem-Ca1TKgPn.js";import"./makeExternalStore-w2_wLIak.js";import"./BaseForm-DncM7YxD.js";import"./ActionButton-NKKyQGHP.js";import"./Button-2n8pstyv.js";import"./SkeletonBar-qgco6YeA.js";import"./Tooltip-U-nAk7Io.js";import"./info-sign-DFizPcW6.js";import"./chevron-up-CUdrqehh.js";import"./chevron-down-BlDOgSlD.js";import"./useEventCallback-S_u0-aCp.js";import"./iconLoader-CMaYA6I3.js";import"./Switch-DKpI74af.js";import"./CompositeRoot-n-fypNAx.js";import"./TimePicker-gtwqopIJ.js";import"./CollapsiblePanel-0TCT3zQ_.js";import"./error-D5A6w5ju.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CWJx0Uh8.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
