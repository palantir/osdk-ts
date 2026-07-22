import{f as p,j as e}from"./iframe-CHTHF7Wz.js";import{O as i}from"./object-table-C4cnrev0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-fcSkQvlK.js";import"./Table-Dby1zPzA.js";import"./index-6RQT7j61.js";import"./Dialog-CNxDRr24.js";import"./cross-Chwfou75.js";import"./svgIconContainer-Cb8zoJ-1.js";import"./useBaseUiId-Ch2-CeLc.js";import"./InternalBackdrop-BPcRrE87.js";import"./composite-4oYZf1BU.js";import"./index-doIRobQ8.js";import"./index-Uz2jciBY.js";import"./index-DHyt8FqQ.js";import"./useEventCallback-DvFPRzko.js";import"./SkeletonBar-DNI1Tp5D.js";import"./LoadingCell-BwWcNNvu.js";import"./ColumnConfigDialog-8yl7eGqw.js";import"./DraggableList-yhgmesrg.js";import"./search-CJPgSgzn.js";import"./Input-BAkGNhfG.js";import"./useControlled-DEeFI2m8.js";import"./isEqual-DuR2ouBx.js";import"./isObject-AkzbV96k.js";import"./Button-BFlkmOoI.js";import"./ActionButton-Bvd-fj8-.js";import"./Checkbox-DrvnQ83m.js";import"./useValueChanged-o9mb4C3W.js";import"./CollapsiblePanel-BaE_PrLj.js";import"./MultiColumnSortDialog-BIc1lp_h.js";import"./MenuTrigger-DXs0uCZU.js";import"./CompositeItem-B1d4G5Ee.js";import"./ToolbarRootContext-znMy6l6h.js";import"./getDisabledMountTransitionStyles-DOr3HfBo.js";import"./getPseudoElementBounds-100hF_4G.js";import"./chevron-down--pbLBBRz.js";import"./index-DthgxF2u.js";import"./error-BgtANkmb.js";import"./BaseCbacBanner-q-2Ylmow.js";import"./makeExternalStore-kE9T3YbL.js";import"./Tooltip-BV7lr5i5.js";import"./PopoverPopup-tYge4Exu.js";import"./toNumber-BE2RRh97.js";import"./useOsdkClient-BuxaAPMc.js";import"./tick-DlX7oEaM.js";import"./DropdownField-C9o_s7lg.js";import"./withOsdkMetrics-DlMzQx9P.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
