import{j as t,g as n}from"./iframe-gwjWh6aP.js";import{A as r}from"./action-form-C401EH23.js";import"./preload-helper-bIyT3R7b.js";import"./DropdownField-Du154yBU.js";import"./debounce-nVQqP8JB.js";import"./useOsdkClient-DKJIj3oZ.js";import"./index-B2e6YLgb.js";import"./Input-B14JiyW9.js";import"./useBaseUiId-MuGd9EbB.js";import"./useControlled-BRAT0rWw.js";import"./index-C2Xm0Ig8.js";import"./index-CctUI8eo.js";import"./PopoverPopup-gtrR7YRy.js";import"./InternalBackdrop-Be_icURP.js";import"./composite-XNngWcyG.js";import"./index-DqPPge5H.js";import"./getDisabledMountTransitionStyles-CdwEI3h2.js";import"./ToolbarRootContext-eiDeLXye.js";import"./tick-mEiPhkv2.js";import"./svgIconContainer-uf6Xe766.js";import"./small-cross-DFJo2BXV.js";import"./search-77UZhWyC.js";import"./cross-CxSJV-iM.js";import"./useValueChanged-Cq6kIfvu.js";import"./getPseudoElementBounds-Cors6fEL.js";import"./CompositeItem-B632hz3W.js";import"./makeExternalStore-DOMUefpT.js";import"./BaseForm-BZYAieXf.js";import"./ActionButton-DUFTPwmt.js";import"./Button-DYsrDr-V.js";import"./SkeletonBar-MPFiyDqC.js";import"./Tooltip-a4Yw_fKw.js";import"./info-sign-B1YFJeRr.js";import"./chevron-up-m8FkoQnf.js";import"./chevron-down-Bpsf2br_.js";import"./useEventCallback-g73YrOE1.js";import"./iconLoader-7Bubk69E.js";import"./Switch-CXtzTeK3.js";import"./CompositeRoot-CSWL0J3s.js";import"./TimePicker-Bg3fBsZG.js";import"./CollapsiblePanel-zc_GBnu-.js";import"./error-CG0c4OaM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CT1e8NKK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
