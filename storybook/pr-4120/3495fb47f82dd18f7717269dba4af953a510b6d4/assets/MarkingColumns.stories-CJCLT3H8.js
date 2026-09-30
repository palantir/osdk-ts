import{f as p,j as e}from"./iframe-3FtDhECv.js";import{O as i}from"./object-table-B4QWEKR6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-70ekmL9Z.js";import"./Table-DnGLekSf.js";import"./index-DDuj02wW.js";import"./Dialog-LyQi3Gjk.js";import"./cross-3payUlda.js";import"./svgIconContainer-8d5y5XmV.js";import"./useBaseUiId-ba-AZLlh.js";import"./InternalBackdrop-C2qcUA_S.js";import"./composite-l2Xk1Iwz.js";import"./index-Di_GBi9u.js";import"./index-CdOyTJBF.js";import"./index-Bb5nNbut.js";import"./useEventCallback-BV-K2SB8.js";import"./SkeletonBar-BaDwHjIr.js";import"./LoadingCell-BjgaM6VY.js";import"./ColumnConfigDialog-DUOgEN2V.js";import"./DraggableList-G2GxQFyw.js";import"./search-DQyEiXG4.js";import"./Input-eNpsdHBj.js";import"./useControlled-DAFRtrE7.js";import"./Button-CtxTGJJ5.js";import"./small-cross-CzrrmRc2.js";import"./ActionButton-D3HdF3S7.js";import"./Checkbox-6zXLtXx_.js";import"./useValueChanged-JT8yV3AQ.js";import"./CollapsiblePanel-Bju8gm12.js";import"./MultiColumnSortDialog-DXsifQAh.js";import"./MenuTrigger-CTl5ZYh1.js";import"./CompositeItem-X94Emfw4.js";import"./ToolbarRootContext-DWWF2uk2.js";import"./getDisabledMountTransitionStyles-Sp-qRZJf.js";import"./getPseudoElementBounds-Bb3UwPzL.js";import"./chevron-down-eXeXyWJp.js";import"./index-BmkwvzsK.js";import"./error-Co_bSTMk.js";import"./BaseCbacBanner-DeVRrDcz.js";import"./makeExternalStore-Bttk8K2M.js";import"./Tooltip-DBBzsEJq.js";import"./PopoverPopup-Cbhnh0d6.js";import"./debounce-D5jfSGyg.js";import"./useOsdkClient-B3tCYy8u.js";import"./tick-DP_oPzGl.js";import"./DropdownField-DGhWjt6v.js";import"./isEqual-DbUoSpPl.js";import"./withOsdkMetrics-CkiSk4kW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
