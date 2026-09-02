import{j as t,g as n}from"./iframe-DIE0F-FJ.js";import{A as r}from"./action-form-BbdcRixb.js";import"./preload-helper-CdCw_D6s.js";import"./DropdownField-BDFhFm-I.js";import"./debounce-CXfaftQK.js";import"./useOsdkClient-T1fMghRS.js";import"./index-BXhLRBiI.js";import"./Input-BprksExu.js";import"./useBaseUiId-BGN3IKJR.js";import"./useControlled-BuhNUpGX.js";import"./index-PVYT1aqJ.js";import"./index-BkvxGWCD.js";import"./PopoverPopup-DdihVGuh.js";import"./InternalBackdrop-79eMq3pC.js";import"./composite-RzFWQe2R.js";import"./index-FrQW-LFi.js";import"./getDisabledMountTransitionStyles-BGeDrQBn.js";import"./ToolbarRootContext-CovMsxmO.js";import"./tick-71oNJlSZ.js";import"./svgIconContainer-BGsheyOK.js";import"./small-cross-BJcg7TMk.js";import"./search-DuYiMzJM.js";import"./cross-B--tnJuh.js";import"./useValueChanged-CHqOLEmB.js";import"./getPseudoElementBounds-CbYyKTV-.js";import"./CompositeItem-Cu0VA6bk.js";import"./makeExternalStore-7uZMc2Bx.js";import"./BaseForm-ClwGVkt4.js";import"./ActionButton-fl2F2QSy.js";import"./Button-CczGpO78.js";import"./SkeletonBar-DqHGhi1E.js";import"./Tooltip-BfeDHBZ_.js";import"./info-sign-CZRZvEK5.js";import"./chevron-up-DTcEzRvr.js";import"./chevron-down-Dw6bDKjP.js";import"./useEventCallback-Bo0Eo9Z-.js";import"./iconLoader-CwUPBTkL.js";import"./CompositeRoot-D0uAXqk_.js";import"./Switch-BiEmDcW8.js";import"./TimePicker-DEtN0CMy.js";import"./CollapsiblePanel-iUwAaxXA.js";import"./error-BVPuSvQJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-g9qSGbZX.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
