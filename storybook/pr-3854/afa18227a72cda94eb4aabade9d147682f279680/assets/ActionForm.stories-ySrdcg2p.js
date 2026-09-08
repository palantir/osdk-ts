import{j as t,g as n}from"./iframe-mgqf8OZi.js";import{A as r}from"./action-form-D39GNFEN.js";import"./preload-helper-C6SQT8UT.js";import"./DropdownField-BDV4nY7z.js";import"./debounce-Cs3_KK6g.js";import"./useOsdkClient-CIHn_x5t.js";import"./index-GTfiZUIM.js";import"./Input-Cm9G-_vw.js";import"./useBaseUiId-rjNzDssU.js";import"./useControlled-DnmOZ-e1.js";import"./index-CgMXMemF.js";import"./index-DsvT80A6.js";import"./PopoverPopup-IFfb3EAK.js";import"./InternalBackdrop-DVxp9s1p.js";import"./composite-BsXSlU2S.js";import"./index-DJS_p_MX.js";import"./getDisabledMountTransitionStyles-CzJH416S.js";import"./ToolbarRootContext-DXjHGJkz.js";import"./tick-12a-8qSb.js";import"./svgIconContainer-BQB9e_Z9.js";import"./small-cross-BNDbkZTe.js";import"./search-fgyV2px-.js";import"./cross-B_dcVm8T.js";import"./useValueChanged-BEUlp8B0.js";import"./getPseudoElementBounds-B5c6Myvw.js";import"./CompositeItem-B5XhVs9k.js";import"./makeExternalStore-BoIB8VtI.js";import"./BaseForm-SdmMj8BQ.js";import"./ActionButton-D1kCGHo0.js";import"./Button-CvdgIKvp.js";import"./SkeletonBar-CpPJCyI4.js";import"./Tooltip-CD6Ogyv5.js";import"./info-sign-DFrdkz_n.js";import"./chevron-up-B8jvJgmU.js";import"./chevron-down-CvP42XCE.js";import"./useEventCallback-xpfDomYZ.js";import"./iconLoader-YvLq5CyO.js";import"./CompositeRoot-Dg5ciHRi.js";import"./Switch-DYjpHlYQ.js";import"./TimePicker-Dj2J8-aZ.js";import"./CollapsiblePanel-rkq5PuPE.js";import"./error-5K0NVF3b.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CrZy2PZ2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
