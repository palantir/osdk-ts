import{f as p,j as e}from"./iframe-DkzbgSAD.js";import{O as i}from"./object-table-DERUT3qL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BiwIe667.js";import"./Table-BjvAinYT.js";import"./index-DjIOOe4t.js";import"./Dialog-c7vLoh07.js";import"./cross-Cd4Ezf-o.js";import"./svgIconContainer-DSZ9Y-N3.js";import"./useBaseUiId-CdNYBUR5.js";import"./InternalBackdrop-CaeoLXWh.js";import"./composite-CynzhD0V.js";import"./index-CtmpuiHr.js";import"./index-DKOk24VN.js";import"./index-MiufCKVv.js";import"./useEventCallback-Dvazelct.js";import"./SkeletonBar-DLuntpKM.js";import"./LoadingCell-CP8OE6bF.js";import"./ColumnConfigDialog-BMcEiYrr.js";import"./DraggableList-YeaSyVSn.js";import"./search-DVRH7Lct.js";import"./Input-CAjIPIjE.js";import"./useControlled-C8Dvxw0_.js";import"./Button-BHYsrTUy.js";import"./small-cross-D9-XIEQD.js";import"./ActionButton-CX4x4__7.js";import"./Checkbox-DZ1dvYsR.js";import"./useValueChanged-DbcB2lMI.js";import"./CollapsiblePanel-lk9wXXL6.js";import"./MultiColumnSortDialog-t_1c5JLL.js";import"./MenuTrigger-DVn985mJ.js";import"./CompositeItem-B0TjqzOk.js";import"./ToolbarRootContext-Z-VSuc63.js";import"./getDisabledMountTransitionStyles-BKGL4WDU.js";import"./getPseudoElementBounds-CuBbtjn1.js";import"./chevron-down-D4koVRNt.js";import"./index-BSrr_0Jz.js";import"./error-CAfn1z7w.js";import"./BaseCbacBanner-DzF-LUX4.js";import"./makeExternalStore-CBYxH43f.js";import"./Tooltip-4k1X8Kbh.js";import"./PopoverPopup-jjunJ9hJ.js";import"./debounce-DuGr5rYC.js";import"./useOsdkClient-BN4CbGuS.js";import"./tick-BvW-N913.js";import"./DropdownField-mY-AIqk3.js";import"./isEqual-BiIWWaVa.js";import"./withOsdkMetrics-BhSP4CDN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
