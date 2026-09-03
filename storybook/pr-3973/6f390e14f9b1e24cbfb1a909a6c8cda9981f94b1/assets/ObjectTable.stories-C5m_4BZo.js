import{j as i}from"./iframe-Cxs4teez.js";import{O as p}from"./object-table-BfyAEuWs.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CwhUGX8H.js";import"./preload-helper-Bd6Vgg8g.js";import"./Table-B1mo_osj.js";import"./index-C3kmvWsS.js";import"./Dialog-C87BIpGH.js";import"./cross-D5j5wcq7.js";import"./svgIconContainer-JiM41EbN.js";import"./useBaseUiId-DWXmNFpC.js";import"./InternalBackdrop-DP9WD5Fk.js";import"./composite-b3NzNsDh.js";import"./index-C7HiqnbK.js";import"./index-WVEl5G15.js";import"./index-B-Om34Y_.js";import"./useEventCallback-CAv6RzeS.js";import"./SkeletonBar-Bleds7Vl.js";import"./LoadingCell-Btu8ADTl.js";import"./ColumnConfigDialog-n3tDAug6.js";import"./DraggableList-C_GhJA9q.js";import"./search-BrqbiSOv.js";import"./Input-BYExG4yH.js";import"./useControlled-Dc-gXlj3.js";import"./Button-B-HuJTwa.js";import"./small-cross-TqcPNZ3o.js";import"./ActionButton-dCm50BWS.js";import"./Checkbox-ByH-RI4p.js";import"./useValueChanged-D29qGbgw.js";import"./CollapsiblePanel-C0e4ATLG.js";import"./MultiColumnSortDialog-DMGRj25k.js";import"./MenuTrigger-Dua7Pz0U.js";import"./CompositeItem-4Ik-gd3d.js";import"./ToolbarRootContext-BD8ceMmu.js";import"./getDisabledMountTransitionStyles-iLI7eNCy.js";import"./getPseudoElementBounds-DE7atGjs.js";import"./chevron-down-DR1MLtBA.js";import"./index-CTzs5x76.js";import"./error-CSDPFrAs.js";import"./BaseCbacBanner-BImE2vA-.js";import"./makeExternalStore-Db6eeeft.js";import"./Tooltip-And-vmyU.js";import"./PopoverPopup-DEvs5olF.js";import"./debounce-BZ5yTYau.js";import"./useOsdkClient-Ba7AvsVH.js";import"./tick-C3Mfhxb_.js";import"./DropdownField-BQN_NaVg.js";import"./isEqual-C_HXGO6S.js";import"./withOsdkMetrics-BMMQ7JDA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
