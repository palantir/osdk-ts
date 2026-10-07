import{j as t,g as n}from"./iframe-BqwXQKpA.js";import{A as r}from"./action-form-CoovsNOv.js";import"./preload-helper-CPn3kR4s.js";import"./DropdownField-QmoT8zOZ.js";import"./debounce-BqMuZJVi.js";import"./useOsdkClient-r71R63wR.js";import"./index-CYwWJaLD.js";import"./Input-DTs9C08W.js";import"./useBaseUiId-DA7_UCFd.js";import"./useControlled-BcFAz7-u.js";import"./index-C72iR5_f.js";import"./index-jZeUOwty.js";import"./PopoverPopup-nFVTJuTn.js";import"./InternalBackdrop-BKOhgmyu.js";import"./composite-Bp-cKdPO.js";import"./index-8nJMg384.js";import"./getDisabledMountTransitionStyles-BfGLnaja.js";import"./ToolbarRootContext-D7_GPkI_.js";import"./tick-BEDQHRbq.js";import"./svgIconContainer-r8u0NG4v.js";import"./small-cross-ClthSwzC.js";import"./search-1XCyntXF.js";import"./cross-CedSfFXt.js";import"./useValueChanged-CCMKETAO.js";import"./getPseudoElementBounds-DZfA0kMC.js";import"./CompositeItem-DhjczCvx.js";import"./makeExternalStore-CyyUqBSG.js";import"./BaseForm-ANxaRd-H.js";import"./ActionButton-BAZu2Krn.js";import"./Button-DZqTJuVj.js";import"./SkeletonBar-ZCxSjfu7.js";import"./Tooltip-Bk8ovUyB.js";import"./info-sign-eq2ihUD6.js";import"./chevron-up-CBvqvd9z.js";import"./chevron-down-Dhf3bz-4.js";import"./useEventCallback-Cv2hevdH.js";import"./iconLoader-D0Rjaibb.js";import"./Switch-TDdj6xRh.js";import"./CompositeRoot-B2cteOrF.js";import"./TimePicker-Ib275kCv.js";import"./CollapsiblePanel-OwoGrBMO.js";import"./error-CT5yNLGi.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-p_rJ049m.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
