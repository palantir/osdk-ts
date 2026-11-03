import{f as p,j as e}from"./iframe-_lLrSj1r.js";import{O as i}from"./object-table-DfjFdMz3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper--K06I6bX.js";import"./Table-C6Rb4d0k.js";import"./index-u4LjU3wy.js";import"./Dialog-BM1TicUi.js";import"./cross-Cf8HUSkr.js";import"./svgIconContainer-mBZD1oTc.js";import"./useBaseUiId-Bc8GG6V8.js";import"./InternalBackdrop-Lf90Fmle.js";import"./composite-BZPxrUSk.js";import"./index-DMVKgr18.js";import"./index-_W33FQQz.js";import"./index-BbJyxAJY.js";import"./useEventCallback-r8S4G08J.js";import"./SkeletonBar-4yDHQYXq.js";import"./LoadingCell-C39J4KHi.js";import"./ColumnConfigDialog-CxI_NE7F.js";import"./DraggableList-Ba07DvjG.js";import"./search-BsFDT1OC.js";import"./Input-ByElj6b4.js";import"./useControlled-ef7rEDgw.js";import"./Button-DtR0BNuF.js";import"./small-cross-MPNxrGPx.js";import"./ActionButton-DkdffwG3.js";import"./Checkbox-Dfkp-Kkb.js";import"./useValueChanged-B2NcodEa.js";import"./CollapsiblePanel-DSAb5O_U.js";import"./MultiColumnSortDialog-BEgba4jz.js";import"./MenuTrigger-cjXmFjSP.js";import"./CompositeItem-DQchaMiL.js";import"./ToolbarRootContext-DHD80eI9.js";import"./getDisabledMountTransitionStyles-5zflYeEg.js";import"./getPseudoElementBounds-_MMb03QT.js";import"./chevron-down-DeOYs4U6.js";import"./index-Cp32Ucpe.js";import"./error-po7axJSl.js";import"./BaseCbacBanner-BwEI1yUe.js";import"./makeExternalStore-CBJvRSBt.js";import"./Tooltip-D9sqgv57.js";import"./PopoverPopup-DmehJnCH.js";import"./debounce-CT5Ar2jy.js";import"./useOsdkClient-BGeTWEem.js";import"./tick-BhMF4eWB.js";import"./DropdownField-D01ccTug.js";import"./isEqual-DfmCLQw6.js";import"./withOsdkMetrics-cH-rirPE.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
