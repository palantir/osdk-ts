import{f as p,j as e}from"./iframe-YwePy6Na.js";import{O as i}from"./object-table-Dp9r6Amm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C5O8HAF_.js";import"./Table-vKwb6riK.js";import"./index-kDdf5Tk2.js";import"./Dialog-DkeogbIL.js";import"./cross-Y-lq_61F.js";import"./svgIconContainer-nKGCa_Yw.js";import"./useBaseUiId-vveaqpRL.js";import"./InternalBackdrop-n_VXKU8h.js";import"./composite-BvfYu_Ep.js";import"./index-B-58BhWJ.js";import"./index-Y7QOpJkL.js";import"./index-TgM_EtVZ.js";import"./useEventCallback-B9544m6r.js";import"./SkeletonBar-C0QVMjH7.js";import"./LoadingCell-COl8_Q6l.js";import"./ColumnConfigDialog-DwZUCWad.js";import"./DraggableList-z6CvTLCx.js";import"./search-CkQaqOfS.js";import"./Input-BbXslpL4.js";import"./useControlled-CXJ0FOIB.js";import"./Button-CajACsUP.js";import"./small-cross-BoYlxTd8.js";import"./ActionButton--mSG10q_.js";import"./Checkbox-B-rZLKxz.js";import"./useValueChanged-DOhoBYTW.js";import"./CollapsiblePanel-DhdNZ43G.js";import"./MultiColumnSortDialog-BDmfQifF.js";import"./MenuTrigger-H-hNI4h4.js";import"./CompositeItem-DwKpE3E9.js";import"./ToolbarRootContext-IvyHUIol.js";import"./getDisabledMountTransitionStyles-Dp-GSE2g.js";import"./getPseudoElementBounds-DvHm1E4j.js";import"./chevron-down-APdhRSd1.js";import"./index-B8BnOK3F.js";import"./error-BpwHZdni.js";import"./BaseCbacBanner-CV3UV8UT.js";import"./makeExternalStore-BDW_RQe5.js";import"./Tooltip-DWBJxFHb.js";import"./PopoverPopup-Di-M8mNa.js";import"./debounce-EjzoHQP3.js";import"./useOsdkClient-Dvnc0JJ7.js";import"./tick-yO9PCDBT.js";import"./DropdownField-DJy3CWMh.js";import"./isEqual-CjW4gmi7.js";import"./withOsdkMetrics-CdgeYRWr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
