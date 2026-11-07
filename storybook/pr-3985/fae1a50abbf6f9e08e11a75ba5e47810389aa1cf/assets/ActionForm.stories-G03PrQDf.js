import{j as t,g as n}from"./iframe-DHBngpjq.js";import{A as r}from"./action-form-BGjZ0qZH.js";import"./preload-helper-CDXIiz1j.js";import"./DropdownField-DyD41Pi-.js";import"./debounce-1_s8xuqw.js";import"./useOsdkClient-BEYvK_M3.js";import"./index-By-FRoq9.js";import"./Input-Br87LXH7.js";import"./useBaseUiId-CzQMC21v.js";import"./useControlled-BLsTwB3H.js";import"./index-CTfQVRtO.js";import"./index-DVFITc1l.js";import"./isObject-BGFfVhib.js";import"./InternalBackdrop-B-hQyGJ7.js";import"./composite-uu2-UFVd.js";import"./index-DyyHxHFI.js";import"./getDisabledMountTransitionStyles-BaYxFf8Q.js";import"./ToolbarRootContext-B_eHvjGz.js";import"./tick-pBtnCrq_.js";import"./svgIconContainer-BAywG5PI.js";import"./small-cross-D3Sp72qo.js";import"./search-CiPmNh0i.js";import"./cross-DvvrZ3YV.js";import"./useValueChanged-DcmPguL4.js";import"./getPseudoElementBounds-Cbeakq3j.js";import"./CompositeItem-CbJoHss2.js";import"./makeExternalStore-CSHIV8LM.js";import"./BaseForm-B0dR9gBt.js";import"./ActionButton-DvzRdD4b.js";import"./Button-HCu8xw6G.js";import"./SkeletonBar-Bx3kLW2f.js";import"./Tooltip-Cb5l8A2K.js";import"./info-sign-_suzrD9N.js";import"./chevron-up-BhUGSrMQ.js";import"./chevron-down-D5Z6pf30.js";import"./useEventCallback-CEjVJsJU.js";import"./iconLoader-UcdbSVvw.js";import"./Switch-CwknNpsd.js";import"./CompositeRoot-B0E9Vg7q.js";import"./TimePicker-CweJAFHP.js";import"./CollapsiblePanel-BFOnfV46.js";import"./error-CH1gecQ4.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DVTP8TQr.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
