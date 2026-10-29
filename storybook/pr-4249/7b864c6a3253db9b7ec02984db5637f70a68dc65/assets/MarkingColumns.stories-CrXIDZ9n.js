import{f as p,j as e}from"./iframe-Bl044qnf.js";import{O as i}from"./object-table-JJMjZish.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C3nN8OhV.js";import"./Table-CkzyBY8f.js";import"./index-DUYD1b1T.js";import"./Dialog-BzLfCMxE.js";import"./cross-ByJxUK15.js";import"./svgIconContainer-DSPSIjCL.js";import"./useBaseUiId-D3Tkd5iy.js";import"./InternalBackdrop-DANcJBrc.js";import"./composite-BKeFyTtn.js";import"./index-BIw9TA11.js";import"./index-DOFCbist.js";import"./useEventCallback-B7Mw4f_q.js";import"./SkeletonBar-CV-952J8.js";import"./LoadingCell-DTjUTQFN.js";import"./ColumnConfigDialog-DaZ6T4n3.js";import"./DraggableList-CZvm2x-q.js";import"./search-DOyb79Ba.js";import"./Input-Dn6FdMxP.js";import"./useControlled-DWQwydBz.js";import"./Button-BeSccTOh.js";import"./small-cross-CtOoCFP2.js";import"./ActionButton-D2CjWZmo.js";import"./Checkbox-CvIBXNa-.js";import"./useValueChanged-C0GZ5aIg.js";import"./CollapsiblePanel-Drqn5TA4.js";import"./MultiColumnSortDialog-FkCgv7b1.js";import"./MenuTrigger-Dnxiprn0.js";import"./CompositeItem-CkPEHO5z.js";import"./ToolbarRootContext-Btm4cFoY.js";import"./getDisabledMountTransitionStyles-p_ATdOqC.js";import"./getPseudoElementBounds-Bmt56FKU.js";import"./chevron-down-DCr-eUT2.js";import"./index-DPpCb37f.js";import"./error-TWIHte5e.js";import"./BaseCbacBanner-CunkN0nl.js";import"./makeExternalStore-DPNkNH3X.js";import"./Tooltip-CVK2DOVB.js";import"./PopoverPopup-D3VJPyhs.js";import"./debounce-CjvDom3d.js";import"./useOsdkClient-Bq33Z6Hs.js";import"./tick-CyfQwmIO.js";import"./DropdownField-BEqOqzm_.js";import"./isEqual-CPfrUQ7O.js";import"./withOsdkMetrics-DEGSIMfx.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
