import{f as p,j as e}from"./iframe-C-srjCzr.js";import{O as i}from"./object-table-DTnWafLM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CdgKYpfH.js";import"./Table-DtFF-C30.js";import"./index-Bzj5y-57.js";import"./Dialog-CK0T6Acn.js";import"./cross-CBTpZY1-.js";import"./svgIconContainer-5LtXf4dR.js";import"./useBaseUiId-BU2Bdgfn.js";import"./InternalBackdrop-xwbeFan6.js";import"./composite--DZGcVxK.js";import"./index-DoGeYTl3.js";import"./index-CvZ9Zy9b.js";import"./index-BIS8E4FK.js";import"./useEventCallback-rUtIJm9R.js";import"./SkeletonBar-aX4U7JCD.js";import"./LoadingCell-DVFll7gi.js";import"./ColumnConfigDialog-itAqpP5E.js";import"./DraggableList-BZusxuwJ.js";import"./search-CESWhMh6.js";import"./Input-T5Kj4Vfz.js";import"./useControlled-BtWeYBTy.js";import"./Button-FlArcDop.js";import"./small-cross-Cdzum_ky.js";import"./ActionButton-Bm441Snm.js";import"./Checkbox-B9UnZjrC.js";import"./useValueChanged-BrnwHF-c.js";import"./CollapsiblePanel-DjeDSdHb.js";import"./MultiColumnSortDialog-7OsDRd2h.js";import"./MenuTrigger-CZX1XVyy.js";import"./CompositeItem-DAR9wsSJ.js";import"./ToolbarRootContext-8-BoPq-4.js";import"./getDisabledMountTransitionStyles-Cy56mhfk.js";import"./getPseudoElementBounds-_SRod_Ch.js";import"./chevron-down-BhL4Yc8G.js";import"./index-BiBF6oIE.js";import"./error-D5X5TRqT.js";import"./BaseCbacBanner-Bs0JLPBO.js";import"./makeExternalStore-I1nvn_9Q.js";import"./Tooltip-BNbpl33t.js";import"./PopoverPopup-D5VRMR-g.js";import"./debounce-CXlyjIaG.js";import"./useOsdkClient-SS9mW4im.js";import"./tick-C_HCxzSH.js";import"./DropdownField-DXvJF4Ed.js";import"./isEqual-DplYXKVZ.js";import"./withOsdkMetrics-ReG1NqWw.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
