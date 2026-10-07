import{j as i}from"./iframe-YrpSpTvs.js";import{O as p}from"./object-table-t3OUf3ip.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BdthlSYX.js";import"./preload-helper-DxNq55wa.js";import"./Table-DZ0iaFpj.js";import"./index-BrVf8lWl.js";import"./Dialog-DjLl79nO.js";import"./cross-B0Aawxg9.js";import"./svgIconContainer-BtBzrjkO.js";import"./useBaseUiId-nYNd-3tJ.js";import"./InternalBackdrop-B7DfYIYc.js";import"./composite-5Mv9D3-A.js";import"./index-Di4tHAvA.js";import"./index-BIHLBcFj.js";import"./index-CsSm3NU5.js";import"./useEventCallback-BgeJ4XJ6.js";import"./SkeletonBar-CaULgTN_.js";import"./LoadingCell-nlkp1zok.js";import"./ColumnConfigDialog-BLNg6qZa.js";import"./DraggableList-Blumv0Fv.js";import"./search-B0P1cBIF.js";import"./Input-32CO0l-U.js";import"./useControlled-2o6j3dfP.js";import"./Button-CYGEL5Qg.js";import"./small-cross-BGabRNmn.js";import"./ActionButton-CHDejxq_.js";import"./Checkbox-DASKdpQc.js";import"./useValueChanged-BqrtuFIH.js";import"./CollapsiblePanel-sGxNkfQy.js";import"./MultiColumnSortDialog-Cld8H5W0.js";import"./MenuTrigger-Cb6vZPp0.js";import"./CompositeItem-B56fR4fH.js";import"./ToolbarRootContext-8z2gQ1ff.js";import"./getDisabledMountTransitionStyles-BnFsI7c-.js";import"./getPseudoElementBounds-Dw8pXuDb.js";import"./chevron-down-BfPcmD3R.js";import"./index-BS-m42I7.js";import"./error-DewscpxX.js";import"./BaseCbacBanner-msBh7mIJ.js";import"./makeExternalStore-C6NSSiHx.js";import"./Tooltip-DoIwzql8.js";import"./PopoverPopup-Bz5N51mo.js";import"./debounce-BaFZDc5z.js";import"./useOsdkClient-hs785eW6.js";import"./tick-B5LbKbnR.js";import"./DropdownField-BFTWMxkB.js";import"./isEqual-B8DwposS.js";import"./withOsdkMetrics-GBGU8c2D.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
