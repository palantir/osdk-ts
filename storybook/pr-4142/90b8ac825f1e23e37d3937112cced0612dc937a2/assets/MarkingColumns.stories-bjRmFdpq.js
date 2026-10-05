import{f as p,j as e}from"./iframe-iZnS8oEd.js";import{O as i}from"./object-table-C4Ty0IB9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bp14nz6B.js";import"./Table-D9c2v_Jv.js";import"./index-DYpyIwVE.js";import"./Dialog-CcE2k6kD.js";import"./cross-CwJuB6vr.js";import"./svgIconContainer-CQ9YnN-K.js";import"./useBaseUiId-30R3WmkM.js";import"./InternalBackdrop-DkYxAsCO.js";import"./composite-DFXKizFH.js";import"./index-BGV0iA7n.js";import"./index-lcQmyE2o.js";import"./index-CF3zpfbh.js";import"./useEventCallback-BJQUbbjw.js";import"./SkeletonBar-B4WtYr-D.js";import"./LoadingCell-DcmBu7cA.js";import"./ColumnConfigDialog-DIJjz-s0.js";import"./DraggableList-DnKYpezS.js";import"./search-VBwZcVe4.js";import"./Input-DJavpeQK.js";import"./useControlled-D6M_jpuK.js";import"./Button-UwlMUZt9.js";import"./small-cross-LlyJGW73.js";import"./ActionButton-n6yDW2MN.js";import"./Checkbox-BbizxJnk.js";import"./useValueChanged-Dy1WlJh-.js";import"./CollapsiblePanel-DXxFmeha.js";import"./MultiColumnSortDialog-BBzzO1y2.js";import"./MenuTrigger-kFsG_HSQ.js";import"./CompositeItem-wRG5nrDT.js";import"./ToolbarRootContext-Da2ttLiC.js";import"./getDisabledMountTransitionStyles-qNwcN3KE.js";import"./getPseudoElementBounds-C9heIyNM.js";import"./chevron-down-BCGqeKWb.js";import"./index-CiXw8-sy.js";import"./error-D6yePDbl.js";import"./BaseCbacBanner-hbazI1Tu.js";import"./makeExternalStore-RezbOIS0.js";import"./Tooltip-DRVdX3dm.js";import"./PopoverPopup-CLC1eyIN.js";import"./debounce-C0yUuuvl.js";import"./useOsdkClient-EkE0pn24.js";import"./tick-HBQstKrv.js";import"./DropdownField-0N17NynR.js";import"./isEqual-_DoGzm8i.js";import"./withOsdkMetrics-B-D7eEQx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
