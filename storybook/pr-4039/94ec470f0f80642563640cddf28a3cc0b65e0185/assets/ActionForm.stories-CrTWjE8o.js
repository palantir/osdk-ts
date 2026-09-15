import{j as t,g as n}from"./iframe-bRpqvs55.js";import{A as r}from"./action-form-DU59Icxb.js";import"./preload-helper-C6x1Ezwe.js";import"./DropdownField-BIZpi39T.js";import"./debounce-BIS8_Qcl.js";import"./useOsdkClient-BUIu772_.js";import"./index-BIhwktUh.js";import"./Input-prVuRYoh.js";import"./useBaseUiId-DlF45aum.js";import"./useControlled-Bp_OFH7Y.js";import"./index-D6zU7-mJ.js";import"./index-D5Q_aXSH.js";import"./PopoverPopup-DKbTsux3.js";import"./InternalBackdrop-JgiXSQHJ.js";import"./composite-eCHjWiuj.js";import"./index-BOSpr031.js";import"./getDisabledMountTransitionStyles-Cafoyzdu.js";import"./ToolbarRootContext-BWkwcBK1.js";import"./tick-BJJF7W42.js";import"./svgIconContainer-Bb8sMP7z.js";import"./small-cross-DEvpNvc7.js";import"./search-CyiikVap.js";import"./cross-W-3E-IIi.js";import"./useValueChanged-5Fh0Mmuj.js";import"./getPseudoElementBounds-CX56f88n.js";import"./CompositeItem-Cz1caG-o.js";import"./makeExternalStore-BuZjAFov.js";import"./BaseForm-C31nytxF.js";import"./ActionButton-Dy3mGQhY.js";import"./Button-0l6_p_5m.js";import"./SkeletonBar-DJvvFheA.js";import"./Tooltip-BmDPAYhk.js";import"./info-sign-D0DlMJTy.js";import"./chevron-up-BRTZt5KK.js";import"./chevron-down-hYv0Ya8W.js";import"./useEventCallback-6oyiY6oL.js";import"./iconLoader-BIiPyuWS.js";import"./CompositeRoot-Ci2IE8La.js";import"./Switch-BRyOualt.js";import"./TimePicker-B9EV76Hx.js";import"./CollapsiblePanel-_w77ihX2.js";import"./error-DYIwcxmR.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BMXSfQyV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
