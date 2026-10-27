import{j as t,g as n}from"./iframe-COVETwhx.js";import{A as r}from"./action-form-DlTGixYf.js";import"./preload-helper-B-xfSmD6.js";import"./DropdownField-CgcUEzHA.js";import"./debounce-Dc_lQPIE.js";import"./useOsdkClient-DUa_DGnQ.js";import"./index-bOxlMW9W.js";import"./Input-DDxMXv2L.js";import"./useBaseUiId-2z9ajXTy.js";import"./useControlled-eVeEVm0U.js";import"./index-SM4cV6TD.js";import"./index-BadFZGVY.js";import"./PopoverPopup-DUufvOMw.js";import"./InternalBackdrop-BaZjvCUN.js";import"./composite-kZubSwMs.js";import"./index-Dtx0mzcz.js";import"./getDisabledMountTransitionStyles-Czfivuu1.js";import"./ToolbarRootContext-ra_8dAxJ.js";import"./tick-C-EouHxY.js";import"./svgIconContainer-gsbuNadi.js";import"./small-cross-BfZtJMTE.js";import"./search-2wDgAEqi.js";import"./cross-CCyLZ_a3.js";import"./useValueChanged-D9aAEcAT.js";import"./getPseudoElementBounds-DSG6kIql.js";import"./CompositeItem-Dg_iEtAz.js";import"./makeExternalStore-BjWwL6YG.js";import"./BaseForm-HqhOA2Jz.js";import"./ActionButton-CWVjt9h4.js";import"./Button-D7hgHtqc.js";import"./SkeletonBar-CdNxN4hg.js";import"./Tooltip-BPacsOBo.js";import"./info-sign-BjCqFMxS.js";import"./chevron-up-BQFuekNF.js";import"./chevron-down-Kndiv9KN.js";import"./useEventCallback-XIafyipZ.js";import"./iconLoader-CBhYJBMN.js";import"./Switch-YhX60JE7.js";import"./CompositeRoot-Ch55eIai.js";import"./TimePicker-DarOYeC-.js";import"./CollapsiblePanel-DqoXoaOR.js";import"./error-Dso-ncgj.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DVwyRo2Q.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
