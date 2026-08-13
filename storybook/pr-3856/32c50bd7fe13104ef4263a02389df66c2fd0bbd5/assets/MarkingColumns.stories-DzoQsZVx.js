import{f as p,j as e}from"./iframe-DV_FvNkW.js";import{O as i}from"./object-table-DBmCBesk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BArELN5X.js";import"./Table-BcGKXj_n.js";import"./index-BLvj8uzS.js";import"./Dialog-C_TZGJh8.js";import"./cross-JLut_rtX.js";import"./svgIconContainer-CK52f1Bh.js";import"./useBaseUiId-DZEvNQMB.js";import"./InternalBackdrop-CJZRfENn.js";import"./composite-GUdKrYKt.js";import"./index-D2s-C-iU.js";import"./index-DUDZNy0X.js";import"./index-gtkvlodh.js";import"./useEventCallback-Cgmwy5UD.js";import"./SkeletonBar-Bi5m-WwI.js";import"./LoadingCell-CrYdp2fb.js";import"./ColumnConfigDialog-S-CuKGO1.js";import"./DraggableList-CWEVxQVF.js";import"./search-1jaslfQq.js";import"./Input-WondKUmM.js";import"./useControlled-CjcZvg90.js";import"./isEqual-DnamcrPx.js";import"./isObject-B1GZY_rQ.js";import"./Button-CDeNX6hI.js";import"./ActionButton-DIxaviUO.js";import"./Checkbox-Cg_iqv7P.js";import"./useValueChanged-MoTm1s5g.js";import"./CollapsiblePanel-DUEqKjo8.js";import"./MultiColumnSortDialog-oMxfvcXd.js";import"./MenuTrigger-B6nmWU4b.js";import"./CompositeItem-B9cGFmy6.js";import"./ToolbarRootContext-DhlEIOBQ.js";import"./getDisabledMountTransitionStyles-C3QZqvkg.js";import"./getPseudoElementBounds-BOWuNL3O.js";import"./chevron-down-CZeNdi1s.js";import"./index-DJXI62-C.js";import"./error-BkuU0fxo.js";import"./BaseCbacBanner-BzFkCYx7.js";import"./makeExternalStore-BAiQukHm.js";import"./Tooltip-BP-iOfCT.js";import"./PopoverPopup-KsgDK_Va.js";import"./toNumber-xsn9SK-M.js";import"./useOsdkClient-D2BQ36-h.js";import"./tick-Dc2VpgGC.js";import"./DropdownField-Dj7YH9Q-.js";import"./withOsdkMetrics-CaJhDKNf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
