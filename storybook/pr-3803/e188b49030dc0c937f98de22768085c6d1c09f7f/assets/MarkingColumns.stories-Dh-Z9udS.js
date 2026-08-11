import{f as p,j as e}from"./iframe-Dn0pOY-8.js";import{O as i}from"./object-table-NN6WWUh5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D3q3y7aq.js";import"./Table-CcWZ-h4b.js";import"./index-BE-XY2ni.js";import"./Dialog-_kaSvhU6.js";import"./cross-n8lwrCaB.js";import"./svgIconContainer-DTaLY8It.js";import"./useBaseUiId-Do0azpaM.js";import"./InternalBackdrop-CF1SY7QH.js";import"./composite-DS8xZpiv.js";import"./index-DJYmYZuk.js";import"./index-R8QcWJSj.js";import"./index-CU2mmJPH.js";import"./useEventCallback-JlUKJEzf.js";import"./SkeletonBar-xy8Js1OW.js";import"./LoadingCell-BgGGw7-z.js";import"./ColumnConfigDialog-BTHUe9ej.js";import"./DraggableList-DZgHZ0kh.js";import"./search-C3gVcqfq.js";import"./Input-BCcDRsSE.js";import"./useControlled-BI9A7g3Y.js";import"./isEqual-DS8jWXmT.js";import"./isObject-2GYtfsXT.js";import"./Button-CC-Ty1WR.js";import"./ActionButton-B94ichQm.js";import"./Checkbox-9WESJVCu.js";import"./useValueChanged-DcSAkI_F.js";import"./CollapsiblePanel-D1-zf62U.js";import"./MultiColumnSortDialog-B46C9iwB.js";import"./MenuTrigger-BO84EjZc.js";import"./CompositeItem-DLwnYDeG.js";import"./ToolbarRootContext-BWlGQFTf.js";import"./getDisabledMountTransitionStyles-N1RSLi4f.js";import"./getPseudoElementBounds-CzOUzqOM.js";import"./chevron-down-BGIvV33R.js";import"./index-D5xxfjMw.js";import"./error-D8wDGNsv.js";import"./BaseCbacBanner-C7kDrPBm.js";import"./makeExternalStore-Dqwllyj5.js";import"./Tooltip-MaTCI-y-.js";import"./PopoverPopup-Bdypen72.js";import"./toNumber-C9JJp1LT.js";import"./useOsdkClient-B0chaxJx.js";import"./tick-C_RFRraQ.js";import"./DropdownField-DhaM22xE.js";import"./withOsdkMetrics-LKNyPTl9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
