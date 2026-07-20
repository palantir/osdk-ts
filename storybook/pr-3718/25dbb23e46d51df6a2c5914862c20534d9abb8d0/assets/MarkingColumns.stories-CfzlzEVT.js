import{f as p,j as e}from"./iframe-DHJcRMo1.js";import{O as i}from"./object-table-CJ7xHujJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BrigsJda.js";import"./Table-D6q8jwjr.js";import"./index-vko8ddJv.js";import"./Dialog-C8caJ1mC.js";import"./cross-6JjUZ1sO.js";import"./svgIconContainer-C0gcdsgX.js";import"./useBaseUiId-67EydAK4.js";import"./InternalBackdrop-CKHwKqH3.js";import"./composite-BVMojmvB.js";import"./index-UHlx9MBB.js";import"./index-tuGOm3ZG.js";import"./index-C98tNhPI.js";import"./useEventCallback-B-g2quNy.js";import"./SkeletonBar-CssBd8lj.js";import"./LoadingCell-Drc3kzTm.js";import"./ColumnConfigDialog-B4RHWQHy.js";import"./DraggableList-tfjh-waR.js";import"./search-Be6SHPQr.js";import"./Input-BNa8a8E-.js";import"./useControlled-kucBpkMe.js";import"./isEqual-fHq2fVMc.js";import"./isObject-QSfWveIi.js";import"./Button-DD6En_dP.js";import"./ActionButton-C1_rWY8u.js";import"./Checkbox-10hCXnWl.js";import"./useValueChanged-Btsc6E8S.js";import"./CollapsiblePanel-DVAHuol4.js";import"./MultiColumnSortDialog-zxwQjtp3.js";import"./MenuTrigger-B8RJdLgp.js";import"./CompositeItem-BFFuJeHH.js";import"./ToolbarRootContext-Cg9GYqXm.js";import"./getDisabledMountTransitionStyles-BM2xxcY5.js";import"./getPseudoElementBounds-tVdoa0nG.js";import"./chevron-down-Coyt6YKY.js";import"./index-DXiwM2ji.js";import"./error-DiK0Ne3K.js";import"./BaseCbacBanner-BZCG6JLP.js";import"./makeExternalStore-BqO749be.js";import"./Tooltip-D8QBAeSM.js";import"./PopoverPopup-DTUYlNW7.js";import"./toNumber-D62GPJqf.js";import"./useOsdkClient-8LcgV5uf.js";import"./tick-B2lYXbeY.js";import"./DropdownField-DOuevEVo.js";import"./withOsdkMetrics-Cdbiilck.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
