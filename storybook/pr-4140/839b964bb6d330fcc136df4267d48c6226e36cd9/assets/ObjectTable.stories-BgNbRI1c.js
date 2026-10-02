import{j as i}from"./iframe-CjvYcpTc.js";import{O as p}from"./object-table-Cr4f5Dyz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DJor6iLQ.js";import"./preload-helper-CwAZ_RFp.js";import"./Table-OGDc2Vu9.js";import"./index-DuZ19wcn.js";import"./Dialog-AmWXXXAn.js";import"./cross-C7lWgdj2.js";import"./svgIconContainer-B4kwPvVG.js";import"./useBaseUiId-CZUJXt98.js";import"./InternalBackdrop-Cvpmom_D.js";import"./composite-Dv8ZzttY.js";import"./index-CEXd5f6A.js";import"./index-DNoEMSLE.js";import"./index-CMgAql6Y.js";import"./useEventCallback-ByweALPq.js";import"./SkeletonBar-CEUKT4EZ.js";import"./LoadingCell-BHA_MaqJ.js";import"./ColumnConfigDialog-k2ALTpny.js";import"./DraggableList-b_HqS-PO.js";import"./search-C9XpCEsC.js";import"./Input-B4ChrBJV.js";import"./useControlled-BgiktbGb.js";import"./Button-x48_kffx.js";import"./small-cross-DrNdp9td.js";import"./ActionButton-CNilsdeF.js";import"./Checkbox-C7J_efzv.js";import"./useValueChanged-jVldrQSp.js";import"./CollapsiblePanel-BOX1nR00.js";import"./MultiColumnSortDialog-RIUXj6qp.js";import"./MenuTrigger-C7JnYkRW.js";import"./CompositeItem-CrZyp1SA.js";import"./ToolbarRootContext-H5FrOgLL.js";import"./getDisabledMountTransitionStyles-D8pKVFxg.js";import"./getPseudoElementBounds-zCP0_jeb.js";import"./chevron-down-B6AkEAGC.js";import"./index-BaiLSRkn.js";import"./error-DdgUBnOy.js";import"./BaseCbacBanner-fTPjPnTf.js";import"./makeExternalStore-CTMnuTK_.js";import"./Tooltip-B-fFKI94.js";import"./PopoverPopup-DhrzdhL9.js";import"./debounce-d3qhgy8J.js";import"./useOsdkClient-DyGGfFqC.js";import"./tick-DHMwXqUI.js";import"./DropdownField-CSAcVewx.js";import"./isEqual-Bh14zo85.js";import"./withOsdkMetrics-c8up4Ye7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
