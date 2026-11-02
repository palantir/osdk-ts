import{j as t,g as n}from"./iframe-DFabC9bf.js";import{A as r}from"./action-form-Dx9tNBgV.js";import"./preload-helper-BLxMvu58.js";import"./DropdownField-BmWQkglP.js";import"./debounce-kIdrhBMS.js";import"./useOsdkClient-qt8uEQ5r.js";import"./index-DgsFchdG.js";import"./Input-BZyaCDxG.js";import"./useBaseUiId-Dxr7oR41.js";import"./useControlled-B3kUZkdE.js";import"./index-BHWOd5Tr.js";import"./index-Gxd2oAE6.js";import"./PopoverPopup-Dpc77gDV.js";import"./InternalBackdrop-C20tnZkX.js";import"./composite-BoRXQVH0.js";import"./index-B8dgdXG5.js";import"./getDisabledMountTransitionStyles-BTShP6Yf.js";import"./ToolbarRootContext-2AVlTjyA.js";import"./tick-DRNk9pjM.js";import"./svgIconContainer-CsYtoZH2.js";import"./small-cross-C4IRJysc.js";import"./search-B_WKOos_.js";import"./cross-ey58JM4H.js";import"./useValueChanged-BLFxNhsm.js";import"./getPseudoElementBounds-DqdMi3cO.js";import"./CompositeItem-DUW332tM.js";import"./makeExternalStore-D6-6uuSf.js";import"./BaseForm-Dw-Byfsy.js";import"./ActionButton-BjOTOAby.js";import"./Button-DIvAKpTN.js";import"./SkeletonBar-DB5TmKcA.js";import"./Tooltip-De3r9uzL.js";import"./info-sign-ButLe2wW.js";import"./chevron-up-BKY2z0jN.js";import"./chevron-down-jy1hrUFA.js";import"./useEventCallback-Dxsnooid.js";import"./iconLoader-Cdl1Xmug.js";import"./Switch-UJvxZOiS.js";import"./CompositeRoot-DLXUO876.js";import"./TimePicker-BHvKA_dG.js";import"./CollapsiblePanel-bxzaQZkR.js";import"./error-f3c_sZgu.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BCss4ydh.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
