import{f as p,j as e}from"./iframe-BUT1Ca21.js";import{O as i}from"./object-table-CalE6Oop.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C3ZTbeOG.js";import"./Table-BXOp49vh.js";import"./index-CEgKTB7y.js";import"./Dialog-CjBCn5Zb.js";import"./cross-Cr9ZjHRZ.js";import"./svgIconContainer-Bompvmw_.js";import"./useBaseUiId-qyGuXCWk.js";import"./InternalBackdrop-CKROOC4c.js";import"./composite-CfgLMjRu.js";import"./index-BKX7kSRn.js";import"./index-Cxye_Vbl.js";import"./index-CAyUZnlL.js";import"./useEventCallback-CDxA8TLn.js";import"./SkeletonBar-DDbomIY0.js";import"./LoadingCell-CU-j_ZUe.js";import"./ColumnConfigDialog-TzJVaYZ7.js";import"./DraggableList-B6VvBpLJ.js";import"./search-wRZY1Zgd.js";import"./Input-VfpuHGrG.js";import"./useControlled-MxpDrEQu.js";import"./Button-jhXvjlOf.js";import"./small-cross-D5yHal12.js";import"./ActionButton-DmPqgqpY.js";import"./Checkbox-tJ5G6VKa.js";import"./useValueChanged-Sx5eg1XK.js";import"./CollapsiblePanel-BxEgYLVa.js";import"./MultiColumnSortDialog-okpUCC_8.js";import"./MenuTrigger-h82n0SIg.js";import"./CompositeItem-Bsqpxv5d.js";import"./ToolbarRootContext-Cefa8MxM.js";import"./getDisabledMountTransitionStyles-Ne5QFwsT.js";import"./getPseudoElementBounds-yw_Voijw.js";import"./chevron-down-DwUo7lxb.js";import"./index-DDeQtpyk.js";import"./error-C95PtJNd.js";import"./BaseCbacBanner-DEFb7mgM.js";import"./makeExternalStore-BZeEFOui.js";import"./Tooltip-ByJbGxVL.js";import"./PopoverPopup-DD5F8aqU.js";import"./debounce-CousxmCd.js";import"./useOsdkClient-DKJPb5Gm.js";import"./tick-Bc2ETXIe.js";import"./DropdownField-CeTN_DiQ.js";import"./isEqual-D-7Pn8zL.js";import"./withOsdkMetrics-CRAr1v2v.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
