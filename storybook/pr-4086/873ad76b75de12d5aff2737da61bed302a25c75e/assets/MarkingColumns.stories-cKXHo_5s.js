import{f as p,j as e}from"./iframe-DaD-kZgD.js";import{O as i}from"./object-table-BqGGw46Q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B5rjj0RW.js";import"./Table-DMqFeCUw.js";import"./index-BunTbxSe.js";import"./Dialog-CLyz64vM.js";import"./cross-VN_C6F1c.js";import"./svgIconContainer-BuHjzoHd.js";import"./useBaseUiId-D_mAJVOg.js";import"./InternalBackdrop-D9rvDhcY.js";import"./composite-CvSGc8uG.js";import"./index-BLudVFJt.js";import"./index-CibRS9EP.js";import"./index-EjKiPaYv.js";import"./useEventCallback-DZwsnGgj.js";import"./SkeletonBar-CMKv95YA.js";import"./LoadingCell-BAlyAEa4.js";import"./ColumnConfigDialog-DRpER2af.js";import"./DraggableList-CxwPaX4P.js";import"./search-Ba2RAVKf.js";import"./Input-DoThMFAr.js";import"./useControlled-DETcBtyj.js";import"./Button-DIAY5YBq.js";import"./small-cross-3C_RgODH.js";import"./ActionButton-CGL0xlBn.js";import"./Checkbox-BShadSqy.js";import"./useValueChanged-BpD_v2NO.js";import"./CollapsiblePanel-DUX36nEl.js";import"./MultiColumnSortDialog-CNcYfXDj.js";import"./MenuTrigger-BL7Lg1OE.js";import"./CompositeItem-vvOtpWtM.js";import"./ToolbarRootContext-BppVD4NW.js";import"./getDisabledMountTransitionStyles-uJHk-LBD.js";import"./getPseudoElementBounds-DYbJ4f7q.js";import"./chevron-down-CvKLjMsu.js";import"./index-BBz_uzYR.js";import"./error-CF8X_kHA.js";import"./BaseCbacBanner-Z2FnoZWA.js";import"./makeExternalStore-DiTJ7dI9.js";import"./Tooltip-DSYkY7dD.js";import"./PopoverPopup-COghbQef.js";import"./debounce-Ry2gNXo0.js";import"./useOsdkClient-BpNsbtIJ.js";import"./tick-BlrBnSjV.js";import"./DropdownField-To6MSkSU.js";import"./isEqual-PjwQKt2P.js";import"./withOsdkMetrics-D6sZIqzZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
