import{f as p,j as e}from"./iframe-_wCc84hx.js";import{O as i}from"./object-table-BDMMG_v5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dm5WLx_b.js";import"./Table-DV8FgymG.js";import"./index-DKGQe5X-.js";import"./Dialog-c3FQDK-H.js";import"./cross-C35-7HOl.js";import"./svgIconContainer-B_16lQ24.js";import"./useBaseUiId-B9evOHrm.js";import"./InternalBackdrop-B0VAQ47t.js";import"./composite-DMhUlR38.js";import"./index-F8Pq7Dsa.js";import"./index-CCKK8zB9.js";import"./index-B8q3zAdK.js";import"./useEventCallback-COSao2Kd.js";import"./SkeletonBar-Tp0RZmJp.js";import"./LoadingCell-B0xV7dN3.js";import"./ColumnConfigDialog-D8cIRF7j.js";import"./DraggableList-DDrAvnCq.js";import"./search-JAM6YWr2.js";import"./Input-GI5hTKCN.js";import"./useControlled-CJeKOPI7.js";import"./isEqual-qEJ4CUIL.js";import"./isObject-CmL0LJBI.js";import"./Button-DwFfVQT6.js";import"./ActionButton-B6V8gZBb.js";import"./Checkbox-66-h2NJq.js";import"./useValueChanged-BFi2Ldgw.js";import"./CollapsiblePanel-BxdaKAca.js";import"./MultiColumnSortDialog-BsVJZPNv.js";import"./MenuTrigger-Cifp6h13.js";import"./CompositeItem-BQxw9byX.js";import"./ToolbarRootContext-C3MJIkPW.js";import"./getDisabledMountTransitionStyles-C8IcNrcm.js";import"./getPseudoElementBounds-DaVmNr2e.js";import"./chevron-down-diHGh1BL.js";import"./index-CpLBa3i0.js";import"./error-BTPve98s.js";import"./BaseCbacBanner-tlk2qkB4.js";import"./makeExternalStore-DW-4lsmm.js";import"./Tooltip-DnVxTI2l.js";import"./PopoverPopup-BpMvdbI9.js";import"./toNumber-CnYfMg9w.js";import"./useOsdkClient-E_AJxnLH.js";import"./tick-B7MwIG9N.js";import"./DropdownField-DsInxVG1.js";import"./withOsdkMetrics-CHeDrLzK.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
