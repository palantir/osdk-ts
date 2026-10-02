import{j as t,g as n}from"./iframe-DpUFwGwm.js";import{A as r}from"./action-form-C24Zz_FG.js";import"./preload-helper-D7G3iNMY.js";import"./DropdownField-DmDMqc8s.js";import"./debounce-DchhwRiM.js";import"./useOsdkClient-Dec5bd1s.js";import"./index-BRNwf_dL.js";import"./Input-B7COcDHt.js";import"./useBaseUiId-BCiTIIVN.js";import"./useControlled-raZDZG7g.js";import"./index-ySwYaDEc.js";import"./index-DauVYyRU.js";import"./PopoverPopup-EnybrYm9.js";import"./InternalBackdrop-CcB5ZdVo.js";import"./composite-Cj7Gyck6.js";import"./index-1ybkaqeD.js";import"./getDisabledMountTransitionStyles-DXafZfY4.js";import"./ToolbarRootContext-DKuVgI34.js";import"./tick-B9gaIQRk.js";import"./svgIconContainer-DnMlbACY.js";import"./small-cross-B-9K90Gm.js";import"./search-BkAszfZ6.js";import"./cross-BOdVaiDd.js";import"./useValueChanged-BVjsLDJ4.js";import"./getPseudoElementBounds-C6e9H8MY.js";import"./CompositeItem-CN8uA6ij.js";import"./makeExternalStore-Cx_BHKOC.js";import"./BaseForm-D-Rt5iWR.js";import"./ActionButton-DopPp6r9.js";import"./Button-DfSDbPeQ.js";import"./SkeletonBar-B7RRaHio.js";import"./Tooltip-DYGDXGf_.js";import"./info-sign-Kh2UB82G.js";import"./chevron-up-CXjssTN2.js";import"./chevron-down-CYVMAiKh.js";import"./useEventCallback-C_1b83KE.js";import"./iconLoader-C48fbakg.js";import"./Switch-nqIZlE6x.js";import"./CompositeRoot-HSiY2NqE.js";import"./TimePicker-BJ35QbIv.js";import"./CollapsiblePanel-DV0xAGpE.js";import"./error-B3ctmJqj.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D7Wb3D4v.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
