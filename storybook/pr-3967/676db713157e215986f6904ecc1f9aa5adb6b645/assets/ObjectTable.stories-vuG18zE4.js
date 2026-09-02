import{j as i}from"./iframe-Bosp4Kfk.js";import{O as p}from"./object-table-CIvJAmm_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cn8_b7SQ.js";import"./preload-helper-ClWiB6VL.js";import"./Table-C6h5Imx9.js";import"./index-C6XIr_j0.js";import"./Dialog-BdMUVq1d.js";import"./cross-Dp0rkMBN.js";import"./svgIconContainer-Qe3SZPH2.js";import"./useBaseUiId-CYPagWj7.js";import"./InternalBackdrop-CcdE1zeW.js";import"./composite-C0RZtlqO.js";import"./index-D_IOkl0_.js";import"./index-Cq35IRn6.js";import"./index-CrFnkiFr.js";import"./useEventCallback-BmUH0wYY.js";import"./SkeletonBar-DjkVJCj3.js";import"./LoadingCell-7pUl9puK.js";import"./ColumnConfigDialog-DJssRAan.js";import"./DraggableList-vV-YW89g.js";import"./search-BiUx3u5j.js";import"./Input-CGDWreR8.js";import"./useControlled-DTohw9V1.js";import"./Button-CieAMe_p.js";import"./small-cross-CrYiAO_J.js";import"./ActionButton-Dr97457V.js";import"./Checkbox-BLQiWWKW.js";import"./useValueChanged-Ch87rtp2.js";import"./CollapsiblePanel-B3vcSNej.js";import"./MultiColumnSortDialog-BZXXkkZR.js";import"./MenuTrigger-DlFlzUl5.js";import"./CompositeItem-BU4XWpDF.js";import"./ToolbarRootContext-Bz28bgEE.js";import"./getDisabledMountTransitionStyles-BGeKaQZr.js";import"./getPseudoElementBounds-D1VPFEDe.js";import"./chevron-down-BmQ0fXj1.js";import"./index-Dez8kNJl.js";import"./error-7C0gNJGe.js";import"./BaseCbacBanner-De58Nn1x.js";import"./makeExternalStore-KCU4dCkA.js";import"./Tooltip-9q3J9nO5.js";import"./PopoverPopup-M52DYMvO.js";import"./debounce-b8voU-g_.js";import"./useOsdkClient-Bz0UU2Hd.js";import"./tick-2lM_ezsG.js";import"./DropdownField-45SlxEfM.js";import"./isEqual-BfE8QgFE.js";import"./withOsdkMetrics-DRBPjASM.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
