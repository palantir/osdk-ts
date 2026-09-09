import{j as t,g as n}from"./iframe-DsCzZXCk.js";import{A as r}from"./action-form-fx5huqQC.js";import"./preload-helper-CXwWoCmC.js";import"./DropdownField-CoaNucHE.js";import"./debounce-D7PdVnfF.js";import"./useOsdkClient-DNGLR9mN.js";import"./index-Ci1-NLXL.js";import"./Input-B3Vnu-1d.js";import"./useBaseUiId-3kQUveob.js";import"./useControlled-DUHKt09G.js";import"./index-CdAzhd0H.js";import"./index-z1UHak1d.js";import"./PopoverPopup-C1a_kqTV.js";import"./InternalBackdrop-CwQed051.js";import"./composite-DHYMAbDg.js";import"./index-x55rnuch.js";import"./getDisabledMountTransitionStyles-hsS0T9Gj.js";import"./ToolbarRootContext-CrYLTP3H.js";import"./tick-G-bMGJF4.js";import"./svgIconContainer-D37GNyYn.js";import"./small-cross-CTvq5HsT.js";import"./search-Bol42X7R.js";import"./cross-nUvl9WFP.js";import"./useValueChanged-B2VG6ome.js";import"./getPseudoElementBounds-PBZ-34d2.js";import"./CompositeItem-D3-VN1Pw.js";import"./makeExternalStore-BJqmp2PE.js";import"./BaseForm-Dbd8a6eT.js";import"./ActionButton-DD385ZrQ.js";import"./Button-BddFDihs.js";import"./SkeletonBar-vf1a1dAS.js";import"./Tooltip-Vr2SVT2r.js";import"./info-sign-CzICZucV.js";import"./chevron-up-Du03sFRY.js";import"./chevron-down-Bpd_KI7a.js";import"./useEventCallback-BCVvlhOQ.js";import"./iconLoader-BeOn4duN.js";import"./CompositeRoot-CS8RFkeE.js";import"./Switch-C6RKvNON.js";import"./TimePicker-BDivGjBo.js";import"./CollapsiblePanel-xaQ9gFVs.js";import"./error-BfS-h5nJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-rktOS5NE.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
