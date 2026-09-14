import{j as t,g as n}from"./iframe-DMLeRer3.js";import{A as r}from"./action-form-Dj9mhFvI.js";import"./preload-helper-CgrwvKPK.js";import"./DropdownField-ajA85Z4P.js";import"./debounce-DJvA31U4.js";import"./useOsdkClient-Fs_RpKoY.js";import"./index-uCsQBnfO.js";import"./Input-LP4KcDLo.js";import"./useBaseUiId-C4s8ZVxT.js";import"./useControlled-DG760Vv3.js";import"./index-XhF3-Ii5.js";import"./index-vxfuwNf-.js";import"./PopoverPopup-C-e8gtkY.js";import"./InternalBackdrop-CyDdu3ej.js";import"./composite-Cge9zcMx.js";import"./index-Ch7aUkCf.js";import"./getDisabledMountTransitionStyles-HfDH4vRh.js";import"./ToolbarRootContext-DJJ5b_fP.js";import"./tick-CvPk6d_r.js";import"./svgIconContainer-COt-rC22.js";import"./small-cross-gPJdhXBg.js";import"./search-C183X4Rd.js";import"./cross-BxDqlCZv.js";import"./useValueChanged-hJ0IWPXR.js";import"./getPseudoElementBounds-V4Y4w-GJ.js";import"./CompositeItem-BKFtY3yw.js";import"./makeExternalStore-DV-LpRK9.js";import"./BaseForm-B9F942FI.js";import"./ActionButton-Dom-ym7d.js";import"./Button-DPPusxtK.js";import"./SkeletonBar-DCA00Bpr.js";import"./Tooltip-C0h78S3t.js";import"./info-sign-CqzNYE4x.js";import"./chevron-up-BFhbhHf5.js";import"./chevron-down-Cn9rULd1.js";import"./useEventCallback-D_QVHtF8.js";import"./iconLoader-B6K-JY64.js";import"./CompositeRoot-D2UIQAv4.js";import"./Switch-DZBJRShr.js";import"./TimePicker-BRahyc-f.js";import"./CollapsiblePanel-B-bD3HOB.js";import"./error-CtIw9Q7f.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DV6FYw-u.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
