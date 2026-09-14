import{j as t,g as n}from"./iframe-B-owY9Z7.js";import{A as r}from"./action-form-CpRwr07D.js";import"./preload-helper-9dohNchO.js";import"./DropdownField-Br6lY0cs.js";import"./debounce-8Cu2Gz8K.js";import"./useOsdkClient-BO3W3UoD.js";import"./index-B6FNdyul.js";import"./Input-DO0-uKR0.js";import"./useBaseUiId-BuygkMJa.js";import"./useControlled-DU5wctnz.js";import"./index-D6Mlo6-X.js";import"./index-BLL9qzqo.js";import"./PopoverPopup-BP7HKGIF.js";import"./InternalBackdrop-Qs9WBPXA.js";import"./composite-CruT5ftQ.js";import"./index-Bd9R8qyi.js";import"./getDisabledMountTransitionStyles-B2Uy8nCz.js";import"./ToolbarRootContext-PF-H9oB3.js";import"./tick-DndUclkL.js";import"./svgIconContainer-SVfmpuZH.js";import"./small-cross-6e-BgKCt.js";import"./search-CeJ8ph1L.js";import"./cross-DAeYv9DV.js";import"./useValueChanged-CKB_GaD4.js";import"./getPseudoElementBounds-xcUg61qv.js";import"./CompositeItem-Czc0ACb3.js";import"./makeExternalStore-DCMzogXn.js";import"./BaseForm-BWmBUvOy.js";import"./ActionButton-BILzU60N.js";import"./Button-CdoyG0J5.js";import"./SkeletonBar-Dt6LDg3E.js";import"./Tooltip-CSFV9ySu.js";import"./info-sign-DDKCNwcu.js";import"./chevron-up-CF-KM72b.js";import"./chevron-down-KtY7GIs6.js";import"./useEventCallback-DEuppmtE.js";import"./iconLoader-Bi8FG0Nu.js";import"./CompositeRoot-M1Bf3EMV.js";import"./Switch-DcC3k2va.js";import"./TimePicker-CNtc53NO.js";import"./CollapsiblePanel-C-QRWB1j.js";import"./error-BnApDvy6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D7Kd4RWC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
