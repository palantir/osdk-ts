import{j as i}from"./iframe-34VatmEZ.js";import{O as p}from"./object-table-p59KuVgv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DXGRl_Pv.js";import"./preload-helper-DV4gmwFB.js";import"./Table-D9uD0s7O.js";import"./index-BlAm73td.js";import"./Dialog-D1opey4t.js";import"./cross-DvtnLYbI.js";import"./svgIconContainer-_GM_NvIc.js";import"./useBaseUiId-DeI-Jtiv.js";import"./InternalBackdrop-CvK5FjjA.js";import"./composite-1B_4pEYH.js";import"./index-Fj7eg8Eu.js";import"./index-BTVWVA6f.js";import"./index-ADGNjetD.js";import"./useEventCallback-hRIxgR6L.js";import"./SkeletonBar-VDjUVVNd.js";import"./LoadingCell-nvl0Gc8h.js";import"./ColumnConfigDialog-Cq5xAnqD.js";import"./DraggableList-jT1qIjvE.js";import"./search-CVdCifPG.js";import"./Input-BKrVXT7B.js";import"./useControlled-DVccPDBX.js";import"./Button-DV1A9r6F.js";import"./small-cross-CZHtyfX7.js";import"./ActionButton-Czi1TMhc.js";import"./Checkbox-CTzLXv4K.js";import"./useValueChanged-DCa4_FQi.js";import"./CollapsiblePanel-D3pf9y50.js";import"./MultiColumnSortDialog-D1Tv8ymd.js";import"./MenuTrigger-B9hxhTmU.js";import"./CompositeItem-DOiHkRNL.js";import"./ToolbarRootContext-CiWe9x3z.js";import"./getDisabledMountTransitionStyles-DZUNER2j.js";import"./getPseudoElementBounds-IeKEehJb.js";import"./chevron-down-BtQO1pkc.js";import"./index-Dm8AHk8O.js";import"./error-C-NsPFd6.js";import"./BaseCbacBanner-CDA2PalL.js";import"./makeExternalStore-D4cd6CTa.js";import"./Tooltip-Ce33QJzg.js";import"./PopoverPopup-CSKaTK3m.js";import"./debounce-CrVZzVbG.js";import"./useOsdkClient-gxJLLGj5.js";import"./tick-DnmbfsGi.js";import"./DropdownField-BL1cfRQ0.js";import"./isEqual-CGwKoNOy.js";import"./withOsdkMetrics-XZ0oOnyA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
