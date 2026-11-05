import{j as t,g as n}from"./iframe-CQFC4dx4.js";import{A as r}from"./action-form-DXCWtjVu.js";import"./preload-helper-JcY_IPoe.js";import"./DropdownField-DfsozA8n.js";import"./debounce-CsZvoLYJ.js";import"./useOsdkClient-BWxKj0GW.js";import"./index-Cspojgcw.js";import"./Input-DXeuXn9d.js";import"./useBaseUiId-Dc6nK4KF.js";import"./useControlled-BVb8ax9g.js";import"./index-P5yCg6P1.js";import"./index-C4XVD7Cr.js";import"./PopoverPopup-DbpUO5Ur.js";import"./InternalBackdrop-p5Nji8FI.js";import"./composite-7q0vYS_p.js";import"./index-DJ2zeZf_.js";import"./getDisabledMountTransitionStyles-BKOCz1MI.js";import"./ToolbarRootContext-Bi5DI-Ar.js";import"./tick-BMJ6Rzun.js";import"./svgIconContainer-BKBde2aY.js";import"./small-cross-ikuTq--X.js";import"./search-BU20I270.js";import"./cross-DOs9H1e3.js";import"./useValueChanged-CeSGtFUw.js";import"./getPseudoElementBounds-D0fP0qz1.js";import"./CompositeItem-Don4IZ7P.js";import"./makeExternalStore-BfZd500_.js";import"./BaseForm-DlDhzDWc.js";import"./ActionButton-BtWiE4im.js";import"./Button-CcSga4fz.js";import"./SkeletonBar-ChRHj5aR.js";import"./Tooltip-DMkJ1Y0i.js";import"./info-sign-snjV-vSw.js";import"./chevron-up-CyNAIY2e.js";import"./chevron-down-giF0vKbh.js";import"./useEventCallback-Dl77xwkN.js";import"./iconLoader-yEs0bgTH.js";import"./Switch-CruLPC3H.js";import"./CompositeRoot-CRdRT-Ke.js";import"./TimePicker-tQi9mO-X.js";import"./CollapsiblePanel-DGJbWxdi.js";import"./error-CkMA_OFf.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-N-oYpdpA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
