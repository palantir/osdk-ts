import{j as t,g as n}from"./iframe-mxG0bqmN.js";import{A as r}from"./action-form-Lmp21aHD.js";import"./preload-helper-CNw17NEq.js";import"./DropdownField-DDaAL4R3.js";import"./debounce-CTavI0VY.js";import"./useOsdkClient-D60YQHAg.js";import"./index-29oGgzLZ.js";import"./Input-DAYbAIy1.js";import"./useBaseUiId-B0pa-b1P.js";import"./useControlled-CwpY0gyY.js";import"./index-LiG5jLj1.js";import"./index-xs8nS-0V.js";import"./PopoverPopup-Cs7h6BtC.js";import"./InternalBackdrop-CGuoD2YW.js";import"./composite-CT4w3sd4.js";import"./index-CxXsu0GI.js";import"./getDisabledMountTransitionStyles-9AH5tTIW.js";import"./ToolbarRootContext-fx2tIRtZ.js";import"./tick-jAHr_TTi.js";import"./svgIconContainer-rUf9sgj2.js";import"./small-cross-B4Qofj2m.js";import"./search-D0vl5yax.js";import"./cross-D6Tl4R1E.js";import"./useValueChanged-pIGQFkB0.js";import"./getPseudoElementBounds-Bb4Xtmeq.js";import"./CompositeItem-CqN63eX8.js";import"./makeExternalStore-DsBTIsva.js";import"./BaseForm-CmzjixHo.js";import"./ActionButton-Cf-j963P.js";import"./Button-CoXV5wZD.js";import"./SkeletonBar-BCvv_Y3s.js";import"./Tooltip-z0kTVIGb.js";import"./info-sign-Bf42yHIJ.js";import"./chevron-up-CNYf-9NY.js";import"./chevron-down-BPLfSvEY.js";import"./useEventCallback-L-Hi9oaa.js";import"./iconLoader-CsYekcGG.js";import"./Switch-CB7doJhF.js";import"./CompositeRoot-B-GjY88p.js";import"./TimePicker-Bhp06--7.js";import"./CollapsiblePanel-BCX6O8yN.js";import"./error-C0pmiaE9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BccI-HLw.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
