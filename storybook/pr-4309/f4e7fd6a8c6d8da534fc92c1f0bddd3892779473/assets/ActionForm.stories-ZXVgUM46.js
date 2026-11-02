import{j as t,g as n}from"./iframe-DpkDs-j9.js";import{A as r}from"./action-form-DSRABM3O.js";import"./preload-helper-BJT4uFVz.js";import"./DropdownField-DHNplSVP.js";import"./debounce-D7fYvY9R.js";import"./useOsdkClient-CQh8Mqca.js";import"./index-BfXl5P7F.js";import"./Input-xEESwrVF.js";import"./useBaseUiId-BRApLhFH.js";import"./useControlled-Z-gfVngv.js";import"./index-CXFl5eQh.js";import"./index-g8PO-kx8.js";import"./PopoverPopup-4S9R5K2E.js";import"./InternalBackdrop-DC1ctXr5.js";import"./composite-CYXI2UHT.js";import"./index-NMIlAdCq.js";import"./getDisabledMountTransitionStyles-CXfJ9VyR.js";import"./ToolbarRootContext-BtylWzdM.js";import"./tick-BPyaXYcz.js";import"./svgIconContainer-0YWxOZfe.js";import"./small-cross-TQik36_V.js";import"./search-9Dh1YH6c.js";import"./cross-CySzb61z.js";import"./useValueChanged-HHJBGoHs.js";import"./getPseudoElementBounds-BrH_UC6z.js";import"./CompositeItem-BWOALM-p.js";import"./makeExternalStore-DVFvu1DO.js";import"./BaseForm-DrNONBpW.js";import"./ActionButton-CMt3pcys.js";import"./Button-DUyzdMzu.js";import"./SkeletonBar-CxtJcPP9.js";import"./Tooltip-D5NnoavJ.js";import"./info-sign-CLnhEKBF.js";import"./chevron-up-JsLnX-_r.js";import"./chevron-down-_hw012xs.js";import"./useEventCallback-BPE_ThAx.js";import"./iconLoader-BTB8GOSF.js";import"./Switch-Df9kAnjn.js";import"./CompositeRoot-C1Mq1mgm.js";import"./TimePicker-CX7JnGoV.js";import"./CollapsiblePanel-DEhHFVMb.js";import"./error-CJpmyc4X.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D7yY5fd-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
