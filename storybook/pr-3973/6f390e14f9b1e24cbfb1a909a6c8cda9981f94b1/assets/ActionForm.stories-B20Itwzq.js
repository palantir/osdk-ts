import{j as t,g as n}from"./iframe-Cxs4teez.js";import{A as r}from"./action-form-DAWpT1T-.js";import"./preload-helper-Bd6Vgg8g.js";import"./DropdownField-BQN_NaVg.js";import"./debounce-BZ5yTYau.js";import"./useOsdkClient-Ba7AvsVH.js";import"./index-C3kmvWsS.js";import"./Input-BYExG4yH.js";import"./useBaseUiId-DWXmNFpC.js";import"./useControlled-Dc-gXlj3.js";import"./index-C7HiqnbK.js";import"./index-WVEl5G15.js";import"./PopoverPopup-DEvs5olF.js";import"./InternalBackdrop-DP9WD5Fk.js";import"./composite-b3NzNsDh.js";import"./index-B-Om34Y_.js";import"./getDisabledMountTransitionStyles-iLI7eNCy.js";import"./ToolbarRootContext-BD8ceMmu.js";import"./tick-C3Mfhxb_.js";import"./svgIconContainer-JiM41EbN.js";import"./small-cross-TqcPNZ3o.js";import"./search-BrqbiSOv.js";import"./cross-D5j5wcq7.js";import"./useValueChanged-D29qGbgw.js";import"./getPseudoElementBounds-DE7atGjs.js";import"./CompositeItem-4Ik-gd3d.js";import"./makeExternalStore-Db6eeeft.js";import"./BaseForm-D5vRcL7u.js";import"./ActionButton-dCm50BWS.js";import"./Button-B-HuJTwa.js";import"./SkeletonBar-Bleds7Vl.js";import"./Tooltip-And-vmyU.js";import"./info-sign-z6r66wGH.js";import"./chevron-up-D6Etz7I_.js";import"./chevron-down-DR1MLtBA.js";import"./useEventCallback-CAv6RzeS.js";import"./iconLoader-C2xvPM10.js";import"./CompositeRoot-BbpRV3hw.js";import"./Switch-D5AXKeYx.js";import"./TimePicker-B563iNxp.js";import"./CollapsiblePanel-C0e4ATLG.js";import"./error-CSDPFrAs.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BMMQ7JDA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
