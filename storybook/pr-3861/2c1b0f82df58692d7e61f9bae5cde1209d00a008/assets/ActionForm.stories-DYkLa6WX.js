import{j as t,g as n}from"./iframe-BsJOdbCL.js";import{A as r}from"./action-form-CuJjnool.js";import"./preload-helper-DxS_Velh.js";import"./DropdownField-BBHxtCFQ.js";import"./debounce-MidBPb8y.js";import"./useOsdkClient-CHvyPAtQ.js";import"./index-BqujQTW3.js";import"./Input-BYGlPWDj.js";import"./useBaseUiId-CB5lNuw3.js";import"./useControlled-7DT6e4WZ.js";import"./index-CEwR0XXE.js";import"./index-rSFhfOaH.js";import"./PopoverPopup-BGpU1k4a.js";import"./InternalBackdrop-B2GNz5hu.js";import"./composite-CaVgyQab.js";import"./index-D_l1l0Yv.js";import"./getDisabledMountTransitionStyles-DqSxt_J-.js";import"./ToolbarRootContext-DI-YguYW.js";import"./tick-DnQLWeom.js";import"./svgIconContainer-CrnbMK0b.js";import"./small-cross-D1GEAGXQ.js";import"./search-DGRADUpj.js";import"./cross-Bxqdiez_.js";import"./useValueChanged-T_IVy1TV.js";import"./getPseudoElementBounds-CXXR7gCg.js";import"./CompositeItem-BS607TGd.js";import"./makeExternalStore-DWYVyprO.js";import"./BaseForm-B53lRyph.js";import"./ActionButton-JWlqJiJ4.js";import"./Button-CWQ0OGf8.js";import"./SkeletonBar-CeSQZW6w.js";import"./Tooltip-cqHh73tY.js";import"./info-sign-owHADORR.js";import"./chevron-up-D6J66tkF.js";import"./chevron-down-CLIxImQx.js";import"./useEventCallback-BINgInB_.js";import"./iconLoader-C8A37teU.js";import"./CompositeRoot-_k5X5ZH2.js";import"./Switch-2iw6OUZm.js";import"./TimePicker-Bt6Fgmj7.js";import"./CollapsiblePanel-DMdta-mT.js";import"./error-Btl7YeDY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DV_LS9FP.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
