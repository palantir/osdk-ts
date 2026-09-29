import{j as t,g as n}from"./iframe-CrY1A4wu.js";import{A as r}from"./action-form-A8gCM8ns.js";import"./preload-helper-BFzS6-eq.js";import"./DropdownField-r7GV--Zz.js";import"./debounce-D0SY6i1l.js";import"./useOsdkClient-EszrIw0T.js";import"./index-BbE0G0zt.js";import"./Input-DUtiftPz.js";import"./useBaseUiId-Cs8gIZmf.js";import"./useControlled-BE-RLK2-.js";import"./index-C3rJi8nM.js";import"./index-DV4D4tWk.js";import"./PopoverPopup-CRSCUEqR.js";import"./InternalBackdrop-CNimJ3h4.js";import"./composite-AFOTQ2-F.js";import"./index-Dyb_oLLU.js";import"./getDisabledMountTransitionStyles-B8Y0GomG.js";import"./ToolbarRootContext-Coy-eXOe.js";import"./tick-hjmwYU-4.js";import"./svgIconContainer-B3_v06mI.js";import"./small-cross-B7ArTsa6.js";import"./search-DZE4oD9r.js";import"./cross-CzBl0tbg.js";import"./useValueChanged-CKQn1SdE.js";import"./getPseudoElementBounds-umYg5cKN.js";import"./CompositeItem-51mDofen.js";import"./makeExternalStore-tkECEc_3.js";import"./BaseForm-Cbs9M8AR.js";import"./ActionButton-BJz-dQ6B.js";import"./Button-C9zZFhV6.js";import"./SkeletonBar-DUpRMQqw.js";import"./Tooltip-Cijp_KA5.js";import"./info-sign-D8dYkzTr.js";import"./chevron-up-DlFp49_F.js";import"./chevron-down-Bu2NJksL.js";import"./useEventCallback-DaHbnggt.js";import"./iconLoader-BOP3Gdyb.js";import"./Switch-QpIWy5tv.js";import"./CompositeRoot-B3d_W05X.js";import"./TimePicker-B_tOia52.js";import"./CollapsiblePanel-BO93Qs_h.js";import"./error-CvnsbzcB.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CHUgiBtf.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
