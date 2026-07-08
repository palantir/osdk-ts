import{f as n,j as t}from"./iframe-DxJeula4.js";import{O as p}from"./object-table-l3wBDAkw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bex38Dbe.js";import"./Table-DiYjT0Q2.js";import"./index-B9mL7-OE.js";import"./Dialog-BIZftzVJ.js";import"./cross-29GlH8F4.js";import"./svgIconContainer-CdQm-4ln.js";import"./useBaseUiId-Bj9j4N3u.js";import"./InternalBackdrop-BRqMmWX_.js";import"./composite-CgXRmyLY.js";import"./index-CXYfuw6V.js";import"./index-DPz1_94q.js";import"./index-D8Yuieai.js";import"./useEventCallback-DPsUrrVZ.js";import"./SkeletonBar-BtuQ9CiX.js";import"./LoadingCell-DWB5FMeJ.js";import"./ColumnConfigDialog-CSaZwsnj.js";import"./DraggableList-Fdtc1xiH.js";import"./search-D5t2DZQ7.js";import"./Input-BvgM9Kwf.js";import"./useControlled-C0VKQlkZ.js";import"./Button-DWVF-Ogj.js";import"./small-cross-D9HBzDp9.js";import"./ActionButton-D4fP_drj.js";import"./Checkbox-ZkI2nsFS.js";import"./useValueChanged-BCN_jjTG.js";import"./CollapsiblePanel-C-UeWGW2.js";import"./MultiColumnSortDialog-CbUB4pqP.js";import"./MenuTrigger--KsNlWSX.js";import"./CompositeItem-D_vZmQ8j.js";import"./ToolbarRootContext-B8UPYXOB.js";import"./getDisabledMountTransitionStyles-C2zs7LcV.js";import"./getPseudoElementBounds-CySecK6W.js";import"./chevron-down-Cj6YIXkn.js";import"./index-ca5R2I__.js";import"./error-DXjqFz8_.js";import"./BaseCbacBanner-DkA1yf8I.js";import"./makeExternalStore-DP3Eneq0.js";import"./Tooltip-yeO_ckgv.js";import"./PopoverPopup-7ufffWgk.js";import"./toNumber-j4PpbJef.js";import"./useOsdkClient-BhHhCLyl.js";import"./tick-CTYETe1v.js";import"./DropdownField-BePhyZ5g.js";import"./withOsdkMetrics-Cx4WeBFP.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
