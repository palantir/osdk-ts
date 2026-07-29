import{f as n,j as t}from"./iframe-Bvc3GqwO.js";import{O as p}from"./object-table-L-raBK4q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B0t1EL9b.js";import"./Table-Cb4VtDZ6.js";import"./index-Xuw5gDJk.js";import"./Dialog-CEOh12jr.js";import"./cross-DFgF4kLc.js";import"./svgIconContainer-RvZuTijS.js";import"./useBaseUiId-sWVGNDSC.js";import"./InternalBackdrop-DZFJiwIJ.js";import"./composite-CfI-HDCa.js";import"./index-D0suL3J6.js";import"./index-if-pT0qq.js";import"./index-BdnCh_8y.js";import"./useEventCallback-BAuarr7d.js";import"./SkeletonBar-DJ76m9dD.js";import"./LoadingCell-BrecIpHT.js";import"./ColumnConfigDialog-BZcRMhZv.js";import"./DraggableList-B_YeiXKq.js";import"./search-C4s6NW4T.js";import"./Input-rKjGz7ft.js";import"./useControlled-S-w7uv-V.js";import"./Button-CE6JFCro.js";import"./small-cross-B0L8atHp.js";import"./ActionButton-C-u41pWh.js";import"./Checkbox-CgkkKpKr.js";import"./useValueChanged-2n2YnjQz.js";import"./CollapsiblePanel-0CHcr55r.js";import"./MultiColumnSortDialog-DwPatPjA.js";import"./MenuTrigger-BY9vnw5A.js";import"./CompositeItem-C3lrh8v_.js";import"./ToolbarRootContext-DcA09HJY.js";import"./getDisabledMountTransitionStyles-B3ZcEH3_.js";import"./getPseudoElementBounds-DHA77V1w.js";import"./chevron-down-DB-wQkD7.js";import"./index-BBfvC_3C.js";import"./error-Cmb39vju.js";import"./BaseCbacBanner-BpydKwzs.js";import"./makeExternalStore-C7V97glS.js";import"./Tooltip-DcWN2WSs.js";import"./PopoverPopup-CfImPpLm.js";import"./toNumber-pPJJn738.js";import"./useOsdkClient-D0i57DgS.js";import"./tick-CnTf7B9g.js";import"./DropdownField-BvD6Dlja.js";import"./withOsdkMetrics-BErJ5uW5.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
