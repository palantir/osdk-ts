import{j as t,g as n}from"./iframe-R3i6F3aO.js";import{A as r}from"./action-form-Ci4la57a.js";import"./preload-helper-C9bdGnH6.js";import"./DropdownField-BAjlL0wb.js";import"./debounce-QFsAiE7l.js";import"./useOsdkClient-B-ltzRX3.js";import"./index-BGblgBJY.js";import"./Input-sn4ChjOn.js";import"./useBaseUiId-Bs3UtHPs.js";import"./useControlled-CF852Dip.js";import"./index-FYBTDmiA.js";import"./index-BcSLoxTr.js";import"./PopoverPopup-sZXPOR4E.js";import"./InternalBackdrop-BHQr0waf.js";import"./composite-DqPiEnK1.js";import"./index-CJpO-LuO.js";import"./getDisabledMountTransitionStyles-B-rU_9sL.js";import"./ToolbarRootContext-CwgLFLhe.js";import"./tick-BlsNuID7.js";import"./svgIconContainer-C5apQk5w.js";import"./small-cross-BPJFbpZY.js";import"./search-CLosiH11.js";import"./cross-BPxLtSBw.js";import"./useValueChanged-DXcnjapY.js";import"./getPseudoElementBounds-BhVzGz-s.js";import"./CompositeItem-CwiOxIme.js";import"./makeExternalStore-BNMggstW.js";import"./BaseForm-Cs_ZQmnM.js";import"./ActionButton-CgZ1I1zH.js";import"./Button-DHONR1q8.js";import"./SkeletonBar-CEO897hA.js";import"./Tooltip-C7Pq2vOJ.js";import"./info-sign-CNHpm0UX.js";import"./chevron-up-EgAqti5Q.js";import"./chevron-down-DiJ60wr5.js";import"./useEventCallback-Br_xasQQ.js";import"./iconLoader-CRnUeAya.js";import"./CompositeRoot-P_8GH8jt.js";import"./Switch-te8Mgxu7.js";import"./TimePicker-Bl3p8slj.js";import"./CollapsiblePanel-CnpdwwlI.js";import"./error-DSevPCVz.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D6yaQzlx.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
