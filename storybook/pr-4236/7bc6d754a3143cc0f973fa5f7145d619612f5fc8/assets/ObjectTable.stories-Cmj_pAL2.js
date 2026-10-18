import{j as i}from"./iframe-D826lLui.js";import{O as p}from"./object-table-B_uBeT-f.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DG_bYEm2.js";import"./preload-helper-CGkAb-Wu.js";import"./Table-BUFGUybT.js";import"./index-DxNlvLAd.js";import"./Dialog-BOe-rnhW.js";import"./cross-9ZGBzaem.js";import"./svgIconContainer-BjuGxCIz.js";import"./useBaseUiId-CcA6f0Di.js";import"./InternalBackdrop-D8CCCsk7.js";import"./composite-D5SkMTiw.js";import"./index-e93ICMyG.js";import"./index-Dt4QZQ1m.js";import"./index-BjybkpAS.js";import"./useEventCallback-Ef5EfyWq.js";import"./SkeletonBar-DI4OC7oE.js";import"./LoadingCell-DfPckAF8.js";import"./ColumnConfigDialog-wVrsPA1W.js";import"./DraggableList-FEYECt2n.js";import"./search-BEeF_4Rd.js";import"./Input-D8Q7l-gb.js";import"./useControlled-D2sq1Iv_.js";import"./Button-DOLHRrn6.js";import"./small-cross-Dy0HqjGX.js";import"./ActionButton-BGwu0aco.js";import"./Checkbox-Ba70wUOE.js";import"./useValueChanged-D4utz3wv.js";import"./CollapsiblePanel-B3fFT0gn.js";import"./MultiColumnSortDialog-DgVM5Z_C.js";import"./MenuTrigger-f-DXw5qg.js";import"./CompositeItem-DW0wn-NB.js";import"./ToolbarRootContext-DY8S7jf3.js";import"./getDisabledMountTransitionStyles-CWVYXsPM.js";import"./getPseudoElementBounds-DvlgftUk.js";import"./chevron-down-C1HuiRtn.js";import"./index-T95LEHG2.js";import"./error-DNLlyci1.js";import"./BaseCbacBanner-DtsQhcu9.js";import"./makeExternalStore-B82ZGGVu.js";import"./Tooltip-DJDeXhNg.js";import"./PopoverPopup-B6kEvXUf.js";import"./debounce-cNU0CJPI.js";import"./useOsdkClient-Bbo5pAbB.js";import"./tick-DxttFOXl.js";import"./DropdownField-JiLo16C6.js";import"./isEqual-DIp8qzW1.js";import"./withOsdkMetrics--xMNvw5Y.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
