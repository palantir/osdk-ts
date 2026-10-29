import{j as t,g as n}from"./iframe-Bl044qnf.js";import{A as r}from"./action-form-Bhjphb7P.js";import"./preload-helper-C3nN8OhV.js";import"./DropdownField-BEqOqzm_.js";import"./debounce-CjvDom3d.js";import"./useOsdkClient-Bq33Z6Hs.js";import"./index-DUYD1b1T.js";import"./Input-Dn6FdMxP.js";import"./useBaseUiId-D3Tkd5iy.js";import"./useControlled-DWQwydBz.js";import"./index-BIw9TA11.js";import"./index-DOFCbist.js";import"./PopoverPopup-D3VJPyhs.js";import"./InternalBackdrop-DANcJBrc.js";import"./composite-BKeFyTtn.js";import"./getDisabledMountTransitionStyles-p_ATdOqC.js";import"./ToolbarRootContext-Btm4cFoY.js";import"./tick-CyfQwmIO.js";import"./svgIconContainer-DSPSIjCL.js";import"./small-cross-CtOoCFP2.js";import"./search-DOyb79Ba.js";import"./cross-ByJxUK15.js";import"./useValueChanged-C0GZ5aIg.js";import"./getPseudoElementBounds-Bmt56FKU.js";import"./CompositeItem-CkPEHO5z.js";import"./makeExternalStore-DPNkNH3X.js";import"./BaseForm-DDKLvvXJ.js";import"./ActionButton-D2CjWZmo.js";import"./Button-BeSccTOh.js";import"./SkeletonBar-CV-952J8.js";import"./Tooltip-CVK2DOVB.js";import"./info-sign-CPhaR0qr.js";import"./chevron-up-DtOe0nLd.js";import"./chevron-down-DCr-eUT2.js";import"./useEventCallback-B7Mw4f_q.js";import"./iconLoader-CwRG6k71.js";import"./Switch-B9w0Mjqu.js";import"./CompositeRoot-DybAya2x.js";import"./TimePicker-DZLUetWz.js";import"./CollapsiblePanel-Drqn5TA4.js";import"./error-TWIHte5e.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DEGSIMfx.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const Z={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const $=["Default"];export{e as Default,$ as __namedExportsOrder,Z as default};
