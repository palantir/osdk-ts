import{f as p,j as e}from"./iframe-B4_LdmvC.js";import{O as i}from"./object-table-DI0B1aeb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-NaiMF-0L.js";import"./Table-C64YFzww.js";import"./index-DjXxmUSg.js";import"./Dialog-DnM81jQO.js";import"./cross-ByyhMC0G.js";import"./svgIconContainer-CqdyD_06.js";import"./useBaseUiId-D49bnhC0.js";import"./InternalBackdrop-CSZNBoeU.js";import"./composite-C8-JBw2s.js";import"./index-CDFbUPsJ.js";import"./index-DMnPNpwI.js";import"./index-BTH-2SAP.js";import"./useEventCallback-DiEJ97Pr.js";import"./SkeletonBar-CH4Er-h8.js";import"./LoadingCell-B35oQqMj.js";import"./ColumnConfigDialog-DKiL_4J1.js";import"./DraggableList-Tgs6ppMn.js";import"./search-CuDduKs4.js";import"./Input-D84OA9Cn.js";import"./useControlled-BCVYzpl3.js";import"./Button-DMJfC-Jo.js";import"./small-cross-CNTQ5kNU.js";import"./ActionButton-BCapXp1v.js";import"./Checkbox-YhHz-yme.js";import"./useValueChanged-gJKbZz5S.js";import"./CollapsiblePanel-Cq6d-sf2.js";import"./MultiColumnSortDialog-B5X38wYS.js";import"./MenuTrigger-BDYnqdaP.js";import"./CompositeItem-Te1LxRX_.js";import"./ToolbarRootContext-IBMmFjEY.js";import"./getDisabledMountTransitionStyles-CK9EkuFU.js";import"./getPseudoElementBounds-DZtnlOKj.js";import"./chevron-down-C6pppJ5O.js";import"./index-Dw8kDIA3.js";import"./error-De7UK8KB.js";import"./BaseCbacBanner-CXTir5a4.js";import"./makeExternalStore-DG8fJp9Q.js";import"./Tooltip-a9nGNvDJ.js";import"./PopoverPopup-UdMkbeCN.js";import"./debounce-C1TMjKV3.js";import"./useOsdkClient-CJsnDWQX.js";import"./tick-B07mwDIZ.js";import"./DropdownField-DDgNN9YF.js";import"./isEqual-L0Eo2ru8.js";import"./withOsdkMetrics-gLpSEa_H.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
