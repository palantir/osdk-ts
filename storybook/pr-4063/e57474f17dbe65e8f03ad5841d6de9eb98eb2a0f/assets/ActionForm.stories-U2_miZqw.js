import{j as t,g as n}from"./iframe-D4LVDAiJ.js";import{A as r}from"./action-form-CFTo7M3V.js";import"./preload-helper-BRiuw1tM.js";import"./DropdownField-BuncSUDK.js";import"./debounce-B-C1jtyL.js";import"./useOsdkClient--x9hnGz1.js";import"./index-Doq37HVC.js";import"./Input-Dus9QmGC.js";import"./useBaseUiId-t0XnwFOX.js";import"./useControlled-BSRYlGKN.js";import"./index-DgptZbMC.js";import"./index-9wm5pOXR.js";import"./PopoverPopup--885M2Lm.js";import"./InternalBackdrop-BOzYgdF3.js";import"./composite-BgyxEEOk.js";import"./index-BFnO8bnI.js";import"./getDisabledMountTransitionStyles-DHkhoqiG.js";import"./ToolbarRootContext-VbrNfAOv.js";import"./tick-Du1HMgdZ.js";import"./svgIconContainer-CKDcZSuW.js";import"./small-cross-BGgjchjT.js";import"./search-BWsEyD_y.js";import"./cross-CrN1mHSM.js";import"./useValueChanged-eXWosK3O.js";import"./getPseudoElementBounds-BHzzAx7-.js";import"./CompositeItem-BgdG338-.js";import"./makeExternalStore-CGuk3GA7.js";import"./BaseForm-D4AcgO3S.js";import"./ActionButton-hlHYq4Ql.js";import"./Button-De22pfKg.js";import"./SkeletonBar-MoCvVI88.js";import"./Tooltip-1Df9hLxD.js";import"./info-sign-SWbdX-iD.js";import"./chevron-up-BScqMm5M.js";import"./chevron-down-DO0q0xd1.js";import"./useEventCallback-ecbQBYez.js";import"./iconLoader-DR0n1Rw2.js";import"./Switch-TAfseuUT.js";import"./CompositeRoot-yOf4enD8.js";import"./TimePicker-auajcEjB.js";import"./CollapsiblePanel-D8e_JP8A.js";import"./error-B5872Opm.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ooLMpNFk.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
