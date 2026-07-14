import{f as n,j as t}from"./iframe-DWIQQc1o.js";import{O as p}from"./object-table-Duh1IjoL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-E6GNJgXQ.js";import"./Table-Ce1cXZsz.js";import"./index-Dko6AC1_.js";import"./Dialog-CNZCJXnO.js";import"./cross-Bx1_ZWdV.js";import"./svgIconContainer-DkuZeZGf.js";import"./useBaseUiId-CdoOGcfY.js";import"./InternalBackdrop-CzpSHQxK.js";import"./composite-BEvibf3m.js";import"./index-S1zUj8ZB.js";import"./index-DYvmvnyQ.js";import"./index-DlRmRGet.js";import"./useEventCallback-C9XQNpzo.js";import"./SkeletonBar-Ca6xdKOW.js";import"./LoadingCell-Df1xPnUj.js";import"./ColumnConfigDialog-BX7XxE13.js";import"./DraggableList-CLBnBhEq.js";import"./search-tetJrjI4.js";import"./Input-C_cv6YYM.js";import"./useControlled-9pXM-sJL.js";import"./Button-DvrZcAky.js";import"./small-cross-BvihPhRr.js";import"./ActionButton-CNOfszZi.js";import"./Checkbox-CrwWik7f.js";import"./useValueChanged-CTQeir4U.js";import"./CollapsiblePanel-21E5Shon.js";import"./MultiColumnSortDialog-i27hbhZX.js";import"./MenuTrigger-BijjanYT.js";import"./CompositeItem-kMm1BSnS.js";import"./ToolbarRootContext-CqAlJbED.js";import"./getDisabledMountTransitionStyles-E_cXQNEm.js";import"./getPseudoElementBounds-D5a2OQeA.js";import"./chevron-down-CHkq8C0c.js";import"./index-CLKrzqd-.js";import"./error-D3MaX7u3.js";import"./BaseCbacBanner-D2gDWTiW.js";import"./makeExternalStore-CYACmAN7.js";import"./Tooltip-D1cmWRY2.js";import"./PopoverPopup-DjQSrnR7.js";import"./toNumber-CHMHh1nM.js";import"./useOsdkClient-BFYn6u59.js";import"./tick-BbdAb4vX.js";import"./DropdownField-Bi7BOCao.js";import"./withOsdkMetrics-PMyDQr0x.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
