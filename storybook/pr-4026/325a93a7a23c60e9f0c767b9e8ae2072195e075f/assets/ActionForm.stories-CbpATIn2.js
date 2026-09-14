import{j as t,g as n}from"./iframe-NlvaTXdz.js";import{A as r}from"./action-form-C_G7PSv_.js";import"./preload-helper-11218VAb.js";import"./DropdownField-BOcDuARz.js";import"./debounce-BGWK8YL4.js";import"./useOsdkClient-FuspldWR.js";import"./index-B0X1kouN.js";import"./Input-ec2719nZ.js";import"./useBaseUiId-Cak_Gf6y.js";import"./useControlled-Dr03MbeI.js";import"./index-zA5UJtgN.js";import"./index-BKEieiUG.js";import"./PopoverPopup-CVjAB-qP.js";import"./InternalBackdrop-81BDBXVN.js";import"./composite-BVOO1HYh.js";import"./index-CVSwwXpW.js";import"./getDisabledMountTransitionStyles-DMxebDRk.js";import"./ToolbarRootContext-BusYBQnb.js";import"./tick-DMWwchqI.js";import"./svgIconContainer-Dx3Wsu_D.js";import"./small-cross-9qxQlKft.js";import"./search-JCoXnDaS.js";import"./cross-3E2um-ab.js";import"./useValueChanged-DDbbsCD3.js";import"./getPseudoElementBounds-CgEw87z9.js";import"./CompositeItem--ZMxCD0o.js";import"./makeExternalStore-BJZbhgwh.js";import"./BaseForm-B8FXuLjE.js";import"./ActionButton-D2vkEZRA.js";import"./Button-Cj6didcq.js";import"./SkeletonBar-BEPts0M1.js";import"./Tooltip-Bu2sAhK0.js";import"./info-sign-aQLYPuG5.js";import"./chevron-up-BTu_QsjG.js";import"./chevron-down-dfuDLNdx.js";import"./useEventCallback-DIZPvIjV.js";import"./iconLoader-B08-KcPA.js";import"./CompositeRoot-CDJQI2Ny.js";import"./Switch-TpAM6LuO.js";import"./TimePicker-Bz8wL1Hl.js";import"./CollapsiblePanel-DnncBNgb.js";import"./error-CV3Wyi-T.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-zr1-J277.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
