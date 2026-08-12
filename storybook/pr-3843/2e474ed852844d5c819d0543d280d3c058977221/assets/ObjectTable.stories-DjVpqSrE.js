import{j as i}from"./iframe-B7WBSiQK.js";import{O as p}from"./object-table-CZEprzw-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CF8hBtj8.js";import"./preload-helper-B0V2Y4gg.js";import"./Table-BB-uAsA9.js";import"./index-PlkpSjCR.js";import"./Dialog-Bmgsr3FA.js";import"./cross-LDnwABxF.js";import"./svgIconContainer-Bxt-xqtM.js";import"./useBaseUiId-CZzT34PV.js";import"./InternalBackdrop-CQ1f6Zvv.js";import"./composite-mnm8wmd2.js";import"./index-CvsGQGuc.js";import"./index-BuPc-xAF.js";import"./index-utsz2cjJ.js";import"./useEventCallback-9ann7CLP.js";import"./SkeletonBar-D4Ck8bPL.js";import"./LoadingCell-DSfZT0wc.js";import"./ColumnConfigDialog-B2to8u3c.js";import"./DraggableList-BQnRDeUE.js";import"./search-CnauwDLw.js";import"./Input-CEDE16Ka.js";import"./useControlled-DmMIwQoS.js";import"./isEqual-761ouFwp.js";import"./isObject-yYO0oBEE.js";import"./Button-BFzUwMgP.js";import"./ActionButton-aVXXIevt.js";import"./Checkbox-Dy4lUoi9.js";import"./useValueChanged-BPPh5fxR.js";import"./CollapsiblePanel-C-hmzMiL.js";import"./MultiColumnSortDialog--SFp1lIs.js";import"./MenuTrigger-BlnrbYbq.js";import"./CompositeItem-CZegg-G4.js";import"./ToolbarRootContext-li3WIPN7.js";import"./getDisabledMountTransitionStyles-D0nRGMnk.js";import"./getPseudoElementBounds-BS_krnkN.js";import"./chevron-down-CYs6Wp2m.js";import"./index-CQwq9wua.js";import"./error-B41aks2m.js";import"./BaseCbacBanner-BS0lZOUu.js";import"./makeExternalStore-BNCsp_rF.js";import"./Tooltip-DvuKo640.js";import"./PopoverPopup-CovjZuLG.js";import"./toNumber-RDY9bqFt.js";import"./useOsdkClient-VPDveWFE.js";import"./tick-B0hLJF_x.js";import"./DropdownField-Bg8jEWAE.js";import"./withOsdkMetrics-DZMGbXvK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
