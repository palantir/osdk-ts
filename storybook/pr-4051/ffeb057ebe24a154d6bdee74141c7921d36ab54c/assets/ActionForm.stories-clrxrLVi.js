import{j as t,g as n}from"./iframe-CRcSxZM8.js";import{A as r}from"./action-form-LiD__ttf.js";import"./preload-helper-ZugcXPGT.js";import"./DropdownField-Cr1UeBNB.js";import"./debounce-CipQE0Vz.js";import"./useOsdkClient-BMdzqGfU.js";import"./index-g1O5dw2n.js";import"./Input-CNRyhWNO.js";import"./useBaseUiId-CR1J1kR-.js";import"./useControlled-DQ_eI8kZ.js";import"./index-Xkx1Z8NF.js";import"./index-DYDBkDSv.js";import"./PopoverPopup-BFEF8WU9.js";import"./InternalBackdrop-fCyetKcK.js";import"./composite-BjyHBRpa.js";import"./index-bGeYwVt0.js";import"./getDisabledMountTransitionStyles-_vmGqUmn.js";import"./ToolbarRootContext-Ca7X_ytn.js";import"./tick-B26TJQOE.js";import"./svgIconContainer-BqvfQ7m-.js";import"./small-cross-DOBXkRH7.js";import"./search-D6xupaDO.js";import"./cross-C5cQzVwl.js";import"./useValueChanged-1Q-vBWTO.js";import"./getPseudoElementBounds-C1tiKeFn.js";import"./CompositeItem-Bm_HuJxQ.js";import"./makeExternalStore-C137KZPA.js";import"./BaseForm-DWmVCL58.js";import"./ActionButton-Bd8xK1wy.js";import"./Button-BJQF3YiE.js";import"./SkeletonBar-DF8L9OI9.js";import"./Tooltip-CEnfBt0P.js";import"./info-sign-C-LGcz_-.js";import"./chevron-up-CPVZT41c.js";import"./chevron-down-D5oDo9t-.js";import"./useEventCallback-b4efgYNg.js";import"./iconLoader-DRzPzxXu.js";import"./Switch-CYoTwQyL.js";import"./CompositeRoot-B6o3Go7Y.js";import"./TimePicker-DYiWtR8W.js";import"./CollapsiblePanel-CJg7yaup.js";import"./error-Dn8wlh4f.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D8xbJlmg.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
