import{f as p,j as e}from"./iframe-B6-_QUtU.js";import{O as i}from"./object-table-Beyrgagy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BDRjb6OB.js";import"./Table-CaYuwbn8.js";import"./index-CAZGJab0.js";import"./Dialog-CtKZ3KtJ.js";import"./cross-D0oGkNoB.js";import"./svgIconContainer-DlKcWleM.js";import"./useBaseUiId-DZx6O2JG.js";import"./InternalBackdrop-APGrKctp.js";import"./composite-DjQ2yLAq.js";import"./index-DvgWcRwX.js";import"./index-BmjgV4Nn.js";import"./index-C6QdS4Xp.js";import"./useEventCallback-CjqjiulM.js";import"./SkeletonBar-CK-xBuVE.js";import"./LoadingCell-DSrkOA-6.js";import"./ColumnConfigDialog-CP0k-Jru.js";import"./DraggableList-DP6k3c64.js";import"./search-B9pHM3fF.js";import"./Input-CN4vw-S9.js";import"./useControlled-CPgNZq1w.js";import"./isEqual-Cysh_gUQ.js";import"./isObject-DU3fNQcc.js";import"./Button-15Cyb3e-.js";import"./ActionButton-DgMrOFUx.js";import"./Checkbox-BD_H-IKF.js";import"./useValueChanged-ClI3F0c3.js";import"./CollapsiblePanel-DZwLlfGP.js";import"./MultiColumnSortDialog-BQzqj-vw.js";import"./MenuTrigger-DRZeqkb_.js";import"./CompositeItem-B1nT4QUA.js";import"./ToolbarRootContext-qv2Bumaf.js";import"./getDisabledMountTransitionStyles-DZeYNS25.js";import"./getPseudoElementBounds-DdOIWP6y.js";import"./chevron-down-BW0wYSCd.js";import"./index-CVf23Dlc.js";import"./error-BmoFbwJM.js";import"./BaseCbacBanner-C8bSamus.js";import"./makeExternalStore-JvLL6ZRj.js";import"./Tooltip-L1oVj3Nu.js";import"./PopoverPopup-BipRmhvE.js";import"./toNumber-CI5PPp00.js";import"./useOsdkClient-Y8hi1mgN.js";import"./tick-BoOipAsX.js";import"./DropdownField-Ciw_6Gj5.js";import"./withOsdkMetrics-BRfC8hFs.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
