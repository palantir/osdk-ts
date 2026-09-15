import{j as t,g as n}from"./iframe-BTZXjcS6.js";import{A as r}from"./action-form-6tZP_KcS.js";import"./preload-helper-C9NzPdgc.js";import"./DropdownField-BGDFHIhQ.js";import"./debounce-BkHDw0VY.js";import"./useOsdkClient-Cw0tNi-2.js";import"./index-CeqBwR3m.js";import"./Input-CufnAxBU.js";import"./useBaseUiId-BYa5JSvm.js";import"./useControlled-D3czSe4k.js";import"./index-Bc5CyDlw.js";import"./index-PyK1kYPr.js";import"./PopoverPopup-C-rIrhf-.js";import"./InternalBackdrop-D9v-IY9L.js";import"./composite-Bir0R2T2.js";import"./index-D4TIv0Oq.js";import"./getDisabledMountTransitionStyles-CE8RpoIN.js";import"./ToolbarRootContext-CSsWfPwj.js";import"./tick-CZ2olpkR.js";import"./svgIconContainer-B_6Ye4VC.js";import"./small-cross-C8iYyEOq.js";import"./search-B_jja5k9.js";import"./cross-B7KIcqou.js";import"./useValueChanged-dea3ckth.js";import"./getPseudoElementBounds-CEAZG3b7.js";import"./CompositeItem-BbZyoEpe.js";import"./makeExternalStore-CzWUEmmK.js";import"./BaseForm-CdmFbCnV.js";import"./ActionButton-DtvrG6sU.js";import"./Button-tBNbm5Ca.js";import"./SkeletonBar-Cl9ArMG3.js";import"./Tooltip-4a177B8O.js";import"./info-sign-CP5Xddfo.js";import"./chevron-up-DuZTZv0H.js";import"./chevron-down-BnB-eP8_.js";import"./useEventCallback-C8TjJx_C.js";import"./iconLoader-CFCNIQOv.js";import"./CompositeRoot-DgLdT1BM.js";import"./Switch-CvXdDrGi.js";import"./TimePicker-CzwQU54X.js";import"./CollapsiblePanel-CiJsgmp5.js";import"./error-CNEXn0eH.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Ca4dglEg.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
