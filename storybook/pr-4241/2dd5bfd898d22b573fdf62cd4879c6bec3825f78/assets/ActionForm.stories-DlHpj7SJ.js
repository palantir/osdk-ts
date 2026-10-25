import{j as t,g as n}from"./iframe-Cz66haSq.js";import{A as r}from"./action-form-DMRq8LaY.js";import"./preload-helper-xhSAljX0.js";import"./DropdownField-B7Jif8UN.js";import"./debounce-BQlWP471.js";import"./useOsdkClient-DPYsXDsF.js";import"./index-BUXfO4Ju.js";import"./Input-Bxz-Dd7O.js";import"./useBaseUiId--zYyuape.js";import"./useControlled-C9QmB7A0.js";import"./index-0XJJDvoy.js";import"./index-DfGIRzxo.js";import"./PopoverPopup-lHWxOezE.js";import"./InternalBackdrop-Cy2hO_QK.js";import"./composite-BA9faNy6.js";import"./index-CP2YAN8J.js";import"./getDisabledMountTransitionStyles-Df62lxLU.js";import"./ToolbarRootContext-B9foH7Qy.js";import"./tick-DHfOLs3o.js";import"./svgIconContainer-DHL3SwmU.js";import"./small-cross-BvAVeELv.js";import"./search-ARM4tErG.js";import"./cross-D9OamDgN.js";import"./useValueChanged-CFnHS4Ph.js";import"./getPseudoElementBounds-KBPA7oty.js";import"./CompositeItem-hCCScXH4.js";import"./makeExternalStore-CSjj7q-A.js";import"./BaseForm-apRkAUQo.js";import"./ActionButton-JYX3c3SK.js";import"./Button-C0vlEOkp.js";import"./SkeletonBar-n0_YCfbh.js";import"./Tooltip-Cpc6auoa.js";import"./info-sign-Bvk296hi.js";import"./chevron-up-CJ1mApF9.js";import"./chevron-down-e8LYC-cq.js";import"./useEventCallback-CBZ6ta6R.js";import"./iconLoader-CfZIpxc0.js";import"./Switch-D7IvJNKT.js";import"./CompositeRoot-BcvfTJJB.js";import"./TimePicker-Dv6yjuag.js";import"./CollapsiblePanel-CDnOBlfI.js";import"./error-CctugoDe.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BKDPrjKN.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
