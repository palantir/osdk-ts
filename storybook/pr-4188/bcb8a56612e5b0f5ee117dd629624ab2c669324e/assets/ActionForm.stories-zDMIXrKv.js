import{j as t,g as n}from"./iframe-BpcZw0Qh.js";import{A as r}from"./action-form-S8Io4j1j.js";import"./preload-helper-bs_ZWCVp.js";import"./DropdownField-BY-KWr1H.js";import"./debounce-BUHFTaie.js";import"./useOsdkClient-BPiM2Ufk.js";import"./index-RyqdaqZt.js";import"./Input-B-pxSN65.js";import"./useBaseUiId-BsFMaRmq.js";import"./useControlled-BaPgI88u.js";import"./index-j_Bq1Wxb.js";import"./index-hOxH3DWt.js";import"./PopoverPopup-CiGvhW0c.js";import"./InternalBackdrop-CephDmCg.js";import"./composite-b_Vir_Qy.js";import"./index-9jDzRHbg.js";import"./getDisabledMountTransitionStyles-DAuYWGeR.js";import"./ToolbarRootContext-Bafsun3r.js";import"./tick-BLie4KaX.js";import"./svgIconContainer-B6eNnREq.js";import"./small-cross-B0G2BYVi.js";import"./search-C5aLdI-z.js";import"./cross-BQZa2Kkg.js";import"./useValueChanged-DyTrIZ4q.js";import"./getPseudoElementBounds-CMoxeRLZ.js";import"./CompositeItem-CiXh4i5Q.js";import"./makeExternalStore-vOLbyGHJ.js";import"./BaseForm-CjaTvdVb.js";import"./ActionButton-CSQPpyYl.js";import"./Button-xX1VEK25.js";import"./SkeletonBar-CFFQOHPZ.js";import"./Tooltip-CrVqygHA.js";import"./info-sign-BrYsyk88.js";import"./chevron-up-kxiQh0Uj.js";import"./chevron-down-0qsj7SKJ.js";import"./useEventCallback-Dyo7s63d.js";import"./iconLoader-C7CLpr9U.js";import"./Switch-CltOmgRj.js";import"./CompositeRoot-BKRqmrK5.js";import"./TimePicker-C1VPyvoE.js";import"./CollapsiblePanel-BGTJ0O0p.js";import"./error-DJy30QKE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-OlYBoQiq.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
