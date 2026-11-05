import{j as t,g as n}from"./iframe-w4y9aXDU.js";import{A as r}from"./action-form-DURur1D1.js";import"./preload-helper-CnLs-Hgu.js";import"./DropdownField-aGwR7wao.js";import"./debounce-CkZWp4sm.js";import"./useOsdkClient-Bbq68KDs.js";import"./index-Dt7u2oHj.js";import"./Input-O7Y8xsdh.js";import"./useBaseUiId-F1YYLfsj.js";import"./useControlled-C9ba4gpK.js";import"./index-BIFcK0O4.js";import"./index-B0uCtLgl.js";import"./isObject-WnGrlPIk.js";import"./InternalBackdrop-MfBzn4fw.js";import"./composite-B-RTr01b.js";import"./index-BlxHpFGo.js";import"./getDisabledMountTransitionStyles-CuTU5WjT.js";import"./ToolbarRootContext-D5jHJ_gp.js";import"./tick-SaijwqI0.js";import"./svgIconContainer-CmEhYz6E.js";import"./small-cross-C92MDA4P.js";import"./search-Cp34eK_v.js";import"./cross-DXnz5KvW.js";import"./useValueChanged-D3XhtpAV.js";import"./getPseudoElementBounds-Bg2TtJd6.js";import"./CompositeItem-Cd8pgrRU.js";import"./makeExternalStore-BvoAQS4K.js";import"./BaseForm-Ck22-kJ-.js";import"./ActionButton-U4isYHc7.js";import"./Button-o-glHusr.js";import"./SkeletonBar-BIDpA40h.js";import"./Tooltip-Dj27hk9q.js";import"./info-sign-DYTfqqgP.js";import"./chevron-up-Cfyb7AwB.js";import"./chevron-down-BBcbr8vg.js";import"./useEventCallback-BXF47S9-.js";import"./iconLoader-BCwxWYEi.js";import"./Switch-CEHY8X6z.js";import"./CompositeRoot-Bdprc0c4.js";import"./TimePicker-D6-ltpAX.js";import"./CollapsiblePanel-BLYyv3wb.js";import"./error-8BgSEFU8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BEOTlVIH.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
