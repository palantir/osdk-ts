import{j as t,g as n}from"./iframe-wwmAnZJB.js";import{A as r}from"./action-form-BxgZ5InM.js";import"./preload-helper-OhSO-U7q.js";import"./DropdownField-z1o6ULkj.js";import"./debounce-B-Pm_7Wq.js";import"./useOsdkClient-Dcf70dRQ.js";import"./index-CR7mf95j.js";import"./Input-dfiNY8gr.js";import"./useBaseUiId-BR51eynY.js";import"./useControlled-BhrECPzc.js";import"./index-DnWxg9AP.js";import"./index-ChdMXjiA.js";import"./PopoverPopup-BazkAXod.js";import"./InternalBackdrop-B07avgPb.js";import"./composite-DgNImKCX.js";import"./index-Ba8v5_Il.js";import"./getDisabledMountTransitionStyles-BeoyF_jW.js";import"./ToolbarRootContext-Cy5wkqrQ.js";import"./tick-DenPhxuH.js";import"./svgIconContainer-BudxXKul.js";import"./small-cross-CEF3WehI.js";import"./search-C8QAasXE.js";import"./cross-8dD8CYIw.js";import"./useValueChanged-CiAOff-4.js";import"./getPseudoElementBounds-DVACdGGF.js";import"./CompositeItem-CH57RHZb.js";import"./makeExternalStore-CkSN1CwB.js";import"./BaseForm-BanKIp9I.js";import"./ActionButton-DLTjDWPY.js";import"./Button-EDCPExC6.js";import"./SkeletonBar-C3Finl3J.js";import"./Tooltip-BPfOgsTX.js";import"./info-sign-Cmr7SYkb.js";import"./chevron-up-CAdbtw3e.js";import"./chevron-down-wdzezIea.js";import"./useEventCallback-myO5jREQ.js";import"./iconLoader-Ci7noHXb.js";import"./Switch-hFg4T42E.js";import"./CompositeRoot-CL_-gsPL.js";import"./TimePicker-pFJl704m.js";import"./CollapsiblePanel-D75kMcbo.js";import"./error--BpoQgxv.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C4BCCJj2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
