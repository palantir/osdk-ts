import{f as p,j as e}from"./iframe-D1j4WqtX.js";import{O as i}from"./object-table-D1E58D51.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CIO_iRSv.js";import"./Table-CE1gQfSW.js";import"./index-CF3Sq86v.js";import"./Dialog-Bmt22dMU.js";import"./cross-Bu-eP3kR.js";import"./svgIconContainer-DQLh4QVM.js";import"./useBaseUiId-CvpmnQHF.js";import"./InternalBackdrop-BgpNPtgI.js";import"./composite-BY3OkPXB.js";import"./index-BVTY6Q3I.js";import"./index-CMSKaHd2.js";import"./index-DEbP6mAZ.js";import"./useEventCallback-BMLswSq8.js";import"./SkeletonBar-goStr7xk.js";import"./LoadingCell-hNuanuvj.js";import"./ColumnConfigDialog-B8gfsHk_.js";import"./DraggableList-iSyTQ6ue.js";import"./search-Ci42lqAV.js";import"./Input-aBbimhzA.js";import"./useControlled-Dvj50PQH.js";import"./Button-DfvOvfvD.js";import"./small-cross-4Og_SUqy.js";import"./ActionButton-DK01lYjB.js";import"./Checkbox-OD7wr22i.js";import"./useValueChanged-B-1W8pQZ.js";import"./CollapsiblePanel-CU0iKWn6.js";import"./MultiColumnSortDialog-Bd0-hbtk.js";import"./MenuTrigger-D-NO9sux.js";import"./CompositeItem-BjdsKKJr.js";import"./ToolbarRootContext-Bggxr9N9.js";import"./getDisabledMountTransitionStyles-D8w4jYHi.js";import"./getPseudoElementBounds-BvCK0FHD.js";import"./chevron-down-9_oXjY5S.js";import"./index-C_i7dQHN.js";import"./error-CSigbrmD.js";import"./BaseCbacBanner-Q_vrCcEx.js";import"./makeExternalStore-CpT-N4RM.js";import"./Tooltip-sztRiYUo.js";import"./PopoverPopup-DhqCBiK0.js";import"./debounce-7OJ_vS6c.js";import"./useOsdkClient-DKIRHYjG.js";import"./tick-CpAUDOtg.js";import"./DropdownField-CtIEk2rp.js";import"./isEqual-CV9p-CTi.js";import"./withOsdkMetrics-9ebMCx2K.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
