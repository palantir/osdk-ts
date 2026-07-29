import{j as o,r as t}from"./iframe-Da42tfo0.js";import{b as S,h as C,a as e,D as m,c as T,T as y}from"./baseFormStoryHelpers-dAyd2u9k.js";import{B as D,D as b}from"./dialog-B2JqubcS.js";import{B as g}from"./BaseForm-BisQz914.js";import"./preload-helper-DAikJXZa.js";import"./SubmissionOutputPanel-DG4irKhJ.js";import"./index-Bomen_f9.js";import"./html-NGh3YZTV.js";import"./svgIconContainer-C1uFDFQ-.js";import"./iconLoader-CUqjgfX-.js";import"./index-Dneb3Ic8.js";import"./index-CMocEMCd.js";import"./index-B31UFyDN.js";import"./isObject-GrzurbJg.js";import"./ActionButton-BvqT7-oi.js";import"./Button-DNGlddJW.js";import"./useBaseUiId-BeAjw0Pz.js";import"./SkeletonBar-BqNP19Zt.js";import"./Tooltip-s5Zvo8l1.js";import"./InternalBackdrop-B0vh3c6g.js";import"./composite-BM8dnVYH.js";import"./getDisabledMountTransitionStyles-BcsBiRAn.js";import"./ToolbarRootContext-BmwtS_AT.js";import"./PopoverPopup-B2KF4r0_.js";import"./info-sign-Bw_bRdxv.js";import"./DropdownField-lD6ZutwA.js";import"./toNumber-B2CaCxn8.js";import"./useOsdkClient-BxBRpG4B.js";import"./Input-CsGs3Ea-.js";import"./useControlled-tfkpEIEU.js";import"./tick-Djt3HCnR.js";import"./search-CMGFB0Gl.js";import"./cross-DG6Fu1MX.js";import"./useValueChanged-Cr9sCKBo.js";import"./getPseudoElementBounds-BkbDXquO.js";import"./CompositeItem-BgwdEem5.js";import"./makeExternalStore-DY6l4t0Z.js";import"./chevron-up-HpUmaoT2.js";import"./chevron-down-B9ztHwbJ.js";import"./useEventCallback-DQIdBA5X.js";import"./Switch-CnAP0jNF.js";import"./CompositeRoot-4xhbfFIS.js";import"./TimePicker-CtZZuoEY.js";import"./CollapsiblePanel-DPDXkpk-.js";import"./error-C20szSnY.js";const be={...S,title:"Components/ActionForm/Building Blocks/BaseForm/In a Dialog"},E=[e({fieldKey:"scheduledAt",fieldComponent:"DATETIME_PICKER",label:"Scheduled At",fieldComponentProps:{showTime:!0,placeholder:"Select date and time"}}),e({fieldKey:"deadline",fieldComponent:"DATETIME_PICKER",label:"Deadline",fieldComponentProps:{placeholder:"Select date"}}),e({fieldKey:"meetingWindow",fieldComponent:"DATE_RANGE_INPUT",label:"Meeting Window",fieldComponentProps:{showTime:!0,placeholderStart:"Start",placeholderEnd:"End"}}),e({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",isRequired:!0,fieldComponentProps:{items:m,placeholder:"Select department..."}}),e({fieldKey:"team",fieldComponent:"DROPDOWN",label:"Team",fieldComponentProps:{items:m,isSearchable:!0,placeholder:"Search teams..."}})];function P(){const[l,r]=t.useState(!1),a=t.useCallback(()=>{r(!0)},[]),s=t.useCallback(()=>{r(!1)},[]);return o.jsxs(o.Fragment,{children:[o.jsx(D,{text:"Open dialog",onClick:a}),o.jsx(b,{className:"osdkBlueprintDialogForm",isOpen:l,onClose:s,title:"Action form",children:o.jsx(g,{formContent:E,onSubmit:C})})]})}const n={render:()=>o.jsx(P,{}),parameters:{docs:{source:{code:`function BlueprintDialogBaseForm() {
  return (
    <Dialog isOpen={true} title="Action form">
      <BaseForm formContent={formContent} onSubmit={handleSubmit} />
    </Dialog>
  );
}`}}}},B=[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Full Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter full name"}}),e({fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",isRequired:!0,fieldComponentProps:{placeholder:"user@example.com"}}),e({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",fieldComponentProps:{items:m,placeholder:"Select department..."}}),e({fieldKey:"startDate",fieldComponent:"DATETIME_PICKER",label:"Start Date",fieldComponentProps:{placeholder:"Select a date"}}),e({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:T,placeholder:"Select priority"}}),e({fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Status",fieldComponentProps:{options:[{label:"Active",value:!0},{label:"Inactive",value:!1}]}}),e({fieldKey:"bio",fieldComponent:"TEXT_AREA",label:"Bio",fieldComponentProps:{placeholder:"Tell us about yourself",rows:3}}),e({fieldKey:"tags",fieldComponent:"DROPDOWN",label:"Tags",fieldComponentProps:{items:y,isMultiple:!0,isSearchable:!0,placeholder:"Search tags..."}}),e({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Resume",fieldComponentProps:{accept:".pdf,.doc,.docx"}}),e({fieldKey:"notes",fieldComponent:"TEXT_AREA",label:"Additional Notes",fieldComponentProps:{placeholder:"Any extra details",rows:2}})];function F(){const[l,r]=t.useState(!1),a=t.useCallback(()=>{r(!0)},[]),s=t.useCallback(()=>{r(!1)},[]);return o.jsxs(o.Fragment,{children:[o.jsx(D,{text:"Open dialog",onClick:a}),o.jsx(b,{className:"osdkBlueprintDialogForm",isOpen:l,onClose:s,title:"New employee",children:o.jsx(g,{formContent:B,onSubmit:C})})]})}const i={render:()=>o.jsx(F,{}),parameters:{docs:{description:{story:"When the form has many fields inside a height-constrained container like a dialog, the fields area scrolls while the footer stays pinned at the bottom."},source:{code:`// The footer pins automatically when the form overflows its container.
// No extra CSS or props needed — just place BaseForm inside a
// height-constrained parent (dialog, panel, sidebar).
<Dialog isOpen={true} title="New employee">
  <BaseForm formContent={manyFields} onSubmit={handleSubmit} />
</Dialog>`}}}};var p,d,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <BlueprintDialogBaseForm />,
  parameters: {
    docs: {
      source: {
        code: \`function BlueprintDialogBaseForm() {
  return (
    <Dialog isOpen={true} title="Action form">
      <BaseForm formContent={formContent} onSubmit={handleSubmit} />
    </Dialog>
  );
}\`
      }
    }
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var f,u,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <ScrollableDialogBaseForm />,
  parameters: {
    docs: {
      description: {
        story: "When the form has many fields inside a height-constrained container like a dialog, the fields area scrolls while the footer stays pinned at the bottom."
      },
      source: {
        code: \`// The footer pins automatically when the form overflows its container.
// No extra CSS or props needed — just place BaseForm inside a
// height-constrained parent (dialog, panel, sidebar).
<Dialog isOpen={true} title="New employee">
  <BaseForm formContent={manyFields} onSubmit={handleSubmit} />
</Dialog>\`
      }
    }
  }
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const ge=["InsideBlueprintDialog","ScrollableDialogForm"];export{n as InsideBlueprintDialog,i as ScrollableDialogForm,ge as __namedExportsOrder,be as default};
