import{j as t,g as n}from"./iframe-BjvWEpQn.js";import{A as r}from"./action-form-CvkmVGvL.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-BlMUNrNh.js";import"./debounce-DYSSvrJG.js";import"./useOsdkClient-zYvlR-4-.js";import"./index-C0GV4moV.js";import"./Input-mEIrwYjz.js";import"./useBaseUiId-CuHKCZXA.js";import"./useControlled-CIGB80Ap.js";import"./index-CX-tc54H.js";import"./index-Blnua_Xd.js";import"./PopoverPopup-DO5dKOfH.js";import"./InternalBackdrop-DqYDuaqF.js";import"./composite-DOEC86eV.js";import"./index-NbBH4Ipg.js";import"./getDisabledMountTransitionStyles-D8IcwD5G.js";import"./ToolbarRootContext-BFzaK2vL.js";import"./tick-DxLK2qZe.js";import"./svgIconContainer-Bo_QeWGy.js";import"./small-cross-Db3oVUgZ.js";import"./search-BShNJex1.js";import"./cross-B1SVZ_Mp.js";import"./useValueChanged-J-bwa0r9.js";import"./getPseudoElementBounds-DmjliHjc.js";import"./CompositeItem-CsOj8GEh.js";import"./makeExternalStore-CgVUsbup.js";import"./BaseForm-BPFL1OE5.js";import"./ActionButton-DMX27iON.js";import"./Button-D0Bo1X54.js";import"./SkeletonBar-BzIzSJzJ.js";import"./Tooltip-CbDWIJZu.js";import"./info-sign-GZdXSRk5.js";import"./chevron-up-Bf_ow2U4.js";import"./chevron-down-CIsozBEz.js";import"./useEventCallback-DL6bVjfT.js";import"./iconLoader-DxGr0-8N.js";import"./CompositeRoot-BZ6CJSg1.js";import"./Switch-0GNgW6Kd.js";import"./TimePicker-Bj9XhqQ_.js";import"./CollapsiblePanel-CgTIoXrP.js";import"./error-0abisA4-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BESKZGnm.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
