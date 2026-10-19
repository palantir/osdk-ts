import{j as t,g as n}from"./iframe-D2f1Nzwk.js";import{A as r}from"./action-form-oQj26qjs.js";import"./preload-helper-oV1Eeolq.js";import"./DropdownField-D65WFOp_.js";import"./debounce-C9b86hHB.js";import"./useOsdkClient-DHeuZpzO.js";import"./index-DLHsiDYZ.js";import"./Input-DGocKpsh.js";import"./useBaseUiId-C1fFwhw7.js";import"./useControlled-CNjTn84h.js";import"./index-QYMyWYDY.js";import"./index-BojiIOfH.js";import"./PopoverPopup-CsHrtQTv.js";import"./InternalBackdrop-lpGOYkEJ.js";import"./composite-CiG9-8W_.js";import"./index-BmDZuti5.js";import"./getDisabledMountTransitionStyles-BNKxtgYL.js";import"./ToolbarRootContext-Dx7XJj5N.js";import"./tick-Bl3uL3bd.js";import"./svgIconContainer-CmuFo95M.js";import"./small-cross-BPAsCQGt.js";import"./search-Cf99U-Bj.js";import"./cross-DkwiluwT.js";import"./useValueChanged-CUcJG0Bt.js";import"./getPseudoElementBounds-kPdI6WhS.js";import"./CompositeItem-C741riYb.js";import"./makeExternalStore-DTw3LndD.js";import"./BaseForm-Bm2_lzTl.js";import"./ActionButton-B_L3rwG4.js";import"./Button-D6z8871L.js";import"./SkeletonBar-nGMBXhyP.js";import"./Tooltip-CDYk2b3D.js";import"./info-sign-CPHpZI49.js";import"./chevron-up-BIBJFJcV.js";import"./chevron-down-DJdsQouz.js";import"./useEventCallback-tMcy_YiL.js";import"./iconLoader-BTMQjmnM.js";import"./Switch-1ZEiBAAb.js";import"./CompositeRoot-C3WOkFpc.js";import"./TimePicker-BKPJbsOZ.js";import"./CollapsiblePanel-BwmdKoWP.js";import"./error-BeTADbMo.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BCs1456K.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
