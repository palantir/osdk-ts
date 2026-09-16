import{j as t,g as n}from"./iframe-5UDGUP80.js";import{A as r}from"./action-form-B2w1yVuy.js";import"./preload-helper-C4oCDBip.js";import"./DropdownField-Do75zApJ.js";import"./debounce-BHw5pdhf.js";import"./useOsdkClient-Cry0QHXA.js";import"./index-Bugktx71.js";import"./Input-Dk-R4cjA.js";import"./useBaseUiId-BJavFBRa.js";import"./useControlled--GaTcUFv.js";import"./index-B43ppQJK.js";import"./index-CFmBTWdv.js";import"./PopoverPopup-uZRZUKrc.js";import"./InternalBackdrop-BDP5HkEg.js";import"./composite-BocxrVtD.js";import"./index-BPg1wn6n.js";import"./getDisabledMountTransitionStyles-Dt1lgd6K.js";import"./ToolbarRootContext-D-36hmPD.js";import"./tick-DHT-rrDO.js";import"./svgIconContainer-BQ_U4GID.js";import"./small-cross-DJ3pxLUM.js";import"./search-DXPDoI0I.js";import"./cross-CxetxkJH.js";import"./useValueChanged-CIWK-Rio.js";import"./getPseudoElementBounds-7jKiSX97.js";import"./CompositeItem-CF8sbYQc.js";import"./makeExternalStore-DwYufUqB.js";import"./BaseForm-CD1LaQMf.js";import"./ActionButton-BcauRl8O.js";import"./Button-_SyP2AI3.js";import"./SkeletonBar-kb5Emx81.js";import"./Tooltip-BF8B5Q2Y.js";import"./info-sign-Cq8FxaRM.js";import"./chevron-up-CF15OzA0.js";import"./chevron-down-D3oAKYgi.js";import"./useEventCallback-BBIFPkUx.js";import"./iconLoader-C_Z7KmtW.js";import"./CompositeRoot-D8RYvCE3.js";import"./Switch-BtEeK5mR.js";import"./TimePicker-BfJKrcEt.js";import"./CollapsiblePanel-C1JLT-WA.js";import"./error-BTC-cXwr.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-iD8vruam.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
