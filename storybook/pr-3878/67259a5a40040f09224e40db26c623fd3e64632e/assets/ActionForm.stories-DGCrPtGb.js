import{j as t,g as n}from"./iframe-BpAf1-YV.js";import{A as r}from"./action-form-C0E25EJh.js";import"./preload-helper-C7Ebqy80.js";import"./DropdownField-dB9KcLRA.js";import"./debounce-21KeODoP.js";import"./useOsdkClient-fGXuQFgJ.js";import"./index-DyADrv6I.js";import"./Input-DIA1NCyo.js";import"./useBaseUiId-C9xAI1lW.js";import"./useControlled-Bq45AK2p.js";import"./index-Cxw2yzFX.js";import"./index-DS78ICiY.js";import"./PopoverPopup-NJFXZyoo.js";import"./InternalBackdrop-DIkARFig.js";import"./composite-mAbXNXR7.js";import"./index-BFZzGMb_.js";import"./getDisabledMountTransitionStyles-DcnlFvvt.js";import"./ToolbarRootContext-DFWsSTVD.js";import"./tick-CPLVuGzH.js";import"./svgIconContainer-CFecCBjJ.js";import"./small-cross-CqAu1Ci1.js";import"./search-DkdRXT-s.js";import"./cross-DslNwA_6.js";import"./useValueChanged-D_9lOFp6.js";import"./getPseudoElementBounds-0BuLbpLW.js";import"./CompositeItem-DZ-wY7w2.js";import"./makeExternalStore-B3qv40Vp.js";import"./BaseForm-Dd-08r-c.js";import"./ActionButton-DoMyUIMJ.js";import"./Button-VTVCzMYN.js";import"./SkeletonBar-C6BT11pg.js";import"./Tooltip-BQ1GnDHa.js";import"./info-sign-DZ_ptF1F.js";import"./chevron-up-CCLFQO0o.js";import"./chevron-down-Bp5YSXdo.js";import"./useEventCallback-BqMN4vsA.js";import"./iconLoader-CrKNlI7S.js";import"./CompositeRoot-D8XvqRVW.js";import"./Switch-B9oiBflK.js";import"./TimePicker-BVQfsqyk.js";import"./CollapsiblePanel-CeD70irk.js";import"./error-DZIXNDEl.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-6mq6wlfJ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
