import{j as i}from"./iframe-BkVpHzvQ.js";import{O as p}from"./object-table-8vRjPPrq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cl7OEL7T.js";import"./preload-helper-B9AvGhZX.js";import"./Table-CFTbHakB.js";import"./index-BL4DLC1N.js";import"./Dialog-DS5wl3xV.js";import"./cross-C1A8dztN.js";import"./svgIconContainer-CF7Mc-ko.js";import"./useBaseUiId-IrylWfg4.js";import"./InternalBackdrop-DOTKGPzQ.js";import"./composite-DzCDeGJq.js";import"./index-CL4PObh9.js";import"./index-B14WgDi5.js";import"./index-Q6O6ijwn.js";import"./useEventCallback-BBeGcB9a.js";import"./SkeletonBar-0gnMevOq.js";import"./LoadingCell-B7Wxy3hp.js";import"./ColumnConfigDialog-DibCKZwr.js";import"./DraggableList-CRH-TObc.js";import"./search-BhaSBKsV.js";import"./Input-Fro39VZ2.js";import"./useControlled-BADUKuig.js";import"./Button-D2sTUWJq.js";import"./small-cross-ZeeKCGaK.js";import"./ActionButton-DpxdNF2c.js";import"./Checkbox-BhTm1STq.js";import"./useValueChanged--YSm-EUj.js";import"./CollapsiblePanel-DzMFtKbG.js";import"./MultiColumnSortDialog-CH3-x324.js";import"./MenuTrigger-CIFbC0Gs.js";import"./CompositeItem-_cOFeCFn.js";import"./ToolbarRootContext-Chua5F7w.js";import"./getDisabledMountTransitionStyles-thBhDlW8.js";import"./getPseudoElementBounds-DOC15x2m.js";import"./chevron-down-BdtrKVv2.js";import"./index-moDLjwNO.js";import"./error-NWQKXzU-.js";import"./BaseCbacBanner-BzPvoS_8.js";import"./makeExternalStore-B8ehTRKv.js";import"./Tooltip-DKBwi4i9.js";import"./PopoverPopup-DYvrbRyo.js";import"./toNumber-Co-qwoeW.js";import"./useOsdkClient-DoQ7Kyvb.js";import"./tick-Bnx2U79M.js";import"./DropdownField-BnllX9Oh.js";import"./withOsdkMetrics-mJ4OJ_RR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
