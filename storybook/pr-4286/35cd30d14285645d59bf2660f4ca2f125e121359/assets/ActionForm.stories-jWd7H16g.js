import{j as t,g as n}from"./iframe-CNj1GFG8.js";import{A as r}from"./action-form-B3EL_QnF.js";import"./preload-helper-Cjo-XvAp.js";import"./DropdownField-BKTYqznm.js";import"./debounce-Bex9yU8I.js";import"./useOsdkClient-6-yKY7Ze.js";import"./index-oB_g-d5V.js";import"./Input-BxtPTbIC.js";import"./useBaseUiId-CsicFn0g.js";import"./useControlled-DjWof5sy.js";import"./index-BASR5P1U.js";import"./index-eXax19dP.js";import"./PopoverPopup-YHCVuQAi.js";import"./InternalBackdrop-BST228YF.js";import"./composite-BHr8Wk2A.js";import"./index-DBYFvaC0.js";import"./getDisabledMountTransitionStyles-CoZOZsDn.js";import"./ToolbarRootContext-Nkrk5VcP.js";import"./tick-B5OTJBKL.js";import"./svgIconContainer-Bhefl8zi.js";import"./small-cross-D28p3scZ.js";import"./search-9WBJrji3.js";import"./cross-B62mBt8r.js";import"./useValueChanged-Ca3Ymytd.js";import"./getPseudoElementBounds-BHXEpft8.js";import"./CompositeItem-xqfWa6Bp.js";import"./makeExternalStore-CM009B6W.js";import"./BaseForm-BI6OjRR9.js";import"./ActionButton-dwJP_byH.js";import"./Button-DUnKzmAM.js";import"./SkeletonBar-Dj4WA_fP.js";import"./Tooltip-BdIjn_4J.js";import"./info-sign-DAHIjV0u.js";import"./chevron-up-SuCJxHXj.js";import"./chevron-down-UgpOAJV9.js";import"./useEventCallback-DZKgTPL6.js";import"./iconLoader-D_S0a01b.js";import"./Switch-BBSi80qb.js";import"./CompositeRoot-YPdwQ__Z.js";import"./TimePicker-BMgcJaV1.js";import"./CollapsiblePanel-wgPcw7lQ.js";import"./error-D9mbXxgI.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-6BIUOFhO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
