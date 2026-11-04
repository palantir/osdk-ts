import{j as t,g as n}from"./iframe-Dl_BVvAW.js";import{A as r}from"./action-form-DMAuFTHr.js";import"./preload-helper-CoCSiyLk.js";import"./DropdownField-bRExs2os.js";import"./debounce-DTEEbj35.js";import"./useOsdkClient-DMf9xJpa.js";import"./index-BCGo89vi.js";import"./Input-B7ojI8Bn.js";import"./useBaseUiId-C3O-rg1C.js";import"./useControlled-Dp4z1YLv.js";import"./index-DjDfcFev.js";import"./index-DbV-fkKm.js";import"./PopoverPopup-BI4UjKoA.js";import"./InternalBackdrop-CzP1TDn8.js";import"./composite-4Jq0kXzk.js";import"./index-mlQ_3NiE.js";import"./getDisabledMountTransitionStyles-Cza0XV9J.js";import"./ToolbarRootContext-CvPGHntn.js";import"./tick-hY0SSYQk.js";import"./svgIconContainer-DBQRMjom.js";import"./small-cross-ylm6BbvG.js";import"./search-DcMarGsx.js";import"./cross-Bz7-buWb.js";import"./useValueChanged-BEGJF59V.js";import"./getPseudoElementBounds-CjBI2crg.js";import"./CompositeItem-CxQ8ZZ6u.js";import"./makeExternalStore-BEEUYNQZ.js";import"./BaseForm-QQVjaDsJ.js";import"./ActionButton-YXW6TfiH.js";import"./Button-6LB6U_zx.js";import"./SkeletonBar-CkZhiozq.js";import"./Tooltip-C_bDdnEa.js";import"./info-sign-BM-eOVp-.js";import"./chevron-up-D1vdO2QD.js";import"./chevron-down-BnUWx6eY.js";import"./useEventCallback-BIPIgLC4.js";import"./iconLoader-fnF-3xNW.js";import"./Switch-SB9EAV8G.js";import"./CompositeRoot-B2ETE1xy.js";import"./TimePicker-jY_87XP2.js";import"./CollapsiblePanel-DzeHzdVK.js";import"./error-iTPjK_eI.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-auuyIGEA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
