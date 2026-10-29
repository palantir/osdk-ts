import{j as t,g as n}from"./iframe-BGwIwWEh.js";import{A as r}from"./action-form-BjfVJJ_p.js";import"./preload-helper-DaJMqj_l.js";import"./DropdownField-QuxoTji1.js";import"./debounce-BJo4Ztyn.js";import"./useOsdkClient-B5DU8aU4.js";import"./index-IqKqgeW3.js";import"./Input-D41ZdIt3.js";import"./useBaseUiId-Bx0PVkvu.js";import"./useControlled-DZytncd1.js";import"./index-CbmIHl_7.js";import"./index-Bo6Tdt1f.js";import"./PopoverPopup-DYOwTnyz.js";import"./InternalBackdrop-BceHrAMg.js";import"./composite-B2YG03DA.js";import"./index-DVuyxqwK.js";import"./getDisabledMountTransitionStyles-fuWoY_wo.js";import"./ToolbarRootContext-BU6MqSEl.js";import"./tick-DNfwJYjk.js";import"./svgIconContainer-o0yAa7DN.js";import"./small-cross-DWE0gQPB.js";import"./search-BpQNC6sv.js";import"./cross-CCJ4Erjw.js";import"./useValueChanged-DzKjeiR-.js";import"./getPseudoElementBounds-DNrhWm0z.js";import"./CompositeItem-D-aFyv1W.js";import"./makeExternalStore-BRaFC0yj.js";import"./BaseForm-Dgr-9-ED.js";import"./ActionButton-BX1OZitO.js";import"./Button-BhV9_fzg.js";import"./SkeletonBar-Cicsnuhb.js";import"./Tooltip-D5vtKM_y.js";import"./info-sign-CokTE7Xs.js";import"./chevron-up-DzkX_bFA.js";import"./chevron-down-Bm6Tj7Z6.js";import"./useEventCallback-Bp5P_gp0.js";import"./iconLoader-BNmZy0Wa.js";import"./Switch-TtsrbUmF.js";import"./CompositeRoot-DwumeJDc.js";import"./TimePicker-D-Qd_Y0M.js";import"./CollapsiblePanel-CuJlxl5T.js";import"./error-D5T_pCuL.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-_pxO3ZE7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
