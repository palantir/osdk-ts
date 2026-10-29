import{j as t,g as n}from"./iframe-Cko_WFf-.js";import{A as r}from"./action-form-JMh_Pe3-.js";import"./preload-helper-Cs73q2ui.js";import"./DropdownField-C0-1Vjc_.js";import"./debounce-JLZVI0I7.js";import"./useOsdkClient-BT_HUqnV.js";import"./index-2T8Wwein.js";import"./Input-CP5Ce819.js";import"./useBaseUiId-DydFiAor.js";import"./useControlled-D2dKgCSU.js";import"./index-C5PQsA1_.js";import"./index-Ba2bjKcU.js";import"./PopoverPopup-D5S6yAxs.js";import"./InternalBackdrop-Be4bBso-.js";import"./composite-BgWWCC0G.js";import"./index-C-alEbte.js";import"./getDisabledMountTransitionStyles-CO6R2Nlo.js";import"./ToolbarRootContext-BZHxz8Zf.js";import"./tick-BFsL_7kT.js";import"./svgIconContainer-DUJTWNCq.js";import"./small-cross-CBW8u4eS.js";import"./search-DlsTvmsp.js";import"./cross-CBXHEXHr.js";import"./useValueChanged-BzJUwUky.js";import"./getPseudoElementBounds-DV7dVXJb.js";import"./CompositeItem-CFHidUeB.js";import"./makeExternalStore-CEUQtvPO.js";import"./BaseForm-30ATL8ik.js";import"./ActionButton-C4kdXe-J.js";import"./Button-B8X7gllj.js";import"./SkeletonBar-wTcJ9b1g.js";import"./Tooltip-BDxS5uB9.js";import"./info-sign-BWI4gTiz.js";import"./chevron-up-C8SJB52d.js";import"./chevron-down-tjDGGRSV.js";import"./useEventCallback-F2alGF6R.js";import"./iconLoader-DAo7UJwN.js";import"./Switch-CFTM64_5.js";import"./CompositeRoot-1E7Vf2ve.js";import"./TimePicker-D3cbGw9p.js";import"./CollapsiblePanel-CmnzNIvq.js";import"./error-iyVGDwHQ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-jyd-_lK5.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
