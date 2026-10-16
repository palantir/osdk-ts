import{j as t,g as n}from"./iframe-Ce3jEZMI.js";import{A as r}from"./action-form-DwJu2L-X.js";import"./preload-helper-zFlo1Ag_.js";import"./DropdownField-Di-ezqK8.js";import"./debounce-peDMT9hw.js";import"./useOsdkClient-DI2ZXji8.js";import"./index-BWRu0lVk.js";import"./Input-k1XluRBB.js";import"./useBaseUiId-QnL0ah19.js";import"./useControlled-CEIiJDdv.js";import"./index-BVVmi8IY.js";import"./index-BJoSdgxJ.js";import"./PopoverPopup-BwxLotjv.js";import"./InternalBackdrop-CQpmpxtx.js";import"./composite-ow-DJQ4K.js";import"./index-Cmpp0QHi.js";import"./getDisabledMountTransitionStyles-Cul5wQT3.js";import"./ToolbarRootContext-DrlyoX7_.js";import"./tick-KK5E1r3y.js";import"./svgIconContainer-C7wsxhu-.js";import"./small-cross-CoufPZre.js";import"./search-BNuIHYDK.js";import"./cross-BA6yBz5j.js";import"./useValueChanged-a2NTFDpp.js";import"./getPseudoElementBounds-fhRNsuua.js";import"./CompositeItem-MWi5EakA.js";import"./makeExternalStore-B7_0KDnK.js";import"./BaseForm-Crm8eKWv.js";import"./ActionButton-BAsQofvL.js";import"./Button-DAGPL7mA.js";import"./SkeletonBar-BQO0I3KZ.js";import"./Tooltip-CeExzR4W.js";import"./info-sign-CgdRso0k.js";import"./chevron-up-CIRW580U.js";import"./chevron-down-BQlmJQrq.js";import"./useEventCallback-D_jfiLDi.js";import"./iconLoader-CTlcwC5s.js";import"./Switch-SF5gJhkj.js";import"./CompositeRoot-DM1zo66r.js";import"./TimePicker-CGL1-yuv.js";import"./CollapsiblePanel-ouQWdY0B.js";import"./error-C6zcgIRz.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Lf7fiJQ5.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
