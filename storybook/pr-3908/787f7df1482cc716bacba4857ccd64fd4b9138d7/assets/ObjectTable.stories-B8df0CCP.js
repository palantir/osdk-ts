import{j as i}from"./iframe-DF9DX5mw.js";import{O as p}from"./object-table-BzUD3kyS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-7pMmVYPi.js";import"./preload-helper-DVnQ6duR.js";import"./Table-CqUFWu1r.js";import"./index-BmuLmEaC.js";import"./Dialog-SP-0ETNd.js";import"./cross-CNVJX-R0.js";import"./svgIconContainer-BnUXZNAT.js";import"./useBaseUiId-Z5YEKe02.js";import"./InternalBackdrop-B5Fo5nQu.js";import"./composite-DOTEZs57.js";import"./index-C_Rqkv-M.js";import"./index-BougzNP_.js";import"./index-BKVwN-RR.js";import"./useEventCallback-DEaFjfc0.js";import"./SkeletonBar-C4llJUuv.js";import"./LoadingCell-em3D0YaF.js";import"./ColumnConfigDialog-BItewFiF.js";import"./DraggableList-BBYYJp7a.js";import"./search-C_UKWj2f.js";import"./Input-XPtGFq-8.js";import"./useControlled-CD5ggXKk.js";import"./Button-fzptvapi.js";import"./small-cross-CMbApKIR.js";import"./ActionButton-DYftQUfX.js";import"./Checkbox-BsszOfzQ.js";import"./useValueChanged-COxiaf3w.js";import"./CollapsiblePanel-BlNEuHSO.js";import"./MultiColumnSortDialog-DDr43etj.js";import"./MenuTrigger-SPoWOsQx.js";import"./CompositeItem-MLQ_GRVe.js";import"./ToolbarRootContext-Cv5YqZmZ.js";import"./getDisabledMountTransitionStyles-et_-f1AH.js";import"./getPseudoElementBounds-D8S0eQR8.js";import"./chevron-down-YPHBShAj.js";import"./index-CME9wlOT.js";import"./error-CX7q-MIV.js";import"./BaseCbacBanner-BSlunzxb.js";import"./makeExternalStore-DZe_6606.js";import"./Tooltip-D9EgpZ1u.js";import"./PopoverPopup-3Jbs0f7w.js";import"./debounce-q3UzP_fO.js";import"./useOsdkClient-B5Lb5Fy6.js";import"./tick-BqC-lfvb.js";import"./DropdownField-BmYXknbz.js";import"./isEqual-RK-x2tFX.js";import"./withOsdkMetrics-YJ6vrnTW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
