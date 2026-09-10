import{j as t,g as n}from"./iframe-B9pmQzab.js";import{A as r}from"./action-form-iLTJxqyu.js";import"./preload-helper-8ApCze4z.js";import"./DropdownField-BCe2-iEP.js";import"./debounce-IZroTv95.js";import"./useOsdkClient-DbItwRGL.js";import"./index-DJNcHwm8.js";import"./Input-DpZPwerh.js";import"./useBaseUiId-CeFMmA-9.js";import"./useControlled-BWGqCRkH.js";import"./index-D1sJuveY.js";import"./index-C-ZM_VQS.js";import"./PopoverPopup-ISDHMIyJ.js";import"./InternalBackdrop-fe3G5tCE.js";import"./composite-C0QPd-_Y.js";import"./index-k2Kxocqf.js";import"./getDisabledMountTransitionStyles-GXQzPAtX.js";import"./ToolbarRootContext-ByReu0dc.js";import"./tick-CElM4Hds.js";import"./svgIconContainer-CO7Z6-JZ.js";import"./small-cross-CUlfqa1g.js";import"./search-DgrCLXVb.js";import"./cross-8efItR-s.js";import"./useValueChanged-Ed0oXYeG.js";import"./getPseudoElementBounds-D3T2cPr4.js";import"./CompositeItem-CxryFH5r.js";import"./makeExternalStore-BiGH-jDa.js";import"./BaseForm-BXzDHroK.js";import"./ActionButton-BO9z-bgj.js";import"./Button-Bv8-UnbE.js";import"./SkeletonBar-rBovvZK_.js";import"./Tooltip-K8ZFMTxf.js";import"./info-sign-GoL8wkny.js";import"./chevron-up-D0K14Zfx.js";import"./chevron-down-CZhOdlZa.js";import"./useEventCallback-Bzn1utS3.js";import"./iconLoader-BwFA3LR4.js";import"./CompositeRoot-Ba6eZcsV.js";import"./Switch-DVpCSw53.js";import"./TimePicker-DVAUrSLm.js";import"./CollapsiblePanel-C6vhybKT.js";import"./error-RG5ruaVA.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-6gbwRZ-B.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
