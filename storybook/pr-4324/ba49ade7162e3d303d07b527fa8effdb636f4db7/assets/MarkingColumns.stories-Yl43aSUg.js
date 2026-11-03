import{f as p,j as e}from"./iframe-DEUQfbyJ.js";import{O as i}from"./object-table-cFeBBSw4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DDtbSBML.js";import"./Table-Bd5XrgZX.js";import"./index-C6_mThYo.js";import"./Dialog-BSvKxkhq.js";import"./cross-BJMUt8op.js";import"./svgIconContainer-Cb_T1wEM.js";import"./useBaseUiId-CRei-m-p.js";import"./InternalBackdrop-Aqi47OUJ.js";import"./composite-Bu1RP316.js";import"./index-5cIFHse-.js";import"./index-DlbzGHlu.js";import"./index-AzDJyk_j.js";import"./useEventCallback-CRDTuIQt.js";import"./SkeletonBar-DvYOZTAf.js";import"./LoadingCell-Cl7o_rtR.js";import"./ColumnConfigDialog-BUTGFTNl.js";import"./DraggableList-Bby71G5h.js";import"./search-bO4Ln9fx.js";import"./Input-Bp3cyvX_.js";import"./useControlled-BF2EiofB.js";import"./Button-PnV_trQF.js";import"./small-cross-CX9XBHyk.js";import"./ActionButton-CL0HGLP3.js";import"./Checkbox-CKLhUd_K.js";import"./useValueChanged-D5ajVfmi.js";import"./CollapsiblePanel-xExM-9G0.js";import"./MultiColumnSortDialog-LT5sxkuL.js";import"./MenuTrigger-CFReuUPx.js";import"./CompositeItem-zXsqXwGS.js";import"./ToolbarRootContext-D3nYLoXj.js";import"./getDisabledMountTransitionStyles-XgqHg06x.js";import"./getPseudoElementBounds-CuNE1gbu.js";import"./chevron-down-Dri7QTYH.js";import"./index-Cb73vfBj.js";import"./error-CqWSLLge.js";import"./BaseCbacBanner-CJ05xbWq.js";import"./makeExternalStore-DBpHlW_G.js";import"./Tooltip-B21lyOBo.js";import"./PopoverPopup-Cp92vqrR.js";import"./debounce-BX-I8tYB.js";import"./useOsdkClient-CLqlE-Zc.js";import"./tick-BxydVJl6.js";import"./DropdownField-Dlw4EWWr.js";import"./isEqual-C1-q93yY.js";import"./withOsdkMetrics-GkFpiJAY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
