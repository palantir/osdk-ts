import{f as p,j as e}from"./iframe-tJoiUnOU.js";import{O as i}from"./object-table-X0gNoGMP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-q_roJb3L.js";import"./Table-Da6epX_8.js";import"./index-wkjAOCKp.js";import"./Dialog-Du7sghjf.js";import"./cross-6Rc2LF7n.js";import"./svgIconContainer-D0F8gB11.js";import"./useBaseUiId-BiDCPQhp.js";import"./InternalBackdrop-CiNn4aLK.js";import"./composite-DOEUwxcs.js";import"./index-D3jnN6Jh.js";import"./index-VD2PRP19.js";import"./index-SeseWBh6.js";import"./useEventCallback-CPmd0Kz4.js";import"./SkeletonBar-cCyX40Gf.js";import"./LoadingCell-CLv6VafM.js";import"./ColumnConfigDialog-jmSwh543.js";import"./DraggableList-DRuIg0iu.js";import"./search-CgsmrxMy.js";import"./Input-Dbo8bi4g.js";import"./useControlled-B_scRK6a.js";import"./Button-D_5bqoFg.js";import"./small-cross-C-UfEnxt.js";import"./ActionButton-CiYF1Zig.js";import"./Checkbox-BuSk1rUm.js";import"./useValueChanged-BXd8sVHl.js";import"./CollapsiblePanel-fXxTLN8h.js";import"./MultiColumnSortDialog-DCJ2kmAh.js";import"./MenuTrigger-i4WkGPfE.js";import"./CompositeItem-BDVYJdc3.js";import"./ToolbarRootContext-ekETqF8a.js";import"./getDisabledMountTransitionStyles-D1n5Dxzz.js";import"./getPseudoElementBounds-CXXoJKvV.js";import"./chevron-down-CUB7Aj2S.js";import"./index-CKDcjobG.js";import"./error-B-PeBpWB.js";import"./BaseCbacBanner-DCJxw3sC.js";import"./makeExternalStore-nQCgHpFY.js";import"./Tooltip-P6WDKgxT.js";import"./PopoverPopup-D2CFDvFx.js";import"./debounce-CkWR7YVQ.js";import"./useOsdkClient-C-pct-id.js";import"./tick-CFI6xm9s.js";import"./DropdownField-CVHEoHqX.js";import"./isEqual-B4K20_d6.js";import"./withOsdkMetrics-DhS6V5OD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
