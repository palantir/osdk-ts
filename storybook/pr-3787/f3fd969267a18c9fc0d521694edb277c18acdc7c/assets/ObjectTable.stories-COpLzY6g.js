import{j as i}from"./iframe-Ch4YG9zO.js";import{O as p}from"./object-table-DwAUiwcL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-RMJK3sYw.js";import"./preload-helper-B2FbqY3N.js";import"./Table-BLltzhIi.js";import"./index-Tj0gjODi.js";import"./Dialog-BNJ1i_u1.js";import"./cross-BsOxLVVI.js";import"./svgIconContainer-Cn1U1N9z.js";import"./useBaseUiId-n1xJoDj4.js";import"./InternalBackdrop-Buu-6QXj.js";import"./composite-Bj5YxLBn.js";import"./index-C9z0_KHF.js";import"./index-B1Pg27bT.js";import"./index-DQmnZDrR.js";import"./useEventCallback-1xds4HE8.js";import"./SkeletonBar-DC1PVcIm.js";import"./LoadingCell-D637ZThr.js";import"./ColumnConfigDialog-CIXD4mum.js";import"./DraggableList-BZENnRUa.js";import"./search-Dl_XkKU0.js";import"./Input-BqjoA6Wr.js";import"./useControlled-DDKlVuXM.js";import"./isEqual-BZeBOh-G.js";import"./isObject-BdykLpCq.js";import"./Button-BwCFldKH.js";import"./ActionButton-CTyZ0DCW.js";import"./Checkbox-CYouGi2t.js";import"./useValueChanged-D2NB_sbf.js";import"./CollapsiblePanel-26O5LN4W.js";import"./MultiColumnSortDialog-BEI-x7RL.js";import"./MenuTrigger-CCNiVl3M.js";import"./CompositeItem-D7zxms0O.js";import"./ToolbarRootContext-DFHW9hl5.js";import"./getDisabledMountTransitionStyles-Ceyf3F0l.js";import"./getPseudoElementBounds-ClJsMx2c.js";import"./chevron-down-BNKmlKfx.js";import"./index-DmkOCqw0.js";import"./error-KSQFRnjc.js";import"./BaseCbacBanner-B3WI1t1e.js";import"./makeExternalStore-Bqt01k7N.js";import"./Tooltip-BjX1cDFv.js";import"./PopoverPopup-C1JJDSzg.js";import"./toNumber-Dxpg4zZN.js";import"./useOsdkClient-DspnLF5w.js";import"./tick-BL75HJvL.js";import"./DropdownField-C-VLwocU.js";import"./withOsdkMetrics-DjmuwpSc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
