import{j as t,g as n}from"./iframe-Co9BLc26.js";import{A as r}from"./action-form-BhRM_Y_l.js";import"./preload-helper-CjIZGyxJ.js";import"./DropdownField-YJ5OIQJX.js";import"./debounce-BCFaqdaB.js";import"./useOsdkClient-CASwPT7t.js";import"./index-CaXavGNz.js";import"./Input-B7An9dFp.js";import"./useBaseUiId-B7X46CyE.js";import"./useControlled-Dm9Z_trU.js";import"./index-83om9hRt.js";import"./index-DuuftHJS.js";import"./PopoverPopup-DcMrtKCc.js";import"./InternalBackdrop-BPl8mach.js";import"./composite-Bs7VpVD-.js";import"./index-ft_Pdv6a.js";import"./getDisabledMountTransitionStyles-Bm6XJ5DP.js";import"./ToolbarRootContext-CL3VUEMw.js";import"./tick-OrqCabsC.js";import"./svgIconContainer-XH9sO27g.js";import"./small-cross-Clv-yC5T.js";import"./search-DQyAxhHi.js";import"./cross-CdeazAmw.js";import"./useValueChanged-CdK4eivV.js";import"./getPseudoElementBounds-BE5wQuFp.js";import"./CompositeItem-v285VzZv.js";import"./makeExternalStore-C6cHHmQm.js";import"./BaseForm-IsQTME3B.js";import"./ActionButton-D9teap9J.js";import"./Button-CKhU91Nr.js";import"./SkeletonBar-hmw1BSr0.js";import"./Tooltip-YDfZI3Un.js";import"./info-sign-DIYvlvQz.js";import"./chevron-up-BdSFnWDo.js";import"./chevron-down-C2RhY0pV.js";import"./useEventCallback-C2F-xdBM.js";import"./iconLoader-CW_K0r8e.js";import"./Switch-CuOILTo6.js";import"./CompositeRoot-CKFRNDi_.js";import"./TimePicker-CeNapmqx.js";import"./CollapsiblePanel-GyOfNAAh.js";import"./error-DApxBtMc.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D1C2IRuJ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
