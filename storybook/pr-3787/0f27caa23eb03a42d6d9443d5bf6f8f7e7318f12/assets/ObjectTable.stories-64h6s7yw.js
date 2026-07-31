import{j as i}from"./iframe-CeQ9YtV4.js";import{O as p}from"./object-table-BxrQP0cJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D9um_v6s.js";import"./preload-helper-LX8fJrHu.js";import"./Table-BqAJjUeM.js";import"./index--uV_mo53.js";import"./Dialog-k4lSz6IK.js";import"./cross-CmnPk6HR.js";import"./svgIconContainer-GQ1XFBl8.js";import"./useBaseUiId-MCv3qySg.js";import"./InternalBackdrop-BS-OEKdk.js";import"./composite-CeZ8ImGH.js";import"./index-B2gRy6GZ.js";import"./index-CGQM6Os1.js";import"./index-Yx5SIecJ.js";import"./useEventCallback-BtGRXxeV.js";import"./SkeletonBar-N-zsLKaX.js";import"./LoadingCell-BtQaK8Zr.js";import"./ColumnConfigDialog-EoETL9wH.js";import"./DraggableList-kbqdQ0kF.js";import"./search-D3yZFVGs.js";import"./Input-H4BR9uZl.js";import"./useControlled-Cy5Phl1t.js";import"./isEqual-DUgQY7Mu.js";import"./isObject-CS_a61Zd.js";import"./Button-uPcuQ9i2.js";import"./ActionButton-lddM9Wov.js";import"./Checkbox-D5dopIKN.js";import"./useValueChanged-BK8X04Vv.js";import"./CollapsiblePanel-CEweUmgi.js";import"./MultiColumnSortDialog-BZDt7V34.js";import"./MenuTrigger-C3B9uJvo.js";import"./CompositeItem-B8rBXA17.js";import"./ToolbarRootContext-CHRb4C_O.js";import"./getDisabledMountTransitionStyles-CL-pUnsN.js";import"./getPseudoElementBounds-CJ2J4ejo.js";import"./chevron-down-CacDCs_q.js";import"./index-BgMHbt7V.js";import"./error-DsKJBY0C.js";import"./BaseCbacBanner-VDVrikJN.js";import"./makeExternalStore-Vue07-gf.js";import"./Tooltip-BC79QeFs.js";import"./PopoverPopup-9OKXsxO2.js";import"./toNumber-BJy4K-hW.js";import"./useOsdkClient-DJu2PeSo.js";import"./tick-DMp0VIXe.js";import"./DropdownField-_8UThL_X.js";import"./withOsdkMetrics-Cjsqhpmc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
