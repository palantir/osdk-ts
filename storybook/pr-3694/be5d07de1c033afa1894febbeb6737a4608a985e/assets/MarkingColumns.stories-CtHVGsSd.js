import{f as n,j as t}from"./iframe-DsVuvwqd.js";import{O as p}from"./object-table-Bcihn5Ra.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BHSAR2MW.js";import"./Table-QXPnYfc1.js";import"./index-BUqqlNCM.js";import"./Dialog-BEEgNgTr.js";import"./cross-r6u1wEvG.js";import"./svgIconContainer-RszyBwzo.js";import"./useBaseUiId-C9Lo_DER.js";import"./InternalBackdrop-F3eZ2FKc.js";import"./composite-DwH3i386.js";import"./index-BuXURnPF.js";import"./index-nR84ykS2.js";import"./index-kWesChf_.js";import"./useEventCallback-Dt1DGYOr.js";import"./SkeletonBar-CE7H6f_Z.js";import"./LoadingCell-7z7uIPgZ.js";import"./ColumnConfigDialog-eOpJIT15.js";import"./DraggableList-C__sTh9n.js";import"./search-Bg1IdvaZ.js";import"./Input-CPg1LhGG.js";import"./useControlled-FyZnIhZe.js";import"./Button-CsBAS9KM.js";import"./small-cross-Br3ROOyG.js";import"./ActionButton-fgLPnQM6.js";import"./Checkbox-CF9JhjmB.js";import"./useValueChanged-DpWldoeb.js";import"./CollapsiblePanel-dwtf37ie.js";import"./MultiColumnSortDialog-DPiZP6hN.js";import"./MenuTrigger-D-iZmwv5.js";import"./CompositeItem-CMLGtrcw.js";import"./ToolbarRootContext-Bok94z7p.js";import"./getDisabledMountTransitionStyles-sE8Zywdg.js";import"./getPseudoElementBounds-5yOxJKcN.js";import"./chevron-down-DlfDLF9f.js";import"./index-DWb1E976.js";import"./error-DgTcku-S.js";import"./BaseCbacBanner-C0BQY1g-.js";import"./makeExternalStore-UHZ7KJm2.js";import"./Tooltip-C2AY9ury.js";import"./PopoverPopup-T5LJB8ia.js";import"./toNumber-Cj83mQ15.js";import"./useOsdkClient-Dv49360v.js";import"./tick-DiL3CPWb.js";import"./DropdownField-1fiuRUgo.js";import"./withOsdkMetrics-BqQHJvun.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
