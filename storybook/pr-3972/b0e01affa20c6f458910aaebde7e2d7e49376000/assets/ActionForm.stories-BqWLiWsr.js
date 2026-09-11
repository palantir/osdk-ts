import{j as t,g as n}from"./iframe-D5Tg4ktw.js";import{A as r}from"./action-form-C_vHO6CR.js";import"./preload-helper-BaIqC2Pe.js";import"./DropdownField-BsQqxD2N.js";import"./debounce-EQoAU-g_.js";import"./useOsdkClient-uKmKN20Y.js";import"./index-BEbB4IUm.js";import"./Input-CN7F7SIp.js";import"./useBaseUiId-BdvoItIk.js";import"./useControlled-DObGwXHJ.js";import"./index-CFXN4yab.js";import"./index-DJsS0_Xm.js";import"./PopoverPopup-Cl3OtvIp.js";import"./InternalBackdrop-DLYljigh.js";import"./composite-B1gx-sbX.js";import"./index-FQYOWNbs.js";import"./getDisabledMountTransitionStyles-DiO2Bw4N.js";import"./ToolbarRootContext-0E-Oi6aL.js";import"./tick-_KNLE2bn.js";import"./svgIconContainer-C3wCuOXB.js";import"./small-cross-tZnJs89K.js";import"./search-DeZTwCkl.js";import"./cross-DzUcTLFz.js";import"./useValueChanged-Dyb99FcC.js";import"./getPseudoElementBounds-BprlNR5S.js";import"./CompositeItem-C5_2nepJ.js";import"./makeExternalStore-kA_iXT4K.js";import"./BaseForm-D2xVkqBf.js";import"./ActionButton-DdsvASl6.js";import"./Button-DiryTlNK.js";import"./SkeletonBar-Bm6lIBmj.js";import"./Tooltip-DFNv6I-3.js";import"./info-sign-DSoCPHu-.js";import"./chevron-up-DIJxNvtO.js";import"./chevron-down-C1ACHifJ.js";import"./useEventCallback-Cxq3Ypn0.js";import"./iconLoader-dKiM4Zw2.js";import"./CompositeRoot-BRGopZjr.js";import"./Switch-tE7JLB0k.js";import"./TimePicker-CtaMMcZt.js";import"./CollapsiblePanel-BIjDDqj4.js";import"./error-B5UKi7xe.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C-Pgn628.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
