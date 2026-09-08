import{f as p,j as e}from"./iframe-56aCtkcZ.js";import{O as i}from"./object-table-DY9jOMSL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DP50sY1P.js";import"./Table-BD41Pu4l.js";import"./index-BM5nCcvA.js";import"./Dialog-C8sI_IUj.js";import"./cross-BkceNYXb.js";import"./svgIconContainer-Da40OoQe.js";import"./useBaseUiId-D82-BIAj.js";import"./InternalBackdrop-BWk9Mij_.js";import"./composite-Bol_PDWG.js";import"./index-WgXTqvYF.js";import"./index-2i5LUS2T.js";import"./index-6JhW2qtZ.js";import"./useEventCallback--SPa_rCD.js";import"./SkeletonBar-B6_sPXiY.js";import"./LoadingCell-9Bkob7fj.js";import"./ColumnConfigDialog-E8E7Cf-b.js";import"./DraggableList-BgkHsuk4.js";import"./search-Df5_6yBi.js";import"./Input-BUSfhI-b.js";import"./useControlled-BNAN5oeG.js";import"./Button-C0vE2bzb.js";import"./small-cross-BScMbdWS.js";import"./ActionButton-juMisa4o.js";import"./Checkbox-BQvICqoB.js";import"./useValueChanged-B9dcid5j.js";import"./CollapsiblePanel-BK9buE6t.js";import"./MultiColumnSortDialog-BHrG4DuP.js";import"./MenuTrigger-CYnmjXqd.js";import"./CompositeItem-CtIfORVC.js";import"./ToolbarRootContext-DWmT4M8t.js";import"./getDisabledMountTransitionStyles-C3g2m2GA.js";import"./getPseudoElementBounds-DhoqY1uL.js";import"./chevron-down--SGqA3gF.js";import"./index-BglOGw85.js";import"./error-t-pHJ0in.js";import"./BaseCbacBanner-FU9mX3LF.js";import"./makeExternalStore-C8LtB6Bq.js";import"./Tooltip-DPvc60vQ.js";import"./PopoverPopup-1nRwWEZN.js";import"./debounce-CmP_j_Q8.js";import"./useOsdkClient-jilUbAUE.js";import"./tick-BVwIBB0x.js";import"./DropdownField-3Ad7m87u.js";import"./isEqual-CeyZKxlT.js";import"./withOsdkMetrics-BQAZKQ7x.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
