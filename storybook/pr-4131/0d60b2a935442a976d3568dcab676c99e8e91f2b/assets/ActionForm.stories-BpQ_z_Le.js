import{j as t,g as n}from"./iframe-youlX2De.js";import{A as r}from"./action-form-BGK7wsRd.js";import"./preload-helper-DMj5aBc5.js";import"./DropdownField-DLS2xroO.js";import"./debounce-B4zD5peJ.js";import"./useOsdkClient-11CkZQ2p.js";import"./index-Dyy6V7kE.js";import"./Input-B5YU-z1C.js";import"./useBaseUiId-CNEu6f9Y.js";import"./useControlled-DaSybbDg.js";import"./index-rZeAfKdB.js";import"./index-DQbJRRPB.js";import"./PopoverPopup-DhxeTh5N.js";import"./InternalBackdrop-DrcATpaw.js";import"./composite-DF73ZPcS.js";import"./index-BKFOU1PI.js";import"./getDisabledMountTransitionStyles-CJj-Pq78.js";import"./ToolbarRootContext-CA4yJOZ7.js";import"./tick-DwbVRuy-.js";import"./svgIconContainer-jpw1hIcy.js";import"./small-cross-C88pqnLw.js";import"./search-D5ZZMY1l.js";import"./cross-JeqqL3a9.js";import"./useValueChanged-CwfpjC1s.js";import"./getPseudoElementBounds-CGTU7rr0.js";import"./CompositeItem-Cml7HDGs.js";import"./makeExternalStore-qhtMEBHa.js";import"./BaseForm-DK9M8ymq.js";import"./ActionButton-B9nof7-y.js";import"./Button-CbOY6Chn.js";import"./SkeletonBar-D9FqFwfd.js";import"./Tooltip-DefV4BIS.js";import"./info-sign-9_n8se0S.js";import"./chevron-up-z9XUttTL.js";import"./chevron-down-CmXpC65B.js";import"./useEventCallback-CBEba5_p.js";import"./iconLoader-C4BO5W0K.js";import"./Switch-DW_IeJhj.js";import"./CompositeRoot-cn2zaCMy.js";import"./TimePicker-0gZGfrd1.js";import"./CollapsiblePanel-DcdJjh9a.js";import"./error-BHWsO3Au.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BqmpDAQp.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
