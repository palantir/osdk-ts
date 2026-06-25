import{f as n,j as t}from"./iframe-2EVrp-mi.js";import{O as p}from"./object-table-BOh9MB2o.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-YRis2Ym7.js";import"./Table-YtfF8E0a.js";import"./index-BVpkkEeQ.js";import"./Dialog-CaRhJLEB.js";import"./cross-XSlHEjDw.js";import"./svgIconContainer-DrI2HUjy.js";import"./useBaseUiId-t6acaRdi.js";import"./InternalBackdrop-BPpGF1m8.js";import"./composite-CSVV4gWL.js";import"./index-BzCPAjgt.js";import"./index-SWSws8M4.js";import"./index-COY_o-mk.js";import"./useEventCallback-DNu_2bmT.js";import"./SkeletonBar-DAqN0u0g.js";import"./LoadingCell-Cu1SGzqO.js";import"./ColumnConfigDialog-C84ogdX8.js";import"./DraggableList-BBflAEV_.js";import"./Input-CKfnIaJL.js";import"./useControlled-B4u0Eh1Z.js";import"./Button-t7F2qGe2.js";import"./small-cross-CXCuXhZX.js";import"./ActionButton-CxsSUNc3.js";import"./Checkbox-CZiGahui.js";import"./minus-jgv5sN80.js";import"./useValueChanged-Cp2703Zf.js";import"./caret-down-BFjIzaYQ.js";import"./CollapsiblePanel-Du58aQwO.js";import"./MultiColumnSortDialog-DR4aGa9V.js";import"./MenuTrigger-CwWmD5As.js";import"./CompositeItem-Br6oMPl4.js";import"./ToolbarRootContext-DzPMSIil.js";import"./getDisabledMountTransitionStyles-Dr5Box2d.js";import"./getPseudoElementBounds-BNrxfgvf.js";import"./chevron-down-BQGOdiFM.js";import"./index-D2N50O6x.js";import"./error-DiTum4fs.js";import"./BaseCbacBanner-BRw3GEdO.js";import"./makeExternalStore-B8HE06hd.js";import"./Tooltip--mhUuFfi.js";import"./PopoverPopup-Dh9yMGwX.js";import"./toNumber-DWDCp1ef.js";import"./useOsdkClient-Jkg3RG9W.js";import"./DropdownField-BwUhrrHh.js";import"./withOsdkMetrics-Bs5PWQvO.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
