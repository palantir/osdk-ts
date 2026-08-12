import{f as p,j as e}from"./iframe-D1W6ppAK.js";import{O as i}from"./object-table-BXfRCJp3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BVLKfSQB.js";import"./Table-BA3k2QOE.js";import"./index-8ZY-fAEu.js";import"./Dialog-DdAy48XA.js";import"./cross-D_CxARA8.js";import"./svgIconContainer-DN-_s1rP.js";import"./useBaseUiId-CH82QQ2E.js";import"./InternalBackdrop-WZE3TanW.js";import"./composite-CpX9wK4w.js";import"./index-DDvK6xdc.js";import"./index-DUSFKfe-.js";import"./index-B72OI3Hp.js";import"./useEventCallback-BQDPyLuX.js";import"./SkeletonBar-C3_CvgP8.js";import"./LoadingCell-BVOptDHB.js";import"./ColumnConfigDialog-CpmEDpkh.js";import"./DraggableList-fLpFj9vo.js";import"./search-DG4ye0Iy.js";import"./Input-D9RKMHTW.js";import"./useControlled-BcGmUGgO.js";import"./isEqual-BacWMdXw.js";import"./isObject-CtnbCK_o.js";import"./Button-2-x2Eoj_.js";import"./ActionButton-BxfRFNfM.js";import"./Checkbox-BMadytLF.js";import"./useValueChanged-DF-zEjDf.js";import"./CollapsiblePanel-CHtrc9CX.js";import"./MultiColumnSortDialog-DAPTAM5w.js";import"./MenuTrigger-D-YqKWyr.js";import"./CompositeItem-B4Xj9JQ_.js";import"./ToolbarRootContext-GzlqhBPh.js";import"./getDisabledMountTransitionStyles-BRM969Fi.js";import"./getPseudoElementBounds-CrJcXgCc.js";import"./chevron-down-4suDLJVI.js";import"./index-BdK8S6bs.js";import"./error-C_dk0FTg.js";import"./BaseCbacBanner-BUpDuKyr.js";import"./makeExternalStore-DtSycEX-.js";import"./Tooltip-DryUTGTd.js";import"./PopoverPopup-BGuegJtv.js";import"./toNumber-DnOl7u43.js";import"./useOsdkClient-hHLZyAhP.js";import"./tick-f4TkQNhU.js";import"./DropdownField-CvFuIYZZ.js";import"./withOsdkMetrics-DBsUcf0H.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
