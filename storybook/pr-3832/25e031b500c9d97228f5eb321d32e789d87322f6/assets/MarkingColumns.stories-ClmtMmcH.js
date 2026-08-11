import{f as p,j as e}from"./iframe-Bw-Agif6.js";import{O as i}from"./object-table-CTJAZJUm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-wHYoTEvY.js";import"./Table-YHJ1nC5C.js";import"./index-DNmIinQa.js";import"./Dialog-D6n9iA1R.js";import"./cross-D63pv_qh.js";import"./svgIconContainer-D0FLeaRo.js";import"./useBaseUiId-BkzXSrg6.js";import"./InternalBackdrop-DlvukuPB.js";import"./composite-B_WicqqA.js";import"./index-ByJX6_Sx.js";import"./index-CAIuwcNw.js";import"./index-ByTvDRwc.js";import"./useEventCallback-C1jTj680.js";import"./SkeletonBar-D3kOzCQe.js";import"./LoadingCell-rqLUXNzU.js";import"./ColumnConfigDialog-D7ROuj86.js";import"./DraggableList-rHucen_L.js";import"./search-B0cSkiVa.js";import"./Input-BrcHuaTL.js";import"./useControlled-kEo0k7Py.js";import"./isEqual-D8Ika_FF.js";import"./isObject-C-20wa_z.js";import"./Button-DHc-O6ds.js";import"./ActionButton-D-ZUAS07.js";import"./Checkbox-tUW5bxQD.js";import"./useValueChanged-Dx-JN9io.js";import"./CollapsiblePanel-DFCeMXeo.js";import"./MultiColumnSortDialog-D5O3P0b1.js";import"./MenuTrigger-RUVJ72u2.js";import"./CompositeItem-5WZPpFtM.js";import"./ToolbarRootContext-Cf0AzzGI.js";import"./getDisabledMountTransitionStyles-mJwhDS-c.js";import"./getPseudoElementBounds-Dqwkk5Q-.js";import"./chevron-down-Dngh-QRN.js";import"./index-B5NpxPBP.js";import"./error-Rg-jn8n4.js";import"./BaseCbacBanner-D2cg6kX3.js";import"./makeExternalStore-Bbb3TB_2.js";import"./Tooltip-BDXQSKX4.js";import"./PopoverPopup-BxLXkzKe.js";import"./toNumber-bloY9kc_.js";import"./useOsdkClient-jaVoMXOI.js";import"./tick-BPugKlpA.js";import"./DropdownField-RW9yBtlE.js";import"./withOsdkMetrics-C6Xz7eXL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
