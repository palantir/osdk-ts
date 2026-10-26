import{j as t,g as n}from"./iframe-DQPhK9GU.js";import{A as r}from"./action-form-BL9eDrRZ.js";import"./preload-helper-BexD08qU.js";import"./DropdownField-CW3rWXJa.js";import"./debounce-BzHe_40F.js";import"./useOsdkClient-Ddu_dn5L.js";import"./index-D7bWxKkV.js";import"./Input-C-_mqWVh.js";import"./useBaseUiId-BcnbbCrD.js";import"./useControlled-wY0jaWl-.js";import"./index-COKR49Jt.js";import"./index-nU_uKQML.js";import"./PopoverPopup-BMwOXxZm.js";import"./InternalBackdrop-3e5_1pLw.js";import"./composite-D8rz_NRd.js";import"./index-BPuMxoe3.js";import"./getDisabledMountTransitionStyles-CPz_8zQf.js";import"./ToolbarRootContext-DUYvPpGK.js";import"./tick-Dknq3fKL.js";import"./svgIconContainer-C-2S33jf.js";import"./small-cross-DF-5DtWu.js";import"./search-DEKkH3rw.js";import"./cross-Bz5ncAg7.js";import"./useValueChanged-D8JCzrrE.js";import"./getPseudoElementBounds-DNc_fjpY.js";import"./CompositeItem-D17QBVCs.js";import"./makeExternalStore-BK4AXna6.js";import"./BaseForm-BaTMGCql.js";import"./ActionButton-DIbN-5yx.js";import"./Button-BMvHZDY9.js";import"./SkeletonBar-BQMpvI0c.js";import"./Tooltip-DCFHObTT.js";import"./info-sign-CdVLjKNU.js";import"./chevron-up-B-XvxxSC.js";import"./chevron-down-CEtDqD55.js";import"./useEventCallback-Ak9Y6Sg_.js";import"./iconLoader-dowrq3EB.js";import"./Switch-B_n67LIj.js";import"./CompositeRoot-Kk6TiXwH.js";import"./TimePicker-DJO79CUJ.js";import"./CollapsiblePanel-CP7h0CHU.js";import"./error-CMvmkLKQ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BToX27Ix.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
