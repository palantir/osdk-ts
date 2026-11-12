import{j as t,g as n}from"./iframe-qEFPpghE.js";import{A as r}from"./action-form-CjMofdoj.js";import"./preload-helper-Dp1pzeXC.js";import"./useDebouncedCallback-CLudjFmJ.js";import"./useEventCallback-BYQDS9uj.js";import"./isEqual-hnu1wVCK.js";import"./_baseIsEqual-CsbRecuA.js";import"./PopoverPopup-Cb7HfMf8.js";import"./InternalBackdrop-D5rmKUjx.js";import"./useBaseUiId-v_A1mAU8.js";import"./composite-DEeYGE6i.js";import"./index-BYmDYJlP.js";import"./index-DW-XX4vU.js";import"./index-Dz-dXwVN.js";import"./getDisabledMountTransitionStyles-TORQ_bbl.js";import"./ToolbarRootContext-mJyuSkMG.js";import"./Select-DLArSuaB.js";import"./useOsdkClient-Aa7m3fKW.js";import"./index-BH9ELRZv.js";import"./Input-BablyCOK.js";import"./useControlled-CzEkdiJb.js";import"./tick-DmViAXqM.js";import"./svgIconContainer-CQknLjCX.js";import"./small-cross-D0luzVMu.js";import"./search-D09RX6LY.js";import"./cross-CrQI27cl.js";import"./useValueChanged-hy1rwhTW.js";import"./getPseudoElementBounds-D1gaCrRx.js";import"./CompositeItem-HOTCeKr0.js";import"./DropdownField-SZD2xT-o.js";import"./makeExternalStore-AlhYZ7re.js";import"./BaseForm-BgtgQExH.js";import"./ActionButton-Di4a-gre.js";import"./Button--WxUXUTJ.js";import"./SkeletonBar-yJWTc5ft.js";import"./Tooltip-0QhHY8T6.js";import"./info-sign-DB1K_GGf.js";import"./chevron-up-DyvoFaxc.js";import"./chevron-down-BYYCeXTI.js";import"./iconLoader-CRQpwi_T.js";import"./Switch-9l2qMj-M.js";import"./CompositeRoot-BvfPUWf5.js";import"./TimePicker-BKcbnymV.js";import"./CollapsiblePanel-D3XrjZdW.js";import"./error-AR1tV96Q.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Ch_Qi-aF.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const oe={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ae=["Default"];export{e as Default,ae as __namedExportsOrder,oe as default};
