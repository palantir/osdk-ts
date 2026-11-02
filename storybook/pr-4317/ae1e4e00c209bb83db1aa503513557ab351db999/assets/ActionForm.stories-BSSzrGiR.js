import{j as t,g as n}from"./iframe-CgfdIm0T.js";import{A as r}from"./action-form-tk808Nf0.js";import"./preload-helper-C8qWAL46.js";import"./DropdownField-BMHyrqgr.js";import"./debounce-DQksQltd.js";import"./useOsdkClient-B3iR8qwm.js";import"./index-BeSyGo3F.js";import"./Input-BG9nzqHz.js";import"./useBaseUiId-BuuF3bkV.js";import"./useControlled-B0N5dBnJ.js";import"./index-B8rhYuyr.js";import"./index-bby2SWWb.js";import"./PopoverPopup-DlHSMVYr.js";import"./InternalBackdrop-qMgkwTyz.js";import"./composite-CUpx3Hda.js";import"./index-BYKYJzqq.js";import"./getDisabledMountTransitionStyles-COYOVfxZ.js";import"./ToolbarRootContext-DMK8ajZX.js";import"./tick-hxPJxWFp.js";import"./svgIconContainer-DQ0tbGLY.js";import"./small-cross-DX0KVrVi.js";import"./search-DENXSVyb.js";import"./cross-CWciybKu.js";import"./useValueChanged-0xGZfbNw.js";import"./getPseudoElementBounds-FnH3Aw9k.js";import"./CompositeItem-BTF_cTSf.js";import"./makeExternalStore-BNPt347_.js";import"./BaseForm-BxpdvwKM.js";import"./ActionButton-CcLOh3Yb.js";import"./Button-CVc3RSfH.js";import"./SkeletonBar-BRUSZP5d.js";import"./Tooltip-ygywzpjU.js";import"./info-sign-B3Ts8IhZ.js";import"./chevron-up-B7_YTyjt.js";import"./chevron-down-CiBD6Dqi.js";import"./useEventCallback-roPvTisA.js";import"./iconLoader-B9ewdvub.js";import"./Switch-BPWDtZ9l.js";import"./CompositeRoot-rMSq6YJS.js";import"./TimePicker-Bt_Cyz8x.js";import"./CollapsiblePanel-CNv0K6GO.js";import"./error-Bu8LxMV7.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BU1Vym1S.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
