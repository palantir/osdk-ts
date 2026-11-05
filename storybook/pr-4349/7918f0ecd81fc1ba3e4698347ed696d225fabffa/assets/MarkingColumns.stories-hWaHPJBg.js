import{f as p,j as e}from"./iframe-DZSjsAiP.js";import{O as i}from"./object-table-BC2oUq9v.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DRp4yq1n.js";import"./Table-D-QNoyWD.js";import"./index-CfG6lRDS.js";import"./Dialog-D1OJOqd5.js";import"./cross-DuxYv-Qd.js";import"./svgIconContainer-oLZG0PXz.js";import"./useBaseUiId-DqEZVBYJ.js";import"./InternalBackdrop-ctv3Ze3z.js";import"./composite-C_s-Ej-L.js";import"./index-BKSH5ZIy.js";import"./index-CPoJpgxQ.js";import"./index-CLFNZu11.js";import"./useEventCallback-CzHnZD9n.js";import"./SkeletonBar-BxwS5lxe.js";import"./LoadingCell-CYbun_Sm.js";import"./ColumnConfigDialog-CYXHMWnm.js";import"./DraggableList-CNgtq2rM.js";import"./search-BIZEGKYQ.js";import"./Input-D45tcUlW.js";import"./useControlled-CW4hq1Ru.js";import"./Button-DFAegWDw.js";import"./small-cross-DZyRXeJ7.js";import"./ActionButton-DXV2VJ-U.js";import"./Checkbox-jKlPklgs.js";import"./useValueChanged-BwN-noW6.js";import"./CollapsiblePanel-CEmxw9fT.js";import"./MultiColumnSortDialog-AhuF8fVt.js";import"./MenuTrigger-CMH-YjvD.js";import"./CompositeItem-BdQ_Qgkw.js";import"./ToolbarRootContext-DC4x9xJZ.js";import"./getDisabledMountTransitionStyles-DuVbYN_c.js";import"./getPseudoElementBounds-BIjCqLho.js";import"./chevron-down-Cf7GCw_E.js";import"./index-ORKGFXoZ.js";import"./error-w1f9WiTY.js";import"./BaseCbacBanner-Duqtv5L9.js";import"./makeExternalStore-BvoRFHwl.js";import"./Tooltip-DnOhR-9t.js";import"./PopoverPopup-BB3NXsKU.js";import"./debounce-BY9LZGam.js";import"./useOsdkClient-Dqm5L56v.js";import"./tick-DuDzm3Ok.js";import"./DropdownField-DScFQheE.js";import"./isEqual-WjrsbOnG.js";import"./withOsdkMetrics-DwbEPMEH.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
