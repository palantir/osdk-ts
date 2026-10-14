import{j as t,g as n}from"./iframe-C4UMSUV8.js";import{A as r}from"./action-form-Dxp4m5IW.js";import"./preload-helper-BqsIy_YL.js";import"./DropdownField-CdX1mzab.js";import"./debounce-CZlA4PRB.js";import"./useOsdkClient-C3bf-TDO.js";import"./index-Dlv7asCS.js";import"./Input-Dd7hmS3r.js";import"./useBaseUiId-BfnaHgsG.js";import"./useControlled-DaMNSDAG.js";import"./index-Dm12TBSV.js";import"./index-DMrzx1Mz.js";import"./PopoverPopup-N5V--xdD.js";import"./InternalBackdrop-_W1XqsYG.js";import"./composite-BaqTaPKU.js";import"./index-C9vtPXO1.js";import"./getDisabledMountTransitionStyles-CQ_yz0-6.js";import"./ToolbarRootContext-DVOP2BC1.js";import"./tick-BvTPrsR3.js";import"./svgIconContainer-AOO7GD-s.js";import"./small-cross-CbMP9reg.js";import"./search-D1rWsfme.js";import"./cross-DzO2_pjl.js";import"./useValueChanged-GkMCatyW.js";import"./getPseudoElementBounds-CvXSJ4vT.js";import"./CompositeItem-DdxiUYfL.js";import"./makeExternalStore-CmEuGlMk.js";import"./BaseForm-v2bq0Vv4.js";import"./ActionButton-DPjqFZOR.js";import"./Button-3fs9_LlW.js";import"./SkeletonBar-BlB5K85_.js";import"./Tooltip-DEV4zdHe.js";import"./info-sign-2AkRIJ-8.js";import"./chevron-up-I5wkW0rm.js";import"./chevron-down-OaulZx0F.js";import"./useEventCallback-DafiBAM-.js";import"./iconLoader-B0caB_h_.js";import"./Switch-BZVZ4Okw.js";import"./CompositeRoot-BWiYgqjG.js";import"./TimePicker-BVNb5dNI.js";import"./CollapsiblePanel-CT-3U1A3.js";import"./error-Dz-jjHSU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DT43r1D8.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
