import{f as n,j as t}from"./iframe-BdKHCBT_.js";import{O as p}from"./object-table-L3QWJT6v.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BHaG4Wtu.js";import"./Table-DKIKejw2.js";import"./index-C0TV2Cz4.js";import"./Dialog-B8GnErke.js";import"./cross-Bt8Lidsv.js";import"./svgIconContainer-DsTRuZhx.js";import"./useBaseUiId-B5z7mu1W.js";import"./InternalBackdrop-CNGt4Zws.js";import"./composite-DjnBpL_m.js";import"./index-DoLjHhIf.js";import"./index-DwOB6raX.js";import"./index-BeNMEQGa.js";import"./useEventCallback-D0vKXk0U.js";import"./SkeletonBar-DhPU7FDz.js";import"./LoadingCell-CEZzAWl1.js";import"./ColumnConfigDialog-DsQj4p6y.js";import"./DraggableList-pv7fu7v3.js";import"./Input-xe8JC9fI.js";import"./useControlled-BGYlmhdi.js";import"./Button-C0fZOnx1.js";import"./small-cross-BnDc0UF-.js";import"./ActionButton-CbTnL-AN.js";import"./Checkbox-GIB9GT3o.js";import"./minus-Sp631UTh.js";import"./useValueChanged-C_B-fZyY.js";import"./caret-down-Bt2-35yV.js";import"./CollapsiblePanel-iAnkregB.js";import"./MultiColumnSortDialog-D7ICEToS.js";import"./MenuTrigger-FAAdyHVn.js";import"./CompositeItem-CuxjcVJx.js";import"./ToolbarRootContext-jPbDJ2ZQ.js";import"./getDisabledMountTransitionStyles-B2Mjf1qd.js";import"./getPseudoElementBounds-CdY0T3de.js";import"./chevron-down-MNXW9z8W.js";import"./index-BV5Fvbs5.js";import"./error-BVDy6z-e.js";import"./BaseCbacBanner-Bzpq2EnR.js";import"./makeExternalStore-CUChCVg_.js";import"./Tooltip-DBYFM4yB.js";import"./PopoverPopup-BsqLIqrv.js";import"./toNumber-BH_p2_Vk.js";import"./useOsdkClient-DH_zZ_R6.js";import"./DropdownField-COK-GABO.js";import"./withOsdkMetrics-BAfiL_Kh.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
