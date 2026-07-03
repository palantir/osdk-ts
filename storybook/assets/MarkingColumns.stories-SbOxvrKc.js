import{f as n,j as t}from"./iframe-DAmrO1WB.js";import{O as p}from"./object-table-DS6rPpAm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-B_lt_h5X.js";import"./index-CsqC8-YZ.js";import"./Dialog-CEX3Onuv.js";import"./cross-DixUZuMX.js";import"./svgIconContainer-BsbF50g5.js";import"./useBaseUiId-CcSEE-tv.js";import"./InternalBackdrop-DSYpgTRe.js";import"./composite-BshH-Ldx.js";import"./index-iuLOvOw1.js";import"./index-9hWikb-m.js";import"./index-C95WW1n4.js";import"./useEventCallback-BvB2waIq.js";import"./SkeletonBar-yXmiCiO-.js";import"./LoadingCell-BbAHVoVR.js";import"./ColumnConfigDialog-nLLh4pzy.js";import"./DraggableList-G-sek2Ct.js";import"./search-bRdwXiVS.js";import"./Input-DwIOwGNX.js";import"./useControlled-CGSRZ2SH.js";import"./Button-BykGhL5_.js";import"./small-cross-DlxbNIO6.js";import"./ActionButton-CRpDVeZ1.js";import"./Checkbox-DoIgnPhB.js";import"./useValueChanged-6gju-Eoj.js";import"./CollapsiblePanel-jVlh62mp.js";import"./MultiColumnSortDialog-KLWbY7JA.js";import"./MenuTrigger-Be_iMDff.js";import"./CompositeItem-B9hIeSlG.js";import"./ToolbarRootContext-DbL1PtTs.js";import"./getDisabledMountTransitionStyles-DRhohuOm.js";import"./getPseudoElementBounds-Cd5OUh0X.js";import"./chevron-down-B0A5ila5.js";import"./index-CWXnflDM.js";import"./error-BXivlo3V.js";import"./BaseCbacBanner-CFf2EGPq.js";import"./makeExternalStore-BXpsdQWj.js";import"./Tooltip-C8SmGzUN.js";import"./PopoverPopup-DDq80Pwo.js";import"./toNumber-BjVpSix5.js";import"./useOsdkClient-PguT3gyR.js";import"./tick-Np478Si6.js";import"./DropdownField-CY9iVtFs.js";import"./withOsdkMetrics-BMLn13cz.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
