import{j as t,g as n}from"./iframe-ClXV96ol.js";import{A as r}from"./action-form-EFh9ISdB.js";import"./preload-helper-GIvq9Fgh.js";import"./DropdownField-Cf9jSBwq.js";import"./debounce-DTKHa4Ak.js";import"./useOsdkClient-ptfwTLa8.js";import"./index-BS_93M16.js";import"./Input-CzDuGki_.js";import"./useBaseUiId-CeQ_TKpW.js";import"./useControlled-Bvg52cep.js";import"./index-Bkk5ODU2.js";import"./index-CLBh2Emm.js";import"./PopoverPopup-BfnU-QCF.js";import"./InternalBackdrop-BOzPpyjM.js";import"./composite-C0Fpedst.js";import"./index-BLOk9I5e.js";import"./getDisabledMountTransitionStyles-Dzb55fqZ.js";import"./ToolbarRootContext-dOFs4mME.js";import"./tick-CPeibzQx.js";import"./svgIconContainer-BzIt4vSD.js";import"./small-cross-DI0ePjHj.js";import"./search-C1vc_KSz.js";import"./cross-DTt9RaJo.js";import"./useValueChanged-BOSK5wJR.js";import"./getPseudoElementBounds-Y4TxrJ4m.js";import"./CompositeItem-UA3lXUwr.js";import"./makeExternalStore-CMtJRYT9.js";import"./BaseForm-vKK1tGRn.js";import"./ActionButton-dXKws96p.js";import"./Button-DpTMspMt.js";import"./SkeletonBar-uZMzevzj.js";import"./Tooltip-Cp6NNLht.js";import"./info-sign-QPjxs9pz.js";import"./chevron-up-Ct3xhYdE.js";import"./chevron-down-BtcKUO_9.js";import"./useEventCallback-CSmRluI9.js";import"./iconLoader-CPqfVRB1.js";import"./CompositeRoot-BPjaPetv.js";import"./Switch-CxxCrHiM.js";import"./TimePicker-CdCoj44X.js";import"./CollapsiblePanel-YRb-6JkX.js";import"./error-JR-fCQaz.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CY10LFb-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
