import{f as p,j as e}from"./iframe-DLVNMlqD.js";import{O as i}from"./object-table-FWe8TjV-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dpu4tGQ7.js";import"./Table-CIlWsgEp.js";import"./index-VZIxZIF4.js";import"./Dialog-CAARrEHX.js";import"./cross-DEoL_1fn.js";import"./svgIconContainer-BQaiUdVM.js";import"./useBaseUiId-D4E9zkR8.js";import"./InternalBackdrop-B_aXZ12_.js";import"./composite-BtSnV65G.js";import"./index-CBkAsu_e.js";import"./index-D03cC0b_.js";import"./index-CMtJSffD.js";import"./useEventCallback-Bv8pgc5p.js";import"./SkeletonBar-CMH6Ozoz.js";import"./LoadingCell-CQ0QvG97.js";import"./ColumnConfigDialog-BuM8qhhy.js";import"./DraggableList-B489iYot.js";import"./search-BXKZxdce.js";import"./Input-DbTBrNHr.js";import"./useControlled-DoRwBFfs.js";import"./isEqual-B-qzCJDx.js";import"./isObject-DjWQcncp.js";import"./Button-BjyA60hN.js";import"./ActionButton-DVTDTT3m.js";import"./Checkbox-BEyktdgG.js";import"./useValueChanged-BXM3MVnH.js";import"./CollapsiblePanel-80X5v1m7.js";import"./MultiColumnSortDialog-C3IFy6Vn.js";import"./MenuTrigger-Cx-VDgni.js";import"./CompositeItem-BrPdeWN4.js";import"./ToolbarRootContext-vV9AatFj.js";import"./getDisabledMountTransitionStyles-ebTCWWjP.js";import"./getPseudoElementBounds-Co5KUif2.js";import"./chevron-down-BD05PCKj.js";import"./index-CjoRvmvv.js";import"./error-e1L3uW56.js";import"./BaseCbacBanner-DWgHcs1U.js";import"./makeExternalStore-Zo0GiL4s.js";import"./Tooltip-ydrCJDLe.js";import"./PopoverPopup-Bu6cU69Y.js";import"./toNumber-DDHkQghJ.js";import"./useOsdkClient-DtH9je__.js";import"./tick-BtSDBhHS.js";import"./DropdownField-aSG_pch6.js";import"./withOsdkMetrics-44cOR7GP.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
