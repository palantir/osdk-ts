import{f as p,j as e}from"./iframe-DjY-zq4T.js";import{O as i}from"./object-table-DF-QdHhQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CSEk-Qtk.js";import"./Table-CRhnJW7k.js";import"./index-06oOGq9j.js";import"./Dialog--nsazc34.js";import"./cross-DERUs9CV.js";import"./svgIconContainer-CNapEC-k.js";import"./useBaseUiId-DFp5uyUH.js";import"./InternalBackdrop-D26JwQLJ.js";import"./composite-DCY6uWMU.js";import"./index-BMjnIn7f.js";import"./index-DcxaLnPt.js";import"./index-DGTC5i-x.js";import"./useEventCallback-PzgcCUA9.js";import"./SkeletonBar-Dx8ysvQu.js";import"./LoadingCell-5sAwNk9V.js";import"./ColumnConfigDialog-COWDssjh.js";import"./DraggableList-CCT3vpwl.js";import"./search-BkyKKFx6.js";import"./Input-C4MHDVmb.js";import"./useControlled-B48Xem7I.js";import"./Button-DVfilVoY.js";import"./small-cross-BKuGvg88.js";import"./ActionButton-ftxjW6SC.js";import"./Checkbox-D5y-CTW9.js";import"./useValueChanged-CSpnuk84.js";import"./CollapsiblePanel-DgbylnBx.js";import"./MultiColumnSortDialog-DgRGdUyK.js";import"./MenuTrigger-C_DmCeIw.js";import"./CompositeItem-OryclLtR.js";import"./ToolbarRootContext-Ck5kVxm5.js";import"./getDisabledMountTransitionStyles-6jqwt93X.js";import"./getPseudoElementBounds-By1yLBCg.js";import"./chevron-down-KVYlhqEa.js";import"./index-DCZf_Vkp.js";import"./error-g17Ipf4s.js";import"./BaseCbacBanner-Ik5u6QMH.js";import"./makeExternalStore-CXgGJpDa.js";import"./Tooltip-C_N0df2q.js";import"./PopoverPopup-CTuviyVj.js";import"./debounce-Dw9byVJT.js";import"./useOsdkClient-B0KEPQnu.js";import"./tick-BxkXNXsP.js";import"./DropdownField-DRuEdDXo.js";import"./isEqual-S7vVAoQa.js";import"./withOsdkMetrics-CBDxrN4p.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
