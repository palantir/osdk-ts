import{j as t,g as n}from"./iframe-CgKUzItX.js";import{A as r}from"./action-form-CJ5aOtFm.js";import"./preload-helper-C8NMj1_t.js";import"./DropdownField-T4Xd-ty_.js";import"./debounce-BzubZrnK.js";import"./useOsdkClient-D6NF6aDi.js";import"./index-BGyRLoto.js";import"./Input-YdwMEp0H.js";import"./useBaseUiId-9QwtdzIz.js";import"./useControlled-ywgC3TRl.js";import"./index-DH7xuiv5.js";import"./index-DPbjuSTY.js";import"./PopoverPopup-CPzBvckh.js";import"./InternalBackdrop-Bg0vXpRx.js";import"./composite-C8pbzlSR.js";import"./index-BGmAK-zp.js";import"./getDisabledMountTransitionStyles-CMVjInPg.js";import"./ToolbarRootContext-Cn9ARR1m.js";import"./tick-D2qeh1kK.js";import"./svgIconContainer-3Z9BBN_f.js";import"./small-cross-B30TyiPZ.js";import"./search-d4lpn-YX.js";import"./cross-BCuSuLMn.js";import"./useValueChanged-DRRio9Te.js";import"./getPseudoElementBounds-DrvvxQqn.js";import"./CompositeItem-BImsaWuE.js";import"./makeExternalStore-CkIkERDP.js";import"./BaseForm-uFa7tryV.js";import"./ActionButton-BcgXFlaR.js";import"./Button-vrPbejrg.js";import"./SkeletonBar-CBQXt1TI.js";import"./Tooltip-C8G96OiC.js";import"./info-sign-BB8ALFku.js";import"./chevron-up-DjfOjFz1.js";import"./chevron-down-CUAqfL81.js";import"./useEventCallback-C9jSHP4H.js";import"./iconLoader-CEINF42k.js";import"./Switch-BjPBO7fV.js";import"./CompositeRoot-BPGGeBPS.js";import"./TimePicker-C9vAXYNS.js";import"./CollapsiblePanel-DVt2UmWD.js";import"./error-CPGG1yPH.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BCBab3ni.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
