import{j as i}from"./iframe-C8jWyiQL.js";import{O as p}from"./object-table-BlbetHme.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CcfVctAP.js";import"./preload-helper-D3hrqtKI.js";import"./Table-B34kvLEc.js";import"./index-Ck3WMYCS.js";import"./Dialog-CSPx5HhV.js";import"./cross-Dl8HY39B.js";import"./svgIconContainer-Cl0UVpcd.js";import"./useBaseUiId-C0Hhh4zZ.js";import"./InternalBackdrop-CiK-2PLb.js";import"./composite-VSkp61oJ.js";import"./index-Ch17Lfr0.js";import"./index-p54yret9.js";import"./index-Cd22zSOl.js";import"./useEventCallback-C0LDLFCe.js";import"./SkeletonBar-Bfqg6xhZ.js";import"./LoadingCell-BcraXBGS.js";import"./ColumnConfigDialog-CweTTfeO.js";import"./DraggableList-D8_gI2zQ.js";import"./search-D-ei7hDs.js";import"./Input-BJZD4UWc.js";import"./useControlled-HdEPNqxD.js";import"./Button-3m2yzrh1.js";import"./small-cross-BwCr6L7P.js";import"./ActionButton-9g7J3G0y.js";import"./Checkbox-DIBfRvqq.js";import"./useValueChanged-CoaMZ36h.js";import"./CollapsiblePanel-CwpNijKr.js";import"./MultiColumnSortDialog-XgTPDgaq.js";import"./MenuTrigger-B6oNWJYv.js";import"./CompositeItem-DPPPi3Ly.js";import"./ToolbarRootContext-CKRR356X.js";import"./getDisabledMountTransitionStyles-Rw7QHMBY.js";import"./getPseudoElementBounds-B_4Hsk7I.js";import"./chevron-down-DWvQrpRH.js";import"./index-B-MOYaQO.js";import"./error-DFAsAkKT.js";import"./BaseCbacBanner-g2klUgTP.js";import"./makeExternalStore-CTfzdsJg.js";import"./Tooltip-CYCmH68_.js";import"./PopoverPopup-BswZff0D.js";import"./debounce-C49teRpi.js";import"./useOsdkClient-GeBqIj0g.js";import"./tick-TxqdkZbh.js";import"./DropdownField-a018rFqR.js";import"./isEqual-CyNlFjjd.js";import"./withOsdkMetrics-DXVkLmYC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
