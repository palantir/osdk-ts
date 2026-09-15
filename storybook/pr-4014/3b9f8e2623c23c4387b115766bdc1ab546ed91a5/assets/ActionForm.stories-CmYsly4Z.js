import{j as t,g as n}from"./iframe-CJIAHpsc.js";import{A as r}from"./action-form-DJYH6S-Q.js";import"./preload-helper-6cWemOcr.js";import"./DropdownField-CBRqM-61.js";import"./debounce-2inWENXP.js";import"./useOsdkClient-Cut5RvL3.js";import"./index-BzlqDAfw.js";import"./Input-icqzcMB1.js";import"./useBaseUiId-DvojBwxI.js";import"./useControlled-OjeTa2_t.js";import"./index-DiBt9TUI.js";import"./index-BzXh_3LE.js";import"./PopoverPopup-DewRGdkh.js";import"./InternalBackdrop-C4MFPAsi.js";import"./composite-CFOr0BZu.js";import"./index-CFmt81Rk.js";import"./getDisabledMountTransitionStyles-DKmwvZAI.js";import"./ToolbarRootContext-CJh9ljWw.js";import"./tick-hj5PgKj5.js";import"./svgIconContainer-56SLvs0U.js";import"./small-cross-oWzWfK8v.js";import"./search-Bfm8FcWQ.js";import"./cross-D0IHJ6R4.js";import"./useValueChanged-uNOI8JzK.js";import"./getPseudoElementBounds-DvGqkRSV.js";import"./CompositeItem-Czysbmcp.js";import"./makeExternalStore-BCywNTfM.js";import"./BaseForm-Dgqb8DBn.js";import"./ActionButton-DVvDY0Pz.js";import"./Button-B7ufGNzS.js";import"./SkeletonBar-Dbp-LEnb.js";import"./Tooltip-CeGxYMTK.js";import"./info-sign-Shmin38Z.js";import"./chevron-up-lxYKkgE2.js";import"./chevron-down-TVEh7Z-q.js";import"./useEventCallback-B1gWvbDg.js";import"./iconLoader-BHj1Gxhf.js";import"./CompositeRoot-DZHbEWwG.js";import"./Switch-DHoY7Mk6.js";import"./TimePicker-DuAo26sY.js";import"./CollapsiblePanel-Dili79wA.js";import"./error-D5dqG5sm.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-mHYGalWz.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
