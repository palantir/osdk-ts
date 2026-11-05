import{j as t,g as n}from"./iframe-5l1aTQWB.js";import{A as r}from"./action-form-wQ2OvrbW.js";import"./preload-helper-CV54w-MR.js";import"./DropdownField-B8Mkz462.js";import"./debounce-BirimW28.js";import"./useOsdkClient-DcsBDEeF.js";import"./index-CabVKWfS.js";import"./Input-DVZngs_7.js";import"./useBaseUiId-D2qSGviR.js";import"./useControlled-Dv35mSy4.js";import"./index-CWUPxEVH.js";import"./index-U5dtIGUV.js";import"./PopoverPopup-qOi5AuS_.js";import"./InternalBackdrop-DeDePDLT.js";import"./composite-BN-nzUC2.js";import"./index-BEY7C58E.js";import"./getDisabledMountTransitionStyles-Ci8kZ5Aj.js";import"./ToolbarRootContext-DpNaqsW8.js";import"./tick-PuqFX_ts.js";import"./svgIconContainer-DUWwpavS.js";import"./small-cross-BXD20tqW.js";import"./search-ocH4sH9r.js";import"./cross-DVFwGI58.js";import"./useValueChanged-BrsMGCOc.js";import"./getPseudoElementBounds-By38X9zr.js";import"./CompositeItem-CiQq9b_9.js";import"./makeExternalStore-Bp08F5QN.js";import"./BaseForm-CBKtyUVj.js";import"./ActionButton-CVgbfgT7.js";import"./Button-BbI-ZrrT.js";import"./SkeletonBar-DiikPYcf.js";import"./Tooltip-CMn9P59Q.js";import"./info-sign-D-XfkY6S.js";import"./chevron-up-Cy2dHORW.js";import"./chevron-down-C-oTZ5aG.js";import"./useEventCallback-j88OK98j.js";import"./iconLoader-B622xpKu.js";import"./Switch-BlUa6aJG.js";import"./CompositeRoot-CIAUHOBN.js";import"./TimePicker-Bz-wDHvx.js";import"./CollapsiblePanel-DnkZmCML.js";import"./error-Cor_ktfQ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B5w28mdE.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
