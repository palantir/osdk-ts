import{f as n,j as t}from"./iframe-CbGjWaE9.js";import{O as p}from"./object-table-BCAGZE8w.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dr_e-EC3.js";import"./Table-DtmeRGMe.js";import"./index-CBgEgkUp.js";import"./Dialog-4JgPVXJ-.js";import"./cross-Bnvgs-C9.js";import"./svgIconContainer-DXdjlfUu.js";import"./useBaseUiId-C1oTybC3.js";import"./InternalBackdrop-DfNxUcCf.js";import"./composite-9xQ7wI60.js";import"./index-CAbAo81F.js";import"./index-DO9rp8Gp.js";import"./index-BVq57H-p.js";import"./useEventCallback-quMLkH9_.js";import"./SkeletonBar-B4YRD_iL.js";import"./LoadingCell-CVJ-Me3d.js";import"./ColumnConfigDialog-DhK9CkLV.js";import"./DraggableList-n0u3bLhi.js";import"./search-DFs1YmKn.js";import"./Input-D7xT8msi.js";import"./useControlled-YJVh26kJ.js";import"./Button-B-nIpohr.js";import"./small-cross-B4WK9sA_.js";import"./ActionButton-Brsc2yrH.js";import"./Checkbox-BGd_5iEG.js";import"./minus-rHCxhHbP.js";import"./tick-WCAcSBR0.js";import"./useValueChanged-C7LyC_Tt.js";import"./caret-down-BYanpA2L.js";import"./CollapsiblePanel-B3_77_nI.js";import"./MultiColumnSortDialog-B1C1WIXT.js";import"./MenuTrigger-CHRKngPg.js";import"./CompositeItem-DQHd7J4s.js";import"./ToolbarRootContext-5sfrL39e.js";import"./getDisabledMountTransitionStyles-Qv0wLl6u.js";import"./getPseudoElementBounds-9bgwxXj_.js";import"./chevron-down-C-VmgSyY.js";import"./index-1vHmoPvv.js";import"./error-W0_UbSku.js";import"./BaseCbacBanner-Be2Nmrfw.js";import"./makeExternalStore-M41rDuFE.js";import"./Tooltip-BqaY7Je-.js";import"./PopoverPopup-rjNySmQB.js";import"./toNumber-nF6o512J.js";import"./useOsdkClient-DYhaCxd2.js";import"./DropdownField-Dx0SUvrx.js";import"./withOsdkMetrics-BquZO7dr.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
