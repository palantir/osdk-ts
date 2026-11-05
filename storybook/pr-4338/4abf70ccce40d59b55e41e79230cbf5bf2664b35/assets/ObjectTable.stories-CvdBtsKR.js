import{j as i}from"./iframe-BWfq1Ita.js";import{O as p}from"./object-table-lRJ1r0PT.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BU1IrVya.js";import"./preload-helper-Cez3EkKO.js";import"./Table-h_h1Pdj1.js";import"./index-CsmCBiFc.js";import"./Dialog-D0flTu-Q.js";import"./cross-B2opFBMX.js";import"./svgIconContainer-3Xe0sM70.js";import"./useBaseUiId-AQZerCPK.js";import"./InternalBackdrop-BU6CR9JH.js";import"./composite-BxLIdtja.js";import"./index-Ct2QTZpq.js";import"./index-ZI1bO9GZ.js";import"./index-DzTj4bDT.js";import"./useEventCallback-D1-lsQmd.js";import"./SkeletonBar-DKgRYbiF.js";import"./LoadingCell-Ca170tnn.js";import"./ColumnConfigDialog-D_PyS5d8.js";import"./DraggableList-D6jKmbrg.js";import"./search-BJDwKHsZ.js";import"./Input-DsXOqmoY.js";import"./useControlled-zsZ0Gi2e.js";import"./Button-CDzVT-19.js";import"./small-cross-BQAUdHVP.js";import"./ActionButton-DTQZUzqS.js";import"./Checkbox-pOBDprj4.js";import"./useValueChanged-DcWOn6Em.js";import"./CollapsiblePanel-CRz6BZMc.js";import"./MultiColumnSortDialog-CzoSa3-D.js";import"./MenuTrigger-C1ubLXg7.js";import"./CompositeItem-CT28f8sD.js";import"./ToolbarRootContext-BZs-vXaE.js";import"./getDisabledMountTransitionStyles-BZXhkuBl.js";import"./getPseudoElementBounds-vhJ9Xo_I.js";import"./chevron-down-D-1SOefz.js";import"./index-DKbeeSxy.js";import"./error-D4A2zaxG.js";import"./BaseCbacBanner-DJr1V5NM.js";import"./makeExternalStore-ByJ1Qj-8.js";import"./Tooltip-CDrLWobn.js";import"./PopoverPopup-uC42OBYn.js";import"./debounce-BMBkBKqd.js";import"./useOsdkClient-DUSv4hnn.js";import"./tick-DUbrHsOa.js";import"./DropdownField-Cxy9XoQ6.js";import"./isEqual-D4nsmfx_.js";import"./withOsdkMetrics-CVeraRoA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
