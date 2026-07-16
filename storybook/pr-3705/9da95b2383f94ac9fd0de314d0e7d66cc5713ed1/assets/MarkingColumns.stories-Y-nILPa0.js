import{f as p,j as e}from"./iframe-BgcQ9h4y.js";import{O as i}from"./object-table-Bkiqa4d4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DtmsntH8.js";import"./Table-Cwnm-7vo.js";import"./index-BQd_JZY0.js";import"./Dialog-CiSLG898.js";import"./cross-BKkH7W-I.js";import"./svgIconContainer-Bte_bcu8.js";import"./useBaseUiId-Cy1K6eVD.js";import"./InternalBackdrop-Bk3PKhmB.js";import"./composite-BFXF1QD6.js";import"./index-DlQl1oZE.js";import"./index-82HpqR86.js";import"./index-DgoQ6iA2.js";import"./useEventCallback-1Y-EdcLq.js";import"./SkeletonBar-CJKCxE1k.js";import"./LoadingCell-CkFPgmrR.js";import"./ColumnConfigDialog-CNzmoZHq.js";import"./DraggableList-CK5zZYTs.js";import"./search-VzUopX3G.js";import"./Input-BDGeHby0.js";import"./useControlled-ByWRwYD5.js";import"./isEqual-CD6RvROS.js";import"./isObject-C3fle72f.js";import"./Button-CDKRHZ9u.js";import"./ActionButton-abT3qj5k.js";import"./Checkbox-B0AQR7BS.js";import"./useValueChanged-B7Obr-Dk.js";import"./CollapsiblePanel-BiVfLNg3.js";import"./MultiColumnSortDialog-D1rWuwgc.js";import"./MenuTrigger-CUvvbsdU.js";import"./CompositeItem-D0WL-5ct.js";import"./ToolbarRootContext-P5Z4VtM1.js";import"./getDisabledMountTransitionStyles-Dryq6z7f.js";import"./getPseudoElementBounds-DnFCdjwP.js";import"./chevron-down-JsT-GO6_.js";import"./index-BPS6XYpJ.js";import"./error-887l69um.js";import"./BaseCbacBanner-ChqbJxbi.js";import"./makeExternalStore-BKJUWcYF.js";import"./Tooltip-CvvSpmj6.js";import"./PopoverPopup-CossAgdC.js";import"./toNumber-DDhZzdsZ.js";import"./useOsdkClient-Bv9QxZHJ.js";import"./tick-DnaYfpln.js";import"./DropdownField-D1UES0Au.js";import"./withOsdkMetrics-C3WzTARe.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
