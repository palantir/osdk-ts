import{j as i}from"./iframe-BlDiaW1h.js";import{O as p}from"./object-table-Ce-hqaoS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DQAiSncP.js";import"./preload-helper-PtL6Kd_x.js";import"./Table-Ca7ofY9H.js";import"./index-DfWhxneD.js";import"./Dialog-C0LenXNZ.js";import"./cross-e0aRrlM-.js";import"./svgIconContainer-kniEZwHz.js";import"./useBaseUiId-CNzKZZyr.js";import"./InternalBackdrop-CknQDtg2.js";import"./composite-RC4cbmpt.js";import"./index-CaosaIAK.js";import"./index-ClB2daRU.js";import"./index-C44_u6Fw.js";import"./useEventCallback-DsUQ3PVF.js";import"./SkeletonBar-CPfB3dvv.js";import"./LoadingCell-4skw1OEJ.js";import"./ColumnConfigDialog-DrvuPspn.js";import"./DraggableList-BbYQHNIJ.js";import"./search-BTwweTf6.js";import"./Input-Bii20VeK.js";import"./useControlled-DBQ0gE6b.js";import"./Button-BcWNCj5I.js";import"./small-cross-1dCALZ0r.js";import"./ActionButton-DCdCIlKP.js";import"./Checkbox-BFzsHOZs.js";import"./useValueChanged-Ig3qxvFS.js";import"./CollapsiblePanel-BeO6_bQ6.js";import"./MultiColumnSortDialog-DY1R-uWF.js";import"./MenuTrigger-CAVJV5J3.js";import"./CompositeItem-OhI6t6UV.js";import"./ToolbarRootContext-B0Ir569T.js";import"./getDisabledMountTransitionStyles-Oq1-yxTZ.js";import"./getPseudoElementBounds-IJPs3uLW.js";import"./chevron-down-CQlGXejk.js";import"./index-DIgLDkvV.js";import"./error-DI0bgW6O.js";import"./BaseCbacBanner-Bp7AuwxH.js";import"./makeExternalStore-BGsi_gFr.js";import"./Tooltip-Cay9QyIc.js";import"./PopoverPopup-CQXuiQcH.js";import"./debounce-Byq2NX1_.js";import"./useOsdkClient-0OHPk9sh.js";import"./tick-a-bDbPLS.js";import"./DropdownField-RavzYQu_.js";import"./isEqual-B5seZJ2p.js";import"./withOsdkMetrics-BxS0W9JC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
