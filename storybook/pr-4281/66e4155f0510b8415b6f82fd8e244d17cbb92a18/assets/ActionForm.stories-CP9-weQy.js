import{j as t,g as n}from"./iframe-BLF1KQu4.js";import{A as r}from"./action-form-DaWncXac.js";import"./preload-helper-GcktYcA3.js";import"./DropdownField-DWAvJ7rF.js";import"./debounce-D7Z_8Dqm.js";import"./useOsdkClient-GmjUNKMk.js";import"./index-aXPerbbD.js";import"./Input-ep0tMe9Y.js";import"./useBaseUiId-BxovN8d6.js";import"./useControlled-BnRS1sX7.js";import"./index-BeFBWWGf.js";import"./index-CJxk2Woh.js";import"./PopoverPopup-148tTgSp.js";import"./InternalBackdrop-8YL1-Sw7.js";import"./composite-fyXwWWU2.js";import"./index-CNufdcVg.js";import"./getDisabledMountTransitionStyles-DoQQxJRd.js";import"./ToolbarRootContext-FsR9CG6K.js";import"./tick-By4yjMKZ.js";import"./svgIconContainer-DjnJEiXc.js";import"./small-cross-D2kARGCF.js";import"./search-jxTo-jPn.js";import"./cross-D5Owe--z.js";import"./useValueChanged-rkrZLPbB.js";import"./getPseudoElementBounds-C6VfQ6WO.js";import"./CompositeItem-jL-VyW-C.js";import"./makeExternalStore-G2m-9f72.js";import"./BaseForm-C95EUGnZ.js";import"./ActionButton-DJbMDa4y.js";import"./Button-YyRiSJZP.js";import"./SkeletonBar-CuJtrTbh.js";import"./Tooltip-CgClAe-q.js";import"./info-sign-DEHXVyi1.js";import"./chevron-up-Dr0nS4Jc.js";import"./chevron-down-CtuyY29H.js";import"./useEventCallback-CZHl-UH0.js";import"./iconLoader-CrZDknFI.js";import"./Switch-BvikUw2u.js";import"./CompositeRoot-BnIl24Qb.js";import"./TimePicker-C3ndduN7.js";import"./CollapsiblePanel-C1eEG4ny.js";import"./error-8EJJ_3qq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-JDZWgyN8.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
