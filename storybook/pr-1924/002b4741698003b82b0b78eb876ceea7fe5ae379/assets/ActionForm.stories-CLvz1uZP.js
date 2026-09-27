import{j as t,g as n}from"./iframe-Ced8wIim.js";import{A as r}from"./action-form-Il5eW2zc.js";import"./preload-helper-BvnlfMzD.js";import"./DropdownField-jydwoQac.js";import"./debounce-DSdlDxeH.js";import"./useOsdkClient-DWRmKvFn.js";import"./index-DwlP8Kq2.js";import"./Input-KnIMm_iE.js";import"./useBaseUiId-ZzsV-V0Z.js";import"./useControlled-Bx5lxC0c.js";import"./index-LDJzIvQD.js";import"./index-Cm78izMo.js";import"./PopoverPopup-D6vxVy5_.js";import"./InternalBackdrop-BEW1kLJE.js";import"./composite-gyhDmABu.js";import"./index-tRtnayVT.js";import"./getDisabledMountTransitionStyles-BYykhR9M.js";import"./ToolbarRootContext-BjCMra_B.js";import"./tick-DgJ5ryvj.js";import"./svgIconContainer-_H4YWiIz.js";import"./small-cross-CL1fxAVq.js";import"./search-QSUOXDqi.js";import"./cross-C1ezeDDh.js";import"./useValueChanged-KRQENGkA.js";import"./getPseudoElementBounds-FBWwExr3.js";import"./CompositeItem-CKE15s8h.js";import"./makeExternalStore-Cb-8iveq.js";import"./BaseForm-BUVu_nkQ.js";import"./ActionButton-DrbHFVEC.js";import"./Button-D2RSl0IU.js";import"./SkeletonBar-EYFzh_lb.js";import"./Tooltip-DT2igpMI.js";import"./info-sign-7gUgYNyU.js";import"./chevron-up-Gx5vPmev.js";import"./chevron-down-DpwNucWD.js";import"./useEventCallback-nDEIaijr.js";import"./iconLoader-BLCfZTsi.js";import"./Switch-DqplWozy.js";import"./CompositeRoot-C04S684x.js";import"./TimePicker-BmWXJobr.js";import"./CollapsiblePanel-CcL0_Of9.js";import"./error-yQjggD5T.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DKNE68LV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
