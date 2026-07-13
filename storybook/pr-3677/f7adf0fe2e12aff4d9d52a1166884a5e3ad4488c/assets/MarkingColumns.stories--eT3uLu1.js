import{f as n,j as t}from"./iframe-CPlkVzRX.js";import{O as p}from"./object-table-vbK15p_M.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BPLtUsTR.js";import"./Table-CFr7mTdz.js";import"./index-C7DVDnEH.js";import"./Dialog-JjdQajtS.js";import"./cross-NNY-hlVM.js";import"./svgIconContainer-CbDzXV6d.js";import"./useBaseUiId-ASzug_9H.js";import"./InternalBackdrop-BbSy2yPA.js";import"./composite-IfShg2e2.js";import"./index-BWF4oSDC.js";import"./index-88sVlVMo.js";import"./index-Czeu0k57.js";import"./useEventCallback-Bz9yzAWg.js";import"./SkeletonBar-BLvVjliD.js";import"./LoadingCell-DdMZDIlw.js";import"./ColumnConfigDialog-C9BTGo9S.js";import"./DraggableList-Bh0qggvY.js";import"./search-NwC2yRDx.js";import"./Input-OI8vv9vI.js";import"./useControlled-PnLqC2jZ.js";import"./Button-BL7WGeR7.js";import"./small-cross-sz3OCr0-.js";import"./ActionButton-BX3CI4qR.js";import"./Checkbox-CdCneLn0.js";import"./useValueChanged-DJ0-6LGf.js";import"./CollapsiblePanel-m1mcrA_d.js";import"./MultiColumnSortDialog-DEc6jgpM.js";import"./MenuTrigger-CYc2vapg.js";import"./CompositeItem-Z2rlf7F_.js";import"./ToolbarRootContext-Z1LNpQ45.js";import"./getDisabledMountTransitionStyles-CeMRHz96.js";import"./getPseudoElementBounds-DEx4uFwW.js";import"./chevron-down-DWRjbthW.js";import"./index-yGDpJvAl.js";import"./error-B2_RfTBt.js";import"./BaseCbacBanner-CKH-ox9e.js";import"./makeExternalStore-CIn1M1hc.js";import"./Tooltip-DH4fH58s.js";import"./PopoverPopup-CmVEPFbE.js";import"./toNumber-DBPl-bec.js";import"./useOsdkClient-DbU8QV6e.js";import"./tick-DTIHJDCx.js";import"./DropdownField-DOJA3bn_.js";import"./withOsdkMetrics-gwijxqmw.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
