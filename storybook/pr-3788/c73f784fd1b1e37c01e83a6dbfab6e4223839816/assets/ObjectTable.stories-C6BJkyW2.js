import{j as i}from"./iframe-Da9MDiTI.js";import{O as p}from"./object-table-hvAUoQlk.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-zDqaKmpi.js";import"./preload-helper-Dd6abAIO.js";import"./Table-D9w8xY2h.js";import"./index-Bjs-izmB.js";import"./Dialog-BMLbot9J.js";import"./cross-Ddpno7b6.js";import"./svgIconContainer-BJth7iyz.js";import"./useBaseUiId-BayoovkJ.js";import"./InternalBackdrop-CzcHRs0y.js";import"./composite-BaDdnoh8.js";import"./index-DcIVUlGH.js";import"./index-DKfY6EcW.js";import"./index-BABJwW4T.js";import"./useEventCallback-BUPM0wCF.js";import"./SkeletonBar-BA89NcKp.js";import"./LoadingCell-BvG1pWNr.js";import"./ColumnConfigDialog-DgtSL3SL.js";import"./DraggableList-BLkSctgh.js";import"./search-CZHusTi7.js";import"./Input-BgILf_TN.js";import"./useControlled-3ADGh7jp.js";import"./isEqual-BrsKUsje.js";import"./isObject-DOueF4aQ.js";import"./Button-g9bDBW5N.js";import"./ActionButton-BqLgMeMC.js";import"./Checkbox-Dp74PQJD.js";import"./useValueChanged-CL6nsKU1.js";import"./CollapsiblePanel-OzU7gzyb.js";import"./MultiColumnSortDialog-CSCWSXUH.js";import"./MenuTrigger-B8eDG6ju.js";import"./CompositeItem-C0Jbe1ov.js";import"./ToolbarRootContext-Dc0wNS2-.js";import"./getDisabledMountTransitionStyles-BmSIApxN.js";import"./getPseudoElementBounds-C4CJm2lO.js";import"./chevron-down-CY9Oj2p3.js";import"./index-CBjdGpQ-.js";import"./error-D7APwBuJ.js";import"./BaseCbacBanner-DDOuDFv6.js";import"./makeExternalStore-BEHro4Nx.js";import"./Tooltip-B_NdwVxI.js";import"./PopoverPopup-Cs_ntUEj.js";import"./toNumber-j5nLiGs_.js";import"./useOsdkClient-C-zfD-7k.js";import"./tick-Bhyac6W7.js";import"./DropdownField-Dhg5kbhU.js";import"./withOsdkMetrics-B9D4iGy_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
