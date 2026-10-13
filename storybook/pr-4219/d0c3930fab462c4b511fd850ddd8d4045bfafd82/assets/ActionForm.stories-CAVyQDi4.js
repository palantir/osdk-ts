import{j as t,g as n}from"./iframe-DCKvSy3g.js";import{A as r}from"./action-form--g2OqJb3.js";import"./preload-helper-C9_QzmoW.js";import"./DropdownField-C6HEFrFd.js";import"./debounce-BpOqmw8g.js";import"./useOsdkClient-BY9Wn_Dg.js";import"./index-CjqUtRqG.js";import"./Input-DAFKBr8O.js";import"./useBaseUiId-hGdClsAp.js";import"./useControlled-23Be6Ua4.js";import"./index-CF-VmLVs.js";import"./index-Dqoie1xV.js";import"./PopoverPopup-BnMpvGpN.js";import"./InternalBackdrop-31WohGhl.js";import"./composite-Bftlp7o-.js";import"./index-VT2qwhQZ.js";import"./getDisabledMountTransitionStyles-wfE8zBrh.js";import"./ToolbarRootContext-Dfcq71Kx.js";import"./tick-BvA7Cxf1.js";import"./svgIconContainer-DUPiMOGt.js";import"./small-cross-Cwle5e15.js";import"./search-DnxSmR02.js";import"./cross-Bgi1b_0b.js";import"./useValueChanged-Dw4sBVYO.js";import"./getPseudoElementBounds-DdimKXjW.js";import"./CompositeItem-BaLy62YM.js";import"./makeExternalStore-DhsTa73k.js";import"./BaseForm-wuEZOhed.js";import"./ActionButton-Df-iyCXJ.js";import"./Button-B8kaenDu.js";import"./SkeletonBar-DwIduN_L.js";import"./Tooltip-B14J5KK5.js";import"./info-sign-DVjQCdgw.js";import"./chevron-up-Bx5mSGft.js";import"./chevron-down-CQzxndpd.js";import"./useEventCallback-B7A3-78b.js";import"./iconLoader-CttkHO8w.js";import"./Switch-BHxhwjhW.js";import"./CompositeRoot-DlXDoS8m.js";import"./TimePicker-CFgVmWlp.js";import"./CollapsiblePanel-b_i0qiWN.js";import"./error-DC-QmFfK.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C6hFOzPu.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
