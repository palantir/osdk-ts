import{j as i}from"./iframe-JE3hAilc.js";import{O as p}from"./object-table-hrGa_0ak.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DfvSPrLV.js";import"./preload-helper-D3m3uLck.js";import"./Table-CeS9vyxB.js";import"./index-BpOIoYeP.js";import"./Dialog-CexGaiKl.js";import"./cross-B3dok42m.js";import"./svgIconContainer-DxcHQg7k.js";import"./useBaseUiId-CU6aYJhX.js";import"./InternalBackdrop-CjLu4iri.js";import"./composite-OBLfyo_g.js";import"./index-NMATibBb.js";import"./index-D1wHMkU8.js";import"./index-luf3eNCk.js";import"./useEventCallback-F9ZlU1zk.js";import"./SkeletonBar-CjvHDxcU.js";import"./LoadingCell-BgVWpxmw.js";import"./ColumnConfigDialog-CIW1cRLO.js";import"./DraggableList-BNEusFP_.js";import"./search-CVE6ZsP3.js";import"./Input-BBWCNVeu.js";import"./useControlled-i7oJhE2J.js";import"./Button-C-mwssM2.js";import"./small-cross-CS_pcyMB.js";import"./ActionButton-BwTmZVPf.js";import"./Checkbox-axlnltUu.js";import"./useValueChanged-DBeldtQT.js";import"./CollapsiblePanel-CAxKVeuj.js";import"./MultiColumnSortDialog-BTO_FIqh.js";import"./MenuTrigger-Xjt9rGph.js";import"./CompositeItem-CBdxcvZ2.js";import"./ToolbarRootContext-BAaYeDZ8.js";import"./getDisabledMountTransitionStyles-Bt2v_bU6.js";import"./getPseudoElementBounds-BkfHxAL-.js";import"./chevron-down-CzaF57dY.js";import"./index-B4_-u_rP.js";import"./error-7AaWXBYs.js";import"./BaseCbacBanner-5xL76NQJ.js";import"./makeExternalStore-C3Po_h2x.js";import"./Tooltip-DWc2JDJZ.js";import"./PopoverPopup-BddRZ8jP.js";import"./debounce-DbnyHCyz.js";import"./useOsdkClient-CKMIbVIl.js";import"./tick-Bxa_ZUol.js";import"./DropdownField-BLfbhE54.js";import"./isEqual-Yt5EqnyY.js";import"./withOsdkMetrics-Dv_mGpze.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
