import{j as t,g as n}from"./iframe-BHoRCdfJ.js";import{A as r}from"./action-form-BOtoAVqY.js";import"./preload-helper-PcfL1ZgJ.js";import"./DropdownField-C17krznx.js";import"./debounce-Bv9XGbP2.js";import"./useOsdkClient-CKwE1qLu.js";import"./index-CRbMuko2.js";import"./Input-RRy85S6o.js";import"./useBaseUiId-B3Ti1xga.js";import"./useControlled-CXIbMiD_.js";import"./index-KzV2K_a8.js";import"./index-BqxqbHVw.js";import"./PopoverPopup-Cu_vPmGM.js";import"./InternalBackdrop-C3Nd8T8u.js";import"./composite-DA-yFNZT.js";import"./index-1ksykTop.js";import"./getDisabledMountTransitionStyles-BazN2qJZ.js";import"./ToolbarRootContext-VQGHIcMO.js";import"./tick-C9oldqOI.js";import"./svgIconContainer-Ddyj85do.js";import"./small-cross-CbXKVrFp.js";import"./search-CzBp321S.js";import"./cross-o6c578IU.js";import"./useValueChanged-DU5TUzSb.js";import"./getPseudoElementBounds-BKvO9qL5.js";import"./CompositeItem-C8lI6v5m.js";import"./makeExternalStore-_J7Y5wzS.js";import"./BaseForm-Dvv3G0CV.js";import"./ActionButton-DaKwbCzu.js";import"./Button-GIqq_QaR.js";import"./SkeletonBar-2AkWt2iD.js";import"./Tooltip-4dHsdJ7I.js";import"./info-sign-DE7JE0Tc.js";import"./chevron-up-DudaSCwQ.js";import"./chevron-down-DCJDhdZ9.js";import"./useEventCallback-DvYBJvtj.js";import"./iconLoader-uxDq8e2-.js";import"./CompositeRoot-ThINdV3g.js";import"./Switch-Dkbz0lOD.js";import"./TimePicker-COw8QgYl.js";import"./CollapsiblePanel-DeE2lA1F.js";import"./error-D1WxR2nX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DiUqqX9-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
