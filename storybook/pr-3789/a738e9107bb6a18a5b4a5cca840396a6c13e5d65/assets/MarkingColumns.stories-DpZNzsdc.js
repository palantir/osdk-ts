import{f as p,j as e}from"./iframe-BXc0SdYp.js";import{O as i}from"./object-table-BhzTiGy9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dgu0aCKG.js";import"./Table-CZWHMe3M.js";import"./index-sKZCAMiv.js";import"./Dialog-Ck0WBglk.js";import"./cross-DSir2KfQ.js";import"./svgIconContainer-CtLj_lp3.js";import"./useBaseUiId-DqkkvKBG.js";import"./InternalBackdrop-XSqFwaTZ.js";import"./composite-BosRxt1T.js";import"./index-xPUR9HDc.js";import"./index-ZxZ1oX-Q.js";import"./index-Di-4g85M.js";import"./useEventCallback-BcN2mBKQ.js";import"./SkeletonBar-CUoKdRIy.js";import"./LoadingCell-DYSZMW2B.js";import"./ColumnConfigDialog-9DzDzX-f.js";import"./DraggableList-CVCqRl1M.js";import"./search-B6X43A4Z.js";import"./Input-CtK5iVsJ.js";import"./useControlled-BTSH1hwb.js";import"./isEqual-DsVvH1U9.js";import"./isObject-D_-UmL4L.js";import"./Button-V6iaqNOS.js";import"./ActionButton-C0nK6W1Z.js";import"./Checkbox-DxDlHoRI.js";import"./useValueChanged-CD0gYTJj.js";import"./CollapsiblePanel-B_jfSm5a.js";import"./MultiColumnSortDialog-CMwlnq_C.js";import"./MenuTrigger-Du5jMpS0.js";import"./CompositeItem-Bes2HBqU.js";import"./ToolbarRootContext-rpzDDNOx.js";import"./getDisabledMountTransitionStyles-DUAj8f-a.js";import"./getPseudoElementBounds-Co5ODb-3.js";import"./chevron-down-B0Age7bb.js";import"./index-DBAAGxWp.js";import"./error-B7ytnZ8A.js";import"./BaseCbacBanner-v42XuZEM.js";import"./makeExternalStore-CVfYdLVr.js";import"./Tooltip-C3STotTB.js";import"./PopoverPopup-Bl2Ueh2Q.js";import"./toNumber-Dw0dQ5w4.js";import"./useOsdkClient-DTGfF2y2.js";import"./tick-C6Lgjx3i.js";import"./DropdownField-jmX2jAzW.js";import"./withOsdkMetrics-D6nw3VcK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
