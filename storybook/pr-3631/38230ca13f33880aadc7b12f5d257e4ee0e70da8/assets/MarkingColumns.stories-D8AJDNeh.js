import{f as n,j as t}from"./iframe-DcrGl_O-.js";import{O as p}from"./object-table-BPygjlIo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DkTM98UZ.js";import"./Table-BuVfs1yJ.js";import"./index-t22ZryHL.js";import"./Dialog-xJy6Q51_.js";import"./cross-BDte8GAy.js";import"./svgIconContainer-DI9nrV8O.js";import"./useBaseUiId-BG7q8PzN.js";import"./InternalBackdrop-DTt4LBxf.js";import"./composite-JNfYZaHn.js";import"./index-BHn6IxTA.js";import"./index-BdTuNC5G.js";import"./index-BDLEBAab.js";import"./useEventCallback-8yUNpzrQ.js";import"./SkeletonBar-BHRs2wAX.js";import"./LoadingCell-B73iNlTr.js";import"./ColumnConfigDialog-Ch25l1hj.js";import"./DraggableList-AtqFUOy2.js";import"./search-QKPSMOkR.js";import"./Input-C-1JAkdn.js";import"./useControlled-BKIeD5bs.js";import"./Button-pEYsBApl.js";import"./small-cross-axpRZrA0.js";import"./ActionButton-D4zs5Apg.js";import"./Checkbox-fjZKHdM5.js";import"./useValueChanged-Y4MnbHus.js";import"./CollapsiblePanel-Dekee5mX.js";import"./MultiColumnSortDialog-umLRVJog.js";import"./MenuTrigger-BUaPlHyD.js";import"./CompositeItem-DVchhf0Z.js";import"./ToolbarRootContext-DvnycJee.js";import"./getDisabledMountTransitionStyles-CSD0vjLr.js";import"./getPseudoElementBounds-CvooUYri.js";import"./chevron-down-BLKzex50.js";import"./index-B8JHvmpz.js";import"./error-B0Z2eL6G.js";import"./BaseCbacBanner-DQiY1kTr.js";import"./makeExternalStore-DBdL1D3Z.js";import"./Tooltip-BtoKMyJL.js";import"./PopoverPopup-zGD8vLfh.js";import"./toNumber-EL-CmTrj.js";import"./useOsdkClient-DAUtxSPg.js";import"./tick-DzPNCldO.js";import"./DropdownField-DkgaxOFL.js";import"./withOsdkMetrics-CB_-TdaD.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
