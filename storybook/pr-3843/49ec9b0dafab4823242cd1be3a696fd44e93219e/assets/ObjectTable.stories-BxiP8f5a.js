import{j as i}from"./iframe-BkwEqmSq.js";import{O as p}from"./object-table-TH5w0ohv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DcyYSJF7.js";import"./preload-helper-MCr5wq_M.js";import"./Table-XAj1eNJ_.js";import"./index-DVW2Aiqe.js";import"./Dialog-CNJAJjh6.js";import"./cross-B56sfghs.js";import"./svgIconContainer-CB5tgpNi.js";import"./useBaseUiId-CVhcNOwH.js";import"./InternalBackdrop-BW_Fh5ka.js";import"./composite-DEnckzcf.js";import"./index-CcQ72eda.js";import"./index-DRtYq8s7.js";import"./index-R9Q-yxnj.js";import"./useEventCallback-mxsKsguF.js";import"./SkeletonBar-zrDLmD62.js";import"./LoadingCell-CSxVDz4m.js";import"./ColumnConfigDialog-DBfPfDSr.js";import"./DraggableList-2eAIh112.js";import"./search-DHn2yg3a.js";import"./Input-BtbblvMI.js";import"./useControlled-Tz_Ckt-9.js";import"./isEqual-CkRoP2e3.js";import"./isObject-CjPaUCcr.js";import"./Button-BQo7qXQ1.js";import"./ActionButton-B57iWbGd.js";import"./Checkbox-Cv3GRsWI.js";import"./useValueChanged-CO42ZUx-.js";import"./CollapsiblePanel-vCFw-oDK.js";import"./MultiColumnSortDialog-Bzkmnwn_.js";import"./MenuTrigger-kgTyu6wu.js";import"./CompositeItem-B2o5Yurs.js";import"./ToolbarRootContext-Cf2pD7ow.js";import"./getDisabledMountTransitionStyles-CgyOu_YU.js";import"./getPseudoElementBounds-BI5Djy6Y.js";import"./chevron-down-OyX7j9kx.js";import"./index-DOxRJGP0.js";import"./error-BxIC2Wcp.js";import"./BaseCbacBanner-OOsF9RDB.js";import"./makeExternalStore-SZ3-wHy1.js";import"./Tooltip-WAe8FeGa.js";import"./PopoverPopup-7nXi6RKO.js";import"./toNumber-CZtIvmY8.js";import"./useOsdkClient-CUzqemF4.js";import"./tick-D3FOvlN4.js";import"./DropdownField-CWFIhDoe.js";import"./withOsdkMetrics-B6cmau_u.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
