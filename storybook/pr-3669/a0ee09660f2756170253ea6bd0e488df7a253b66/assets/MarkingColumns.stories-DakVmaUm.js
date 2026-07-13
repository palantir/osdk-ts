import{f as n,j as t}from"./iframe-Bd5lXcK-.js";import{O as p}from"./object-table-y1qKFBzn.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B40_CvDk.js";import"./Table-d-6j00qQ.js";import"./index-BwIezaLT.js";import"./Dialog-B1xHBI4E.js";import"./cross-DhHLcr1o.js";import"./svgIconContainer-DkEYOti2.js";import"./useBaseUiId-iFREST2G.js";import"./InternalBackdrop-DjFCybqx.js";import"./composite-gHOL1u2z.js";import"./index-4lineNoM.js";import"./index-COBYsO2C.js";import"./index-Q-SR1YB0.js";import"./useEventCallback-n-0IMAB-.js";import"./SkeletonBar-DyebVkmE.js";import"./LoadingCell-s-qEXnK2.js";import"./ColumnConfigDialog-D4Vk6LmV.js";import"./DraggableList-RG389z7P.js";import"./search-V68UyHJf.js";import"./Input-BVbj5hXB.js";import"./useControlled-DwGxm4YP.js";import"./Button-BInWzPHC.js";import"./small-cross-4V5j9s-W.js";import"./ActionButton-DABcDupN.js";import"./Checkbox-CO8HtGdM.js";import"./useValueChanged-oQv84m4r.js";import"./CollapsiblePanel-XsCCajNn.js";import"./MultiColumnSortDialog-CsKGiSyM.js";import"./MenuTrigger-BIkqZ6Rh.js";import"./CompositeItem-9LzBwTqs.js";import"./ToolbarRootContext-D7PUXliD.js";import"./getDisabledMountTransitionStyles-CbLs9Lj7.js";import"./getPseudoElementBounds-DdoxIgod.js";import"./chevron-down-wTBIRPdb.js";import"./index-BlFnoMt0.js";import"./error-Bx7kxHM8.js";import"./BaseCbacBanner-D7foK6ul.js";import"./makeExternalStore-kFBYkqGe.js";import"./Tooltip-BB8a_4Kw.js";import"./PopoverPopup-CzvmD-Nt.js";import"./toNumber-B5ErJCg3.js";import"./useOsdkClient-DLAz9Wl_.js";import"./tick-TDAs7y5L.js";import"./DropdownField-BuORt-Ic.js";import"./withOsdkMetrics-BDY538Ko.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
