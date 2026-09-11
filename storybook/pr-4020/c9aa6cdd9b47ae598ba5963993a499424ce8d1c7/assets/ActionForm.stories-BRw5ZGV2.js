import{j as t,g as n}from"./iframe-nPEDWuq5.js";import{A as r}from"./action-form-Da8kIJ5H.js";import"./preload-helper-C6v3Woxd.js";import"./DropdownField-D0J2AzMJ.js";import"./debounce-B0x1PKSV.js";import"./useOsdkClient-CJxHdyXB.js";import"./index-BDaAzszu.js";import"./Input-D9N0trYU.js";import"./useBaseUiId-BXoUi6bA.js";import"./useControlled-BvjcIJZ1.js";import"./index-BWMgc9TH.js";import"./index-DshB7Dwn.js";import"./PopoverPopup-D49G2G7z.js";import"./InternalBackdrop-Yc2AYYIP.js";import"./composite-CnhzSObF.js";import"./index-DwMLeagM.js";import"./getDisabledMountTransitionStyles-BrBhvHF_.js";import"./ToolbarRootContext-kq769ncg.js";import"./tick-C2ltMR2g.js";import"./svgIconContainer-Buy0gbpp.js";import"./small-cross-BgQyzeJV.js";import"./search-CDt_zXJw.js";import"./cross-CAR7WZMr.js";import"./useValueChanged-K-OlizrE.js";import"./getPseudoElementBounds-DZQnzGS3.js";import"./CompositeItem-CryHE6pf.js";import"./makeExternalStore-CYa6UY1g.js";import"./BaseForm-C_Zv_RFt.js";import"./ActionButton-CQHkvHtv.js";import"./Button-BdGhF_Br.js";import"./SkeletonBar-qZCRr-4g.js";import"./Tooltip-ByNkcQt7.js";import"./info-sign-rFI3K_Er.js";import"./chevron-up-AbdLcMMP.js";import"./chevron-down-I8DXHveL.js";import"./useEventCallback-DT88xX0T.js";import"./iconLoader-DweviAtb.js";import"./CompositeRoot-QgGEs31a.js";import"./Switch-GMH-Rd9E.js";import"./TimePicker-XDLQQkFU.js";import"./CollapsiblePanel-7oyGI4Ll.js";import"./error-CBIwIhhP.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DX-TmC7j.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
