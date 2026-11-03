import{f as p,j as e}from"./iframe-CRdsH5HZ.js";import{O as i}from"./object-table-CUFv6UI4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CKZQslH7.js";import"./Table-DkkO-DrZ.js";import"./index-DTd5KXcK.js";import"./Dialog-CmlPK-gk.js";import"./cross-Ck_cirtk.js";import"./svgIconContainer-B82w1dNX.js";import"./useBaseUiId-CclOULO6.js";import"./InternalBackdrop-DJrTMBsF.js";import"./composite-83cwJd-q.js";import"./index-Cn4z51Ds.js";import"./index-CF0tZzS5.js";import"./index-DvUsnOXq.js";import"./useEventCallback-C0Ta6sLF.js";import"./SkeletonBar-DYF5X8SW.js";import"./LoadingCell-BN4n4qs-.js";import"./ColumnConfigDialog-C_h_kxKO.js";import"./DraggableList-BW5fwLS7.js";import"./search-BLamqbky.js";import"./Input-C5MZZ2uA.js";import"./useControlled-DWxXLpHB.js";import"./Button-DC0lWoOP.js";import"./small-cross-BreRJzoU.js";import"./ActionButton-D-BsxzSk.js";import"./Checkbox-CfBjCkTk.js";import"./useValueChanged-CX0FVdOs.js";import"./CollapsiblePanel-0dVMjFgS.js";import"./MultiColumnSortDialog-BmRwnaRM.js";import"./MenuTrigger-Bn3KvjTK.js";import"./CompositeItem-2Hw_8anp.js";import"./ToolbarRootContext-CqwjH-y3.js";import"./getDisabledMountTransitionStyles-C6LNjQ6D.js";import"./getPseudoElementBounds-CvnVVkY1.js";import"./chevron-down-0O9k5DT8.js";import"./index-IbJqJxEo.js";import"./error-Cy0mbDhX.js";import"./BaseCbacBanner-Dcb8iXmf.js";import"./makeExternalStore-DkeRNmA2.js";import"./Tooltip-BJFUBzvs.js";import"./PopoverPopup-B-cadNgq.js";import"./debounce-t2Bd0wd0.js";import"./useOsdkClient-DpUzM88Y.js";import"./tick-vhMtzz2I.js";import"./DropdownField-DNlPXkBE.js";import"./isEqual-BpGRYfyV.js";import"./withOsdkMetrics-CI0orLhd.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
