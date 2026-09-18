import{f as p,j as e}from"./iframe-BHPDqCFq.js";import{O as i}from"./object-table-CX4l4Dfs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C8dKT6c-.js";import"./Table-C8-fBgPi.js";import"./index-Cxj4mfK8.js";import"./Dialog-CwB0Ilia.js";import"./cross-BHJaWm-f.js";import"./svgIconContainer-COam26m3.js";import"./useBaseUiId-CT4jboOp.js";import"./InternalBackdrop-Csoal8gm.js";import"./composite-BIm8cUf1.js";import"./index-DJH664Hp.js";import"./index-JmqbywhK.js";import"./index-DX8xiCXa.js";import"./useEventCallback-Ddnv-q8o.js";import"./SkeletonBar-P8jlFumX.js";import"./LoadingCell-Btv4P7kZ.js";import"./ColumnConfigDialog-R1h9StJE.js";import"./DraggableList-DDTm5yW2.js";import"./search-ROafySNP.js";import"./Input-BmuqUAJQ.js";import"./useControlled-BLanU1Cz.js";import"./Button-D6w0YH3F.js";import"./small-cross-DRE_PaJF.js";import"./ActionButton--zxznfMJ.js";import"./Checkbox-jOQfJbyM.js";import"./useValueChanged-D1mPBuzM.js";import"./CollapsiblePanel-COsf17xI.js";import"./MultiColumnSortDialog-MYyYNbXm.js";import"./MenuTrigger-OO1PFXFs.js";import"./CompositeItem-BRFTKS6k.js";import"./ToolbarRootContext-BieBN5Ud.js";import"./getDisabledMountTransitionStyles-BYu2K8x7.js";import"./getPseudoElementBounds-CM7RrIA6.js";import"./chevron-down-X9qExTnz.js";import"./index-DGoUYVsX.js";import"./error-Wz7v_t0s.js";import"./BaseCbacBanner-D6ekieQG.js";import"./makeExternalStore-CIZbbQ8M.js";import"./Tooltip-CCOQG__R.js";import"./PopoverPopup-CnlmGlie.js";import"./debounce-DVRH7VUD.js";import"./useOsdkClient-DdfWwqYU.js";import"./tick-CJnrQrNa.js";import"./DropdownField-CDw7d_jR.js";import"./isEqual-DZlpwNeT.js";import"./withOsdkMetrics-Ben-Mf35.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
