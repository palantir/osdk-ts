import{j as t,g as n}from"./iframe-B-AKwe0U.js";import{A as r}from"./action-form-BGfiC4oU.js";import"./preload-helper-f3uNRD8c.js";import"./DropdownField-YeSQmSBB.js";import"./debounce-CTxyeqac.js";import"./useOsdkClient-DOwl5ySm.js";import"./index-BTKqd_0M.js";import"./Input-C_it6lB9.js";import"./useBaseUiId-BzL2rBHV.js";import"./useControlled-DAZJskjr.js";import"./index-DbIw_M6r.js";import"./index-DK2QIJxh.js";import"./PopoverPopup-CXdC5QUX.js";import"./InternalBackdrop-D0ckCYHs.js";import"./composite-C2ZOTtj7.js";import"./index-D6DA4SgY.js";import"./getDisabledMountTransitionStyles-CziK-4zN.js";import"./ToolbarRootContext-CAFwtwDJ.js";import"./tick-BFHv-Vnu.js";import"./svgIconContainer-sFjpt_d1.js";import"./small-cross-Cnf0y2Tr.js";import"./search-BeqvshXG.js";import"./cross-DA2KL76X.js";import"./useValueChanged-CwePdTgQ.js";import"./getPseudoElementBounds-Byk01WJS.js";import"./CompositeItem-BmFykBzh.js";import"./makeExternalStore-CwQpDBtV.js";import"./BaseForm-DC7VW1zR.js";import"./ActionButton-3WTL5l5D.js";import"./Button-DSXsoF7A.js";import"./SkeletonBar-B_0fbXLl.js";import"./Tooltip-BUiog_49.js";import"./info-sign-cml5oB2h.js";import"./chevron-up-C5GJtUjl.js";import"./chevron-down-CI9pzF65.js";import"./useEventCallback-qJT1RIau.js";import"./iconLoader-B1_XEky1.js";import"./CompositeRoot-CiFuoTgE.js";import"./Switch-CXM4wESA.js";import"./TimePicker-CV7rPDH8.js";import"./CollapsiblePanel-T50sNV5u.js";import"./error-C0T-x3vg.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DWcYXPst.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
