import{j as i}from"./iframe-CpMx7Aup.js";import{O as p}from"./object-table-CQ9NHIze.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CDfJOnW_.js";import"./preload-helper-CoTSq2F1.js";import"./Table-D070iMiq.js";import"./index-CxmY32cc.js";import"./Dialog-CKQoeaGr.js";import"./cross-TTsfy-0d.js";import"./svgIconContainer-CuSLG6cZ.js";import"./useBaseUiId-BekKaTSH.js";import"./InternalBackdrop-BxzT_GXx.js";import"./composite-BGRmFTC1.js";import"./index-CwBRzy5n.js";import"./index-DLO22dOn.js";import"./index-Bo6mI2yo.js";import"./useEventCallback-BONFFk7M.js";import"./SkeletonBar-CHgFWFkJ.js";import"./LoadingCell-Ba5LJYpB.js";import"./ColumnConfigDialog-Dj6kTDTV.js";import"./DraggableList-CJSICoS0.js";import"./search-DT0Xyteo.js";import"./Input-DsbvGidK.js";import"./useControlled-wTvX_DQ4.js";import"./Button-BDW79Pmx.js";import"./small-cross-Cu-Pzvda.js";import"./ActionButton-hedLhO3x.js";import"./Checkbox-BxJY3Vfd.js";import"./useValueChanged-KVTl21Rk.js";import"./CollapsiblePanel-DYNCNbyF.js";import"./MultiColumnSortDialog-5fG9yuAQ.js";import"./MenuTrigger-BMZyb9jf.js";import"./CompositeItem-Bh3v2N_o.js";import"./ToolbarRootContext-BxbNKn3r.js";import"./getDisabledMountTransitionStyles-CuE4vLcj.js";import"./getPseudoElementBounds-C2W2CV61.js";import"./chevron-down-Dvd8o3b0.js";import"./index-B9i6lMRF.js";import"./error-Cj7z7_gc.js";import"./BaseCbacBanner-DgjfwfFe.js";import"./makeExternalStore-BjX6ObK7.js";import"./Tooltip-BbITICOb.js";import"./PopoverPopup-B8EGxqrk.js";import"./debounce-DD2I4-Hh.js";import"./useOsdkClient-B61ahtGb.js";import"./tick-B27PtLKc.js";import"./DropdownField-ZSaIODjv.js";import"./isEqual-BekYRNr0.js";import"./withOsdkMetrics-DmITN5ju.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
