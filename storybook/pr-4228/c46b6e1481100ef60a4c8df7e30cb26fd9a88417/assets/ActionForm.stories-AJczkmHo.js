import{j as t,g as n}from"./iframe-DbS9D_O3.js";import{A as r}from"./action-form-BdMOl4fZ.js";import"./preload-helper-CCKJK0hs.js";import"./DropdownField-D6cu5JEW.js";import"./debounce-CLlBWcHq.js";import"./useOsdkClient-CkkpSDd5.js";import"./index-DtbYZf2o.js";import"./Input-BjkhNLJi.js";import"./useBaseUiId-DGo7w5rM.js";import"./useControlled-BU_DIXGN.js";import"./index-DjECoGdr.js";import"./index-Cz6dsjwa.js";import"./PopoverPopup-XTmmwdNv.js";import"./InternalBackdrop-CUaheQ60.js";import"./composite-BVFSknHB.js";import"./index-Bo1c5tnJ.js";import"./getDisabledMountTransitionStyles-B-ib1OlT.js";import"./ToolbarRootContext-DAT__9MO.js";import"./tick-BOzZ-jjE.js";import"./svgIconContainer-BWtkfvw7.js";import"./small-cross-CURfx7dD.js";import"./search-O2b5hRrN.js";import"./cross-D8Acxe7x.js";import"./useValueChanged-D8jiBEOA.js";import"./getPseudoElementBounds-1TOviJ8v.js";import"./CompositeItem-CBVEdJrU.js";import"./makeExternalStore-qkyjGCKT.js";import"./BaseForm-BwDOk7Lf.js";import"./ActionButton-CV3Gtc6x.js";import"./Button-CgXhCctb.js";import"./SkeletonBar-C0UKIou7.js";import"./Tooltip-DDRYkVBh.js";import"./info-sign-BRe1V6YT.js";import"./chevron-up-Dgd7h0T-.js";import"./chevron-down-CRHApYO-.js";import"./useEventCallback-Bh0Tbg4X.js";import"./iconLoader-DN-ogb3R.js";import"./Switch-BachT4G6.js";import"./CompositeRoot-BX4IXpi5.js";import"./TimePicker-HWx2FrA_.js";import"./CollapsiblePanel-W0IgEcMp.js";import"./error-RW3dtBbn.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-COgOpeFu.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
