import{j as t,g as n}from"./iframe-MDo3IV8i.js";import{A as r}from"./action-form-Db3bKIyr.js";import"./preload-helper-DePZz3Cx.js";import"./DropdownField-CmBVvZuj.js";import"./debounce-C7UDLVsq.js";import"./useOsdkClient-BLznHT_k.js";import"./index-Bd9muxHi.js";import"./Input-DM_kQkOg.js";import"./useBaseUiId-DZYLQUMX.js";import"./useControlled-OtMCa810.js";import"./index-C0Z9YQ4r.js";import"./index-DtzdNaWl.js";import"./PopoverPopup-vZaQfjxA.js";import"./InternalBackdrop-B_Z49Hjp.js";import"./composite-BLxakyPe.js";import"./index-DC6-gGNF.js";import"./getDisabledMountTransitionStyles-B5B6Fr9m.js";import"./ToolbarRootContext-gbgv7X5-.js";import"./tick-BIWm1VGl.js";import"./svgIconContainer-Di1UT1Hh.js";import"./small-cross-C2UBLUxY.js";import"./search-DZiAT2nK.js";import"./cross-DnJsfvPF.js";import"./useValueChanged-C_9hR8MX.js";import"./getPseudoElementBounds-CLPZWJOu.js";import"./CompositeItem-DLH43jaW.js";import"./makeExternalStore-0rzwJ2ZN.js";import"./BaseForm-C-eKrlog.js";import"./ActionButton-BfC02Ahv.js";import"./Button-Bqg_-6Me.js";import"./SkeletonBar-DAJEovb9.js";import"./Tooltip-BL4BcNe2.js";import"./info-sign-BjbZtNyK.js";import"./chevron-up-Txw090Cf.js";import"./chevron-down-WrjnBnPA.js";import"./useEventCallback-BiWUFDKH.js";import"./iconLoader-tD6NY8Mv.js";import"./Switch-Eg5hygx1.js";import"./CompositeRoot-DdPdynNw.js";import"./TimePicker-_hHGKt6-.js";import"./CollapsiblePanel-DuDuGP7y.js";import"./error-x3VOvdeC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bd9ZRtnK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
