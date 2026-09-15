import{f as p,j as e}from"./iframe-BJHQLm8B.js";import{O as i}from"./object-table-6Dmunot4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DNJi6hnI.js";import"./Table-0Gb2iOhx.js";import"./index-BUqmovkS.js";import"./Dialog-QIwxmnv_.js";import"./cross-DyhJ0eVv.js";import"./svgIconContainer-CExwBPXa.js";import"./useBaseUiId-DFBTpUkK.js";import"./InternalBackdrop-Ddz1w5Zi.js";import"./composite-BjkOmkjK.js";import"./index-CY3jAq3i.js";import"./index-BXhIsTqo.js";import"./index-nUnNg1dx.js";import"./useEventCallback-Dk3ZagH_.js";import"./SkeletonBar-BE2-lLRV.js";import"./LoadingCell-Dno7k0KU.js";import"./ColumnConfigDialog-dI9pN7C5.js";import"./DraggableList-CXkhvPtt.js";import"./search-CBF8qcQD.js";import"./Input--rxzAq78.js";import"./useControlled-91vTGa_9.js";import"./Button-hiBWk-nL.js";import"./small-cross-BaIKTF8-.js";import"./ActionButton-B06o1rGg.js";import"./Checkbox-DDOXzphd.js";import"./useValueChanged-Cznn-vr_.js";import"./CollapsiblePanel-BzpOhWpv.js";import"./MultiColumnSortDialog-jT1EKfyH.js";import"./MenuTrigger-74Ao9CwB.js";import"./CompositeItem-BhxoDlh7.js";import"./ToolbarRootContext-0Z3xHtAl.js";import"./getDisabledMountTransitionStyles-CygFqHiI.js";import"./getPseudoElementBounds-CLRJGPDW.js";import"./chevron-down-DOmpjpbt.js";import"./index-mWeNCZ3t.js";import"./error-msvagv_9.js";import"./BaseCbacBanner-DMhFZWt0.js";import"./makeExternalStore-CZ09MAHK.js";import"./Tooltip-DzCNOI3d.js";import"./PopoverPopup-VghyVGFq.js";import"./debounce-DLKN_1JY.js";import"./useOsdkClient-DHzp8GFD.js";import"./tick-pYb3XQje.js";import"./DropdownField-BmtwaVlS.js";import"./isEqual-BlhDqGkk.js";import"./withOsdkMetrics-CQ4A9sKP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
