import{f as p,j as e}from"./iframe-Bq08WkX6.js";import{O as i}from"./object-table-CBEEYibu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CzbD-Dkq.js";import"./Table-BN4XpBnX.js";import"./index-15tgvzIh.js";import"./Dialog-DVLXkLrf.js";import"./cross-D7wZ2dNk.js";import"./svgIconContainer-BsfTAwTI.js";import"./useBaseUiId-D80yW2NB.js";import"./InternalBackdrop-Bm4mdBfi.js";import"./composite-DQ3jHuKN.js";import"./index-DM3xTDXQ.js";import"./index-CUtG1M-d.js";import"./index-CSliVaa9.js";import"./useEventCallback-DStUoWzh.js";import"./SkeletonBar-Bd0kxzdZ.js";import"./LoadingCell-BOxDb49A.js";import"./ColumnConfigDialog-DlaDcvzi.js";import"./DraggableList-DyCmlC_X.js";import"./search-CsWrT34i.js";import"./Input-BAP4LU5T.js";import"./useControlled-DZI1tbIH.js";import"./isEqual-B97z0_Vd.js";import"./isObject-Cynw8Plv.js";import"./Button-f9Giaknz.js";import"./ActionButton-BsBOT6Ps.js";import"./Checkbox-BvDCJt0H.js";import"./useValueChanged-Q78KmwEB.js";import"./CollapsiblePanel-DOlT5hzg.js";import"./MultiColumnSortDialog-jXZXIEnN.js";import"./MenuTrigger-t0nn8x8v.js";import"./CompositeItem-D9XKb7P8.js";import"./ToolbarRootContext-C36v0QgL.js";import"./getDisabledMountTransitionStyles-C_rTqAIJ.js";import"./getPseudoElementBounds-n7-i415r.js";import"./chevron-down-B3lt0Bn5.js";import"./index-DC9h8Vk1.js";import"./error-CJJkcl9r.js";import"./BaseCbacBanner-dDgY6GdX.js";import"./makeExternalStore-TiqtXy3q.js";import"./Tooltip-BrAy_wST.js";import"./PopoverPopup-D157sLef.js";import"./toNumber-VDnaXJ38.js";import"./useOsdkClient-B6U8ncOQ.js";import"./tick-D_vzxwlx.js";import"./DropdownField-B-n_Gvm6.js";import"./withOsdkMetrics-C32CoUwf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
