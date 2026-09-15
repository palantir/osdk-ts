import{j as t,g as n}from"./iframe-Y5vGGcvP.js";import{A as r}from"./action-form-CE4ozZnx.js";import"./preload-helper-BDwImvib.js";import"./DropdownField-BYVuO4wd.js";import"./debounce-DOiQ_IlB.js";import"./useOsdkClient-s9zf-Ja3.js";import"./index-BTH20MTv.js";import"./Input-Dw8vFEHs.js";import"./useBaseUiId-RL85XbnS.js";import"./useControlled-jE3VG63K.js";import"./index-BF11wRFE.js";import"./index-BqEmZbFH.js";import"./PopoverPopup-DqmMzuaX.js";import"./InternalBackdrop-3iFgptId.js";import"./composite-DfEzUBGr.js";import"./index-Dieu7sw2.js";import"./getDisabledMountTransitionStyles-DCTtkVay.js";import"./ToolbarRootContext-BC-Ed_Oq.js";import"./tick-B3ZeEauG.js";import"./svgIconContainer-BIHKAVWB.js";import"./small-cross-CVI-wDtt.js";import"./search-DfUtBVkM.js";import"./cross-C6XfWSCb.js";import"./useValueChanged-Ds6t04CB.js";import"./getPseudoElementBounds-BFGt4T59.js";import"./CompositeItem-1PZRLRt5.js";import"./makeExternalStore-CH64p8Fa.js";import"./BaseForm-F9_PiSLQ.js";import"./ActionButton-D3iVYvw7.js";import"./Button--cxRM2vq.js";import"./SkeletonBar-B2IEnFw2.js";import"./Tooltip-eBcGmQzJ.js";import"./info-sign-B-IobAX5.js";import"./chevron-up-oHTOtwsU.js";import"./chevron-down-mTWE-r4G.js";import"./useEventCallback-BrJrk-oU.js";import"./iconLoader-43a-jDts.js";import"./CompositeRoot-BchOA9pq.js";import"./Switch-DonFFH7S.js";import"./TimePicker-DkGBB9Vg.js";import"./CollapsiblePanel-BSjexsrO.js";import"./error-DU3E2pjz.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CAQdN2b1.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
