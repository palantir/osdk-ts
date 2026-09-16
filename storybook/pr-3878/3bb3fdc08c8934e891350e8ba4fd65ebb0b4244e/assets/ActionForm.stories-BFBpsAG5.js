import{j as t,g as n}from"./iframe-Q3lyvqpT.js";import{A as r}from"./action-form-u0Mh1-Xl.js";import"./preload-helper-C1UOXpSy.js";import"./DropdownField-D-IHjSdp.js";import"./debounce-Bsm6DEnd.js";import"./useOsdkClient-DfbTHzVZ.js";import"./index-DeVeQfvD.js";import"./Input-DsdhnLi8.js";import"./useBaseUiId-TlHWJ25V.js";import"./useControlled-D3J0OrAn.js";import"./index-BgSh7jc2.js";import"./index-Bkfj5pmT.js";import"./PopoverPopup-BMgvSen-.js";import"./InternalBackdrop-CRj-pdnm.js";import"./composite-BRlBDXOv.js";import"./index-Bl6Opt5R.js";import"./getDisabledMountTransitionStyles-CX6UYYQ4.js";import"./ToolbarRootContext-bI52zd0O.js";import"./tick-CuCRS-A9.js";import"./svgIconContainer-_aeVyyfk.js";import"./small-cross-BEYL-4rR.js";import"./search-DRlPV6Yf.js";import"./cross-0utMfnpw.js";import"./useValueChanged-BQwBfP0w.js";import"./getPseudoElementBounds-Bb-Q1nBa.js";import"./CompositeItem-BdfVH036.js";import"./makeExternalStore-DEfXnagi.js";import"./BaseForm-D8msQ3Xl.js";import"./ActionButton-OcicrXmk.js";import"./Button-7q-Awilo.js";import"./SkeletonBar-QK5le0jY.js";import"./Tooltip-C59Dncbu.js";import"./info-sign-BAhmseLe.js";import"./chevron-up-zPXRjtQS.js";import"./chevron-down-CyTKzqpr.js";import"./useEventCallback-DnvC_ML6.js";import"./iconLoader-LW9khzrH.js";import"./CompositeRoot-BnK9Ib9P.js";import"./Switch-C1AHJNXb.js";import"./TimePicker-CtmmtEA8.js";import"./CollapsiblePanel-CFtMnobt.js";import"./error-CMb3oavi.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-PcCF_U4s.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
