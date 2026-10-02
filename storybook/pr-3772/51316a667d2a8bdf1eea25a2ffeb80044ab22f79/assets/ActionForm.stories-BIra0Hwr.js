import{j as t,g as n}from"./iframe-CdV0oMQK.js";import{A as r}from"./action-form-DzJUqDKX.js";import"./preload-helper-DYnb1G2Z.js";import"./DropdownField-DtCtfIum.js";import"./debounce-C-fCXie1.js";import"./useOsdkClient-CxdzKQBX.js";import"./index-CDOi726F.js";import"./Input-DcsAtJ_5.js";import"./useBaseUiId-qoWBNaJE.js";import"./useControlled-DmnLTdeY.js";import"./index-DgVn8Y3N.js";import"./index-CtEXs2m1.js";import"./PopoverPopup-oZ9Rd77s.js";import"./InternalBackdrop-BqcAGkPw.js";import"./composite-B01ubv1I.js";import"./index-C40UMVEa.js";import"./getDisabledMountTransitionStyles-iAxy3nU0.js";import"./ToolbarRootContext-sN3AAwIa.js";import"./tick-Bi7vgB1Y.js";import"./svgIconContainer-Db8D1oyf.js";import"./small-cross-CO2wkq1Q.js";import"./search-KAXH_KdC.js";import"./cross-DjfMhKqA.js";import"./useValueChanged-4-cIywSW.js";import"./getPseudoElementBounds-DCYHN6OR.js";import"./CompositeItem-BGsDUgBO.js";import"./makeExternalStore-Ble7iOu_.js";import"./BaseForm-B3GhmwL0.js";import"./ActionButton-B47enmWM.js";import"./Button-PcrXfoGH.js";import"./SkeletonBar-CtDTL4xI.js";import"./Tooltip-CRHEL8Uo.js";import"./info-sign-D5sNeD5c.js";import"./chevron-up-D67n3SMa.js";import"./chevron-down-CAimFdfR.js";import"./useEventCallback-BZlczu6G.js";import"./iconLoader-BjI3xiJh.js";import"./Switch-DPNrtbUA.js";import"./CompositeRoot-rbFLBB4H.js";import"./TimePicker-DQ0DoeTL.js";import"./CollapsiblePanel-BGdu-4zm.js";import"./error-DatCfw_J.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-tj5br0ur.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
