import{j as t,g as n}from"./iframe-CRfkLV31.js";import{A as r}from"./action-form-DiABWgS3.js";import"./preload-helper-YWkr71E4.js";import"./DropdownField-IPwkGfmB.js";import"./debounce-D-aRhyl3.js";import"./useOsdkClient-BNC8fnuO.js";import"./index-DFmae8Ml.js";import"./Input-C9MxuagH.js";import"./useBaseUiId-CtBQzgSV.js";import"./useControlled-B56Cy6tA.js";import"./index-Dqg3-20q.js";import"./index-xXRsgkLL.js";import"./PopoverPopup-qLtR5Yx9.js";import"./InternalBackdrop-Hd16GtHK.js";import"./composite-Caz7Fjnj.js";import"./index-D4xobDeS.js";import"./getDisabledMountTransitionStyles-DL_MWW6U.js";import"./ToolbarRootContext-DesSIIiD.js";import"./tick-DaS6FevP.js";import"./svgIconContainer-Cv_5fobV.js";import"./small-cross-Bp20qFfY.js";import"./search-DgbssBMa.js";import"./cross-2MhXpbG_.js";import"./useValueChanged-ojMWA7Lu.js";import"./getPseudoElementBounds-CXdwiOru.js";import"./CompositeItem-BIX1YXND.js";import"./makeExternalStore-DD66B2VR.js";import"./BaseForm-cKNsJxSw.js";import"./ActionButton-DCGdEOGa.js";import"./Button-COPRfQ9y.js";import"./SkeletonBar-h9eX593x.js";import"./Tooltip-C3E-sj79.js";import"./info-sign-C41G3Aur.js";import"./chevron-up-CnPjyp5S.js";import"./chevron-down-CQ908lz2.js";import"./useEventCallback-BWqA8sXr.js";import"./iconLoader-B9MV0gMK.js";import"./Switch-BnUPhqc2.js";import"./CompositeRoot-vG43NwJO.js";import"./TimePicker-H1XQ-oH7.js";import"./CollapsiblePanel-BpxJ4S1Z.js";import"./error-Bjl4tfNj.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BXaEjRyq.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
