import{j as t,g as n}from"./iframe-BAYjgPn_.js";import{A as r}from"./action-form-n8d_4sNg.js";import"./preload-helper-BJCl-bRv.js";import"./DropdownField-BO1TnfSs.js";import"./debounce-Bwm-jsNA.js";import"./useOsdkClient-qospIppq.js";import"./index-DN0zke96.js";import"./Input-1Y2R_X8G.js";import"./useBaseUiId-Btxh7Hdv.js";import"./useControlled-SaIcnxAb.js";import"./index-BCKNZ_-u.js";import"./index-ewU9n-Bp.js";import"./PopoverPopup-pcdPHlvL.js";import"./InternalBackdrop-B546RbTG.js";import"./composite-CSv2xCWn.js";import"./index-B1NZC5HL.js";import"./getDisabledMountTransitionStyles-ChyNZQXU.js";import"./ToolbarRootContext-Vpkb3Bpo.js";import"./tick-Bm2gRhmA.js";import"./svgIconContainer-Bdz9mcrS.js";import"./small-cross-Bf2eb-iw.js";import"./search-iSsdT6KZ.js";import"./cross-BXQxs_UM.js";import"./useValueChanged-ZImMoGMC.js";import"./getPseudoElementBounds-bTOtxTD8.js";import"./CompositeItem-C-2rS0Vr.js";import"./makeExternalStore-CGIpAmlW.js";import"./BaseForm-Byhl_SkO.js";import"./ActionButton-CZYvn9-t.js";import"./Button-Zo--VZAt.js";import"./SkeletonBar-CIlY-zEK.js";import"./Tooltip-Cg4WV2Y-.js";import"./info-sign-CIOK2L6y.js";import"./chevron-up-CBc2hrOb.js";import"./chevron-down-B1sc9iOG.js";import"./useEventCallback-CIqiLNSA.js";import"./iconLoader-BCb3Lthc.js";import"./Switch-DgD1Kwx8.js";import"./CompositeRoot-Bekme_zB.js";import"./TimePicker-Cx-qmy_6.js";import"./CollapsiblePanel-GPhcuTeQ.js";import"./error-DapfmyD2.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DE_nej2a.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
