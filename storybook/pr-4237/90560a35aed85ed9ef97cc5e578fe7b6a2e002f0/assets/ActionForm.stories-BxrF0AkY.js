import{j as t,g as n}from"./iframe-Dcbb45TM.js";import{A as r}from"./action-form-D8l__94S.js";import"./preload-helper-D8JM7gnw.js";import"./DropdownField-DH_fpvNY.js";import"./debounce-CF6oR7xT.js";import"./useOsdkClient-vBOR5iVQ.js";import"./index-BP3mGvIi.js";import"./Input-DKG4JtdJ.js";import"./useBaseUiId-KvLNO8W4.js";import"./useControlled-Da1fb4mu.js";import"./index-LAjudTQg.js";import"./index-DPou_tLy.js";import"./PopoverPopup-0u1lAVs6.js";import"./InternalBackdrop-b2U-fCTd.js";import"./composite-BIYviI6v.js";import"./index-DmcmRKU2.js";import"./getDisabledMountTransitionStyles-XJIzxiBK.js";import"./ToolbarRootContext-CgWzIiHM.js";import"./tick-DrS_4neF.js";import"./svgIconContainer-C653aYE0.js";import"./small-cross-D2acqba7.js";import"./search-8-lHNRta.js";import"./cross-CFg2OY8m.js";import"./useValueChanged-Bf4o6EbE.js";import"./getPseudoElementBounds-BbdSIzYb.js";import"./CompositeItem-1Mp7uRya.js";import"./makeExternalStore-Dm_3NQPJ.js";import"./BaseForm-DjJxsPJk.js";import"./ActionButton-CriApq5G.js";import"./Button-Bfb_bO0G.js";import"./SkeletonBar-CBr_GrBQ.js";import"./Tooltip-CJk8wEl0.js";import"./info-sign-C6JvzN0I.js";import"./chevron-up-CIfC59-P.js";import"./chevron-down-B67Z7lxm.js";import"./useEventCallback-BI6RwFXd.js";import"./iconLoader-CmNVmiE1.js";import"./Switch-BeaH0nwM.js";import"./CompositeRoot-DVsnHDkI.js";import"./TimePicker-pFojEPe2.js";import"./CollapsiblePanel-C7bD2Jvr.js";import"./error-DGuxoAox.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BnTsjsNt.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
