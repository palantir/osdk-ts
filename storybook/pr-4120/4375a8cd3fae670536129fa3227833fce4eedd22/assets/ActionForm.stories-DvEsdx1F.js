import{j as t,g as n}from"./iframe-CxgAHdD_.js";import{A as r}from"./action-form-VbDXjDX3.js";import"./preload-helper-DzzfBRd8.js";import"./DropdownField-DQTuRx4r.js";import"./debounce-BfZR2tut.js";import"./useOsdkClient-ByyBiwZ3.js";import"./index-B6MbbFlT.js";import"./Input-DwYZqNpM.js";import"./useBaseUiId-DFqoi1rW.js";import"./useControlled-UHTW7SDW.js";import"./index-JYYI4S_c.js";import"./index-C5Y_pAhG.js";import"./PopoverPopup-0jo72wW7.js";import"./InternalBackdrop-Crloy16K.js";import"./composite-BPWDb3yK.js";import"./index-D-vA12FC.js";import"./getDisabledMountTransitionStyles-dFS3a40R.js";import"./ToolbarRootContext-CWhOmDUt.js";import"./tick-DFLiPhFT.js";import"./svgIconContainer-DjIuQsyB.js";import"./small-cross-B2gJHFCh.js";import"./search-DdlCwk58.js";import"./cross-EITDvaH2.js";import"./useValueChanged-BU8URL3f.js";import"./getPseudoElementBounds-X4FvtDz7.js";import"./CompositeItem-rluq41vP.js";import"./makeExternalStore-BX4690TY.js";import"./BaseForm-DHX_dBrs.js";import"./ActionButton-Dckwg9He.js";import"./Button-CKsUHdvx.js";import"./SkeletonBar-MqJ57wAm.js";import"./Tooltip-Dr79PoMC.js";import"./info-sign-O5cfifHx.js";import"./chevron-up-mSDs35JY.js";import"./chevron-down-BzYJ5JTr.js";import"./useEventCallback-sGjAmQeH.js";import"./iconLoader-DihKUXVn.js";import"./Switch-DqQnQOVm.js";import"./CompositeRoot-CDlqzIwZ.js";import"./TimePicker-CQguWSWW.js";import"./CollapsiblePanel-Dovlacux.js";import"./error-BEe-jKvu.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CAH8aQvL.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
