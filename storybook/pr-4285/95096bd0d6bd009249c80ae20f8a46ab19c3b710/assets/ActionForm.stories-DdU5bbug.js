import{j as t,g as n}from"./iframe-BO3JDeUy.js";import{A as r}from"./action-form-BkKDZGxw.js";import"./preload-helper-urwU0B1K.js";import"./DropdownField-CB_lS8X1.js";import"./debounce-B2PKE0le.js";import"./useOsdkClient-B48UOwRR.js";import"./index-CEHZ1Lmc.js";import"./Input-aywzIDzd.js";import"./useBaseUiId-BhX3QU_S.js";import"./useControlled-CFrWaOQK.js";import"./index-DuMMGCln.js";import"./index-C_ZbNhui.js";import"./PopoverPopup-HQOEOoaE.js";import"./InternalBackdrop-B9xuZ3X4.js";import"./composite-DkSbjExr.js";import"./index-C1W664_h.js";import"./getDisabledMountTransitionStyles-D2oz7XSg.js";import"./ToolbarRootContext-rGxGVX8f.js";import"./tick-tswKzLaH.js";import"./svgIconContainer-B2x3jtn9.js";import"./small-cross-D5iZfcsS.js";import"./search-BTnE45Hm.js";import"./cross-B4B_Rmmg.js";import"./useValueChanged-D73ikQgq.js";import"./getPseudoElementBounds-C9NZ6w4c.js";import"./CompositeItem-DeWDKhlH.js";import"./makeExternalStore-DdmSyb-E.js";import"./BaseForm-DZe62vWk.js";import"./ActionButton-CjOnURl7.js";import"./Button-HsgZWy4d.js";import"./SkeletonBar-BIEi9a0x.js";import"./Tooltip-B6gO1E8K.js";import"./info-sign-CO_9rbyt.js";import"./chevron-up-DOoilBRb.js";import"./chevron-down-D8wRJ6gM.js";import"./useEventCallback-DsZGsUBH.js";import"./iconLoader-BOK5HAqI.js";import"./Switch-DIDekjH2.js";import"./CompositeRoot-D9-hIhoD.js";import"./TimePicker-D8bPFsEb.js";import"./CollapsiblePanel-fn9uuRmZ.js";import"./error-COT9B3Hv.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C6_wMEah.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
