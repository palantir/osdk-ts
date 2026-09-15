import{j as t,g as n}from"./iframe-aV2EncWj.js";import{A as r}from"./action-form-Ps17uaxE.js";import"./preload-helper-BEXd_GfO.js";import"./DropdownField-Colx8jAu.js";import"./debounce-NzCavBVE.js";import"./useOsdkClient-D27FNOXw.js";import"./index-DAg7UqCb.js";import"./Input-DvwYRcaH.js";import"./useBaseUiId-C7CCsH5x.js";import"./useControlled-hdV7mmig.js";import"./index-hA2PEeQp.js";import"./index-BfjZxAF2.js";import"./PopoverPopup-frampLhw.js";import"./InternalBackdrop-kh4mgNPa.js";import"./composite-Dq2CI2j-.js";import"./index-DFQXRJJ6.js";import"./getDisabledMountTransitionStyles-bBx198Lm.js";import"./ToolbarRootContext-C9SuiabC.js";import"./tick-3h3QxDrA.js";import"./svgIconContainer-BCVXBQ-1.js";import"./small-cross-DA-oeMpB.js";import"./search-eiqCYccO.js";import"./cross-dxy14_5g.js";import"./useValueChanged-DvDRB8wM.js";import"./getPseudoElementBounds-DNc-4NGF.js";import"./CompositeItem-DvEec9Z1.js";import"./makeExternalStore-DG-eMtQv.js";import"./BaseForm-CRtdIxL8.js";import"./ActionButton-B1GQvJHP.js";import"./Button-D_vltk0m.js";import"./SkeletonBar-jVQq-MBX.js";import"./Tooltip-DgN0O71v.js";import"./info-sign-cLMPRcy9.js";import"./chevron-up-DCgzMmiW.js";import"./chevron-down-ZHnmZ23u.js";import"./useEventCallback-D6xgPZYQ.js";import"./iconLoader-nbq39vXe.js";import"./CompositeRoot-DD8UAhAQ.js";import"./Switch-B0t7hTBB.js";import"./TimePicker-ThX8C_Gw.js";import"./CollapsiblePanel-k7ZGWOLV.js";import"./error-Bsy631Mv.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DJdEIIDz.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
