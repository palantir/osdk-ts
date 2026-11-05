import{j as t,g as n}from"./iframe-vYbyM6ZV.js";import{A as r}from"./action-form-BtaHqEYm.js";import"./preload-helper-tlI1dOrD.js";import"./DropdownField-CEiBQEPL.js";import"./debounce-ZlEARpZP.js";import"./useOsdkClient-B3gw6ZH8.js";import"./index-MNGJ9mHV.js";import"./Input-B1kKyDDu.js";import"./useBaseUiId-ByptStcX.js";import"./useControlled-D5IPizVc.js";import"./index-D1tTu4S3.js";import"./index-CFPLyZ8s.js";import"./PopoverPopup-SuAtAnXX.js";import"./InternalBackdrop-DSD4DMxI.js";import"./composite-DaPRapKm.js";import"./index-BnFHYNSY.js";import"./getDisabledMountTransitionStyles-C65N2SkC.js";import"./ToolbarRootContext-0aJ-Z7Lw.js";import"./tick-BpFV42eT.js";import"./svgIconContainer-DfARiMaj.js";import"./small-cross-DI81dXVA.js";import"./search-Ci6nyrFb.js";import"./cross-BEbCovKj.js";import"./useValueChanged-DKWqaoyN.js";import"./getPseudoElementBounds-9yb0vIH6.js";import"./CompositeItem-D-60Q45b.js";import"./makeExternalStore-CEiL8mSF.js";import"./BaseForm-B_vNWaqz.js";import"./ActionButton-DcwkvYtY.js";import"./Button-CkPI_2po.js";import"./SkeletonBar-BL8RDJ3t.js";import"./Tooltip-D32D5mnM.js";import"./info-sign-CWH7HUCJ.js";import"./chevron-up-3Jv4vGQo.js";import"./chevron-down-CCDvggT2.js";import"./useEventCallback-BR6mcw5k.js";import"./iconLoader-Bv3CChDM.js";import"./Switch-Bawn1D-5.js";import"./CompositeRoot-dbaIZ2L7.js";import"./TimePicker-DwTpFBeK.js";import"./CollapsiblePanel-CocTkMtk.js";import"./error-bzzwZ2XW.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BX5YNskQ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
