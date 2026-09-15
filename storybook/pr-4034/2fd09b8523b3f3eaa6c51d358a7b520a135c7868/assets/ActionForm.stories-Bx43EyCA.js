import{j as t,g as n}from"./iframe-DuUcAaP1.js";import{A as r}from"./action-form-OFDweDSz.js";import"./preload-helper-Cljs7IBf.js";import"./DropdownField-Cb0RW1j-.js";import"./debounce-XJRfHy2s.js";import"./useOsdkClient-CdO-nD-I.js";import"./index-BMAxCDX5.js";import"./Input-ZBAaH2zD.js";import"./useBaseUiId-CfMTCz35.js";import"./useControlled-hj_GBxd9.js";import"./index-C7wdlZ1Q.js";import"./index-C8RlHGqn.js";import"./PopoverPopup-RFQNSErN.js";import"./InternalBackdrop-vDVdwV4k.js";import"./composite-D0tirFPb.js";import"./index-1IuyBqrn.js";import"./getDisabledMountTransitionStyles-BMs-QQOr.js";import"./ToolbarRootContext-USv7Hl-3.js";import"./tick-DZ3AsDHy.js";import"./svgIconContainer-D6Wl3-m9.js";import"./small-cross-DsR2FxNg.js";import"./search-B301Jn8l.js";import"./cross-DA3pEoMX.js";import"./useValueChanged-DC9rBEqy.js";import"./getPseudoElementBounds-CV4Ydp2d.js";import"./CompositeItem-t4AJuCm-.js";import"./makeExternalStore-CsrMhPRl.js";import"./BaseForm-D0uaM4ye.js";import"./ActionButton-4IxyZ6p9.js";import"./Button-DYK5XWRq.js";import"./SkeletonBar-BSOPCtS0.js";import"./Tooltip-kBgFTss4.js";import"./info-sign-DJq6ljOZ.js";import"./chevron-up-wrksAtHw.js";import"./chevron-down-DyPw48Bz.js";import"./useEventCallback-DzTIRB0b.js";import"./iconLoader-B5usIMFF.js";import"./CompositeRoot-BsxybYJF.js";import"./Switch-BEHWC9rs.js";import"./TimePicker-D_DI-izH.js";import"./CollapsiblePanel-B9wkvjE1.js";import"./error-CQ18bNi9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C2TwiXMB.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
