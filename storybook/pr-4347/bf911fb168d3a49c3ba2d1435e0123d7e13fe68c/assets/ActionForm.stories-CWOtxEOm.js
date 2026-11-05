import{j as t,g as n}from"./iframe-Deuk3WWS.js";import{A as r}from"./action-form-mVb4CSah.js";import"./preload-helper-BBagj194.js";import"./DropdownField-BUzKXDS6.js";import"./debounce-BRZYJGiS.js";import"./useOsdkClient-CXg2SlsO.js";import"./index-6Crz7A4k.js";import"./Input-DB3pzys-.js";import"./useBaseUiId-C0TzrPg5.js";import"./useControlled-Ck5NZ_4o.js";import"./index-CLNZjEzY.js";import"./index-T88N5Ozy.js";import"./PopoverPopup-Bqj9UCPW.js";import"./InternalBackdrop-BSAjnJ8q.js";import"./composite-CHecoTnn.js";import"./index-DdVo18Pi.js";import"./getDisabledMountTransitionStyles-jk1RFGGJ.js";import"./ToolbarRootContext-BQx_lx6V.js";import"./tick-DMuR0LZC.js";import"./svgIconContainer-B5ALG4eV.js";import"./small-cross-B4XcSwLB.js";import"./search-CbQ17IfG.js";import"./cross-BVTbes25.js";import"./useValueChanged-BgV54nDS.js";import"./getPseudoElementBounds-BDKVNpp1.js";import"./CompositeItem-D95IUf9G.js";import"./makeExternalStore-C0hhujMA.js";import"./BaseForm-DIRG34ZJ.js";import"./ActionButton-DFvwDNjB.js";import"./Button-NLGJUEdX.js";import"./SkeletonBar-DSTTd06h.js";import"./Tooltip-BV34caG_.js";import"./info-sign-aK_ggKmu.js";import"./chevron-up-ZuExc0Ep.js";import"./chevron-down-CzdIHmMJ.js";import"./useEventCallback-Cb6Txe3l.js";import"./iconLoader-DeZnvuQL.js";import"./Switch-gNVE9KS7.js";import"./CompositeRoot-B8pT3EHZ.js";import"./TimePicker-DY4r7aY3.js";import"./CollapsiblePanel-4fPAfwdp.js";import"./error-kMW-uU3e.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ZZvmUZ78.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
